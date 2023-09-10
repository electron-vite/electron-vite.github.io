# Features

All [Electron⚡️Vite](https://github.com/electron-vite) features are included in a [vite-plugin-electron](https://github.com/electron-vite/vite-plugin-electron) plugin based on Vite, which makes it easy for users to quickly integrate Electron in a Vite project.

<details>
  <summary>中文</summary>
  <p><a target="_blank" href="https://github.com/electron-vite">Electron⚡️Vite</a> 所有功能均包含在一个基于 Vite 开发的  <a target="_blank" href="https://github.com/electron-vite/vite-plugin-electron">vite-plugin-electron</a> 插件，它能使得用户能很方便的在一个 Vite 项目中快速集成 Electron。</p>
</details>

## Hot Restart

By default `vite-plugin-electron` has automatic restart enabled, which works simply by listening for the completion of a Vite build that kills the running Electron App process and restarts a new Electron App process.

However, you can control the default behavior however you like.

<details>
  <summary>中文</summary>
  <p>默认情况下 <code>vite-plugin-electron</code> 开启了自动重启，它的工作原理仅仅是监听 Vite 构建完成后杀死正在运行的 Electron App 进程，然后重启一个新的Electron App 进程。</p>
  <p>不过你可以随意控制默认行为。</p>
</details>


```ts
// vite.config.ts
import electron from 'vite-plugin-electron'

export default {
  plugins: [
    electron({
      // Main process entry file of the Electron App.
      entry: 'electron/main.ts',
      // If this `onstart` is passed, Electron App will not start automatically.  
      // However, you can start Electroo App via `startup` function. 
      onstart(args) {
        args.startup()
      },
    }),
  ],
}
```

## Hot Reload

When Preload scripts is modified, we just need to refresh the Renderer process. But it requires us to control it explicitly because Vite doesn't know which code is the Preload scripts. It's really simple!

<details>
  <summary>中文</summary>
  <p>当预加载脚本被修改时，我们只需要重新刷新渲染进程就可以了，但是它需要我们显式的控制它，因为 Vite 不知道哪些代码是预加载脚本。它很简单！</p>
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
        // Preload scripts entry file of the Electron App.
        entry: 'electron/preload/index.ts',
        onstart(args) {
          // Notify the Renderer process to reload the page when the Preload scripts build is complete, 
          // instead of restarting the entire Electron App.
          args.reload()
        },
      }
    ]),
  ],
}
```

## HMR

HMR i.e. the Renderer process hot replaces modified parts of the code when they are modified, and HMR is a great development experience! It is based on [Vite's built-in HMR](https://vitejs.dev/guide/features.html#hot-module-replacement), which is enabled by the Main process during development via the `process.env.VITE_DEV_SERVER_URL` environment variable.

<details>
  <summary>中文</summary>
  <p>HMR 即渲染进程修改代码后会热替换修改的部分，HMR 的开发体验非常棒！它基于 <a target="_blank" href="https://vitejs.dev/guide/features.html#hot-module-replacement">Vite 内置的 HMR</a>，在开发期间主进程通过 <code>process.env.VITE_DEV_SERVER_URL</code> 环境变量开启它。</p>
</details>


```ts
// electron/main.ts
import { app, BrowserWindow } from 'electron'

app.whenReady().then(() => {
  const win = new BrowserWindow({
    title: 'Main window',
  })

  // You can use `process.env.VITE_DEV_SERVER_URL` when the vite command is called `serve`
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL)
  } else {
    // Load your file
    win.loadFile('dist/index.html');
  }
})
```
