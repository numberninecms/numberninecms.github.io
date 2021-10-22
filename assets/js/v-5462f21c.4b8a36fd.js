"use strict";(self.webpackChunknumberninecms_docs=self.webpackChunknumberninecms_docs||[]).push([[39],{6914:(e,a,n)=>{n.r(a),n.d(a,{data:()=>t});const t={key:"v-5462f21c",path:"/developers/first-steps.html",title:"First steps",lang:"en-US",frontmatter:{prev:"/developers/installation.md",next:"/developers/docker.md"},excerpt:"",headers:[{level:2,title:"Create an admin user",slug:"create-an-admin-user",children:[]},{level:2,title:"Create default pages",slug:"create-default-pages",children:[]},{level:2,title:"Connect to the admin dashboard",slug:"connect-to-the-admin-dashboard",children:[]}],filePathRelative:"developers/first-steps.md",git:{updatedTime:1634913723e3}}},6912:(e,a,n)=>{n.r(a),n.d(a,{default:()=>s});const t=(0,n(6252).uE)('<h1 id="first-steps" tabindex="-1"><a class="header-anchor" href="#first-steps" aria-hidden="true">#</a> First steps</h1><p><em><strong>Note:</strong> we&#39;re assuming you&#39;re using Docker. If you don&#39;t, remove <em><code>docker-compose exec php</code></em> from the command lines.</em></p><h2 id="create-an-admin-user" tabindex="-1"><a class="header-anchor" href="#create-an-admin-user" aria-hidden="true">#</a> Create an admin user</h2><p>In your terminal, run the following command:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker-compose exec php bin/console numbernine:user:create --admin\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="create-default-pages" tabindex="-1"><a class="header-anchor" href="#create-default-pages" aria-hidden="true">#</a> Create default pages</h2><p>You might want to create the default pages <code>My account</code> and <code>Privacy</code> so any user can login without accessing the admin panel. In your terminal, run the following command <strong>(replace <code>admin</code> by the username of the Administrator user previously created)</strong>:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker-compose exec php bin/console numbernine:make:default-pages --username=admin\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="connect-to-the-admin-dashboard" tabindex="-1"><a class="header-anchor" href="#connect-to-the-admin-dashboard" aria-hidden="true">#</a> Connect to the admin dashboard</h2><p>Go to <code>/admin</code> of your website and login with your newly created user.</p>',10),r={},s=(0,n(3744).Z)(r,[["render",function(e,a){return t}]])}}]);