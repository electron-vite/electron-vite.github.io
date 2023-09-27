# Dependency Pre-Bundling

In general. Vite's [pre-bundle](https://vitejs.dev/guide/dep-pre-bundling.html) all third-party npm-pkg into Web format, but it doesn't fully work with the Electron Renderer process, especially the `C/C++` addons. For this purpose [vite-plugin-electron-renderer](https://github.com/electron-vite/vite-plugin-electron-renderer) provides [Pre-Bundling](https://github.com/electron-vite/vite-plugin-electron-renderer#dependency-pre-bundling) adapted to the Electron Renderer process.

::: tip Note
Pre-Bundling is a feature of [vite-plugin-electron-renderer](https://github.com/electron-vite/vite-plugin-electron-renderer), which only works when building the Renderer process.
:::

<details>
  <summary>中文</summary>
  <p>一般情况下。 Vite 的<a target="_blank" href="https://vitejs.dev/guide/dep-pre-bundling.html">预构建</a>会将所有第三方模块构建成 Web 格式，但它无法完全使用于 Electrn 渲染进程，尤其是 <code>C/C++</code> 扩展。 为此 <a target="_blank" href="https://github.com/electron-vite/vite-plugin-electron-renderer">vite-plugin-electron-renderer</a> 提供了适配 Electron 渲染进程的<a target="_blank" href="https://github.com/electron-vite/vite-plugin-electron-renderer#dependency-pre-bundling">预构建</a>。</p>
  <p> Pre-Bundling 是 <a target="_blank" href="https://github.com/electron-vite/vite-plugin-electron-renderer">vite-plugin-electron-renderer</a> 功能，即只在构建渲染进程时工作。</p>
</details>

## CommonJS

```ts
import electron from 'vite-plugin-electron'
import renderer from 'vite-plugin-electron-renderer'

export default {
  plugins: [
    electron({
      entry: 'electron/main.ts',
    }),
    renderer({
      resolve: {
        // C/C++ addons
        sqlite3: { type: 'cjs' },
        // JavaScript cjs lib
        'electron-store': { type: 'cjs' },
      },
    }),
  ],
}
```

## ESModule

```ts
import electron from 'vite-plugin-electron'
import renderer from 'vite-plugin-electron-renderer'

export default {
  plugins: [
    electron({
      entry: 'electron/main.ts',
    }),
    renderer({
      resolve: {
        // JavaScript esm lib
        got: { type: 'esm' },
        'node-fetch': { type: 'esm' },
      },
    }),
  ],
}
```

## Advance

So far, Pre-Bundling of [vite-plugin-electron-renderer](https://github.com/electron-vite/vite-plugin-electron-renderer) is still considered an "experimental" feature.

Below is an example showing how to fully customize a Pre-Bundling.

<details>
  <summary>中文</summary>
  <p>目前为止，<a target="_blank" href="https://github.com/electron-vite/vite-plugin-electron-renderer">vite-plugin-electron-renderer</a> 的 Pre-Bundling 仍然被视为是一个“实验性”的功能。</p>
  <p>下面是展示如何完全自定义预构建的案例。</p>
</details>

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import renderer from 'vite-plugin-electron-renderer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // Use Node.js API in the Renderer process
    renderer({
      resolve: {
        'node-fetch': {
          type: 'esm',
          async build(args) {
            // 1. Simple code snippet
            return `export * from 'node-fetch'`

            // 2. Build using built-in shortcuts
            return args.cjs(`export default require('node-fetch');`)
            return args.esm('node-fetch', { /* esbuild options */ })
          },
        },
      },
    }),
  ],
})
```
