## Vite 构建 Electron 配置

开门见山！讲清楚 `vite-plugin-electron` 实现之前我们必须知道 Vite 是如何构建 Electron 的。

首先根据 Electron 提供的运行环境 Main、Renderer、Preload 将构建分为三种构建目标即：

1. Main - NodeJs
2. Renderer - Web
3. Preload - NodeJs

注意这里将 Electron 环境归类为 NodeJs 环境 + 额外的 Electron API.

以往在 Webpack 下当我们想要以哪个平台为目标构建时我们只需简单的指定 `target` 即可轻松构建出对应平台的代码，甚至 Webpack 还提供了 Electron 选项，非常方便！

1. `electron[[X].Y]-main`
2. `electron[[X].Y]-renderer`
3. `electron[[X].Y]-preload`

当下在 Vite 中并没有提供这样方便的 `target` 选项，这需要我们自己动手配置实现！

*可以试试 vite-plugin-target*

#### 工程目录结构

我们以 Vite 官方的 [template-vanilla-ts](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-vanilla-ts) 模板为例加入 Electron 相关的文件。

```diff
+ ├─┬ electron
+ │ ├── main.ts         Main
+ │ └── preload.ts      Preload
  ├─┬ src
  │ └── main.ts 
  ├── index.html        Renderer
  ├── package.json
  ├── tsconfig.json
  └── vite.config.ts
```

在 electron/main.ts 中添加一些代码

```ts
import path from 'path'
import { app, BrowserWindow } from 'electron'

app.whenReady().then(() => {
  const preload = path.join(__dirname, 'preload.js')
  const html = path.join(__dirname, '../index.html')

  new BrowserWindow({
    webPreferences: {
      preload,
    },
  }).loadFile(html)
})
```

在 electron/preload.ts 中添加一些代码

```ts
console.log('Hello Preload')
```

#### 构建 Main

Vite 构建模式基于 Rollup 为 bundle 流派，也就是以一个文件为入口构建最终产出一个文件(bundle.js)。为此 Vite 特意提供了一个配置选项 [build.lib](https://vitejs.dev/config/build-options.html#build-lib) 可以简化 Rollup 的构建配置。

由于 Electron(20.x) 尚未支持 ESM 模块，所以我们将代码格式输出为 CommonJs。

此外 Rollup 不能识别 NodeJs、Electron 相关模块，所以我们还需要将 `electron` 与 NodeJs 内置模块放到 `external` 中告诉 Rollup 不要去构建它们。

在根目录下新建 `vite.main.ts` 添加构建配置代码。

```diff
+ ├── vite.main.ts
```

```js
import { builtinModules } from 'module'

export default {
  build: {
    outDir: 'dist/electron',
    lib: {
      entry: 'electron/main.ts',
      formats: ['cjs'],
      fileName: () => '[name].js',
    },
    rollupOptions: {
      external: [
        'electron',
        ...builtinModules,
      ],
    },
  },
}
```

#### 构建 Renderer

Renderer 无需额外的配置，Vite 在 Web 构建这块开箱即用。只需要保持 template-vanilla-ts 原本结构即可！:)

#### 构建 Preload

Electron 的 Preload 构建目标同样是 NodeJs 这与 Main 一致，所以只需要基于 vite.main.ts 修改下入口即可。

在根目录下新建 `vite.preload.ts` 添加构建配置代码。

```diff
+ ├── vite.preload.ts
```

```diff
export default {
  build: {
-   outDir: 'dist/main',
+   outDir: 'dist/preload',
    lib: {
-     entry: 'electron/main.ts',
+     entry: 'electron/preload.ts',
    },
    // ... 其他配配置与 Main 相同
  },
}
```

#### 构建与运行

到现在我们已经有三个 Vite 的配置文件了。

1. `vite.main.ts` Main
2. `vite.config.ts` Renderer
3. `vite.preload.ts` Preload

在 package.json 中添加对应的构建命令，并汇总到一个 `build` 命令中

```json
{
  "scripts": {
    "build:main": "vite build -c vite.main.ts",
    "build:renderer": "vite build -c vite.config.ts",
    "build:preload": "vite build -c vite.preload.ts",
    "//": "---------------- 汇总命令 ----------------",
    "build": "npm run build:main && npm run build:renderer && npm run build:preload"
  }
}
```

执行构建 `npm run build` 后我们将会得到如下构建后的文件

```tree
  ├─┬ dist
  │ ├─┬ electron
  │ │ ├── main.js         Main
  │ │ └── preload.js      Preload
  │ ├── index.72f5188e.js
  │ └── index.html        Renderer
```

运行 Electron

```sh
./node_modules/.bin/electron dist/electron/main.js
```
