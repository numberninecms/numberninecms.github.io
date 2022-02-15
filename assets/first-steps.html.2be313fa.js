import{_ as e,e as a}from"./app.8aa8894e.js";const n={},r=a(`<h1 id="first-steps" tabindex="-1"><a class="header-anchor" href="#first-steps" aria-hidden="true">#</a> First steps</h1><p><em><strong>Note:</strong> we&#39;re assuming you&#39;re using Docker. If you don&#39;t, remove <em><code>docker compose exec php</code></em> from the command lines.</em></p><h2 id="create-an-admin-user" tabindex="-1"><a class="header-anchor" href="#create-an-admin-user" aria-hidden="true">#</a> Create an admin user</h2><p>In your terminal, run the following command:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker compose exec php bin/console numbernine:user:create --admin
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="create-default-pages" tabindex="-1"><a class="header-anchor" href="#create-default-pages" aria-hidden="true">#</a> Create default pages</h2><p>You might want to create the default pages <code>My account</code> and <code>Privacy</code> so any user can login without accessing the admin panel. In your terminal, run the following command <strong>(replace <code>admin</code> by the username of the Administrator user previously created)</strong>:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker compose exec php bin/console numbernine:make:default-pages --username=admin
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="connect-to-the-admin-dashboard" tabindex="-1"><a class="header-anchor" href="#connect-to-the-admin-dashboard" aria-hidden="true">#</a> Connect to the admin dashboard</h2><p>Go to <code>/admin</code> of your website and login with your newly created user.</p>`,10);function t(s,o){return r}var c=e(n,[["render",t]]);export{c as default};
