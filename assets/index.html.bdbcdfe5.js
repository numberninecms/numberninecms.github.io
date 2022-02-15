import{_ as i,r,o as d,c,a as e,b as o,w as s,F as h,d as t,e as l}from"./app.8aa8894e.js";const u={},m=e("h1",{id:"introduction",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#introduction","aria-hidden":"true"},"#"),t(" Introduction")],-1),y=e("p",null,[t("NumberNine is a full-featured CMS built with Symfony. It fills the gaps with the Symfony ecosystem which lacks "),e("strong",null,"super fast development"),t(" for small to medium scale projects.")],-1),p=e("p",null,"Although small projects using NumberNine would need little to no code, you will need to code if want to extend it for your specific business needs.",-1),f=t("If you don't know how to use Symfony, it's recommended that you "),_={href:"https://symfony.com/doc/current/index.html",target:"_blank",rel:"noopener noreferrer"},g=t("learn the framework"),b=t(" if you want a better development experience with NumberNine."),w=e("p",null,"Otherwise, you should be comfortable at least with knowing the following programming concepts:",-1),v=e("ul",null,[e("li",null,"MVC"),e("li",null,"Routing"),e("li",null,"Dependency injection"),e("li",null,"Event-driven programming"),e("li",null,"ORM")],-1),N=e("h2",{id:"get-started",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#get-started","aria-hidden":"true"},"#"),t(" Get started")],-1),k=t("Please see "),x=t("installation"),S=t(" page for instructions on creating a new project."),L=l('<h2 id="why-another-cms" tabindex="-1"><a class="header-anchor" href="#why-another-cms" aria-hidden="true">#</a> Why another CMS</h2><p>There seems to be no other free CMS that does what NumberNine does the way it does it.</p><p>Some forget the end-users and simple things can become a nightmare to accomplish. Some forget the developers and build a whole new framework that needs to be learnt. Some aren&#39;t <strong>free, open-source and self-hosted</strong>.</p><p>As end-users, we don&#39;t want to configure things with YAML, XML or any kind of configuration file. We want <strong>plug-and-play</strong> software. NumberNine is just that. Ready to use, with the best technology in its core.</p><p>As developers, we don&#39;t want to learn a specific framework just to understand how to code a plugin, a theme or whatever. We know <strong>Symfony</strong>, that&#39;s all we need. NumberNine is nothing more than that.</p><h2 id="it-s-symfony-after-all" tabindex="-1"><a class="header-anchor" href="#it-s-symfony-after-all" aria-hidden="true">#</a> It&#39;s Symfony after all</h2><p>NumberNine comes in the form of a set of Symfony bundles and libraries.</p><p>Although it takes control of some key aspects of the framework such as the security layer, your directory structure don&#39;t include code that isn&#39;t yours. NumberNine gives you an empty <code>/src</code> directory for you to work in.</p><p>You can still use Symfony the way you&#39;re used too. If you need a custom route, custom controller, whatever you want, take over and let it be Symfony.</p>',9),I=t("Learn more about how NumberNine complements Symfony..."),j=e("h2",{id:"no-configuration",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#no-configuration","aria-hidden":"true"},"#"),t(" No configuration")],-1),A=e("p",null,"Using NumberNine's installer, you won't have anything to configure. No YAML or PHP file to edit. Just launch your website, and you're good to go.",-1),M=e("p",null,"What's more? NumberNine don't mess with Symfony configuration files. It automatically configures everything for you. If you need to change a setting, override it in your app YAML files, it's Symfony after all!",-1),C=e("h2",{id:"user-management",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#user-management","aria-hidden":"true"},"#"),t(" User management")],-1),E=e("p",null,"Like any CMS on the market, NumberNine features an extended user management system. It natively handles login, registration, roles and capabilities.",-1),W=t("Learn more about user management..."),P=e("h2",{id:"shortcodes-and-components-as-services",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#shortcodes-and-components-as-services","aria-hidden":"true"},"#"),t(" Shortcodes and components as services")],-1),R=e("p",null,"Extend your theme with business logic by creating new shortcodes.",-1),T=e("p",null,[t("In NumberNine, shortcodes are represented by text in the content of the page by this syntax: "),e("code",null,"[my_custom_shortcode]"),t(". In your code, it's just a service class, where you can inject any dependency like you're used to.")],-1),V=t("Learn more about shortcodes and components..."),B=e("h2",{id:"block-presets",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#block-presets","aria-hidden":"true"},"#"),t(" Block presets")],-1),Y=e("p",null,'NumberNine uses a "everything is a shortcode" architecture, or more exactly "everything can be a shortcode". In addition, you can create preconfigured templates of small parts of your website to reuse anywhere. For instance, you can create several preconfigured headers from which your client can choose.',-1),F=e("h2",{id:"theme-overriding",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#theme-overriding","aria-hidden":"true"},"#"),t(" Theme overriding")],-1),q=e("p",null,[t("Any part of a theme is overridable in your "),e("code",null,"/src"),t(" directory, be it twig templates or shortcodes classes. This allows you to create very quickly child themes to give a unique feel to your project.")],-1),D=t("Learn more about theming..."),O=e("h2",{id:"event-driven-lifecycle",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#event-driven-lifecycle","aria-hidden":"true"},"#"),t(" Event-driven lifecycle")],-1),U=e("p",null,[t("Thanks to Symfony's "),e("code",null,"EventDispatcher"),t(", NumberNine is a piece of cake to extend. Intercept events and change their contents to adapt the software to your business needs.")],-1),G=e("h2",{id:"publish-your-own-business-entities",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#publish-your-own-business-entities","aria-hidden":"true"},"#"),t(" Publish your own business entities")],-1),H=e("p",null,"While creating your business entities, keep in mind you can extend NumberNine built-in publishing entities. Any entity that need to be displayed as its own can take advantage of NumberNine features, including its awesome page builder.",-1),J=t("Learn more about content types..."),X=e("h2",{id:"page-builder",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#page-builder","aria-hidden":"true"},"#"),t(" Page builder")],-1),z=e("p",null,"With end-users in mind, NumberNine provides a page-builder which is easily extensible. Any custom shortcode you build will be injected into the page builder.",-1),K=t("Learn more about creating shortcodes...");function Q(Z,$){const a=r("ExternalLinkIcon"),n=r("RouterLink");return d(),c(h,null,[m,y,p,e("p",null,[f,e("a",_,[g,o(a)]),b]),w,v,N,e("p",null,[k,o(n,{to:"/developers/installation.html"},{default:s(()=>[x]),_:1}),S]),L,e("p",null,[o(n,{to:"/developers/architecture/symfony.html"},{default:s(()=>[I]),_:1})]),j,A,M,C,E,e("p",null,[o(n,{to:"/developers/architecture/user-management.html"},{default:s(()=>[W]),_:1})]),P,R,T,e("p",null,[o(n,{to:"/developers/architecture/theming.html#components"},{default:s(()=>[V]),_:1})]),B,Y,F,q,e("p",null,[o(n,{to:"/developers/architecture/theming.html"},{default:s(()=>[D]),_:1})]),O,U,G,H,e("p",null,[o(n,{to:"/developers/architecture/content-types.html"},{default:s(()=>[J]),_:1})]),X,z,e("p",null,[o(n,{to:"/developers/howto/theming/create-a-shortcode.html"},{default:s(()=>[K]),_:1})])],64)}var te=i(u,[["render",Q]]);export{te as default};
