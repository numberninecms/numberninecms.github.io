"use strict";(self.webpackChunknumberninecms_docs=self.webpackChunknumberninecms_docs||[]).push([[153],{666:(e,t,n)=>{n.r(t),n.d(t,{data:()=>a});const a={key:"v-a54aa8ba",path:"/developers/architecture/content-types.html",title:"Content types",lang:"en-US",frontmatter:{prev:"/developers/architecture/theming.md",next:"/developers/howto/theming/create-a-component.md"},excerpt:"",headers:[{level:2,title:"Introduction",slug:"introduction",children:[]},{level:2,title:"Architecture",slug:"architecture",children:[]},{level:2,title:"Built-in content types",slug:"built-in-content-types",children:[{level:3,title:"Pages",slug:"pages",children:[]},{level:3,title:"Posts",slug:"posts",children:[]},{level:3,title:"Blocks",slug:"blocks",children:[]},{level:3,title:"Media files",slug:"media-files",children:[]}]},{level:2,title:"Taxonomies",slug:"taxonomies",children:[]},{level:2,title:"In the administration panel",slug:"in-the-administration-panel",children:[]},{level:2,title:"Add more content types",slug:"add-more-content-types",children:[]}],filePathRelative:"developers/architecture/content-types.md",git:{updatedTime:1627745402e3}}},5929:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var a=n(6252);const i=(0,a.uE)('<h1 id="content-types" tabindex="-1"><a class="header-anchor" href="#content-types" aria-hidden="true">#</a> Content types</h1><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Most CMS give the opportunity to the developer to create content types as a way to extend the editing possibilities.</p><p>A <strong>content entity</strong> is a Doctrine entity class, to which is assigned an URL, and therefore a template.</p><p>A <strong>content type</strong> is describing the kind of template and admin interface that will be used. It&#39;s not necessarily a separate entity class.</p><p>As an example, <strong><code>page</code></strong> and <strong><code>post</code></strong> are two <strong>content types</strong>, but both correspond to the same <code>NumberNine\\Entity\\Post</code> entity. Their small differences don&#39;t require to add more columns in the database to handle specific use cases. Therefore they are <strong>the same content entity</strong>.</p><h2 id="architecture" tabindex="-1"><a class="header-anchor" href="#architecture" aria-hidden="true">#</a> Architecture</h2>',7),o=(0,a.Uk)("Unlike traditional CMS software, "),s=(0,a.Uk)("NumberNine isn't built on a "),r={href:"https://en.wikipedia.org/wiki/Entity%E2%80%93attribute%E2%80%93value_model",target:"_blank",rel:"noopener noreferrer"},d=(0,a.Uk)("EAV architecture"),l=(0,a.Uk)(". While EAV is great for extensibility, its biggest downside is that you'll quickly grow a huge amount of database requests if not handled correctly."),c=(0,a.uE)('<p>Instead, NumberNine uses a <strong>combination of relational model and JSON fields</strong>, thanks to MySQL new features. This allows to store extra data in any particular entity while keeping the database requests to a minimum level, and a <strong>high performance</strong> output. Also, this <strong>greatly simplifies the querying process</strong> using Doctrine.</p><p>All content entities inherit from <code>NumberNine\\Entity\\ContentEntity</code>.</p><h2 id="built-in-content-types" tabindex="-1"><a class="header-anchor" href="#built-in-content-types" aria-hidden="true">#</a> Built-in content types</h2><p>Let&#39;s dive into the details of built-in content types and how to create new ones.</p><p>NumberNine comes with several built-in content types:</p><ul><li><a href="#pages">Pages</a></li><li><a href="#posts">Posts</a></li><li><a href="#blocks">Blocks</a></li><li><a href="#media-files">Media files</a></li></ul><h3 id="pages" tabindex="-1"><a class="header-anchor" href="#pages" aria-hidden="true">#</a> Pages</h3><p>The content type <code>page</code> is used for the pages that are not part of any timeline. For instance, most websites will have <code>About us</code>, <code>FAQ</code>, <code>Contact</code>, <code>Legal</code>, <code>Privacy</code>, etc. These are pages.</p><p>The default template for page is full width, so doesn&#39;t have a sidebar.</p><p>It doesn&#39;t make sense to have an index page listing all existing pages.</p><p>An object with <code>page</code> content type is based on <code>NumberNine\\Entity\\Post</code> entity.</p><a href="/images/screenshots/frontend_single_page.jpg" target="_blank" title="Frontend single page"> View an example of a page... </a><h3 id="posts" tabindex="-1"><a class="header-anchor" href="#posts" aria-hidden="true">#</a> Posts</h3><p>Unlike <code>page</code>, the content type <code>post</code> is a typical blogging type. It represents a post which is part of a feed. By default, posts are featured in the blog, which is a paginated view of posts archives.</p><p>An object with <code>post</code> content type is based on <code>NumberNine\\Entity\\Post</code> entity.</p><a href="/images/screenshots/frontend_single_post.jpg" target="_blank" title="Frontend single post"> View an example of a post... </a><h3 id="blocks" tabindex="-1"><a class="header-anchor" href="#blocks" aria-hidden="true">#</a> Blocks</h3><p>Blocks are pages without template. They&#39;re not meant to be accessed on their own, but instead they can be included by the user in any other content, like a page or a post, using a shortcode.</p><p>This is very useful when pages share a portion of text, so it can be edited only once.</p><p>An object with <code>block</code> content type is based on <code>NumberNine\\Entity\\Post</code> entity.</p><h3 id="media-files" tabindex="-1"><a class="header-anchor" href="#media-files" aria-hidden="true">#</a> Media files</h3><p>All data uploaded in the media library is transformed into an object with <code>media_file</code> content type.</p><p>An object with <code>media_file</code> content type is based on <code>NumberNine\\Entity\\MediaFile</code> entity, which stores additional columns like the path of the file, the different sizes of the generated thumbnails, EXIF data, etc.</p><h2 id="taxonomies" tabindex="-1"><a class="header-anchor" href="#taxonomies" aria-hidden="true">#</a> Taxonomies</h2><p>To each content type, you can assign one or many taxonomies.</p><p><a href="">Learn more about taxonomies...</a></p><h2 id="in-the-administration-panel" tabindex="-1"><a class="header-anchor" href="#in-the-administration-panel" aria-hidden="true">#</a> In the administration panel</h2><p>You&#39;ll access these content types on the left menu of the administration panel. Media files are handled differently inside the media library.</p><p><img src="/images/screenshots/admin_contententity_index.jpg" alt="Content Entities Index Page"></p><h2 id="add-more-content-types" tabindex="-1"><a class="header-anchor" href="#add-more-content-types" aria-hidden="true">#</a> Add more content types</h2><p>You can also define your own content types with a few lines of code.</p>',31),h=(0,a.Uk)("Learn how to create and use custom content types..."),p={render:function(e,t){const n=(0,a.up)("OutboundLink"),p=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.j4)(a.HY,null,[i,(0,a.Wm)("p",null,[o,(0,a.Wm)("strong",null,[s,(0,a.Wm)("a",r,[d,(0,a.Wm)(n)])]),l]),c,(0,a.Wm)("p",null,[(0,a.Wm)(p,{to:"/developers/howto/content/create-a-content-type.html"},{default:(0,a.w5)((()=>[h])),_:1})])],64)}}}}]);