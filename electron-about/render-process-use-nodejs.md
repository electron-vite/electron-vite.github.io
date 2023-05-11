# Rendering Process Nodejs

## Control whether the rendering process has the ability of Node.js

In Electron, the `nodeIntegration` and `nodeIntegrationInSubFrames` options can be used to control whether the rendering process has the ability of Node.js.

[`NodeIntegration`](https://www.electronjs.org/docs/latest/api/webview-tag#nodeintegration): The default is false. If set to true, the rendering process will have a complete Node.js environment, including the ability to use both Node.js built-in modules and third-party modules. This means that the functions provided by Node.js can be used during the rendering process, such as file systems, network requests, etc. But it also brings some security risks, as the rendering process will have the ability to access system resources and execute local code.

[`NodeIntegrationInSubFrames`](https://www.electronjs.org/docs/latest/api/webview-tag#nodeintegrationinsubframes): The default is false. If set to true, the Node.js environment can also be used in the sub window of Electron. If the `nodeIntegration` option of a child window is set to false, but the `nodeIntegrationInSubFrames` of its parent window is set to true, the child window can still use the Node.js environment. It should be noted that enabling this option may increase some security risks.

Therefore, if you need to use the Node.js environment during the rendering process, you can set `NodeIntegration` to true. If you need to use the Node.js environment in the sub window of Electron, you can set `nodeIntegrationInSubFrames` to true. However, it should be noted that enabling these options may increase some security risks, and careful consideration should be given to whether they need to be enabled.
