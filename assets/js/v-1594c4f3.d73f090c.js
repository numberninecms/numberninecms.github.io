"use strict";(self.webpackChunknumberninecms_docs=self.webpackChunknumberninecms_docs||[]).push([[263],{4222:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-1594c4f3",path:"/developers/howto/theming/create-a-shortcode.html",title:"Create a shortcode",lang:"en-US",frontmatter:{prev:"/developers/howto/theming/create-a-component.md",next:"/developers/howto/content/create-a-content-type.md"},excerpt:"",headers:[{level:2,title:"Configuration",slug:"configuration",children:[]},{level:2,title:"Using CLI",slug:"using-cli",children:[]},{level:2,title:"File structure",slug:"file-structure",children:[]},{level:2,title:"Render a shortcode from Twig",slug:"render-a-shortcode-from-twig",children:[]},{level:2,title:"The shortcode class",slug:"the-shortcode-class",children:[{level:3,title:"Overview",slug:"overview",children:[]},{level:3,title:"Shortcode attribute",slug:"shortcode-attribute",children:[]},{level:3,title:"Configure parameters",slug:"configure-parameters",children:[]},{level:3,title:"Send parameters to the Twig template",slug:"send-parameters-to-the-twig-template",children:[]},{level:3,title:"Twig template",slug:"twig-template",children:[]}]},{level:2,title:"Editable shortcodes",slug:"editable-shortcodes",children:[{level:3,title:"Page builder demonstration",slug:"page-builder-demonstration",children:[]},{level:3,title:"Considerations",slug:"considerations",children:[]},{level:3,title:"Vue template",slug:"vue-template",children:[]},{level:3,title:"Shortcode viewer",slug:"shortcode-viewer",children:[]}]}],filePathRelative:"developers/howto/theming/create-a-shortcode.md",git:{updatedTime:1644824509e3}}},6350:(n,s,a)=>{a.r(s),a.d(s,{default:()=>f});var e=a(6252);const t=(0,e._)("h1",{id:"create-a-shortcode",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#create-a-shortcode","aria-hidden":"true"},"#"),(0,e.Uk)(" Create a shortcode")],-1),p=(0,e.Uk)("To understand what are shortcodes, "),o=(0,e.Uk)("read this section"),l=(0,e.Uk)("."),c=(0,e.uE)('<h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><p>In your <code>config/packages/numbernine.yaml</code> file, configure the path where to store shortcodes. By default it&#39;s <code>src/Shortcode/</code>, if this path suits you then skip this step.</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">numbernine</span><span class="token punctuation">:</span>\n    <span class="token key atrule">shortcodes_path</span><span class="token punctuation">:</span> <span class="token string">&#39;src/My/Path/To/Shortcodes/&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="using-cli" tabindex="-1"><a class="header-anchor" href="#using-cli" aria-hidden="true">#</a> Using CLI</h2><p>Run this command in your terminal:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker compose exec php bin/console numbernine:make:shortcode\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>You&#39;ll be asked several questions. For demonstration purpose, we&#39;ll use default values in the following steps.</p><h2 id="file-structure" tabindex="-1"><a class="header-anchor" href="#file-structure" aria-hidden="true">#</a> File structure</h2><p>After answering all the questions, you&#39;ll get 3 new files:</p><ul><li><p><code>src/Shortcode/TurtleShortcode.php</code></p><p>This is the controller of the shortcode template.</p></li><li><p><code>src/Shortcode/TurtleShortcode/template.html.twig</code></p><p>This is the template that will be rendered to the final user.</p></li><li><p><code>src/Shortcode/TurtleShortcode/template.vue.twig</code></p><p>This is the template used in the page builder. It should be as close as the html template, although it&#39;s not always easy or possible.</p></li></ul><h2 id="render-a-shortcode-from-twig" tabindex="-1"><a class="header-anchor" href="#render-a-shortcode-from-twig" aria-hidden="true">#</a> Render a shortcode from Twig</h2><p>To render the shortcode, use this Twig function:</p><div class="language-twig ext-twig line-numbers-mode"><pre class="language-twig"><code><span class="token tag"><span class="token ld"><span class="token punctuation">{{</span></span> <span class="token property">N9_shortcode</span><span class="token punctuation">(</span><span class="token string"><span class="token punctuation">&#39;</span>[turtle title=&quot;My custom title&quot;]<span class="token punctuation">&#39;</span></span><span class="token punctuation">)</span> <span class="token rd"><span class="token punctuation">}}</span></span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>If you don&#39;t specify the parameters, the shortcode defaults values will be used instead.</p><p>Note that this function doesn&#39;t necessarily take only one shortcode. You can pass it a full text with any number of shortcodes, even nested shortcodes, and it will render everything:</p><div class="language-twig ext-twig line-numbers-mode"><pre class="language-twig"><code><span class="token tag"><span class="token ld"><span class="token punctuation">{{</span></span> <span class="token property">N9_shortcode</span><span class="token punctuation">(</span>\n    <span class="token string"><span class="token punctuation">&#39;</span>This is some text.<span class="token punctuation">&#39;</span></span> <span class="token operator">~</span>\n    <span class="token string"><span class="token punctuation">&#39;</span>[turtle title=&quot;My custom title&quot;]<span class="token punctuation">&#39;</span></span> <span class="token operator">~</span>\n    <span class="token string"><span class="token punctuation">&#39;</span>And some more text.<span class="token punctuation">&#39;</span></span>\n<span class="token punctuation">)</span> <span class="token rd"><span class="token punctuation">}}</span></span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="the-shortcode-class" tabindex="-1"><a class="header-anchor" href="#the-shortcode-class" aria-hidden="true">#</a> The shortcode class</h2><h3 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h3><p>Have a look at the whole class in its minimal form.</p><p>Every shortcode must implement <code>configureParameters()</code> and <code>processParameters()</code> methods from <code>ShortcodeInterface</code>.</p><p>Editable shortcodes, those who are available in the page builder, must implement <code>buildPageBuilderForm()</code> from <code>EditableShortcodeInterface</code>.</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name">Shortcode</span><span class="token punctuation">(</span><span class="token attribute-class-name class-name">name</span><span class="token punctuation">:</span><span class="token string double-quoted-string">&quot;turtle&quot;</span><span class="token punctuation">,</span> <span class="token attribute-class-name class-name">label</span><span class="token punctuation">:</span><span class="token string double-quoted-string">&quot;Turtle&quot;</span><span class="token punctuation">,</span> <span class="token attribute-class-name class-name">icon</span><span class="token punctuation">:</span><span class="token string double-quoted-string">&quot;mdi-turtle&quot;</span><span class="token punctuation">)</span></span><span class="token delimiter punctuation">]</span></span>\n<span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name-definition class-name">TurtleShortcode</span> <span class="token keyword">implements</span>\n    <span class="token class-name">ShortcodeInterface</span><span class="token punctuation">,</span>\n    EditableShortcodeInterface\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">configureParameters</span><span class="token punctuation">(</span><span class="token class-name type-declaration">OptionsResolver</span> <span class="token variable">$resolver</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>\n    <span class="token punctuation">{</span>\n        <span class="token variable">$resolver</span><span class="token operator">-&gt;</span><span class="token function">setDefaults</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n            <span class="token string single-quoted-string">&#39;title&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Welcome to the Turtle Age Show&#39;</span><span class="token punctuation">,</span>\n            <span class="token string single-quoted-string">&#39;age&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">40</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">processParameters</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$parameters</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">[</span>\n            <span class="token string single-quoted-string">&#39;title&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$parameters</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n            <span class="token string single-quoted-string">&#39;age&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$parameters</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;age&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">buildPageBuilderForm</span><span class="token punctuation">(</span><span class="token class-name type-declaration">PageBuilderFormBuilderInterface</span> <span class="token variable">$builder</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>\n    <span class="token punctuation">{</span>\n        <span class="token variable">$builder</span>\n            <span class="token operator">-&gt;</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">)</span>\n            <span class="token operator">-&gt;</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;age&#39;</span><span class="token punctuation">,</span> <span class="token class-name static-context">SliderControl</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span>\n        <span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h3 id="shortcode-attribute" tabindex="-1"><a class="header-anchor" href="#shortcode-attribute" aria-hidden="true">#</a> Shortcode attribute</h3><p>Every shortcode must have the <code>#[Shortcode]</code> attribute to specify the name that the end-user will use. In our example, we want the shortcode to be called with <code>[turtle]</code>, therefore the name we&#39;ll give is <code>turtle</code>.</p><p>The <code>label</code> parameter defines the name that will appear in page builder, along with the <code>icon</code> parameter.</p><p>You can look for icons on one of these websites:</p>',26),r={href:"https://fontawesome.com/icons",target:"_blank",rel:"noopener noreferrer"},i=(0,e.Uk)("https://fontawesome.com/icons"),u={href:"https://materialdesignicons.com/",target:"_blank",rel:"noopener noreferrer"},d=(0,e.Uk)("https://materialdesignicons.com/"),h=(0,e.Uk)(" (prefix them with "),k=(0,e._)("code",null,"mdi-",-1),m=(0,e.Uk)(")"),g=(0,e.uE)('<h3 id="configure-parameters" tabindex="-1"><a class="header-anchor" href="#configure-parameters" aria-hidden="true">#</a> Configure parameters</h3><p>You can add as many parameters as you want to your shortcode. To do so, add them in the <code>configureParameters()</code> method:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">configureParameters</span><span class="token punctuation">(</span><span class="token class-name type-declaration">OptionsResolver</span> <span class="token variable">$resolver</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>\n<span class="token punctuation">{</span>\n    <span class="token variable">$resolver</span><span class="token operator">-&gt;</span><span class="token function">setDefaults</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n        <span class="token string single-quoted-string">&#39;my_parameter&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Default value&#39;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="send-parameters-to-the-twig-template" tabindex="-1"><a class="header-anchor" href="#send-parameters-to-the-twig-template" aria-hidden="true">#</a> Send parameters to the Twig template</h3><p>You can send parameters to Twig that are completely different from the shortcode parameters. This allow for complex operations just like you would do in a traditional controller.</p><p>For example, you could inject <code>FormFactoryInterface</code> and create a form, then handling its submission by listening to <code>RequestEvent::class</code>.</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">processParameters</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$parameters</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">[</span>\n        <span class="token string single-quoted-string">&#39;twig_variable&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$parameters</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;my_parameter&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token string single-quoted-string">&#39;form&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">createView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="twig-template" tabindex="-1"><a class="header-anchor" href="#twig-template" aria-hidden="true">#</a> Twig template</h3><p>To stay with our TurtleShortcode example, here&#39;s what the template look like for final rendering:</p><div class="language-twig ext-twig line-numbers-mode"><pre class="language-twig"><code><span class="token other"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span></span><span class="token tag"><span class="token ld"><span class="token punctuation">{{</span></span> <span class="token property">title</span> <span class="token rd"><span class="token punctuation">}}</span></span></span><span class="token other"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>The turtle is</span> <span class="token tag"><span class="token ld"><span class="token punctuation">{{</span></span> <span class="token property">age</span> <span class="token rd"><span class="token punctuation">}}</span></span></span> <span class="token other">years-old.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="editable-shortcodes" tabindex="-1"><a class="header-anchor" href="#editable-shortcodes" aria-hidden="true">#</a> Editable shortcodes</h2><h3 id="page-builder-demonstration" tabindex="-1"><a class="header-anchor" href="#page-builder-demonstration" aria-hidden="true">#</a> Page builder demonstration</h3><p>NumberNine admin features a page builder that will interpret your shortcodes and present them to the end-user with a user friendly graphic interface.</p><p>As an example, here&#39;s what our TurtleShortcode looks like in the page builder:</p><p><img src="/images/screenshots/howto_shortcode_turtle_builder.gif" alt="Custom Shortcode Turtle Builder Demo"></p><br><p>This is made possible with the other template: <code>TurtleShortcode/template.vue.html</code>. This template is a portion of a Vue component, so it&#39;s using Vue syntax.</p><p>You&#39;re only given access to the template of the component and not the script, which is automated.</p><p>Note that you don&#39;t have to recompile the javascript assets to make it work. It&#39;s compiled on-the-fly while loading the page builder.</p><h3 id="considerations" tabindex="-1"><a class="header-anchor" href="#considerations" aria-hidden="true">#</a> Considerations</h3><ul><li>Editable shortcodes must implement <code>EditableShortcodeInterface</code></li><li>Templates must have only one root element</li><li>Don&#39;t use two root elements with <code>v-if</code> and <code>v-else</code></li><li>Shortcode parameters are available in the <code>parameters</code> Vue variable</li><li>Computed variables generated by some page builder controls are available in the <code>computed</code> Vue variable</li></ul><h3 id="vue-template" tabindex="-1"><a class="header-anchor" href="#vue-template" aria-hidden="true">#</a> Vue template</h3><p>To avoid conflicting Twig and Vue syntax, embed Vue code into <code>{% verbatim %}...{% endverbatim %}</code> tag.</p><div class="language-twig ext-twig line-numbers-mode"><pre class="language-twig"><code><span class="token tag"><span class="token ld"><span class="token punctuation">{%</span> <span class="token keyword">verbatim</span></span> <span class="token rd"><span class="token punctuation">%}</span></span></span>\n<span class="token other"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span></span><span class="token tag"><span class="token ld"><span class="token punctuation">{{</span></span> <span class="token property">parameters</span><span class="token punctuation">.</span><span class="token property">title</span> <span class="token rd"><span class="token punctuation">}}</span></span></span><span class="token other"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>The turtle is</span> <span class="token tag"><span class="token ld"><span class="token punctuation">{{</span></span> <span class="token property">parameters</span><span class="token punctuation">.</span><span class="token property">age</span> <span class="token rd"><span class="token punctuation">}}</span></span></span> <span class="token other">years-old.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>\n<span class="token tag"><span class="token ld"><span class="token punctuation">{%</span> <span class="token keyword">endverbatim</span></span> <span class="token rd"><span class="token punctuation">%}</span></span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="shortcode-viewer" tabindex="-1"><a class="header-anchor" href="#shortcode-viewer" aria-hidden="true">#</a> Shortcode viewer</h3><p>You can at any time convert your page builder component to a text shortcode by selecting <em><strong>Show shortcode</strong></em> in the component context menu.</p><p>Look at the example below:</p><p><img src="/images/screenshots/howto_shortcode_viewer.gif" alt="Custom Shortcode Viewer"></p>',28),b={},f=(0,a(3744).Z)(b,[["render",function(n,s){const a=(0,e.up)("RouterLink"),b=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,(0,e._)("p",null,[p,(0,e.Wm)(a,{to:"/developers/architecture/theming.html#shortcodes"},{default:(0,e.w5)((()=>[o])),_:1}),l]),c,(0,e._)("ul",null,[(0,e._)("li",null,[(0,e._)("a",r,[i,(0,e.Wm)(b)])]),(0,e._)("li",null,[(0,e._)("a",u,[d,(0,e.Wm)(b)]),h,k,m])]),g],64)}]])}}]);