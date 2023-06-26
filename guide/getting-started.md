# Getting Started

[Electron⚡️Vite](https://github.com/electron-vite) is focused on providing a community best practice solution for combining [Electron](https://www.electronjs.org/) and [Vite](https://vitejs.dev/)! It makes it easy to develop Electron projects based on Vite!

<details>
  <summary>中文</summary>
  <p><a target="_blank" href="https://github.com/electron-vite">Electron⚡️Vite</a> 致力于提供 <a target="_blank" href="https://www.electronjs.org/">Electron</a> 与 <a target="_blank" href="https://vitejs.dev/">Vite</a> 结合的最佳社区实践方案！它使得基于 Vite 开发的 Electron 工程变得十分简单！</p>
</details>

## Overview

Vite's ecosystem and community are exploding - as [patak](https://github.com/patak-dev) describes Vite in his Github home page.

At the same time, [Electron⚡️Vite](https://github.com/electron-vite) a Vite is a very important part of the [Electron](https://www.electronjs.org/) and [Vite](https://vitejs.dev/) community ecosystem, and is meant to provide a complete, simple, out-of-the-box Electron development experience based on Vite.

<details>
  <summary>中文</summary>
  <p>Vite 的生态系统和社区正在爆炸式增长 - 正如 <a target="_blank" href="https://github.com/patak-dev">patak</a> 在他的 Github 首页中自我介绍中这样阐述 Vite。</p>
  <p>与此同时，<a target="_blank" href="https://github.com/electron-vite">Electron⚡️Vite</a> 作为 Electron 与 Vite 社区生态系统非常重要的一部分，旨指基于 Vite 提供完整、简单、开箱即用的 Electron 开发体验。</p>
</details>

## Introductions

Whether you want to build an Electron application quickly or want to optimize an existing one, this project is a good choice. It's very easy to configure and also provides a lot of very useful features such as Main process **Hot-restart**, Renderer process **HMR**, Debug in development environments, support for C/C++ Native addons, etc. It also provides support for Vue / React frameworks. It makes developing Electron much easier and faster - [BlackHole1@electron](https://github.com/BlackHole1)

<details>
  <summary>中文</summary>
  <p>无论你是想快速构建一个 Electron 应用还是想优化现有的 Electron 应用，这个项目都是一个不错的选择。它的配置非常简单，同时也提供了很多非常有用的功能，比如：主进程和渲染进程的热重载、开发环境下的 Debug、支持 C/C++ Native addons 等等。以及还提供了 Vue / React 框架的支持。它使得开发 Electron 变的更加容易和快速 - <a target="_blank" href="https://github.com/BlackHole1">BlackHole1@electron</a></p>
</details>

## Scaffolding Your First Vite Project

::: tip Fist way
Use the command provided by electron-vite.
:::

![create-electron-vite.gif](https://github.com/electron-vite/create-electron-vite/raw/main/electron-vite-vue.gif?raw=true)

::: warning Second way
Use Vite's official create command.
:::

```sh
npm create vite@latest my-electron-vite-project

? Select a framework: › - Use arrow-keys. Return to submit.
    Vanilla
    Vue
    React
    Preact
    Lit
    Svelte
❯   Others

? Select a variant: › - Use arrow-keys. Return to submit.
    create-vite-extra ↗
❯   create-electron-vite ↗

# Choose your preferred front-end framework language
? Project template: › - Use arrow-keys. Return to submit.
❯   Vue
    React
    Vanilla

# Enter the project to download dependencies and run them
cd my-electron-vite-project
npm install
npm run dev
```
