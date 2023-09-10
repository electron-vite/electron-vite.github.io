# Preload Scripts Code Not Split

Whether Node.js is enabled in the **Main process** or not, the **Preload scripts** supports loading `electron` module, so we need to build it in `cjs` format.

```ts
import { ipcRenderer } from 'electron'
// ↓↓↓↓ Build with `cjs` format ↓↓↓↓
const { ipcRenderer } = require('electron')
```

When [Rollup](https://rollupjs.org/) builds code in `cjs` format, it will automatically split the code into multiple chunks, and use `require()` to load them, and use `require()` to load other modules when `nodeIntegration: false` in the **Main process** Errors will occur. So we need to configure Rollup not to split the code when building to ensure that it works correctly with `nodeIntegration: false`.

::: tip Note
In the `nodeIntegration: true` case we don't have to worry about this!
:::

<details>
  <summary>中文</summary>
  <p>无论<strong>主进程</strong>开启 Node.js 与否，<strong>预加载脚本</strong>都支持加载 <code>electron</code> 模块，所以我们需要 <code>cjs</code> 格式构建它。</p>
  <p>当 <a target="_blank" href="https://rollupjs.org/">Rollup</a> 以 <code>cjs</code> 格式构建代码时会自动将代码拆分成多个 chunk，并且使用 <code>require()</code> 加载它们，并且在<strong>主进程</strong> <code>nodeIntegration: false</code> 时使用 <code>require()</code> 加载其他模块会发生错误。所以我们需要配置 Rollup 构建时候不要拆分代码，以确保在 <code>nodeIntegration: false</code> 情况下正常工作。</p>
  <p>在 <code>nodeIntegration: true</code> 情况下，我们不必为此担心！</p>
</details>

```ts
// vite.config.ts
import electron from 'vite-plugin-electron'

export default {
  plugins: [
    electron([
      {
        entry: 'electron/main/index.ts',
      },
      {
        entry: 'electron/preload/index.ts',
        onstart({ reload }) {
          reload()
        },
        vite: {
          build: {
            outDir: 'dist-electron/preload',
            rollupOptions: {
              output: {
                // Disable Preload scripts code split
                inlineDynamicImports: true,
              },
            },
          },
        },
      }
    ]),
  ],
}
```
