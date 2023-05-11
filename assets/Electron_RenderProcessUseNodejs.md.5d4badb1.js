import{_ as e,o,c as t,O as s}from"./chunks/framework.ef028d7b.js";const g=JSON.parse('{"title":"Rendering Process Nodejs","description":"","frontmatter":{},"headers":[],"relativePath":"Electron/RenderProcessUseNodejs.md","filePath":"Electron/RenderProcessUseNodejs.md"}'),n={name:"Electron/RenderProcessUseNodejs.md"},r=s('<h1 id="rendering-process-nodejs" tabindex="-1">Rendering Process Nodejs <a class="header-anchor" href="#rendering-process-nodejs" aria-label="Permalink to &quot;Rendering Process Nodejs&quot;">​</a></h1><h3 id="control-whether-the-rendering-process-has-the-ability-of-node-js" tabindex="-1">Control whether the rendering process has the ability of Node.js <a class="header-anchor" href="#control-whether-the-rendering-process-has-the-ability-of-node-js" aria-label="Permalink to &quot;Control whether the rendering process has the ability of Node.js&quot;">​</a></h3><p>In Electron, the <code>nodeIntegration</code> and <code>nodeIntegrationInSubFrames</code> options can be used to control whether the rendering process has the ability of Node.js.</p><p><a href="https://www.electronjs.org/docs/latest/api/webview-tag#nodeintegration" target="_blank" rel="noreferrer"><code>NodeIntegration</code></a>: The default is false. If set to true, the rendering process will have a complete Node.js environment, including the ability to use both Node.js built-in modules and third-party modules. This means that the functions provided by Node.js can be used during the rendering process, such as file systems, network requests, etc. But it also brings some security risks, as the rendering process will have the ability to access system resources and execute local code.</p><p><a href="https://www.electronjs.org/docs/latest/api/webview-tag#nodeintegrationinsubframes" target="_blank" rel="noreferrer"><code>NodeIntegrationInSubFrames</code></a>: The default is false. If set to true, the Node.js environment can also be used in the sub window of Electron. If the <code>nodeIntegration</code> option of a child window is set to false, but the <code>nodeIntegrationInSubFrames</code> of its parent window is set to true, the child window can still use the Node.js environment. It should be noted that enabling this option may increase some security risks.</p><p>Therefore, if you need to use the Node.js environment during the rendering process, you can set <code>NodeIntegration</code> to true. If you need to use the Node.js environment in the sub window of Electron, you can set <code>nodeIntegrationInSubFrames</code> to true. However, it should be noted that enabling these options may increase some security risks, and careful consideration should be given to whether they need to be enabled.</p>',6),a=[r];function d(i,c,h,l,u,p){return o(),t("div",null,a)}const b=e(n,[["render",d]]);export{g as __pageData,b as default};
