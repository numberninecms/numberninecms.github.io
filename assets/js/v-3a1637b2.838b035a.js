"use strict";(self.webpackChunknumberninecms_docs=self.webpackChunknumberninecms_docs||[]).push([[765],{191:(e,n,a)=>{a.r(n),a.d(n,{data:()=>s});const s={key:"v-3a1637b2",path:"/developers/installation.html",title:"Installation",lang:"en-US",frontmatter:{prev:"/developers/screenshots.md",next:"/developers/first-steps.md"},excerpt:"",headers:[{level:2,title:"Docker one-liner installation (recommended)",slug:"docker-one-liner-installation-recommended",children:[]},{level:2,title:"Windows / Linux / WSL / macOS manual installation",slug:"windows-linux-wsl-macos-manual-installation",children:[{level:3,title:"Create the project",slug:"create-the-project",children:[]},{level:3,title:"Launch installation",slug:"launch-installation",children:[]},{level:3,title:"Run the server",slug:"run-the-server",children:[]}]}],filePathRelative:"developers/installation.md",git:{updatedTime:1627745402e3}}},6498:(e,n,a)=>{a.r(n),a.d(n,{default:()=>Y});var s=a(6252);const r=(0,s.Wm)("h1",{id:"installation",tabindex:"-1"},[(0,s.Wm)("a",{class:"header-anchor",href:"#installation","aria-hidden":"true"},"#"),(0,s.Uk)(" Installation")],-1),l=(0,s.Wm)("h2",{id:"docker-one-liner-installation-recommended",tabindex:"-1"},[(0,s.Wm)("a",{class:"header-anchor",href:"#docker-one-liner-installation-recommended","aria-hidden":"true"},"#"),(0,s.Uk)(" Docker one-liner installation (recommended)")],-1),o=(0,s.Wm)("p",null,"To install NumberNine, you need only Docker to be installed on your host.",-1),t=(0,s.Uk)("You "),i=(0,s.Wm)("strong",null,"don't need",-1),c=(0,s.Uk)(" to be familiar with Docker. Everything is taken care of for you. Just "),p={href:"https://www.docker.com/products/docker-desktop",target:"_blank",rel:"noopener noreferrer"},d=(0,s.Uk)("download and install it"),m=(0,s.Uk)("."),u=(0,s.uE)('<p>To create a new project, simply replace <code>myproject</code> by the name of your project and run:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker run --rm --pull<span class="token operator">=</span>always -t -e <span class="token assign-left variable">HOST_PWD</span><span class="token operator">=</span><span class="token environment constant">$PWD</span> <span class="token punctuation">\\</span>\n    -v <span class="token environment constant">$PWD</span>:/srv/app -v /var/run/docker.sock:/var/run/docker.sock <span class="token punctuation">\\</span>\n    numberninecms/installer myproject\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',2),h=(0,s.Uk)("Wait a couple of minutes. Done! Now visit "),b={href:"https://myproject.localhost/",target:"_blank",rel:"noopener noreferrer"},k=(0,s.Uk)("https://myproject.localhost/"),f=(0,s.Uk)("."),v=(0,s.Wm)("p",null,"If port 443 is unavailable, the installation process will automatically assign a free port to your app.",-1),g=(0,s.Wm)("h2",{id:"windows-linux-wsl-macos-manual-installation",tabindex:"-1"},[(0,s.Wm)("a",{class:"header-anchor",href:"#windows-linux-wsl-macos-manual-installation","aria-hidden":"true"},"#"),(0,s.Uk)(" Windows / Linux / WSL / macOS manual installation")],-1),w=(0,s.Wm)("p",null,[(0,s.Wm)("strong",null,"Requirements to install NumberNine:")],-1),W={href:"https://www.php.net/downloads.php",target:"_blank",rel:"noopener noreferrer"},y=(0,s.Uk)("PHP 7.4"),x=(0,s.Uk)(" or above"),U={href:"https://www.mysql.com/downloads/",target:"_blank",rel:"noopener noreferrer"},j=(0,s.Uk)("MySQL 8.0"),_=(0,s.Uk)(" or above"),N={href:"https://getcomposer.org/download/",target:"_blank",rel:"noopener noreferrer"},D=(0,s.Uk)("Composer 2"),L={href:"https://symfony.com/download",target:"_blank",rel:"noopener noreferrer"},S=(0,s.Uk)("Symfony executable"),P=(0,s.uE)('<h3 id="create-the-project" tabindex="-1"><a class="header-anchor" href="#create-the-project" aria-hidden="true">#</a> Create the project</h3><p>To create a new project with NumberNine, run the following commands:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>symfony new my_project --full\n<span class="token function">composer</span> config extra.symfony.allow-contrib <span class="token boolean">true</span>\n<span class="token assign-left variable">SYMFONY_ENDPOINT</span><span class="token operator">=</span>https://flex.symfony.com/r/github.com/symfony/recipes-contrib/1049 <span class="token punctuation">\\</span>\n    <span class="token function">composer</span> req numberninecms/numbernine\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="launch-installation" tabindex="-1"><a class="header-anchor" href="#launch-installation" aria-hidden="true">#</a> Launch installation</h3><p>Go to your new project root and run:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bin/console numbernine:install\nbin/console doctrine:database:create\nbin/console doctrine:migrations:diff\nbin/console doctrine:migrations:migrate\nbin/console doctrine:fixtures:load\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="run-the-server" tabindex="-1"><a class="header-anchor" href="#run-the-server" aria-hidden="true">#</a> Run the server</h3><p>Now launch the local server and visit your website.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>symfony local:server:ca:install\nsymfony serve -d\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',9),O=(0,s.Uk)("You're done. Visit "),T={href:"https://localhost:8080/",target:"_blank",rel:"noopener noreferrer"},C=(0,s.Uk)("https://localhost:8080/"),R=(0,s.Uk)(" or the given URL if different."),Y={render:function(e,n){const a=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.j4)(s.HY,null,[r,l,o,(0,s.Wm)("p",null,[t,i,c,(0,s.Wm)("a",p,[d,(0,s.Wm)(a)]),m]),u,(0,s.Wm)("p",null,[h,(0,s.Wm)("a",b,[k,(0,s.Wm)(a)]),f]),v,g,w,(0,s.Wm)("ul",null,[(0,s.Wm)("li",null,[(0,s.Wm)("a",W,[y,(0,s.Wm)(a)]),x]),(0,s.Wm)("li",null,[(0,s.Wm)("a",U,[j,(0,s.Wm)(a)]),_]),(0,s.Wm)("li",null,[(0,s.Wm)("a",N,[D,(0,s.Wm)(a)])]),(0,s.Wm)("li",null,[(0,s.Wm)("a",L,[S,(0,s.Wm)(a)])])]),P,(0,s.Wm)("p",null,[O,(0,s.Wm)("a",T,[C,(0,s.Wm)(a)]),R])],64)}}}}]);