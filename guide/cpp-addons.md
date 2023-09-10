# C/C++ Addons

The `C/C++` addons of Node.js has a very notable feature, it only supports building in the `CommonJS` format, and using `require()` to load it. This is fatal to bundler like [Vite](https://vitejs.dev/), [Rollup](https://rollupjs.org/) that strongly rely on the `ESModule` format.

Although there are tool plugins like [@rollup/plugin-commonjs](https://www.npmjs.com/package/@rollup/plugin-commonjs), it is not a panacea, especially in some dynamic-require cases. This is also the biggest difference between `cjs` and `esm`.

So, many times we have to use the `external` option to exclude `C/C++` addons builds to ensure that it can work normally.

::: tip Note
Of course, this is not absolute. If you are familiar with Vite, Rollup how works, and how `C/C++` addons are binding, then I believe you have better ways to deal with them.

Additionally, some samples for `C/C++` addons are provided here 👉 [electron-vite-samples](https://github.com/caoxiemeihao/electron-vite-samples).
::: 

<details>
  <summary>中文</summary>
  <p>Node.js 的 <code>C/C++</code> 扩展有个很显著的特点，它只支持构建成为 <code>CommonJS</code> 格式的模块，并且使用 <code>require()</code> 加载它。这对强依赖 <code>ESModule</code> 格式的构建工具像 Vite、Rollup 十分的致命。</p>
  <p>虽然有 <a target="_blank" href="https://www.npmjs.com/package/@rollup/plugin-commonjs">@rollup/plugin-commonjs</a> 这样的工具插件，但它不是万能的，尤其是在一些动态加载的场景，这同样也是 <code>cjs</code> 与 <code>esm</code> 最大的不同点。</p>
  <p>所以说，很多时候我们不得不使用 <code>external</code> 选项排除 <code>C/C++</code> 模块构建，以保障它能正常工作。</p>
  <p>当然，这不是绝对的。如果你很熟悉 Vite、Rollup 的工作原理和 <code>C/C++</code> 模块的 <code>binding</code> 方式，那么我相信你有更好的办法处理它们。</p>
  <p>此外，这里提供了一些 <code>C/C++</code> 模块的模板 👉 <a target="_blank" href="https://github.com/caoxiemeihao/electron-vite-samples">electron-vite-samples</a>。</p>
</details>

## Example

```ts
import electron from 'vite-plugin-electron'

export default {
  plugins: [
    electron({
      // Main process entry file of the Electron App.
      entry: 'electron/main/index.ts',
      vite: {
        build: {
          rollupOptions: {
            external: [
              'better-sqlite3',
              'sqlite3',
              'serialport',
              // other `C/C++` addons
            ],
          },
        },
      },
    }),
  ],
}
```

## vite-plugin-native

In addition, you can also try to use the community plugin [vite-plugin-native](https://www.npmjs.com/package/vite-plugin-native) to load `C/C++` addons.

<!-- 另外，也可以尝试使用社区插件 `vite-plugin-native` 加载 C/C++ 扩展。 -->
<details>
  <summary>中文</summary>
  <p>另外，你也可以尝试使用社区插件 <a target="_blank" href="https://www.npmjs.com/package/vite-plugin-native">vite-plugin-native</a> 加载 <code>C/C++</code> 扩展。</p>
</details>


```ts
import electron from 'vite-plugin-electron'
import native from 'vite-plugin-native'

export default {
  plugins: [
    electron({
      entry: 'electron/main.ts',
      vite: {
        plugins: [
          native(/* options */),
        ],
      },
    }),
  ],
}
```
