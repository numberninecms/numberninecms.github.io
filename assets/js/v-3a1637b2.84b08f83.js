"use strict";(self.webpackChunknumberninecms_docs=self.webpackChunknumberninecms_docs||[]).push([[765],{191:(e,n,a)=>{a.r(n),a.d(n,{data:()=>s});const s={key:"v-3a1637b2",path:"/developers/installation.html",title:"Installation",lang:"en-US",frontmatter:{prev:"/developers/screenshots.md",next:"/developers/first-steps.md"},excerpt:"",headers:[{level:2,title:"Docker one-liner installation (recommended)",slug:"docker-one-liner-installation-recommended",children:[]},{level:2,title:"Windows / Linux / WSL / macOS manual installation",slug:"windows-linux-wsl-macos-manual-installation",children:[{level:3,title:"Create the project",slug:"create-the-project",children:[]},{level:3,title:"Launch installation",slug:"launch-installation",children:[]},{level:3,title:"Run the server",slug:"run-the-server",children:[]},{level:3,title:"Optional: Redis extension",slug:"optional-redis-extension",children:[]}]}],filePathRelative:"developers/installation.md",git:{updatedTime:1644824509e3}}},5782:(e,n,a)=>{a.r(n),a.d(n,{default:()=>Z});var s=a(6252);const l=(0,s._)("h1",{id:"installation",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#installation","aria-hidden":"true"},"#"),(0,s.Uk)(" Installation")],-1),r=(0,s._)("h2",{id:"docker-one-liner-installation-recommended",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#docker-one-liner-installation-recommended","aria-hidden":"true"},"#"),(0,s.Uk)(" Docker one-liner installation (recommended)")],-1),o=(0,s._)("p",null,"To install NumberNine, you need only Docker to be installed on your host.",-1),t=(0,s.Uk)("You "),i=(0,s._)("strong",null,"don't need",-1),c=(0,s.Uk)(" to be familiar with Docker. Everything is taken care of for you. Just "),d={href:"https://www.docker.com/products/docker-desktop",target:"_blank",rel:"noopener noreferrer"},p=(0,s.Uk)("download and install it"),u=(0,s.Uk)("."),h=(0,s.uE)('<p>To create a new project, simply replace <code>myproject</code> by the name of your project and run:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker run --rm --pull<span class="token operator">=</span>always -t -e <span class="token assign-left variable">HOST_PWD</span><span class="token operator">=</span><span class="token environment constant">$PWD</span> <span class="token punctuation">\\</span>\n    -v <span class="token environment constant">$PWD</span>:/srv/app -v /var/run/docker.sock:/var/run/docker.sock <span class="token punctuation">\\</span>\n    numberninecms/installer myproject\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',2),m=(0,s.Uk)("Wait a couple of minutes. Done! Now visit "),b={href:"https://myproject.localhost/",target:"_blank",rel:"noopener noreferrer"},k=(0,s.Uk)("https://myproject.localhost/"),v=(0,s.Uk)("."),f=(0,s._)("p",null,"If port 443 is unavailable, the installation process will automatically assign a free port to your app.",-1),g=(0,s._)("h2",{id:"windows-linux-wsl-macos-manual-installation",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#windows-linux-wsl-macos-manual-installation","aria-hidden":"true"},"#"),(0,s.Uk)(" Windows / Linux / WSL / macOS manual installation")],-1),w=(0,s._)("p",null,[(0,s._)("strong",null,"Requirements to install NumberNine:")],-1),y={href:"https://www.php.net/downloads.php",target:"_blank",rel:"noopener noreferrer"},_=(0,s.Uk)("PHP 8.1"),x=(0,s.Uk)(" or above, with "),U=(0,s._)("code",null,"intl",-1),j=(0,s.Uk)(", "),W=(0,s._)("code",null,"gd",-1),D=(0,s.Uk)(", "),S=(0,s._)("code",null,"exif",-1),L=(0,s.Uk)(", "),R=(0,s._)("code",null,"sysvsem",-1),N=(0,s.Uk)(" extensions ("),O=(0,s._)("code",null,"redis",-1),P=(0,s.Uk)(" too if you want to use redis)"),q={href:"https://www.mysql.com/downloads/",target:"_blank",rel:"noopener noreferrer"},C=(0,s.Uk)("MySQL 8.0"),T=(0,s.Uk)(" or above"),E={href:"https://getcomposer.org/download/",target:"_blank",rel:"noopener noreferrer"},Y=(0,s.Uk)("Composer 2"),H={href:"https://symfony.com/download",target:"_blank",rel:"noopener noreferrer"},I=(0,s.Uk)("Symfony executable"),A=(0,s.uE)('<h3 id="create-the-project" tabindex="-1"><a class="header-anchor" href="#create-the-project" aria-hidden="true">#</a> Create the project</h3><p>To create a new project with NumberNine, run the following commands:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>symfony new myproject --full\n<span class="token builtin class-name">cd</span> myproject\n<span class="token function">composer</span> config extra.symfony.allow-contrib <span class="token boolean">true</span>\n<span class="token function">composer</span> req numberninecms/numbernine\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="launch-installation" tabindex="-1"><a class="header-anchor" href="#launch-installation" aria-hidden="true">#</a> Launch installation</h3><p>Go to your new project root and run:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bin/console assets:install public --symlink\nbin/console numbernine:install\nbin/console doctrine:database:create\nbin/console doctrine:migrations:diff\nbin/console doctrine:migrations:migrate\nbin/console doctrine:fixtures:load\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="run-the-server" tabindex="-1"><a class="header-anchor" href="#run-the-server" aria-hidden="true">#</a> Run the server</h3><p>Now launch the local server and visit your website.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>symfony local:server:ca:install\nsymfony serve -d\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',9),$=(0,s.Uk)("You're done. Visit "),G={href:"https://localhost:8080/",target:"_blank",rel:"noopener noreferrer"},J=(0,s.Uk)("https://localhost:8080/"),M=(0,s.Uk)(" or the given URL if different."),Q=(0,s.uE)('<h3 id="optional-redis-extension" tabindex="-1"><a class="header-anchor" href="#optional-redis-extension" aria-hidden="true">#</a> Optional: Redis extension</h3><p>Assuming you&#39;ve got Redis installed, run these commands:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> req numberninecms/redis\nbin/console numbernine:install:redis\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Answer the questions, then clear your Symfony cache:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bin/console cache:clear\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Done! Your Symfony cache and sessions will now be handled through Redis.</p>',6),V={},Z=(0,a(3744).Z)(V,[["render",function(e,n){const a=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[l,r,o,(0,s._)("p",null,[t,i,c,(0,s._)("a",d,[p,(0,s.Wm)(a)]),u]),h,(0,s._)("p",null,[m,(0,s._)("a",b,[k,(0,s.Wm)(a)]),v]),f,g,w,(0,s._)("ul",null,[(0,s._)("li",null,[(0,s._)("a",y,[_,(0,s.Wm)(a)]),x,U,j,W,D,S,L,R,N,O,P]),(0,s._)("li",null,[(0,s._)("a",q,[C,(0,s.Wm)(a)]),T]),(0,s._)("li",null,[(0,s._)("a",E,[Y,(0,s.Wm)(a)])]),(0,s._)("li",null,[(0,s._)("a",H,[I,(0,s.Wm)(a)])])]),A,(0,s._)("p",null,[$,(0,s._)("a",G,[J,(0,s.Wm)(a)]),M]),Q],64)}]])}}]);