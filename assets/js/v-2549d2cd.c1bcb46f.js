(self.webpackChunknumberninecms_docs=self.webpackChunknumberninecms_docs||[]).push([[163],{5809:(e,t,n)=>{"use strict";n.r(t),n.d(t,{data:()=>o});const o={key:"v-2549d2cd",path:"/developers/",title:"Introduction",lang:"en-US",frontmatter:{next:"/developers/who-is-it-for.md"},excerpt:"",headers:[{level:2,title:"Get started",slug:"get-started",children:[]},{level:2,title:"Why another CMS",slug:"why-another-cms",children:[]},{level:2,title:"It's Symfony after all",slug:"it-s-symfony-after-all",children:[]},{level:2,title:"No configuration",slug:"no-configuration",children:[]},{level:2,title:"User management",slug:"user-management",children:[]},{level:2,title:"Shortcodes and components as services",slug:"shortcodes-and-components-as-services",children:[]},{level:2,title:"Block presets",slug:"block-presets",children:[]},{level:2,title:"Theme overriding",slug:"theme-overriding",children:[]},{level:2,title:"Event-driven lifecycle",slug:"event-driven-lifecycle",children:[]},{level:2,title:"Publish your own business entities",slug:"publish-your-own-business-entities",children:[]},{level:2,title:"Page builder",slug:"page-builder",children:[]}],filePathRelative:"developers/index.md",git:{updatedTime:1626751442e3}}},5206:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>D});var o=n(6252);const r=(0,o.Wm)("h1",{id:"introduction",tabindex:"-1"},[(0,o.Wm)("a",{class:"header-anchor",href:"#introduction","aria-hidden":"true"},"#"),(0,o.Uk)(" Introduction")],-1),i=(0,o.Wm)("p",null,[(0,o.Uk)("NumberNine is a full-featured CMS built with Symfony. It fills the gaps with the Symfony ecosystem which lacks "),(0,o.Wm)("strong",null,"super fast development"),(0,o.Uk)(" for small to medium scale projects.")],-1),a=(0,o.Wm)("p",null,"Although small projects using NumberNine would need little to no code, you will need to code if want to extend it for your specific business needs.",-1),s=(0,o.Uk)("If you don't know how to use Symfony, it's recommended that you "),l={href:"https://symfony.com/doc/current/index.html",target:"_blank",rel:"noopener noreferrer"},u=(0,o.Uk)("learn the framework"),d=(0,o.Uk)(" if you want a better development experience with NumberNine."),c=(0,o.Wm)("p",null,"Otherwise, you should be comfortable at least with knowing the following programming concepts:",-1),h=(0,o.Wm)("ul",null,[(0,o.Wm)("li",null,"MVC"),(0,o.Wm)("li",null,"Routing"),(0,o.Wm)("li",null,"Dependency injection"),(0,o.Wm)("li",null,"Event-driven programming"),(0,o.Wm)("li",null,"ORM")],-1),m=(0,o.Wm)("h2",{id:"get-started",tabindex:"-1"},[(0,o.Wm)("a",{class:"header-anchor",href:"#get-started","aria-hidden":"true"},"#"),(0,o.Uk)(" Get started")],-1),y=(0,o.Uk)("Please see "),p=(0,o.Uk)("installation"),f=(0,o.Uk)(" page for instructions on creating a new project or integrating NumberNine to an existing project."),g=(0,o.uE)('<h2 id="why-another-cms" tabindex="-1"><a class="header-anchor" href="#why-another-cms" aria-hidden="true">#</a> Why another CMS</h2><p>There seems to be no other free CMS that does what NumberNine does the way it does it.</p><p>Some forget the end-users and simple things can become a nightmare to accomplish. Some forget the developers and build a whole new framework that needs to be learnt. Some aren&#39;t <strong>free, open-source and self-hosted</strong>.</p><p>As end-users, we don&#39;t want to configure things with YAML, XML or any kind of configuration file. We want <strong>plug-and-play</strong> software. NumberNine is just that. Ready to use, with the best technology in its core.</p><p>As developers, we don&#39;t want to learn a specific framework just to understand how to code a plugin, a theme or whatever. We know <strong>Symfony</strong>, that&#39;s all we need. NumberNine is nothing more than that.</p><h2 id="it-s-symfony-after-all" tabindex="-1"><a class="header-anchor" href="#it-s-symfony-after-all" aria-hidden="true">#</a> It&#39;s Symfony after all</h2><p>NumberNine comes in the form of a set of Symfony bundles and libraries.</p><p>Although it takes control of some key aspects of the framework such as the security layer, your directory structure don&#39;t include code that isn&#39;t yours. NumberNine gives you an empty <code>/src</code> directory for you to work in.</p><p>You can still use Symfony the way you&#39;re used too. If you need a custom route, custom controller, whatever you want, take over and let it be Symfony.</p>',9),b=(0,o.Uk)("Learn more about how NumberNine complements Symfony..."),w=(0,o.Wm)("h2",{id:"no-configuration",tabindex:"-1"},[(0,o.Wm)("a",{class:"header-anchor",href:"#no-configuration","aria-hidden":"true"},"#"),(0,o.Uk)(" No configuration")],-1),v=(0,o.Wm)("p",null,"Using NumberNine's installer, you won't have anything to configure. No YAML or PHP file to edit. Just launch your website, and you're good to go.",-1),W=(0,o.Wm)("p",null,"What's more? NumberNine don't mess with Symfony configuration files. It automatically configures everything for you. If you need to change a setting, override it in your app YAML files, it's Symfony after all!",-1),k=(0,o.Wm)("h2",{id:"user-management",tabindex:"-1"},[(0,o.Wm)("a",{class:"header-anchor",href:"#user-management","aria-hidden":"true"},"#"),(0,o.Uk)(" User management")],-1),N=(0,o.Wm)("p",null,"Like any CMS on the market, NumberNine features an extended user management system. It natively handles login, registration, roles and capabilities.",-1),U=(0,o.Uk)("Learn more about user management..."),x=(0,o.Wm)("h2",{id:"shortcodes-and-components-as-services",tabindex:"-1"},[(0,o.Wm)("a",{class:"header-anchor",href:"#shortcodes-and-components-as-services","aria-hidden":"true"},"#"),(0,o.Uk)(" Shortcodes and components as services")],-1),S=(0,o.Wm)("p",null,"Extend your theme with business logic by creating new shortcodes.",-1),I=(0,o.Wm)("p",null,[(0,o.Uk)("In NumberNine, shortcodes are represented by text in the content of the page by this syntax: "),(0,o.Wm)("code",null,"[my_custom_shortcode]"),(0,o.Uk)(". In your code, it's just a service class, where you can inject any dependency like you're used to.")],-1),L=(0,o.Uk)("Learn more about shortcodes and components..."),j=(0,o.Wm)("h2",{id:"block-presets",tabindex:"-1"},[(0,o.Wm)("a",{class:"header-anchor",href:"#block-presets","aria-hidden":"true"},"#"),(0,o.Uk)(" Block presets")],-1),_=(0,o.Wm)("p",null,'NumberNine uses a "everything is a shortcode" architecture, or more exactly "everything can be a shortcode". In addition, you can create preconfigured templates of small parts of your website to reuse anywhere. For instance, you can create several preconfigured headers from which your client can choose.',-1),M=(0,o.Wm)("h2",{id:"theme-overriding",tabindex:"-1"},[(0,o.Wm)("a",{class:"header-anchor",href:"#theme-overriding","aria-hidden":"true"},"#"),(0,o.Uk)(" Theme overriding")],-1),A=(0,o.Wm)("p",null,[(0,o.Uk)("Any part of a theme is overridable in your "),(0,o.Wm)("code",null,"/src"),(0,o.Uk)(" directory, be it twig templates or shortcodes classes. This allows you to create very quickly child themes to give a unique feel to your project.")],-1),C=(0,o.Uk)("Learn more about theming..."),P=(0,o.Wm)("h2",{id:"event-driven-lifecycle",tabindex:"-1"},[(0,o.Wm)("a",{class:"header-anchor",href:"#event-driven-lifecycle","aria-hidden":"true"},"#"),(0,o.Uk)(" Event-driven lifecycle")],-1),E=(0,o.Wm)("p",null,[(0,o.Uk)("Thanks to Symfony's "),(0,o.Wm)("code",null,"EventDispatcher"),(0,o.Uk)(", NumberNine is a piece of cake to extend. Intercept events and change their contents to adapt the software to your business needs.")],-1),T=(0,o.Wm)("h2",{id:"publish-your-own-business-entities",tabindex:"-1"},[(0,o.Wm)("a",{class:"header-anchor",href:"#publish-your-own-business-entities","aria-hidden":"true"},"#"),(0,o.Uk)(" Publish your own business entities")],-1),R=(0,o.Wm)("p",null,"While creating your business entities, keep in mind you can extend NumberNine built-in publishing entities. Any entity that need to be displayed as its own can take advantage of NumberNine features, including its awesome page builder.",-1),Y=(0,o.Uk)("Learn more about content types..."),O=(0,o.Wm)("h2",{id:"page-builder",tabindex:"-1"},[(0,o.Wm)("a",{class:"header-anchor",href:"#page-builder","aria-hidden":"true"},"#"),(0,o.Uk)(" Page builder")],-1),q=(0,o.Wm)("p",null,"With end-users in mind, NumberNine provides a page-builder which is easily extensible. Any custom shortcode you build will be injected into the page builder.",-1),B=(0,o.Uk)("Learn more about creating shortcodes..."),D={render:function(e,t){const n=(0,o.up)("OutboundLink"),D=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.j4)(o.HY,null,[r,i,a,(0,o.Wm)("p",null,[s,(0,o.Wm)("a",l,[u,(0,o.Wm)(n)]),d]),c,h,m,(0,o.Wm)("p",null,[y,(0,o.Wm)(D,{to:"/developers/installation.html"},{default:(0,o.w5)((()=>[p])),_:1}),f]),g,(0,o.Wm)("p",null,[(0,o.Wm)(D,{to:"/developers/architecture/symfony.html"},{default:(0,o.w5)((()=>[b])),_:1})]),w,v,W,k,N,(0,o.Wm)("p",null,[(0,o.Wm)(D,{to:"/developers/architecture/user-management.html"},{default:(0,o.w5)((()=>[U])),_:1})]),x,S,I,(0,o.Wm)("p",null,[(0,o.Wm)(D,{to:"/developers/architecture/theming.html#components"},{default:(0,o.w5)((()=>[L])),_:1})]),j,_,M,A,(0,o.Wm)("p",null,[(0,o.Wm)(D,{to:"/developers/architecture/theming.html"},{default:(0,o.w5)((()=>[C])),_:1})]),P,E,T,R,(0,o.Wm)("p",null,[(0,o.Wm)(D,{to:"/developers/architecture/content-types.html"},{default:(0,o.w5)((()=>[Y])),_:1})]),O,q,(0,o.Wm)("p",null,[(0,o.Wm)(D,{to:"/developers/howto/theming/create-a-shortcode.html"},{default:(0,o.w5)((()=>[B])),_:1})])],64)}}}}]);