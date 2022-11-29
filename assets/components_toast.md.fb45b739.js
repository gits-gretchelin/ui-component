import{_ as n,o as l,c as t,a as o,b as s,r as e}from"./app.31e50594.js";const f=JSON.parse('{"title":"Toast","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Basic Usage","slug":"basic-usage","link":"#basic-usage","children":[]},{"level":3,"title":"Title","slug":"title","link":"#title","children":[]},{"level":3,"title":"Icon","slug":"icon","link":"#icon","children":[]},{"level":3,"title":"Actions","slug":"actions","link":"#actions","children":[]},{"level":3,"title":"Custom","slug":"custom","link":"#custom","children":[]}]},{"level":2,"title":"Props","slug":"props","link":"#props","children":[]},{"level":2,"title":"Methods","slug":"methods","link":"#methods","children":[]},{"level":2,"title":"Events","slug":"events","link":"#events","children":[]},{"level":2,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":2,"title":"CSS Variables","slug":"css-variables","link":"#css-variables","children":[]},{"level":2,"title":"Manual Installation","slug":"manual-installation","link":"#manual-installation","children":[]},{"level":2,"title":"Storybook","slug":"storybook","link":"#storybook","children":[]}],"relativePath":"components/toast.md"}'),p={name:"components/toast.md"},c=s(`<h1 id="toast" tabindex="-1">Toast <a class="header-anchor" href="#toast" aria-hidden="true">#</a></h1><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><h3 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h3><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">&lt;!-- VToast is registered globally --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VBtn</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">openToast</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    Open Toast</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">VBtn</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VToast</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">isOpen</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">message</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Lorem ipsum</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Notification</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,4),r=s(`<div class="info custom-block"><p class="custom-block-title">INFO</p><p>The <code>VToast</code> component is registered globally when you install with <code>@gits-id/ui</code>. So you don&#39;t need to import it manually.</p></div><h3 id="title" tabindex="-1">Title <a class="header-anchor" href="#title" aria-hidden="true">#</a></h3><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VBtn</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">openToast</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    Open Toast</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">VBtn</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VToast</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">isOpen</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">message</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Lorem ipsum</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Notification</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,3),d=s(`<h3 id="icon" tabindex="-1">Icon <a class="header-anchor" href="#icon" aria-hidden="true">#</a></h3><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VBtn</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">openToast</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    Open Toast</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">VBtn</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VToast</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">isOpen</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">message</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Lorem ipsum</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Notification</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,2),D=s(`<h3 id="actions" tabindex="-1">Actions <a class="header-anchor" href="#actions" aria-hidden="true">#</a></h3><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VBtn</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">openToast</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    Open Toast</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">VBtn</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VToast</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">isOpen</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">message</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Lorem ipsum</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Notification</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">actions</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">confirm</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,2),F=s(`<h3 id="custom" tabindex="-1">Custom <a class="header-anchor" href="#custom" aria-hidden="true">#</a></h3><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VBtn</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">openToast</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    Open Toast</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">VBtn</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VToast</span><span style="color:#89DDFF;"> </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">isOpen</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">message</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Lorem ipsum</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Confirmation</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">question</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">actions</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">confirm</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">confirm-color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">error</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">confirm-text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Delete</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">close-text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Cancel</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">placement</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">center</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">hide-x-icon</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">overlay</span></span>
<span class="line"><span style="color:#89DDFF;">    @</span><span style="color:#C792EA;">confirm</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">: </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">) </span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">alert</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Confirmed!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">close</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,2),y=s(`<h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><a href="#modelValue"><code>modelValue</code></a></td><td><code>boolean</code></td><td><code>&#39;false&#39;</code></td></tr><tr><td><a href="#title"><code>title</code></a></td><td><code>string</code></td><td><code>&#39;&#39;</code></td></tr><tr><td><a href="#color"><code>color</code></a></td><td><code>string</code></td><td><code>&#39;white&#39;</code></td></tr><tr><td><a href="#confirmColor"><code>confirmColor</code></a></td><td><code>string</code></td><td><code>&#39;primary&#39;</code></td></tr><tr><td><a href="#confirmProps"><code>confirmProps</code></a></td><td><code>object</code></td><td><code>{}</code></td></tr><tr><td><a href="#confirmText"><code>confirmText</code></a></td><td><code>string</code></td><td><code>&#39;Confirm&#39;</code></td></tr><tr><td><a href="#closeText"><code>closeText</code></a></td><td><code>string</code></td><td><code>&#39;Close&#39;</code></td></tr><tr><td><a href="#closeProps"><code>closeProps</code></a></td><td><code>object</code></td><td><code>{}</code></td></tr><tr><td><a href="#headerClass"><code>headerClass</code></a></td><td><code>string</code></td><td><code>&#39;&#39;</code></td></tr><tr><td><a href="#bodyClass"><code>bodyClass</code></a></td><td><code>string</code></td><td><code>&#39;&#39;</code></td></tr><tr><td><a href="#actionsClass"><code>actionsClass</code></a></td><td><code>string</code></td><td><code>&#39;&#39;</code></td></tr><tr><td><a href="#placement"><code>placement</code></a></td><td><code>string</code></td><td><code>&#39;&#39;</code></td></tr><tr><td><a href="#timeout"><code>timeout</code></a></td><td><code>mumber</code></td><td><code>0</code></td></tr><tr><td><a href="#type"><code>type</code></a></td><td><code>string</code></td><td><code>&#39;&#39;</code></td></tr><tr><td><a href="#hideXIcon"><code>hideXIcon</code></a></td><td><code>boolean</code></td><td><code>&#39;false&#39;</code></td></tr><tr><td><a href="#overlay"><code>overlay</code></a></td><td><code>boolean</code></td><td><code>false&#39;&#39;</code></td></tr><tr><td><a href="#loading"><code>loading</code></a></td><td><code>boolean</code></td><td><code>&#39;false&#39;</code></td></tr><tr><td><a href="#presistent"><code>presistent</code></a></td><td><code>boolean</code></td><td><code>&#39;false&#39;</code></td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><p>None</p><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><a href="#confirm"><code>confirm</code></a></td><td><code>unknown</code></td><td><code>-</code></td></tr><tr><td><a href="#updateModelValue"><code>update:modelValue</code></a></td><td><code>unknown</code></td><td><code>-</code></td></tr><tr><td><a href="#open"><code>open</code></a></td><td><code>unknown</code></td><td><code>-</code></td></tr><tr><td><a href="#close"><code>close</code></a></td><td><code>unknown</code></td><td><code>-</code></td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><a href="#actions"><code>actions</code></a></td><td><code>unknown</code></td><td><code>-</code></td></tr><tr><td><a href="#activator"><code>activator</code></a></td><td><code>unknown</code></td><td><code>-</code></td></tr><tr><td><a href="#media"><code>media</code></a></td><td><code>unknown</code></td><td><code>-</code></td></tr><tr><td><a href="#header"><code>header</code></a></td><td><code>unknown</code></td><td><code>-</code></td></tr><tr><td><a href="#default"><code>default</code></a></td><td><code>unknown</code></td><td><code>-</code></td></tr><tr><td><a href="#rightActions"><code>rightActions</code></a></td><td><code>unknown</code></td><td><code>-</code></td></tr></tbody></table><h2 id="css-variables" tabindex="-1">CSS Variables <a class="header-anchor" href="#css-variables" aria-hidden="true">#</a></h2><p>None</p><h2 id="manual-installation" tabindex="-1">Manual Installation <a class="header-anchor" href="#manual-installation" aria-hidden="true">#</a></h2><p>You can also install the <code>Toast</code> component individually via <code>@gits-id/toast</code> package:</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn install @gits-id/toast</span></span>
<span class="line"></span></code></pre></div><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#A6ACCD;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> VToast </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@gits-id/toast</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VBtn</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">openToast</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    Open Toast</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">VBtn</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VToast</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">isOpen</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">message</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Lorem ipsum</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="storybook" tabindex="-1">Storybook <a class="header-anchor" href="#storybook" aria-hidden="true">#</a></h2><p>View Storybook documentation <a href="https://gits-ui.web.app/?path=/story/components-toast--default" target="_blank" rel="noreferrer">here</a>.</p>`,16);function i(C,u,h,A,g,m){const a=e("LivePreview");return l(),t("div",null,[c,o(a,{src:"components-toast--default"}),r,o(a,{src:"components-toast--title"}),d,o(a,{src:"components-toast--icon"}),D,o(a,{src:"components-toast--actions"}),F,o(a,{src:"components-toast--custom"}),y])}const b=n(p,[["render",i]]);export{f as __pageData,b as default};
