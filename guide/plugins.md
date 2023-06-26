# Plugins

- [vite-plugin-electron](https://github.com/electron-vite/vite-plugin-electron) makes the integration of Electron With Vite very easy! Its main purpose is to build the Main process and Preload scripts, and to start and [hot restart](/guide/features.html#hot-restart) the Electron App when the Main process and Preload scripts are built.

  It also provides a full [JavaScript API](https://github.com/electron-vite/vite-plugin-electron#javascript-api) to make it easy to use anywhere.

- [vite-plugin-electron-renderer](https://github.com/electron-vite/vite-plugin-electron-renderer) makes it possible to support building Electron Renderer process by modifying some of the necessary Vite default configs.

  In addition it allows some npm packages developed specifically for Node.js, especially C/C++ native modules, to be built properly by Vite to be available to the Renderer process.

<details>
  <summary>中文</summary>
  <ul>
  <li>
    <p><a target="_blank" href="https://github.com/electron-vite">vite-plugin-electron</a> 使得 Electron 与 Vite 的集成变得十分简单！它的主要作用是构建主进程与预加载脚本，并且当主进程与预加载脚本构建完成时启动、<a href="/guide/features.html#hot-restart">热重启</a> Electron App。</p>
    <p>除此之外它还提供全量的 <a target="_blank" href="https://github.com/electron-vite/vite-plugin-electron#javascript-api">JavaScript API</a> 可以很方便的在任何地方使用它。</p>
  </li>
  <li>
    <p><a target="_blank" href="https://github.com/electron-vite/vite-plugin-electron-renderer">vite-plugin-electron-renderer</a> 通过修改一些必要的 Vite 的默认配置使其能够支持构建 Electron 渲染进程。</p>
    <p>此外它使得一些专门为 Node.js 开发的 npm 包尤其是 C/C++ 本地模块，可以被 Vite 正确构建以提供给渲染进程使用。</p>
  </li>
  </ul>
</details>

## Basic usage

```ts
// vite.config.ts
import electron from 'vite-plugin-electron'

export default {
  plugins: [
    electron({
      entry: 'electron/main.ts',
    }),
  ],
}
```

## Use Node.js and Electron in Renderer process

```ts
// vite.config.ts
import electron from 'vite-plugin-electron'
import renderer from 'vite-plugin-electron-renderer'

export default {
  plugins: [
    electron({
      entry: 'electron/main.ts',
    }),
    renderer(),
  ],
}
```

## Restart And Reload

```ts
// Restart and Launch App
electron({
  entry: 'electron/main.ts',
  onstart(args) {
    args.startup()
  },
})

// Reload the Renderer process, for Preload scripts
electron({
  entry: 'electron/preload.ts',
  onstart(args) {
    args.reload()
  },
})
```


## Code split

`vite-plugin-electron` allows for very flexible code splitting, it can be built using passing arrays, or using [Vite's built-in multi-entry](https://vitejs.dev/config/build-options.html#build-lib) build.

<details>
  <summary>中文</summary>
  <p><code>vite-plugin-electron</code> 可以进行十分灵活的代码拆分，它可以使用传递数组的形式构建，或者使用 <a target="_blank" href="https://vitejs.dev/config/build-options.html#build-lib">Vite 内置的多入口</a> 构建。</p>
</details>

```ts
// Use array
electron([
  {
    // Main-Process entry file of the Electron App.
    entry: 'electron/main.ts',
  },
  {
    entry: 'electron/main-chunk.ts',
  },
])

// Use Vite multi-entry
electron({
  entry: {
    // Main-Process entry file of the Electron App.
    main: 'electron/main.ts'
    'main-chunk': 'electron/main-chunk.ts',
  },
})
```

## Custom Build

`vite-plugin-electron` supports the full amount of [Vite's InlineConfig](https://vitejs.dev/guide/api-javascript.html#inlineconfig).

<details>
  <summary>中文</summary>
  <p><code>vite-plugin-electron</code> 支持全量的 <a target="_blank" href="https://vitejs.dev/guide/api-javascript.html#inlineconfig">Vite 配置</a>。</p>
</details>

```ts
electron({
  entry: 'electron/main.ts',
  // 👉 https://vitejs.dev/guide/api-javascript.html#inlineconfig
  vite: { },
})
```

## C/C++ Native

- [Use in Main process](https://github.com/electron-vite/vite-plugin-electron#cc-native)

```ts
// First way
electron({
  entry: 'electron/main.ts',
  vite: {
    build: {
      rollupOptions: {
        // Need to put sqlite3 into dependencies
        external: ['sqlite3'],
      },
    },
  },
})

// Second way
import native from 'vite-plugin-native'
electron({
  entry: 'electron/main.ts',
  vite: {
    plugins: [
      // Use vite-plugin-native
      native(/* options */),
    ],
  },
})
```

- [Use in Renderer process](https://github.com/electron-vite/vite-plugin-electron-renderer/blob/v0.14.5/examples/quick-start/vite.config.ts#L11-L14)

```ts
renderer({
  resolve: {
    // Need to put sqlite3 into dependencies
    sqlite3: { type: 'cjs' },
  },
})
```

## ESmodule

- Use in Main process

  Works fine!

- [Use in Renderer process](https://github.com/electron-vite/vite-plugin-electron-renderer/blob/v0.14.5/examples/quick-start/vite.config.ts#L11-L14)

```ts
renderer({
  resolve: {
    got: { type: 'esm' },
  },
})
```

## [JavaScript API](https://github.com/electron-vite/vite-plugin-electron#javascript-api)

- [nuxt-electron](https://github.com/caoxiemeihao/nuxt-electron) based on `vite-plugin-electron`
