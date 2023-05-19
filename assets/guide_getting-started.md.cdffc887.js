import{_ as s,o as n,c as a,R as e}from"./chunks/framework.8e8e72cd.js";const b=JSON.parse('{"title":"Getting Started","description":"","frontmatter":{},"headers":[],"relativePath":"guide/getting-started.md","filePath":"guide/getting-started.md"}'),l={name:"guide/getting-started.md"},p=e(`<h1 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting Started&quot;">​</a></h1><h2 id="quick-start" tabindex="-1">Quick Start <a class="header-anchor" href="#quick-start" aria-label="Permalink to &quot;Quick Start&quot;">​</a></h2><p>We provide some out-of-the-box templates 🚀, and you can clone they to locally through Git for quick start.</p><h5 id="electron-vite-vue" tabindex="-1">electron-vite-vue <a class="header-anchor" href="#electron-vite-vue" aria-label="Permalink to &quot;electron-vite-vue&quot;">​</a></h5><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/electron-vite/electron-vite-vue.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h5 id="electron-vite-react" tabindex="-1">electron-vite-react <a class="header-anchor" href="#electron-vite-react" aria-label="Permalink to &quot;electron-vite-react&quot;">​</a></h5><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/electron-vite/electron-vite-react.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><hr><h5 id="using-the-vite-template" tabindex="-1">Using the vite template <a class="header-anchor" href="#using-the-vite-template" aria-label="Permalink to &quot;Using the vite template&quot;">​</a></h5><p>You can also use the <a href="https://github.com/vitejs/awesome-vite#get-started" target="_blank" rel="noreferrer">community cli</a> provided by vite for on-demand configuration.</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># npm 6.x</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vite@latest</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">electron-vite</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Select</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">framework:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">»</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Use</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">arrow-keys.</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Return</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">submit.</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">Vanilla</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">Vue</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">React</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">Preact</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">Lit</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">Svelte</span></span>
<span class="line"><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">   Others</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> Select a variant: » - Use arrow-keys. Return to submit.</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">create-vite-extra</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">↗</span></span>
<span class="line"><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">   create-electron-vite ↗</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># Choose your preferred front-end framework language</span></span>
<span class="line"><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> Project template: » - Use arrow-keys. Return to submit.</span></span>
<span class="line"><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">   Vue</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">React</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">Vanilla</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Enter the project to download dependencies and run them</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">electron-vite</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>`,11),t=[p];function o(r,c,i,C,y,u){return n(),a("div",null,t)}const m=s(l,[["render",o]]);export{b as __pageData,m as default};