## Vite 构建 Electron 脚本

Electron 的开发方式与 Web 前端开发很像。我们以 Vite 为例简单的梳理当下 Web 开发工程配置和开发方式。

`package.json` 脚本配置

```json
{
  "scripts": {
    "dev": "vite serve",
    "build": "vite build"
  }
}
```

启动工程

```sh
npm run dev
```

构建工程

```sh
npm run build
```

现代化 Web 开发而言无论是使用 Vue 还是 React 总会有官方提供的脚手架，使其开发、构建变得“很简单”。但是 Electron 并没有官方提供的脚手架，需要我们自己动手一番，同样的我们目的也是实现运行 `npm run dev` 即可启动 Electron 并且支持 主进程热重启、渲染进程HRM、Preload脚本热重载 这些开发期很有用的功能。

*“渲染进程HRM” 无需额外开发，Vite 的 HRM 功能在 Electron 渲染进程中同样支持*

#### Electron 启动原理

Electron [官方示例](https://www.electronjs.org/docs/latest/tutorial/quick-start#create-your-application)使用的 `electorn .` 的启动方式，这个命令我们这里简单的分析一番。

- `electron` 对应的是 `./node_modules/.bin/electron`
- `.` 对应的是当前路径 `package.josn` 中的 `main` 字段指向的路径

`electron` 最终会执行 `node_modules/electron/index.js` 文件。

```js
const fs = require('fs');
const path = require('path');

const pathFile = path.join(__dirname, 'path.txt');

function getElectronPath () {
  let executablePath;
  if (fs.existsSync(pathFile)) {
    executablePath = fs.readFileSync(pathFile, 'utf-8');
  }
  // 这里稍微删了点代码
  return path.join(__dirname, 'dist', executablePath);
}

module.exports = getElectronPath();
```

通过上面带源码可以分析出 `getElectronPath()` 最终返回了 `path.txt` 中的内容即 Electron 可执行文件路径，以我使用的 Mac 为例。

```txt
Electron.app/Contents/MacOS/Electron
```

经过脚本执行后 `electron .` 最终的样子，以我使用的 Mac 为例。

```
/Project-absolute-path/node_modules/electron/dist/Electron.app/Contents/MacOS/Electron .
```

如果是 Windows 系统，路径的最后应该是 `electron.exe`。也就是说本质上只是一个“可以用的 Electron 应用”加载了我们提供的 `main.js` 而已！

#### Vite 可编程 API

我们先来熟悉几个 Vite 的可编程 NodeJs API 这将会是我们实现 `npm run dev` 的关键功能。

1. [createServer](https://vitejs.dev/guide/api-javascript.html#createserver) 相当于命令 `vite serve`
2. [build](https://vitejs.dev/guide/api-javascript.html#build) 相当于命令 `vite build`

有了这两个 API 就可以完成我们的目的了，下面具体实现。

#### 启动脚本设计

在根目录下新建 `scripts/watch.mjs` 添加构建脚本。

```diff
+ ├─┬ scripts
+ │ ├── watch.mjs
```

```js
import {
  createServer,
  build,
} from 'vite'

// ① 创建 Renderer 开发服务
const server = await createServer({ configFile: 'vite.config.ts' })
// 启动服务
await server.listen()

// ② 构建 Preload
await build({
  configFile: 'vite.preload.ts',
  // Vite 内部将会参考 mode 设置 process.env.NODE_ENV
  mode: 'development',
  build: {
    // 监听文件改动，并实时构建
    watch: {},
    // 通过 Vite 插件机制实现对构建文件监听
    plugins: [{
      name: 'electron-preload-watcher',
      // 每当文件构建、重新构建后均会触发 closeBundle
      closeBundle() {
        // 通过 Vite dev server 通知页面端刷新，即前面提到的 “Preload脚本热重载”🚀
        server.ws.send({ type: 'full-reload' })
      },
    }],
  },
})

// ③ 构建 Main
await build({
  configFile: 'vite.main.ts',
  mode: 'development',
  build: {
    watch: {},
    plugins: [{
      name: 'electron-main-watcher',
      closeBundle() {
        // 得到 Electron 可以行文件路径
        const electronPath = require('electron')
        // 使用 spawn 拉起 Electron
        const { spawn } = require('child_process')

        // [2] 通过杀死/拉起 Electron 实现 “主进程热重启”🚀
        process.env.App && process.env.App.kill()
        // [1] 将启动的 ELectron App 挂在到 process.env 上方便随时能找到它
        process.env.App = spawn(electronPath, { stdio: 'inherit' })
      },
    }],
  },
})
```

#### 构建脚本设计

在根目录下新建 `scripts/build.mjs` 添加构建脚本。

```diff
+ ├─┬ scripts
+ │ ├── build.mjs
```

```js
import { build } from 'vite'

await build({ configFile: 'vite.main.ts' })
await build({ configFile: 'vite.config.ts' })
await build({ configFile: 'vite.preload.ts' })
```

#### 命令配置

```diff
{
  "scripts": {
-   "dev": "vite serve",
+   "dev": "node scripts/watch.mjs",
-   "build": "vite build"
+   "build": "node scripts/build.mjs"
  }
}
```

到此为止，我们通过脚本设计了实现了和 Web 相同的开发体验，快快去试试吧！
