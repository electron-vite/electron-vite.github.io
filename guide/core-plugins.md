# Core Plugins

## vite-plugin-electron

[vite-plugin-electron](https://github.com/electron-vite/vite-plugin-electron) makes developing [Electron](https://www.electronjs.org/) Apps as easy as developing normal Web Apps. It can be easily combined with [Vite](https://vitejs.dev/) official templates!

It also provides a full [JavaScript API](https://github.com/electron-vite/vite-plugin-electron#javascript-api) to make it easy to use anywhere.

<details>
  <summary>中文</summary>
  <p><a target="_blank" href="https://github.com/electron-vite/vite-plugin-electron">vite-plugin-electron</a> 使得你开发 <a target="_blank" href="https://www.electronjs.org/">Electron</a> 应用像开发正常的 Web 应用那样简单，它可以非常简单得与 <a target="_blank" href="https://vitejs.dev/">Vite</a> 官方的模板结合！</p>
  <p>除此之外它还提供全量的 <a target="_blank" href="https://github.com/electron-vite/vite-plugin-electron#javascript-api">JavaScript API</a> 可以很方便的在任何地方使用它。</p>
</details>

### Basic Usage

```ts
// vite.config.ts
import electron from 'vite-plugin-electron'

export default {
  plugins: [
    electron({
      // Main process entry file of the Electron App.
      entry: 'electron/main.ts',
    }),
  ],
}
```

### With Preload Scripts

[vite-plugin-electron](https://github.com/electron-vite/vite-plugin-electron) supports passing an Array.

```ts
// vite.config.ts
import electron from 'vite-plugin-electron'

export default {
  plugins: [
    electron([
      {
        entry: 'electron/main.ts',
      },
      {
        entry: 'electron/preload.ts',
        onstart({ reload }) {
          // Notify the Renderer process to reload the page when the Preload scripts build is complete, 
          // instead of restarting the entire Electron App.
          reload()
        },
      },
    ]),
  ],
}
```

### Code Split

[vite-plugin-electron](https://github.com/electron-vite/vite-plugin-electron) allows for very flexible code splitting, it can be built using passing Array, or using [Vite's built-in multi-entry](https://vitejs.dev/config/build-options.html#build-lib) build.

<details>
  <summary>中文</summary>
  <p><code>vite-plugin-electron</code> 可以进行十分灵活的代码拆分，它可以使用传递数组的形式构建，或者使用 <a target="_blank" href="https://vitejs.dev/config/build-options.html#build-lib">Vite 内置的多入口</a> 构建。</p>
</details>

```ts
// vite.config.ts
import electron from 'vite-plugin-electron'

// Use array
export default {
  plugins: [
    electron([
      {
        // Main-Process entry file of the Electron App.
        entry: 'electron/main.ts',
      },
      {
        entry: 'electron/main-chunk.ts',
      },
    ]),
  ],
}

// Use Vite multi-entry
export default {
  plugins: [
    electron({
      entry: {
        // Main-Process entry file of the Electron App.
        main: 'electron/main.ts'
        'main-chunk': 'electron/main-chunk.ts',
      },
    }),
  ],
}
```

### Custom Start

This is useful if you want to do something before or after **launching** or **restarting** the Electron App.

<details>
  <summary>中文</summary>
  <p>如果你想在启动或重启 Electron App 之前或之后做些什么，它会很有用。</p>
</details>

```ts
// vite.config.ts
import electron from 'vite-plugin-electron'

export default {
  plugins: [
    electron({
      entry: 'electron/main/index.ts',
      onstart({ startup }) {
        // Do something...
        startup()
      },
    }),
  ],
}
```

### Custom Build

[vite-plugin-electron](https://github.com/electron-vite/vite-plugin-electron) supports the full amount of [Vite's InlineConfig](https://vitejs.dev/guide/api-javascript.html#inlineconfig).

<details>
  <summary>中文</summary>
  <p><code>vite-plugin-electron</code> 支持全量的 <a target="_blank" href="https://vitejs.dev/guide/api-javascript.html#inlineconfig">Vite 配置</a>。</p>
</details>

```ts
// vite.config.ts
import electron from 'vite-plugin-electron/simple'

export default {
  plugins: [
    electron({
      entry: 'electron/main.ts',
      // 👉 https://vitejs.dev/guide/api-javascript.html#inlineconfig
      vite: {/* Vite config ⚡️ */},
    }),
  ],
}
```

### [JavaScript API](https://github.com/electron-vite/vite-plugin-electron#javascript-api)

- [nuxt-electron](https://github.com/caoxiemeihao/nuxt-electron) based on [vite-plugin-electron](https://github.com/electron-vite/vite-plugin-electron)

## vite-plugin-electron/simple

Many times, for a developer who is new to Vite and Electron, the oversimplified and open API design is confusing to them. Maybe Simple API makes them easier to understand. :)

```ts
// vite.config.ts
import electron from 'vite-plugin-electron/simple'

export default {
  plugins: [
    // Just like v0.9.x
    electron({
      main: {
        entry: 'electron/main.ts',
      },
      // Optional: input must be use absolute path
      preload: {
        input: __dirname + '/electron/preload.ts',
      },
      // Optional: Use Node.js API in the Renderer process
      renderer: {},
    }),
  ],
}
```

## vite-plugin-electron-renderer

[vite-plugin-electron-renderer](https://github.com/electron-vite/vite-plugin-electron-renderer) does three things:

1. Modify some Vite default configurations to adapt to the build **Renderer process**.
2. Polyfilling the Electron and Node.js built-in modules.
3. Support third-party npm-pkg loading by custom [Pre-bundling](/guide/dependency-pre-bundling), especially `C/C++` addons.

::: tip Note
Please make sure you enabled `nodeIntegration: true` in the **Main process**.
:::

<details>
  <summary>中文</summary>
  <p><a target="_blank" href="https://github.com/electron-vite/vite-plugin-electron-renderer">vite-plugin-electron-renderer</a> 做了三件事：</p>
  <ol>
  <li>修改一些 Vite 默认的配置以适配构建<strong>渲染进程</strong>。</li>
  <li>填充 Electron 和 Node.js 模块。</li>
  <li>通过自定义<a href="/guide/dependency-pre-bundling">预构建</a>支持第三方 npm 包加载，尤其是 <code>C/C++</code> 扩展。</li>
  </ol>
  <p><strong>注意</strong>：请确保你在<strong>主进程</strong>中启用了 <code>nodeIntegration: true</code></p>
</details>

### Basic Usage

```ts
// vite.config.ts
import electron from 'vite-plugin-electron'
import renderer from 'vite-plugin-electron-renderer'

export default {
  plugins: [
    electron({
      entry: 'electron/main.ts',
    }),
    // Use Electron and Node.js built-in modules in Renderer process
    renderer(),
  ],
}
```

### Electron and Node.js API

```ts
// In a Renderer process file
import { readFileSync } from 'node:fs'
import { ipcRenderer } from 'electron'

// Node.js
const content = readFileSync('foo.txt', 'utf8')

// Electron
ipcRenderer.send('foo', 'arg1')
```

### How to work

```log
┏————————————————————————————————————————┓         ┏—————————————————┓
│ import { ipcRenderer } from 'electron' │         │ Vite dev server │
┗————————————————————————————————————————┛         ┗—————————————————┛
         │                                                   │
         │ 1. Pre-Bundling electron module into              │
         │    node_modules/.vite-electron-renderer/electron  │
         │                                                   │
         │ 2. HTTP(Request): electron module                 │
         │ ————————————————————————————————————————————————> │
         │                                                   │
         │ 3. Alias redirects to                             │
         │    node_modules/.vite-electron-renderer/electron  │
         │    ↓                                              │
         │    const { ipcRenderer } = require('electron')    │
         │    export { ipcRenderer }                         │
         │                                                   │
         │ 4. HTTP(Response): electron module                │
         │ <———————————————————————————————————————————————— │
         │                                                   │
┏————————————————————————————————————————┓         ┏—————————————————┓
│ import { ipcRenderer } from 'electron' │         │ Vite dev server │
┗————————————————————————————————————————┛         ┗—————————————————┛
```

### Load third-party npm-pkg

In most cases a Node.js npm-pkg written in pure JavaScript can be used directly in the Renderer process. If it is a `C/C++` addon or `ESModule` format package, it needs to be [pre-bundle](https://vitejs.dev/guide/dep-pre-bundling.html) before it can work.

See the [👉 Dependency Pre-Bundling](/guide/dependency-pre-bundling) section for details.

<details>
  <summary>中文</summary>
  <p>多数情况下一个纯 JavaScript 编写的 Node.js npm 包是可以直接在渲染进程中使用的。如果它是 <code>C/C++</code> 扩展，或者 <code>ESModule</code> 格式包，那么需要将它<a target="_blank" href="https://vitejs.dev/guide/dep-pre-bundling.html">预构建</a>后才可以工作。</p>
  <p>详情请看 <a href="/guide/dependency-pre-bundling">👉 Dependency Pre-Bundling</a> 部分。</p>
</details>
