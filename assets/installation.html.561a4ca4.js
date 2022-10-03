import{_ as r,r as i,o as t,c as l,a as e,b as n,d as s,e as o}from"./app.fd1d4a70.js";const c={},d=e("h1",{id:"installation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installation","aria-hidden":"true"},"#"),n(" Installation")],-1),p=e("h2",{id:"docker-one-liner-installation-recommended",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#docker-one-liner-installation-recommended","aria-hidden":"true"},"#"),n(" Docker one-liner installation (recommended)")],-1),u=e("p",null,"To install NumberNine, you need only Docker to be installed on your host.",-1),h=e("strong",null,"don't need",-1),m={href:"https://www.docker.com/products/docker-desktop",target:"_blank",rel:"noopener noreferrer"},b=o(`<p>To create a new project, simply replace <code>myproject</code> by the name of your project and run:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token parameter variable">--pull</span><span class="token operator">=</span>always <span class="token parameter variable">-t</span> <span class="token parameter variable">-e</span> <span class="token assign-left variable">HOST_PWD</span><span class="token operator">=</span><span class="token environment constant">$PWD</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> <span class="token environment constant">$PWD</span>:/srv/app <span class="token parameter variable">-v</span> /var/run/docker.sock:/var/run/docker.sock <span class="token punctuation">\\</span>
    numberninecms/installer myproject
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v={href:"https://myproject.localhost/",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,"If port 443 is unavailable, the installation process will automatically assign a free port to your app.",-1),f=e("h2",{id:"windows-linux-wsl-macos-manual-installation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#windows-linux-wsl-macos-manual-installation","aria-hidden":"true"},"#"),n(" Windows / Linux / WSL / macOS manual installation")],-1),g=e("p",null,[e("strong",null,"Requirements to install NumberNine:")],-1),k={href:"https://www.php.net/downloads.php",target:"_blank",rel:"noopener noreferrer"},y=e("code",null,"intl",-1),w=e("code",null,"gd",-1),x=e("code",null,"exif",-1),j=e("code",null,"sysvsem",-1),N=e("code",null,"redis",-1),D={href:"https://www.mysql.com/downloads/",target:"_blank",rel:"noopener noreferrer"},S={href:"https://getcomposer.org/download/",target:"_blank",rel:"noopener noreferrer"},L={href:"https://symfony.com/download",target:"_blank",rel:"noopener noreferrer"},R=o(`<h3 id="create-the-project" tabindex="-1"><a class="header-anchor" href="#create-the-project" aria-hidden="true">#</a> Create the project</h3><p>To create a new project with NumberNine, run the following commands:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>symfony new myproject <span class="token parameter variable">--full</span>
<span class="token builtin class-name">cd</span> myproject
<span class="token function">composer</span> config extra.symfony.allow-contrib <span class="token boolean">true</span>
<span class="token function">composer</span> req numberninecms/numbernine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="launch-installation" tabindex="-1"><a class="header-anchor" href="#launch-installation" aria-hidden="true">#</a> Launch installation</h3><p>Go to your new project root and run:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bin/console assets:install public <span class="token parameter variable">--symlink</span>
bin/console numbernine:install
bin/console doctrine:database:create
bin/console doctrine:migrations:diff
bin/console doctrine:migrations:migrate
bin/console doctrine:fixtures:load
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="run-the-server" tabindex="-1"><a class="header-anchor" href="#run-the-server" aria-hidden="true">#</a> Run the server</h3><p>Now launch the local server and visit your website.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>symfony local:server:ca:install
symfony serve <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,9),W={href:"https://localhost:8080/",target:"_blank",rel:"noopener noreferrer"},q=o(`<h3 id="optional-redis-extension" tabindex="-1"><a class="header-anchor" href="#optional-redis-extension" aria-hidden="true">#</a> Optional: Redis extension</h3><p>Assuming you&#39;ve got Redis installed, run these commands:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> req numberninecms/redis
bin/console numbernine:install:redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Answer the questions, then clear your Symfony cache:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bin/console cache:clear
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Done! Your Symfony cache and sessions will now be handled through Redis.</p>`,6);function P(T,V){const a=i("ExternalLinkIcon");return t(),l("div",null,[d,p,u,e("p",null,[n("You "),h,n(" to be familiar with Docker. Everything is taken care of for you. Just "),e("a",m,[n("download and install it"),s(a)]),n(".")]),b,e("p",null,[n("Wait a couple of minutes. Done! Now visit "),e("a",v,[n("https://myproject.localhost/"),s(a)]),n(".")]),_,f,g,e("ul",null,[e("li",null,[e("a",k,[n("PHP 8.1"),s(a)]),n(" or above, with "),y,n(", "),w,n(", "),x,n(", "),j,n(" extensions ("),N,n(" too if you want to use redis)")]),e("li",null,[e("a",D,[n("MySQL 8.0"),s(a)]),n(" or above")]),e("li",null,[e("a",S,[n("Composer 2"),s(a)])]),e("li",null,[e("a",L,[n("Symfony executable"),s(a)])])]),R,e("p",null,[n("You're done. Visit "),e("a",W,[n("https://localhost:8080/"),s(a)]),n(" or the given URL if different.")]),q])}const I=r(c,[["render",P],["__file","installation.html.vue"]]);export{I as default};
