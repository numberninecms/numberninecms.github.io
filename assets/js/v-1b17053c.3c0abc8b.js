(self.webpackChunknumberninecms_docs=self.webpackChunknumberninecms_docs||[]).push([[951],{2477:(e,t,a)=>{"use strict";a.r(t),a.d(t,{data:()=>o});const o={key:"v-1b17053c",path:"/developers/architecture/theming.html",title:"Theming",lang:"en-US",frontmatter:{prev:"/developers/architecture/user-management.md",next:"/developers/architecture/content-types.md"},excerpt:"",headers:[{level:2,title:"ChapterOne",slug:"chapterone",children:[]},{level:2,title:"Page templates",slug:"page-templates",children:[]},{level:2,title:"Components",slug:"components",children:[]},{level:2,title:"Shortcodes",slug:"shortcodes",children:[]},{level:2,title:"Areas",slug:"areas",children:[]}],filePathRelative:"developers/architecture/theming.md",git:{updatedTime:1625923975e3}}},6120:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>d});var o=a(6252);const n=(0,o.uE)('<h1 id="theming" tabindex="-1"><a class="header-anchor" href="#theming" aria-hidden="true">#</a> Theming</h1><p>A NumberNine theme is a Symfony bundle that handles rendering of the website. Unless you choose another theme or build your own, the default theme is <code>ChapterOne</code>.</p><p>Every template is overridable in your own <code>/templates/theme/</code> directory.</p><h2 id="chapterone" tabindex="-1"><a class="header-anchor" href="#chapterone" aria-hidden="true">#</a> ChapterOne</h2><p><em><strong>Note: ChapterOne is still under active development. Features below may not be all implemented yet.</strong></em></p><p>ChapterOne is a full featured theme for NumberNine that features the following:</p><ul><li>TailwindCSS</li><li>Responsive design</li><li>Hundreds of pre-designed blocks editable in the page builder</li><li>Configurable base colors</li><li>Several page templates (full width, no header, left sidebar, right sidebar, etc.)</li></ul><h2 id="page-templates" tabindex="-1"><a class="header-anchor" href="#page-templates" aria-hidden="true">#</a> Page templates</h2><p>Page templates are layouts for your index pages or entity pages.</p><p>An entity page is a page that will render a specific entity, for example a blog post, a page, a product, a portfolio gallery, an architecture project.</p><p>An entity page can have many templates, based on its <a href="">content type</a>.</p><p>Here&#39;s how NumberNine knows which template to choose, sorted by highest priority to lowest.<br> Note that your <code>/templates/theme/</code> directory has <strong>greater priority</strong> than theme&#39;s templates. This way you can override any theme&#39;s template.</p><ul><li><p><code>content_type_name/single.custom_template.html.twig</code></p><p>You can assign a custom template to your page in administration panel. In this case, this template will have the highest priority above all others.</p></li><li><p><code>content_type_name/single_slug-of-your-entity.html.twig</code></p><p>The slug of an entity is created from its title.</p></li><li><p><code>content_type_name/single_214.html.twig</code></p><p>This template will be selected if your entity ID is 214.</p></li><li><p><code>content/single.html.twig</code></p><p>A generic template that all content types fallback to.</p></li></ul><p>In the above examples, <code>content_type_name</code> can be <code>post</code>, <code>page</code>, <code>product</code> or any other content type that you create.</p><h2 id="components" tabindex="-1"><a class="header-anchor" href="#components" aria-hidden="true">#</a> Components</h2><p>A component is a <strong>micro-controller</strong> to which you&#39;ll <strong>delegate the rendering of a region of your page</strong>. It&#39;s similar to including another template in your Twig template, but with <strong>PHP logic</strong> in between.</p><p>This feature is aimed to help developers to write better code by splitting what could be a huge controller into many little controllers who handle one concern at a time.</p><p>You don&#39;t have to use components if you don&#39;t want to.</p>',18),r=(0,o.Uk)("Learn how to create and use a component..."),i=(0,o.uE)('<h2 id="shortcodes" tabindex="-1"><a class="header-anchor" href="#shortcodes" aria-hidden="true">#</a> Shortcodes</h2><p>Also known as BBcodes, shortcodes are widely used in CMS software like WordPress or Drupal.</p><p>While the purpose of a component is purely developer-oriented, the shortcode is purely user-oriented. They are meant to give the opportunity to the end user, who doesn&#39;t know how to code, to customize its website pages with dynamic components represented by a text string.</p><p>As an example, a user could type the following text in the page editor:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>What a great day today in Paris.\n[weather location=&quot;Paris&quot;]\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>The part <code>[weather location=&quot;Paris&quot;]</code> is a shortcode, named <code>weather</code> with one parameter <code>location</code> whose value is <code>Paris</code>. When the page renders, shortcodes are interpreted and obviously not presented to the visitors like this, but rendered with a dedicated template.</p><p>Now what&#39;s interesting in NumberNine is that shortcodes are, just like components, <strong>isolated micro-controllers running as services</strong>.</p><p>What more? Shortcodes are also meant to be page builder elements. Any shortcode you create can be easily integrated to the page builder without having to recompile admin source.</p>',8),s=(0,o.Uk)("Learn how to create and use a shortcode..."),l=(0,o.uE)('<h2 id="areas" tabindex="-1"><a class="header-anchor" href="#areas" aria-hidden="true">#</a> Areas</h2><p>A theme may contain areas. Areas are common to several pages and generally used in templates. They are editable through the page builder and are rendered as text in the database.</p><p>A typical use of areas is the site header, the footer, a blog sidebar, etc.</p><p>To make them editable and dynamic, they accept shortcodes. As an example, a blog sidebar may look like this:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[categories title=&quot;Categories&quot;]\n[recent_posts title=&quot;Recent Posts&quot; count=&quot;10&quot;]\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Obviously, the end-user won&#39;t have to write its sidebar this way, and will directly use the page builder like this:</p><img src="/images/screenshots/blog_sidebar_edition.gif" alt="NumberNine Blog Sidebar Edition Demo">',7),d={render:function(e,t){const a=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.j4)(o.HY,null,[n,(0,o.Wm)("p",null,[(0,o.Wm)(a,{to:"/developers/howto/theming/create-a-component.html"},{default:(0,o.w5)((()=>[r])),_:1})]),i,(0,o.Wm)("p",null,[(0,o.Wm)(a,{to:"/developers/howto/theming/create-a-shortcode.html"},{default:(0,o.w5)((()=>[s])),_:1})]),l],64)}}}}]);