(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/+cc":function(e,t,n){
/*!
 * Fuse.js v3.6.1 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
e.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var r=n(1),i=n(7),s=i.get,c=(i.deepValue,i.isArray),h=function(){function e(t,n){var o=n.location,a=void 0===o?0:o,r=n.distance,i=void 0===r?100:r,c=n.threshold,h=void 0===c?.6:c,l=n.maxPatternLength,u=void 0===l?32:l,d=n.caseSensitive,p=void 0!==d&&d,v=n.tokenSeparator,f=void 0===v?/ +/g:v,g=n.findAllMatches,m=void 0!==g&&g,y=n.minMatchCharLength,b=void 0===y?1:y,k=n.id,x=void 0===k?null:k,w=n.keys,S=void 0===w?[]:w,_=n.shouldSort,M=void 0===_||_,C=n.getFn,I=void 0===C?s:C,P=n.sortFn,L=void 0===P?function(e,t){return e.score-t.score}:P,O=n.tokenize,j=void 0!==O&&O,A=n.matchAllTokens,T=void 0!==A&&A,E=n.includeMatches,F=void 0!==E&&E,N=n.includeScore,R=void 0!==N&&N,z=n.verbose,D=void 0!==z&&z;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:a,distance:i,threshold:h,maxPatternLength:u,isCaseSensitive:p,tokenSeparator:f,findAllMatches:m,minMatchCharLength:b,id:x,keys:S,includeMatches:F,includeScore:R,shouldSort:M,getFn:I,sortFn:L,verbose:D,tokenize:j,matchAllTokens:T},this.setCollection(t),this._processKeys(S)}var t,n;return t=e,(n=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"_processKeys",value:function(e){if(this._keyWeights={},this._keyNames=[],e.length&&"string"==typeof e[0])for(var t=0,n=e.length;t<n;t+=1){var o=e[t];this._keyWeights[o]=1,this._keyNames.push(o)}else{for(var a=null,r=null,i=0,s=0,c=e.length;s<c;s+=1){var h=e[s];if(!h.hasOwnProperty("name"))throw new Error('Missing "name" property in key object');var l=h.name;if(this._keyNames.push(l),!h.hasOwnProperty("weight"))throw new Error('Missing "weight" property in key object');var u=h.weight;if(u<0||u>1)throw new Error('"weight" property in key must bein the range of [0, 1)');r=null==r?u:Math.max(r,u),a=null==a?u:Math.min(a,u),this._keyWeights[l]=u,i+=u}if(i>1)throw new Error("Total of weights cannot exceed 1")}}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var n=this._prepareSearchers(e),o=n.tokenSearchers,a=n.fullSearcher,r=this._search(o,a);return this._computeScore(r),this.options.shouldSort&&this._sort(r),t.limit&&"number"==typeof t.limit&&(r=r.slice(0,t.limit)),this._format(r)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var n=e.split(this.options.tokenSeparator),o=0,a=n.length;o<a;o+=1)t.push(new r(n[o],this.options));return{tokenSearchers:t,fullSearcher:new r(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=this.list,o={},a=[];if("string"==typeof n[0]){for(var r=0,i=n.length;r<i;r+=1)this._analyze({key:"",value:n[r],record:r,index:r},{resultMap:o,results:a,tokenSearchers:e,fullSearcher:t});return a}for(var s=0,c=n.length;s<c;s+=1)for(var h=n[s],l=0,u=this._keyNames.length;l<u;l+=1){var d=this._keyNames[l];this._analyze({key:d,value:this.options.getFn(h,d),record:h,index:s},{resultMap:o,results:a,tokenSearchers:e,fullSearcher:t})}return a}},{key:"_analyze",value:function(e,t){var n=this,o=e.key,a=e.arrayIndex,r=void 0===a?-1:a,i=e.value,s=e.record,h=e.index,l=t.tokenSearchers,u=void 0===l?[]:l,d=t.fullSearcher,p=t.resultMap,v=void 0===p?{}:p,f=t.results,g=void 0===f?[]:f;!function e(t,a,r,i){if(null!=a)if("string"==typeof a){var s=!1,h=-1,l=0;n._log("\nKey: ".concat(""===o?"--":o));var p=d.search(a);if(n._log('Full text: "'.concat(a,'", score: ').concat(p.score)),n.options.tokenize){for(var f=a.split(n.options.tokenSeparator),m=f.length,y=[],b=0,k=u.length;b<k;b+=1){var x=u[b];n._log('\nPattern: "'.concat(x.pattern,'"'));for(var w=!1,S=0;S<m;S+=1){var _=f[S],M=x.search(_),C={};M.isMatch?(C[_]=M.score,s=!0,w=!0,y.push(M.score)):(C[_]=1,n.options.matchAllTokens||y.push(1)),n._log('Token: "'.concat(_,'", score: ').concat(C[_]))}w&&(l+=1)}h=y[0];for(var I=y.length,P=1;P<I;P+=1)h+=y[P];h/=I,n._log("Token score average:",h)}var L=p.score;h>-1&&(L=(L+h)/2),n._log("Score average:",L);var O=!n.options.tokenize||!n.options.matchAllTokens||l>=u.length;if(n._log("\nCheck Matches: ".concat(O)),(s||p.isMatch)&&O){var j={key:o,arrayIndex:t,value:a,score:L};n.options.includeMatches&&(j.matchedIndices=p.matchedIndices);var A=v[i];A?A.output.push(j):(v[i]={item:r,output:[j]},g.push(v[i]))}}else if(c(a))for(var T=0,E=a.length;T<E;T+=1)e(T,a[T],r,i)}(r,i,s,h)}},{key:"_computeScore",value:function(e){this._log("\n\nComputing score:\n");for(var t=this._keyWeights,n=!!Object.keys(t).length,o=0,a=e.length;o<a;o+=1){for(var r=e[o],i=r.output,s=i.length,c=1,h=0;h<s;h+=1){var l=i[h],u=l.key,d=n?t[u]:1,p=0===l.score&&t&&t[u]>0?Number.EPSILON:l.score;c*=Math.pow(p,d)}r.score=c,this._log(r)}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var n=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,(function(e,t){if("object"===o(t)&&null!==t){if(-1!==n.indexOf(t))return;n.push(t)}return t}),2)),n=null}var a=[];this.options.includeMatches&&a.push((function(e,t){var n=e.output;t.matches=[];for(var o=0,a=n.length;o<a;o+=1){var r=n[o];if(0!==r.matchedIndices.length){var i={indices:r.matchedIndices,value:r.value};r.key&&(i.key=r.key),r.hasOwnProperty("arrayIndex")&&r.arrayIndex>-1&&(i.arrayIndex=r.arrayIndex),t.matches.push(i)}}})),this.options.includeScore&&a.push((function(e,t){t.score=e.score}));for(var r=0,i=e.length;r<i;r+=1){var s=e[r];if(this.options.id&&(s.item=this.options.getFn(s.item,this.options.id)[0]),a.length){for(var c={item:s.item},h=0,l=a.length;h<l;h+=1)a[h](s,c);t.push(c)}else t.push(s.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}])&&a(t.prototype,n),e}();e.exports=h},function(e,t,n){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var a=n(2),r=n(3),i=n(6),s=function(){function e(t,n){var o=n.location,a=void 0===o?0:o,r=n.distance,s=void 0===r?100:r,c=n.threshold,h=void 0===c?.6:c,l=n.maxPatternLength,u=void 0===l?32:l,d=n.isCaseSensitive,p=void 0!==d&&d,v=n.tokenSeparator,f=void 0===v?/ +/g:v,g=n.findAllMatches,m=void 0!==g&&g,y=n.minMatchCharLength,b=void 0===y?1:y,k=n.includeMatches,x=void 0!==k&&k;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:a,distance:s,threshold:h,maxPatternLength:u,isCaseSensitive:p,tokenSeparator:f,findAllMatches:m,includeMatches:x,minMatchCharLength:b},this.pattern=p?t:t.toLowerCase(),this.pattern.length<=u&&(this.patternAlphabet=i(this.pattern))}var t,n;return t=e,(n=[{key:"search",value:function(e){var t=this.options,n=t.isCaseSensitive,o=t.includeMatches;if(n||(e=e.toLowerCase()),this.pattern===e){var i={isMatch:!0,score:0};return o&&(i.matchedIndices=[[0,e.length-1]]),i}var s=this.options,c=s.maxPatternLength,h=s.tokenSeparator;if(this.pattern.length>c)return a(e,this.pattern,h);var l=this.options,u=l.location,d=l.distance,p=l.threshold,v=l.findAllMatches,f=l.minMatchCharLength;return r(e,this.pattern,this.patternAlphabet,{location:u,distance:d,threshold:p,findAllMatches:v,minMatchCharLength:f,includeMatches:o})}}])&&o(t.prototype,n),e}();e.exports=s},function(e,t){var n=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,a=new RegExp(t.replace(n,"\\$&").replace(o,"|")),r=e.match(a),i=!!r,s=[];if(i)for(var c=0,h=r.length;c<h;c+=1){var l=r[c];s.push([e.indexOf(l),l.length-1])}return{score:i?.5:1,isMatch:i,matchedIndices:s}}},function(e,t,n){var o=n(4),a=n(5);e.exports=function(e,t,n,r){for(var i=r.location,s=void 0===i?0:i,c=r.distance,h=void 0===c?100:c,l=r.threshold,u=void 0===l?.6:l,d=r.findAllMatches,p=void 0!==d&&d,v=r.minMatchCharLength,f=void 0===v?1:v,g=r.includeMatches,m=void 0!==g&&g,y=s,b=e.length,k=u,x=e.indexOf(t,y),w=t.length,S=[],_=0;_<b;_+=1)S[_]=0;if(-1!==x){var M=o(t,{errors:0,currentLocation:x,expectedLocation:y,distance:h});if(k=Math.min(M,k),-1!==(x=e.lastIndexOf(t,y+w))){var C=o(t,{errors:0,currentLocation:x,expectedLocation:y,distance:h});k=Math.min(C,k)}}x=-1;for(var I=[],P=1,L=w+b,O=1<<(w<=31?w-1:30),j=0;j<w;j+=1){for(var A=0,T=L;A<T;)o(t,{errors:j,currentLocation:y+T,expectedLocation:y,distance:h})<=k?A=T:L=T,T=Math.floor((L-A)/2+A);L=T;var E=Math.max(1,y-T+1),F=p?b:Math.min(y+T,b)+w,N=Array(F+2);N[F+1]=(1<<j)-1;for(var R=F;R>=E;R-=1){var z=R-1,D=n[e.charAt(z)];if(D&&(S[z]=1),N[R]=(N[R+1]<<1|1)&D,0!==j&&(N[R]|=(I[R+1]|I[R])<<1|1|I[R+1]),N[R]&O&&(P=o(t,{errors:j,currentLocation:z,expectedLocation:y,distance:h}))<=k){if(k=P,(x=z)<=y)break;E=Math.max(1,2*y-x)}}if(o(t,{errors:j+1,currentLocation:y,expectedLocation:y,distance:h})>k)break;I=N}var U={isMatch:x>=0,score:0===P?.001:P};return m&&(U.matchedIndices=a(S,f)),U}},function(e,t){e.exports=function(e,t){var n=t.errors,o=void 0===n?0:n,a=t.currentLocation,r=void 0===a?0:a,i=t.expectedLocation,s=void 0===i?0:i,c=t.distance,h=void 0===c?100:c,l=o/e.length,u=Math.abs(s-r);return h?l+u/h:u?1:l}},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],o=-1,a=-1,r=0,i=e.length;r<i;r+=1){var s=e[r];s&&-1===o?o=r:s||-1===o||((a=r-1)-o+1>=t&&n.push([o,a]),o=-1)}return e[r-1]&&r-o>=t&&n.push([o,r-1]),n}},function(e,t){e.exports=function(e){for(var t={},n=e.length,o=0;o<n;o+=1)t[e.charAt(o)]=0;for(var a=0;a<n;a+=1)t[e.charAt(a)]|=1<<n-a-1;return t}},function(e,t){var n=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)},o=function(e){return null==e?"":function(e){if("string"==typeof e)return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(e)},a=function(e){return"string"==typeof e},r=function(e){return"number"==typeof e};e.exports={get:function(e,t){var i=[];return function e(t,s){if(s){var c=s.indexOf("."),h=s,l=null;-1!==c&&(h=s.slice(0,c),l=s.slice(c+1));var u=t[h];if(null!=u)if(l||!a(u)&&!r(u))if(n(u))for(var d=0,p=u.length;d<p;d+=1)e(u[d],l);else l&&e(u,l);else i.push(o(u))}else i.push(t)}(e,t),i},isArray:n,isString:a,isNum:r,toString:o}}])},GKVU:function(e,t,n){"use strict";var o=n("I+eb"),a=n("hXpO");o({target:"String",proto:!0,forced:n("rwPt")("anchor")},{anchor:function(e){return a(this,"a","name",e)}})},wQbG:function(e,t,n){"use strict";n.r(t);n("QWBl"),n("2B1R"),n("+2oP"),n("rB9j"),n("hByQ"),n("GKVU"),n("FZtP");var o=n("VTBJ"),a=n("/+cc"),r=n.n(a),i=n("CjXH"),s={components:{ChevronRightIcon:i.d,SearchIcon:i.l},data:function(){return{query:"",focusIndex:-1,focused:!1}},computed:{results:function(){return new r.a(this.headings,{keys:["value"],threshold:.25}).search(this.query).slice(0,15)},headings:function(){var e=[];return this.$static.allMarkdownPage.edges.map((function(e){return e.node})).forEach((function(t){t.headings.forEach((function(n){e.push(Object(o.a)(Object(o.a)({},n),{},{path:t.path,title:t.title}))}))})),e},showResult:function(){return this.focused&&this.query.length>0}},methods:{increment:function(){this.focusIndex<this.results.length-1&&this.focusIndex++},decrement:function(){this.focusIndex>=0&&this.focusIndex--},go:function(){var e;0!==this.results.length&&(e=-1===this.focusIndex?this.results[0]:this.results[this.focusIndex],this.$router.push(e.path+e.anchor),this.$refs.input.blur(),this.query="")}}},c=n("KHd+"),h=n("Kw5r"),l=h.a.config.optionMergeStrategies.computed,u={allMarkdownPage:{edges:[{node:{id:"04073e1662d5ec3669edf750f9c3ec36",path:"/docs/howto/theming/create-a-shortcode/",title:"Create a shortcode",headings:[{depth:1,value:"Create a shortcode",anchor:"#create-a-shortcode"},{depth:2,value:"Configuration",anchor:"#configuration"},{depth:2,value:"Using CLI",anchor:"#using-cli"},{depth:2,value:"File structure",anchor:"#file-structure"},{depth:2,value:"Render a shortcode from Twig",anchor:"#render-a-shortcode-from-twig"},{depth:2,value:"The shortcode class",anchor:"#the-shortcode-class"},{depth:3,value:"Overview",anchor:"#overview"},{depth:3,value:"Shortcode annotation",anchor:"#shortcode-annotation"},{depth:3,value:"Configure parameters",anchor:"#configure-parameters"},{depth:3,value:"Send parameters to the Twig template",anchor:"#send-parameters-to-the-twig-template"},{depth:3,value:"Twig template",anchor:"#twig-template"},{depth:2,value:"Editable shortcodes",anchor:"#editable-shortcodes"},{depth:3,value:"Page builder demonstration",anchor:"#page-builder-demonstration"},{depth:3,value:"Considerations",anchor:"#considerations"},{depth:3,value:"Vue template",anchor:"#vue-template"}]}},{node:{id:"7358af94cc9e672b4665f38772a9f72d",path:"/docs/howto/theming/create-a-component/",title:"Create a component",headings:[{depth:1,value:"Create a component",anchor:"#create-a-component"},{depth:2,value:"Configuration",anchor:"#configuration"},{depth:2,value:"Using CLI",anchor:"#using-cli"},{depth:2,value:"File structure",anchor:"#file-structure"},{depth:2,value:"Render a component from Twig",anchor:"#render-a-component-from-twig"},{depth:2,value:"Inject variables in a component",anchor:"#inject-variables-in-a-component"},{depth:2,value:"Expose variables to the component's template",anchor:"#expose-variables-to-the-components-template"},{depth:2,value:"Injecting a service in your component",anchor:"#injecting-a-service-in-your-component"}]}},{node:{id:"c755a9cb613b0e3c51ec137d065a236d",path:"/docs/architecture/user-management/",title:"User management",headings:[{depth:1,value:"User management",anchor:"#user-management"},{depth:2,value:"Roles and capabilities",anchor:"#roles-and-capabilities"},{depth:2,value:"Grant access to a page using permission",anchor:"#grant-access-to-a-page-using-permission"},{depth:2,value:"Add a custom capability",anchor:"#add-a-custom-capability"}]}},{node:{id:"89e169571802d095a842a146d9e8343e",path:"/docs/architecture/theming/",title:"Theming",headings:[{depth:1,value:"Theming",anchor:"#theming"},{depth:2,value:"ChapterOne",anchor:"#chapterone"},{depth:2,value:"Page templates",anchor:"#page-templates"},{depth:2,value:"Components",anchor:"#components"},{depth:2,value:"Shortcodes",anchor:"#shortcodes"},{depth:2,value:"Page builder",anchor:"#page-builder"}]}},{node:{id:"be141467e58f42fd0e5596bd5b66a2be",path:"/docs/architecture/symfony/",title:"Symfony 5.1+",headings:[{depth:1,value:"Symfony 5.1+",anchor:"#symfony-51"},{depth:2,value:"Vanilla project",anchor:"#vanilla-project"},{depth:2,value:"Event dispatcher",anchor:"#event-dispatcher"},{depth:2,value:"Micro-controllers",anchor:"#micro-controllers"},{depth:2,value:"Custom routes",anchor:"#custom-routes"},{depth:2,value:"Easy upgrades",anchor:"#easy-upgrades"}]}},{node:{id:"c78cc5feccf02786f3ccf5c327a9fb28",path:"/docs/screenshots/",title:"Screenshots",headings:[{depth:1,value:"Screenshots",anchor:"#screenshots"},{depth:2,value:"Frontend",anchor:"#frontend"},{depth:3,value:"Blog homepage",anchor:"#blog-homepage"},{depth:3,value:"Single page",anchor:"#single-page"},{depth:3,value:"Single post",anchor:"#single-post"},{depth:2,value:"Admin",anchor:"#admin"},{depth:3,value:"Posts list",anchor:"#posts-list"},{depth:3,value:"Post classic editor",anchor:"#post-classic-editor"},{depth:3,value:"Post revisions",anchor:"#post-revisions"},{depth:3,value:"Media library browsing",anchor:"#media-library-browsing"},{depth:3,value:"Media library upload",anchor:"#media-library-upload"},{depth:3,value:"Menus edition",anchor:"#menus-edition"},{depth:3,value:"Taxonomy edition",anchor:"#taxonomy-edition"},{depth:3,value:"Page builder",anchor:"#page-builder"},{depth:3,value:"User roles",anchor:"#user-roles"},{depth:3,value:"Permalinks edition",anchor:"#permalinks-edition"}]}},{node:{id:"4fe3023f9083c2e61647f2b035427b32",path:"/docs/installation/",title:"Installation",headings:[{depth:1,value:"Installation",anchor:"#installation"},{depth:2,value:"Docker one-liner installation (recommended)",anchor:"#docker-one-liner-installation-recommended"},{depth:2,value:"Windows / Linux / WSL / macOS manual installation",anchor:"#windows--linux--wsl--macos-manual-installation"},{depth:3,value:"Create the project",anchor:"#create-the-project"},{depth:3,value:"Launch installation",anchor:"#launch-installation"},{depth:3,value:"Run the server",anchor:"#run-the-server"}]}},{node:{id:"95d82bcf962b71caa6da2dbe0cf63701",path:"/docs/",title:"Introduction",headings:[{depth:1,value:"Introduction",anchor:"#introduction"},{depth:2,value:"Get started",anchor:"#get-started"},{depth:2,value:"Why another CMS",anchor:"#why-another-cms"},{depth:2,value:"It's Symfony after all",anchor:"#its-symfony-after-all"},{depth:2,value:"No configuration",anchor:"#no-configuration"},{depth:2,value:"User management",anchor:"#user-management"},{depth:2,value:"Shortcodes as services",anchor:"#shortcodes-as-services"},{depth:2,value:"Block presets",anchor:"#block-presets"},{depth:2,value:"Theme overriding",anchor:"#theme-overriding"},{depth:2,value:"Event-driven lifecycle",anchor:"#event-driven-lifecycle"},{depth:2,value:"Publish your own business entities",anchor:"#publish-your-own-business-entities"},{depth:2,value:"Page builder",anchor:"#page-builder"}]}},{node:{id:"ff1ab4d6faa621e44335747bb4861b23",path:"/docs/first-steps/",title:"First steps",headings:[{depth:1,value:"First steps",anchor:"#first-steps"},{depth:2,value:"Create an admin user",anchor:"#create-an-admin-user"},{depth:2,value:"Connect to the admin dashboard",anchor:"#connect-to-the-admin-dashboard"}]}},{node:{id:"eb36ed89481265b836e4ec9c6f43dd0a",path:"/docs/docker/",title:"Docker services",headings:[{depth:1,value:"Docker services",anchor:"#docker-services"},{depth:2,value:"PHP",anchor:"#php"},{depth:2,value:"Nginx",anchor:"#nginx"},{depth:2,value:"MySQL",anchor:"#mysql"},{depth:2,value:"Blackfire",anchor:"#blackfire"},{depth:2,value:"Redis",anchor:"#redis"},{depth:2,value:"Maildev",anchor:"#maildev"}]}}]}},d=function(e){var t=e.options;t.__staticData?t.__staticData.data=u:(t.__staticData=h.a.observable({data:u}),t.computed=l({$static:function(){return t.__staticData.data}},t.computed))},p=Object(c.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"relative",on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.increment(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.decrement(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.go(t)}]}},[n("label",{staticClass:"relative block"},[n("span",{staticClass:"sr-only"},[e._v("Search Documentation")]),n("div",{staticClass:"absolute inset-y-0 left-0 flex items-center justify-center px-3 py-2 opacity-50"},[n("SearchIcon",{staticClass:"text-ui-typo",attrs:{size:"1.25x"}})],1),n("input",{ref:"input",staticClass:"block w-full py-2 pl-10 pr-4 border-2 rounded-lg bg-ui-sidebar border-ui-sidebar focus:bg-ui-background",class:{"rounded-b-none":e.showResult},attrs:{type:"search",placeholder:"Search Documentation..."},domProps:{value:e.query},on:{focus:function(t){e.focused=!0},blur:function(t){e.focused=!1},input:function(t){e.focusIndex=-1,e.query=t.target.value},change:function(t){e.query=t.target.value}}})]),e.showResult?n("div",{staticClass:"fixed inset-x-0 z-50 overflow-y-auto border-2 border-t-0 rounded-lg rounded-t-none shadow-lg results bg-ui-background bottom:0 sm:bottom-auto sm:absolute border-ui-sidebar",staticStyle:{"max-height":"calc(100vh - 120px)"}},[n("ul",{staticClass:"px-4 py-2 m-0"},[0===e.results.length?n("li",{staticClass:"px-2"},[e._v("\n        No results for "),n("span",{staticClass:"font-bold"},[e._v(e._s(e.query))]),e._v(".\n      ")]):e._l(e.results,(function(t,o){return n("li",{key:t.path+t.anchor,staticClass:"border-ui-sidebar",class:{"border-b":o+1!==e.results.length},on:{mouseenter:function(t){e.focusIndex=o},mousedown:e.go}},[n("g-link",{staticClass:"block p-2 -mx-2 text-base font-bold rounded-lg",class:{"bg-ui-sidebar text-ui-primary":e.focusIndex===o},attrs:{to:t.path+t.anchor}},[t.value===t.title?n("span",[e._v("\n            "+e._s(t.value)+"\n          ")]):n("span",{staticClass:"flex items-center"},[e._v("\n            "+e._s(t.title)+"\n            "),n("ChevronRightIcon",{staticClass:"mx-1",attrs:{size:"1x"}}),n("span",{staticClass:"font-normal opacity-75"},[e._v(e._s(t.value))])],1)])],1)}))],2)]):e._e()])}),[],!1,null,null,null);"function"==typeof d&&d(p);t.default=p.exports}}]);