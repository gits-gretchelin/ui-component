import{_ as o,o as e,c as t,b as s,a as d,u as r}from"./app.548e5c01.js";JSON.parse('{"title":"nuxt-admin","description":"","frontmatter":{},"headers":[{"level":2,"title":"Features","slug":"features","link":"#features","children":[]},{"level":2,"title":"Demo","slug":"demo","link":"#demo","children":[]},{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Configuration","slug":"configuration","link":"#configuration","children":[]},{"level":2,"title":"Components","slug":"components","link":"#components","children":[]},{"level":2,"title":"Pages","slug":"pages","link":"#pages","children":[]},{"level":2,"title":"Authentication","slug":"authentication","link":"#authentication","children":[]},{"level":2,"title":"GITS UI","slug":"gits-ui","link":"#gits-ui","children":[]},{"level":2,"title":"License","slug":"license","link":"#license","children":[]}],"relativePath":"../starter/nuxt-admin/README.md"}');const l={name:"../starter/nuxt-admin/README.md"},c=s(`<h1 id="nuxt-admin" tabindex="-1">nuxt-admin <a class="header-anchor" href="#nuxt-admin" aria-hidden="true">#</a></h1><p>An extensible admin template powered by Nuxt.js and GITS UI.</p><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-hidden="true">#</a></h2><ul><li>Integrated with <a href="https://gitsindonesia.github.io/ui-component/" target="_blank" rel="noreferrer">GITS UI</a></li><li>Dark mode ready</li><li>Built-in Pages: <ul><li><code>/admin</code></li><li><code>/admin/profile</code></li></ul></li><li>Customizable via Nuxt Layer</li><li>Configurable via <code>app.config.ts</code></li></ul><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h2><ul><li><a href="https://gits-nuxt-admin.vercel.app/admin" target="_blank" rel="noreferrer">Online demo</a></li><li><a href="https://github.com/gitsindonesia/ui-component/tree/main/starter/nuxt-admin" target="_blank" rel="noreferrer">Source code</a></li><li>Try it online on <a href="https://stackblitz.com/github/gitsindonesia/ui-component/tree/main/starter/nuxt-admin" target="_blank" rel="noreferrer">Stackblitz</a></li></ul><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@gits-id/nuxt-admin</span></span>
<span class="line"></span></code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><p>Add it to the <code>nuxt.config.ts</code>:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineNuxtConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">extends</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@gits-id/nuxt-admin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-hidden="true">#</a></h2><p>You can change the default options for admin pages like redirect url and head options via <code>app.config.ts</code>.</p><p>You can checkout the default configuration in the <a href="https://github.com/gitsindonesia/ui-component/tree/main/starter/nuxt-admin/app.config.ts" target="_blank" rel="noreferrer">source of this file</a>.</p><h2 id="components" tabindex="-1">Components <a class="header-anchor" href="#components" aria-hidden="true">#</a></h2><p>To customize the components, just override the default components by creating file in your Nuxt app with the same as the theme.</p><table><thead><tr><th>Component</th><th>Path</th></tr></thead><tbody><tr><td><code>AdminFooter</code></td><td><code>components/admin/Footer.vue</code></td></tr><tr><td><code>AdminHeader</code></td><td><code>components/admin/Header.vue</code></td></tr><tr><td><code>AdminNotification</code></td><td><code>components/admin/Notification.vue</code></td></tr><tr><td><code>AdminNotificationItem</code></td><td><code>components/admin/NotificationItem.vue</code></td></tr><tr><td><code>AdminPageTitle</code></td><td><code>components/admin/PageTitle.vue</code></td></tr><tr><td><code>AdminShell</code></td><td><code>components/admin/Shell.vue</code></td></tr><tr><td><code>AdminSidebar</code></td><td><code>components/admin/Sidebar.vue</code></td></tr><tr><td><code>DarkModeSwitcher</code></td><td><code>components/DarkModeSwitcher.vue</code></td></tr></tbody></table><h2 id="pages" tabindex="-1">Pages <a class="header-anchor" href="#pages" aria-hidden="true">#</a></h2><p>To customize the pages, just override the default pages by creating file in your Nuxt app with the same as the theme.</p><table><thead><tr><th>Path</th><th>Description</th></tr></thead><tbody><tr><td><code>pages/admin/index.vue</code></td><td>The admin home page</td></tr><tr><td><code>pages/admin/profile.vue</code></td><td>The admin profile page</td></tr></tbody></table><h2 id="authentication" tabindex="-1">Authentication <a class="header-anchor" href="#authentication" aria-hidden="true">#</a></h2><p>Combine with <a href="/ui-component/themes/nuxt-auth.html"><code>nuxt-auth</code></a> to add authentication to the admin page.</p><h2 id="gits-ui" tabindex="-1">GITS UI <a class="header-anchor" href="#gits-ui" aria-hidden="true">#</a></h2><p>Checkout the <a href="https://gitsindonesia.github.io/ui-component/" target="_blank" rel="noreferrer">official documentation</a> to learn more about <code>GITS UI</code>.</p><h2 id="license" tabindex="-1">License <a class="header-anchor" href="#license" aria-hidden="true">#</a></h2><p>MIT</p>`,26),p=[c];function h(a,n,i,g,f,b){return e(),t("div",null,p)}const u=o(l,[["render",h]]),y=JSON.parse('{"title":"nuxt-admin","description":"","frontmatter":{"title":"nuxt-admin"},"headers":[],"relativePath":"themes/nuxt-admin.md"}'),m={name:"themes/nuxt-admin.md"},D=Object.assign(m,{setup(a){return(n,i)=>(e(),t("div",null,[d(r(u))]))}});export{y as __pageData,D as default};
