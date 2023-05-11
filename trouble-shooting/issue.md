# Issue

## Directory

- [MultipleEnv](./issue.html#multipleenv)
- [Dependency Pre-Bundling](./issue.html#dependency-pre-bundling)

## MultipleEnv

Using [vite Env Variables](https://vitejs.dev/guide/env-and-mode.html#env-variables) in the rendering process and service process.

###### .env file

```ts
VITE_TEST_STRING=vite-test-env
VITE_TEST_NUMVER=123
VITE_TEST_BOOLEAN=true
```

###### How to use env

```ts
  import.meta.env.VITE_TEST_STRING,
  import.meta.env.VITE_TEST_NUMVER,
  import.meta.env.VITE_TEST_BOOLEAN

```

## Dependency Pre-Bundling

In general. Vite will pre-bundle all third-party modules in a Web-based usage format, but it can not adapt to Electron Renderer process especially C/C++ modules. So we must be make a little changes for this. [source code](https://github.com/electron-vite/vite-plugin-electron-renderer/blob/v0.13.0/src/optimizer.ts#L139-L142).

```ts
const _M_ = require("serialport");

export default (_M_.default || _M_);
export const SerialPort = _M_.SerialPort;
// export other members ...
```

---

###### Usage

Using the third-part C/C++, esm package in the Renderer process

```ts
import renderer from 'vite-plugin-electron-renderer'

export default {
  plugins: [
    renderer({
      resolve: {
        // C/C++ modules must be pre-bundle
        serialport: { type: 'cjs' },
        // `esm` modules only if Vite does not pre-bundle them correctly
        got: { type: 'esm' },
      },
    }),
  ],
}
```

###### API Define

```ts
export interface RendererOptions {
  /**
   * - Explicitly tell Vite how to load modules, which is very useful 
   * for C/C++ and `esm` modules
   * 
   * - `type.cjs` just wraps esm-interop
   * - `type.esm` pre-bundle to `cjs` and wraps esm-interop
   * 
   * @experimental
   */
  resolve?: {
    [module: string]: {
      type: 'cjs' | 'esm',
      /** Full custom how to pre-bundle */
      build?: (args: {
        cjs: (module: string) => Promise<string>,
        esm: (module: string, buildOptions?: import('esbuild').BuildOptions) 
              => Promise<string>,
      }) => Promise<string>
    }
  }
}
```
