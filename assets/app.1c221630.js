import{d as c,S as l,_ as d,a2 as r,A as o,a3 as u,a4 as f,a5 as b,a6 as _,a7 as v,a8 as m,a9 as h,aa as g,ab as y,ac as A,X as w,u as P,j as S,x,ad as C,ae as E,af as R}from"./chunks/framework.31056c87.js";import{t as p}from"./chunks/theme.aece53f9.js";const V="/assets/intellibar.6bccc976.webp",D="/assets/polypane.ff5c5b43.webp",L=l('<div class="sponsor-topbar" data-v-b1cb0af4>💖 Sponsors</div><div class="sponsor-list" data-v-b1cb0af4><a class="sponsor-item" href="https://intellibar.app/" target="_blank" rel="noreferrer" data-v-b1cb0af4><img src="'+V+'" data-v-b1cb0af4></a></div><div class="user-topbar" data-v-b1cb0af4>👨‍💻‍ Users</div><div class="user-list" data-v-b1cb0af4><a class="user-item" href="https://polypane.app/" target="_blank" rel="noreferrer" data-v-b1cb0af4><img src="'+D+'" data-v-b1cb0af4></a></div><div class="sponsor-desc" data-v-b1cb0af4>Electron⚡️Vite is free and open source, made possible by wonderful sponsors.</div><div class="action" data-v-b1cb0af4><a class="sponsor" href="https://github.com/sponsors/electron-vite" target="_blank" rel="noreferrer" data-v-b1cb0af4> Sponsor Electron⚡️Vite </a><a class="sponsor" href="https://github.com/sponsors/caoxiemeihao" target="_blank" rel="noreferrer" data-v-b1cb0af4> Sponsor 草鞋没号 </a></div>',6),T=c({__name:"sponsors",setup(e){return(a,t)=>L}});const j=d(T,[["__scopeId","data-v-b1cb0af4"]]);const k={...p,Layout(){return r(p.Layout,null,{"home-features-after":()=>r(j)})}};function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const n=i(k),O=c({name:"VitePressApp",setup(){const{site:e}=P();return S(()=>{x(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),C(),E(),R(),n.setup&&n.setup(),()=>r(n.Layout)}});async function F(){const e=$(),a=I();a.provide(f,e);const t=b(e.route);return a.provide(_,t),a.component("Content",v),a.component("ClientOnly",m),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),n.enhanceApp&&await n.enhanceApp({app:a,router:e,siteData:h}),{app:a,router:e,data:t}}function I(){return g(O)}function $(){let e=o,a;return y(t=>{let s=A(t);return s?(e&&(a=s),(e||a===s)&&(s=s.replace(/\.js$/,".lean.js")),o&&(e=!1),w(()=>import(s),[])):null},n.NotFound)}o&&F().then(({app:e,router:a,data:t})=>{a.go().then(()=>{u(a.route,t.site),e.mount("#app")})});export{F as createApp};