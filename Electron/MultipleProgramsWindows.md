# Different Windows Different Applications

## Load different applications in different windows and package them for use

## Directory Structure

```diff
E:.
|   .gitignore
|   electron-builder.json5
|   package.json
|   tsconfig.json
+   vite.config.ts
|   vite.node-false.config.ts
|   vite.node-true.config.ts
|
|---dist
|   |   node-false-3a1012ee.js
|   |   node-true-ed9d4a2a.js
|   |   __vite-browser-external-d06ac358.js
|   |
|   +---assets
|   |       index-1ce04274.js
|   |
|   \---html
|           index.html
|           node-false.html
|           node-true.html
|
|---dist-electron
|       main.js
|       preload.js
|
|---electron
|       electron-env.d.ts
+       main.ts
|       preload.ts
|
+---html
+       index.html
+       node-false.html
+       node-true.html
|
\---renderer
        index.ts
        node-false.ts
        node-true.ts
```

## Application Program

There are three static. `.html` files under `/html`, representing three different applications. You can also use other frameworks (vue/react/regular, etc.) to compile pages.

### html

```diff
|---html
+       index.html
+       node-false.html
+       node-true.html

```

## Electron Program Application Loading

### main.ts

```ts
import { BrowserWindow } from 'electron'

// index.html
new BrowserWindow().loadURL('http://loaclhost:3000/index.html')

// app-a.html
new BrowserWindow().loadURL('http://loaclhost:3000/app-a.html')

// app-b.html
new BrowserWindow().loadURL('http://loaclhost:3000/app-b.html')

```

## Build Packaging Of Electron Program Applications

### vite.config.ts

```diff
import { join } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  // ...other options
+ build: {
+   rollupOptions: {
+     input: {
+       index: join(__dirname, 'index.html'),
+       App_A: join(__dirname, 'app-a.html'),
+       App_B: join(__dirname, 'app-b.html'),
+     },
+   },
+ },
})

```
