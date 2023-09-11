# Not Bundle

> Added in: v0.13.0

During the development phase, we can exclude the `cjs` format of npm-pkg from bundle. Like Vite's [👉 Not Bundle](https://vitejs.dev/guide/why.html#why-not-bundle-with-esbuild). **It's fast**!

::: tip Note
Applies to **Main process** and **Preload scripts**.
:::

<details>
  <summary>中文</summary>
  <p>在开发阶段，我们可以排除 <code>cjs</code> 格式 npm 包的构建。就像 Vite 的 <a target="_blank" href="https://vitejs.dev/guide/why.html#why-not-bundle-with-esbuild">👉 Not Bundle</a>. <strong>它非常快</strong>！</p>
  <p>适用于<strong>主进程</strong>和<strong>预加载脚本</strong>。</p>
</details>

```js
import electron from 'vite-plugin-electron'
import { notBundle } from 'vite-plugin-electron/plugin'

export default defineConfig(({ command }) => ({
  plugins: [
    electron({
      entry: 'electron/main.ts',
      vite: {
        plugins: [
          command === 'serve' && notBundle(/* NotBundleOptions */),
        ],
      },
    }),
  ],
}))
```

## API

`notBundle(/* NotBundleOptions */)`

```ts
export interface NotBundleOptions {
  filter?: (id: string) => void | false
}
```

## How to work

Let's use the `electron-log` as an examples.

```js
┏—————————————————————————————————————┓
│ import log from 'electron-log'      │
┗—————————————————————————————————————┛
                   ↓
Modules in `node_modules` are not bundled during development, it's fast!
                   ↓
┏—————————————————————————————————————┓
│ const log = require('electron-log') │
┗—————————————————————————————————————┛
```

::: warning 🚧
Not Bundle will cause the code built by `vite serve` and `vite build` to be different, You must be aware of this risk!
:::

<details>
  <summary>中文</summary>
  <p>🚧 Not Bundle 会导致 <code>vite serve</code> 与 <code>vite builde</code> 构建的代码不一致，你要知道这个风险！</p>
</details>

