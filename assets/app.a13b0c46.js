import{d as i,U as l,_ as d,a4 as r,V as o,a5 as u,a6 as f,a7 as _,a8 as v,a9 as m,aa as h,ab as b,ac as g,ad as y,ae as A,Y as w,u as P,j as S,A as C,af as E,ag as x,ah as R}from"./chunks/framework.846537b1.js";import{t as p}from"./chunks/theme.76849417.js";const V="/assets/intellibar.6bccc976.webp",D="/assets/polypane.ff5c5b43.webp",L=l('<div class="sponsor-topbar" data-v-64592a00>💖 Sponsors</div><div class="sponsor-list" data-v-64592a00><a class="sponsor-item" href="https://intellibar.app/" target="_blank" rel="noreferrer" data-v-64592a00><img src="'+V+'" data-v-64592a00></a></div><div class="user-topbar" data-v-64592a00>👨‍💻‍ Users</div><div class="user-list" data-v-64592a00><a class="user-item" href="https://polypane.app/" target="_blank" rel="noreferrer" data-v-64592a00><img src="'+D+'" data-v-64592a00></a></div><div class="sponsor-desc" data-v-64592a00>Electron⚡️Vite is free and open source, made possible by wonderful sponsors.</div><div class="action" data-v-64592a00><a class="sponsor" href="https://github.com/sponsors/electron-vite" target="_blank" rel="noreferrer" data-v-64592a00> Sponsor Electron⚡️Vite </a><a class="sponsor" href="https://github.com/sponsors/caoxiemeihao" target="_blank" rel="noreferrer" data-v-64592a00> Sponsor 草鞋没号 </a></div>',6),T=i({__name:"sponsors",setup(e){return(a,t)=>L}});const j=d(T,[["__scopeId","data-v-64592a00"]]);const k={...p,Layout(){return r(p.Layout,null,{"home-features-after":()=>r(j)})}};function c(e){if(e.extends){const a=c(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const n=c(k),O=i({name:"VitePressApp",setup(){const{site:e}=P();return S(()=>{C(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),E(),x(),R(),n.setup&&n.setup(),()=>r(n.Layout)}});async function F(){const e=U(),a=I();a.provide(f,e);const t=_(e.route);return a.provide(v,t),a.component("Content",m),a.component("ClientOnly",h),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),n.enhanceApp&&await n.enhanceApp({app:a,router:e,siteData:b}),{app:a,router:e,data:t}}function I(){return g(O)}function U(){let e=o,a;return y(t=>{let s=A(t);return s?(e&&(a=s),(e||a===s)&&(s=s.replace(/\.js$/,".lean.js")),o&&(e=!1),w(()=>import(s),[])):null},n.NotFound)}o&&F().then(({app:e,router:a,data:t})=>{a.go().then(()=>{u(a.route,t.site),e.mount("#app")})});export{F as createApp};
