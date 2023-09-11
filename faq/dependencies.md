# [dependencies vs devDependencies](https://github.com/electron-vite/vite-plugin-electron-renderer#dependencies-vs-devdependencies)

::: warning
This documentation is limited to building App using [electron-builder](https://www.electron.build/).
:::

If a third-party npm-pkg can be built normally by [Vite](https://vitejs.dev/), we recommend placing it in `devDependencies`, which will reduce the size of the packaged App.
In some extreme cases, such as when using `C/C++` addons, if we cannot build it correctly, we need to put it in `dependencies` to ensure that the App can work properly after being built.

<details>
  <summary>中文</summary>
  <p>此文档仅限于使用 <code>electron-builder</code> 构建应用</p>
  <p>如果一个第三方 npm 包可以被 <a target="_blank" href="https://vitejs.dev/">Vite</a> 正常构建，我们推荐将它放到 <code>devDependencies</code> 中，这会减小应用打包后的体积。</p>
  <p>在一些极端的场景中，比如使用 <code>C/C++</code> 扩展时，如果我们没办法正确的构建它，需要将它放到 <code>dependencies</code> 中以确保应用构建后能够正常工作。</p>
</details>
