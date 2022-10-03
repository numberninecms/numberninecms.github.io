import{_ as a}from"./admin_users_roles.e7461fc0.js";import{_ as s,r as n,o as t,c as o,a as i,d as r,w as c,b as l,e as d}from"./app.fd1d4a70.js";const p={},u=d('<h1 id="user-management" tabindex="-1"><a class="header-anchor" href="#user-management" aria-hidden="true">#</a> User management</h1><h2 id="roles-and-capabilities" tabindex="-1"><a class="header-anchor" href="#roles-and-capabilities" aria-hidden="true">#</a> Roles and capabilities</h2><p>Roles in NumberNine are slightly different than they are in Symfony.</p><p>Traditionally, Symfony defines user roles as simple strings like <code>ROLE_USER</code> or <code>ROLE_ADMIN</code> that give very little flexibility on permissions.</p><p>NumberNine comes with 6 built-in roles:</p><ul><li><code>Administrator</code></li><li><code>Editor</code></li><li><code>Author</code></li><li><code>Contributor</code></li><li><code>Subscriber</code></li><li><code>Banned</code></li></ul><p>A set of permissions is assigned to each role, such as who can read a page, who can access admin, who can edit a post, etc.</p><p>In the admin panel under <code>Users &gt; Roles</code>, you can assign or remove permissions to each role:</p><p><img src="'+a+`" alt="Admin user roles"></p><p>To create a new role, enter the name of the role you want to create and click the <code>+</code> button to create it. It will appear in a new column, you can then assign the permissions you want.</p><p>Only user created roles can be removed.</p><h2 id="grant-access-to-a-page-using-permission" tabindex="-1"><a class="header-anchor" href="#grant-access-to-a-page-using-permission" aria-hidden="true">#</a> Grant access to a page using permission</h2><p>In your controller which extends <code>Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController</code>, add a line such as:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">denyAccessUnlessGranted</span><span class="token punctuation">(</span><span class="token class-name static-context">Capabilities</span><span class="token operator">::</span><span class="token constant">READ</span><span class="token punctuation">,</span> <span class="token variable">$entity</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>Capabilities</code> class groups all built-in capabilities.</p><h2 id="add-a-custom-capability" tabindex="-1"><a class="header-anchor" href="#add-a-custom-capability" aria-hidden="true">#</a> Add a custom capability</h2>`,16);function h(m,b){const e=n("RouterLink");return t(),o("div",null,[u,i("p",null,[r(e,{to:"/developers/howto/user-management/create-a-capability.html"},{default:c(()=>[l("Learn how to create a new capability...")]),_:1})])])}const f=s(p,[["render",h],["__file","user-management.html.vue"]]);export{f as default};
