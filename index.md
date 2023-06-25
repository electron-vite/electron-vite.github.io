---

# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Electron⚡️Vite"
  tagline: Create desktop applications using Electron and Vite
  image:
    src: /electron-vite.animate.svg
    alt: electron-vite

  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: Why Electron⚡️Vite
      link: /guide/why-electron-vite
    - theme: alt
      text: View on GitHub
      link: https://github.com/electron-vite

features:
  - icon: 🔥
    title: HOT Restart
    details: Restart the App immediately after modifying the <font color="var(--vp-c-brand)">Main process</font> code
    link: /guide/features.html#hot-restart

  - icon: ⚡️
    title: HMR
    details: The <font color="var(--vp-c-brand)">Renderer process</font> is based on the lightweight and fast HMR provided by Vite
    link: /guide/features.html#hmr

  - icon: 🔄
    title: HOT Reload
    details: The Renderer process is automatically refreshed to reload the <font color="var(--vp-c-brand)">Preload scripts</font> after the Preload scripts is modified
    link: /guide/features.html#hot-reload

---

