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

## Using Plugins

TODO:
