# Env Variables

## MultipleEnv

Using [vite Env Variables](https://vitejs.dev/guide/env-and-mode.html#env-variables) in the rendering process and service process.

## .env file

```properties
VITE_TEST_STRING=vite-test-env
VITE_TEST_NUMVER=123
VITE_TEST_BOOLEAN=true
```

## How to use env

```ts
// Main process
// Preload scripts
// Renderer process

import.meta.env.VITE_TEST_STRING
import.meta.env.VITE_TEST_NUMVER
import.meta.env.VITE_TEST_BOOLEAN
```
