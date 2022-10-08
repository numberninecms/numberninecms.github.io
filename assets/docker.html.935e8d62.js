import{_ as t,r as i,o as l,c,a as n,b as e,d as s,e as o}from"./app.6b5c2181.js";const r={},p=o(`<h1 id="docker-services" tabindex="-1"><a class="header-anchor" href="#docker-services" aria-hidden="true">#</a> Docker services</h1><p>NumberNine&#39;s default installation relies on Docker to create a fully operational Docker development environment.</p><p>If you&#39;re not already familiar with Docker, see it as a kind of WAMP, XAMPP, MAMP, Laragon or any bundled development tool. Although you shouldn&#39;t need too much of Docker knowledge to work on your NumberNine project, it may come handy when troubleshooting. See below some command examples that should get you started quickly.</p><p>This is the list of the installed services.</p><h2 id="php" tabindex="-1"><a class="header-anchor" href="#php" aria-hidden="true">#</a> PHP</h2><p>The PHP container is loaded with some useful extensions and development tools.</p><ul><li>PHP 8.1</li><li>APCu</li><li>Xdebug 3</li><li>Composer 2</li><li>GNU Make</li><li>OPcache</li><li>Cachetool (clear OPcache and ACPu from CLI)</li><li>Blackfire probe</li></ul><p>Connect to the container using this command:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">docker</span> compose <span class="token builtin class-name">exec</span> php <span class="token function">zsh</span>
</code></pre></div><p>You&#39;ll see a bash prompt inside which you can run Symfony or Cachetool commands. Type <code>exit</code> to return to your terminal session.</p><p>Alternatively, if you just want to run a single command, use this syntax:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">docker</span> compose <span class="token builtin class-name">exec</span> php <span class="token punctuation">[</span>here the Linux <span class="token builtin class-name">command</span> you want to run<span class="token punctuation">]</span>
</code></pre></div><p>For example:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">docker</span> compose <span class="token builtin class-name">exec</span> php bin/console list
<span class="token function">docker</span> compose <span class="token builtin class-name">exec</span> php <span class="token function">composer</span> update
<span class="token function">docker</span> compose <span class="token builtin class-name">exec</span> php cachetool opcache:status
</code></pre></div><h2 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h2><p>Nginx is running with a SSL connection on localhost. A self-signed certificate is created during installation.</p><h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h2><p>NumberNine is specifically designed to run on MySQL, taking advantage of the JSON features. Although it should work fine on MariaDB or SQLite, it hasn&#39;t been tested and it&#39;s not recommended to change.</p><p>MySQL is running in version 8.</p><h2 id="blackfire" tabindex="-1"><a class="header-anchor" href="#blackfire" aria-hidden="true">#</a> Blackfire</h2>`,20),d={href:"https://blackfire.io",target:"_blank",rel:"noopener noreferrer"},u=n("code",null,"~/.bashrc",-1),h={href:"https://blackfire.io/my/settings/credentials",target:"_blank",rel:"noopener noreferrer"},m=o(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">BLACKFIRE_CLIENT_ID</span><span class="token operator">=</span>yourkey
<span class="token builtin class-name">export</span> <span class="token assign-left variable">BLACKFIRE_CLIENT_TOKEN</span><span class="token operator">=</span>yourkey
<span class="token builtin class-name">export</span> <span class="token assign-left variable">BLACKFIRE_SERVER_ID</span><span class="token operator">=</span>yourkey
<span class="token builtin class-name">export</span> <span class="token assign-left variable">BLACKFIRE_SERVER_TOKEN</span><span class="token operator">=</span>yourkey
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Modify <code>docker-compose.yml</code> to add this key under <code>blackfire</code> service (leave the tildes):</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>    <span class="token key atrule">blackfire</span><span class="token punctuation">:</span>
        <span class="token comment"># ...</span>
        <span class="token key atrule">environment</span><span class="token punctuation">:</span>
            <span class="token key atrule">BLACKFIRE_CLIENT_ID</span><span class="token punctuation">:</span> <span class="token null important">~</span>
            <span class="token key atrule">BLACKFIRE_CLIENT_TOKEN</span><span class="token punctuation">:</span> <span class="token null important">~</span>
            <span class="token key atrule">BLACKFIRE_SERVER_ID</span><span class="token punctuation">:</span> <span class="token null important">~</span>
            <span class="token key atrule">BLACKFIRE_SERVER_TOKEN</span><span class="token punctuation">:</span> <span class="token null important">~</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),k={href:"https://blackfire.io/docs/profiling-cookbooks/profiling-http-via-browser",target:"_blank",rel:"noopener noreferrer"},b=o(`<h2 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h2><p>Symfony sessions and app cache is stored in a Redis database. If you need to clear the Redis cache, run this command:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">docker</span> compose <span class="token builtin class-name">exec</span> redis redis-cli flushall
</code></pre></div><h2 id="maildev" tabindex="-1"><a class="header-anchor" href="#maildev" aria-hidden="true">#</a> Maildev</h2>`,4),f={href:"http://localhost:8010/",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"docker-compose.yml",-1),y=n("p",null,"Every mail sent by NumberNine will appear in your Maildev inbox.",-1);function g(_,x){const a=i("ExternalLinkIcon");return l(),c("div",null,[p,n("p",null,[e("To make Blackfire work, you need to register an account on "),n("a",d,[e("blackfire.io"),s(a)]),e(".")]),n("p",null,[e("Once your account is created, create 4 environment variables in your "),u,e(" file with the values found in "),n("a",h,[e("your account settings"),s(a)]),e(".")]),m,n("p",null,[e("Finally, "),n("a",k,[e("install the Chrome or Firefox extension"),s(a)]),e(" and you're ready to profile your website.")]),b,n("p",null,[e("As a mail catcher, NumberNine is bundled with Maildev which is a joy to use. By default, the mailbox interface will be running on port "),n("a",f,[e("http://localhost:8010/"),s(a)]),e(" unless you change the port in "),v,e(".")]),y])}const N=t(r,[["render",g],["__file","docker.html.vue"]]);export{N as default};
