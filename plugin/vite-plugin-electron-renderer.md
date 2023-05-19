# vite-plugin-electron-renderer

---
Using node.js in the rendering process.

## Install

```sh
npm i vite-plugin-electron-renderer -D
```

## Usage

1. This just modifies some of Vite's default config to make the Renderer process works.

```ts
import renderer from 'vite-plugin-electron-renderer'

export default {
  plugins: [
    renderer(),
  ],
}
```

2. Using the third-part C/C++ package in the Renderer process.

```js
import renderer from 'vite-plugin-electron-renderer'

export default {
  plugins: [
    renderer({
      resolve: {
        serialport: () => ({ platform: 'node' }), // specify as `node` platform
      },
    }),
  ],
}
```

## API *(Define)*

`renderer(options: RendererOptions)`

```ts
export interface RendererOptions {
  /**
   * Explicitly tell Vite how to load modules, which is very useful for C/C++ modules.  
   * Most of the time, you don't need to use it when a module is a C/C++ module, you can load them by return `{ platform: 'node' }`.  
   * 
   * If you know exactly how Vite works, you can customize the return snippets.  
   * 
   * ```js
   * renderer({
   *   resolve: {
   *     // Use the serialport(C/C++) module as an example
   *     serialport: () => ({ platform: 'node' }),
   *     // Equivalent to
   *     serialport: () => `const lib = require("serialport"); export default lib.default || lib;`,
   *   },
   * })
   * ```
   * 
   * @experimental
   */
  resolve?: {
    [id: string]: (() => string | { platform: 'browser' | 'node' } | Promise<string | { platform: 'browser' | 'node' }>)
  }
}
```

## Examples

- [quick-start](https://github.com/electron-vite/vite-plugin-electron-renderer/tree/main/examples/quick-start)

## How to work

<!-- ###### Electron-Renderer(vite serve) -->

> Load Electron and Node.js cjs-packages/builtin-modules (Schematic)

```
┏————————————————————————————————————————┓          ┏—————————————————┓
│ import { ipcRenderer } from 'electron' │          │ Vite dev server │
┗————————————————————————————————————————┛          ┗—————————————————┛
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
┏————————————————————————————————————————┓          ┏—————————————————┓
│ import { ipcRenderer } from 'electron' │          │ Vite dev server │
┗————————————————————————————————————————┛          ┗—————————————————┛
```

## `dependencies` vs `devDependencies`

<table>
  <thead>
    <th>Classify</th>
    <th>e.g.</th>
    <th>dependencies</th>
    <th>devDependencies</th>
  </thead>
  <tbody>
    <tr>
      <td>Node.js C/C++ native modules</td>
      <td>serialport, sqlite3</td>
      <td>✅</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>Node.js CJS packages</td>
      <td>electron-store</td>
      <td>✅</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>Node.js ESM packages</td>
      <td>execa, got, node-fetch</td>
      <td>✅</td>
      <td>✅ (Recommend)</td>
    </tr>
    <tr>
      <td>Web packages</td>
      <td>Vue, React</td>
      <td>✅</td>
      <td>✅ (Recommend)</td>
    </tr>
  </tbody>
</table>

#### Why is it recommended to put properly buildable packages in `devDependencies`?

Doing so will reduce the size of the packaged APP by [electron-builder](https://github.com/electron-userland/electron-builder).

<!--
## Config presets (Opinionated)

If you do not configure the following options, the plugin will modify their default values

- `build.cssCodeSplit = false` (*TODO*)
- `build.rollupOptions.output.format = 'cjs'` (nodeIntegration: true)
- `resolve.conditions = ['node']`
- `optimizeDeps.exclude = ['electron']` - always
-->
