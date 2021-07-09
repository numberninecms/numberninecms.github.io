(self.webpackChunknumberninecms_docs=self.webpackChunknumberninecms_docs||[]).push([[565],{7166:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-7a9ab642",path:"/developers/howto/user-management/create-a-capability.html",title:"Create a capability",lang:"en-US",frontmatter:{prev:"/developers/howto/content/create-a-content-type.md",next:"/developers/reference/events.md"},excerpt:"",headers:[],filePathRelative:"developers/howto/user-management/create-a-capability.md",git:{updatedTime:1625840399e3,contributors:[]}}},1565:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>p});const e=(0,a(6252).uE)('<h1 id="create-a-capability" tabindex="-1"><a class="header-anchor" href="#create-a-capability" aria-hidden="true">#</a> Create a capability</h1><p>Create a class in <code>src/EventSubscriber/CapabilitiesListEventSubscriber.php</code> file.</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>EventSubscriber</span><span class="token punctuation">;</span>\n\n<span class="token keyword">use</span> <span class="token package">NumberNine<span class="token punctuation">\\</span>Event<span class="token punctuation">\\</span>CapabilitiesListEvent</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>EventDispatcher<span class="token punctuation">\\</span>EventSubscriberInterface</span><span class="token punctuation">;</span>\n\n<span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name-definition class-name">CapabilitiesListEventSubscriber</span> <span class="token keyword">implements</span> <span class="token class-name">EventSubscriberInterface</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function-definition function">getSubscribedEvents</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">[</span>\n            <span class="token class-name static-context">CapabilitiesListEvent</span><span class="token operator">::</span><span class="token keyword">class</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;addCapabilities&#39;</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">addCapabilities</span><span class="token punctuation">(</span><span class="token class-name type-declaration">CapabilitiesListEvent</span> <span class="token variable">$event</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>\n    <span class="token punctuation">{</span>\n        <span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token function">addCapability</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;my_first_custom_capability&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token function">addCapability</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;another_custom_capability&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>Assign it to the roles you want. Then in your controller:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">denyAccessUnlessGranted</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;my_first_custom_capability&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',5),p={render:function(n,s){return e}}}}]);