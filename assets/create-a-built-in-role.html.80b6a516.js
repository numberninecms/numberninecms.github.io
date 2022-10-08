import{_ as n,o as s,c as a,e}from"./app.6b5c2181.js";const t={},p=e(`<h1 id="create-a-built-in-role" tabindex="-1"><a class="header-anchor" href="#create-a-built-in-role" aria-hidden="true">#</a> Create a built-in role</h1><p>Built-in roles are bundled with your app, theme or plugin. They are not managed through the administration interface, therefore not deleteable like custom roles created by the administrator.</p><p>The only thing to do is to create new <code>UserRole</code> fixtures.</p><p>Create a class in <code>src/DataFixtures/UserRoleFixtures.php</code> file.</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>DataFixtures</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Doctrine<span class="token punctuation">\\</span>Bundle<span class="token punctuation">\\</span>FixturesBundle<span class="token punctuation">\\</span>Fixture</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Doctrine<span class="token punctuation">\\</span>Bundle<span class="token punctuation">\\</span>FixturesBundle<span class="token punctuation">\\</span>FixtureGroupInterface</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Doctrine<span class="token punctuation">\\</span>Persistence<span class="token punctuation">\\</span>ObjectManager</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">NumberNine<span class="token punctuation">\\</span>Entity<span class="token punctuation">\\</span>UserRole</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">NumberNine<span class="token punctuation">\\</span>Security<span class="token punctuation">\\</span>Capabilities</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">NumberNine<span class="token punctuation">\\</span>Security<span class="token punctuation">\\</span>CapabilityGenerator</span><span class="token punctuation">;</span>

<span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name-definition class-name">UserRoleFixtures</span> <span class="token keyword">extends</span> <span class="token class-name">Fixture</span> <span class="token keyword">implements</span> <span class="token class-name">FixtureGroupInterface</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span>
        <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name type-declaration">UserRoleRepository</span> <span class="token variable">$userRoleRepository</span><span class="token punctuation">,</span>
        <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name type-declaration">CapabilityGenerator</span> <span class="token variable">$capabilityGenerator</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">load</span><span class="token punctuation">(</span><span class="token class-name type-declaration">ObjectManager</span> <span class="token variable">$manager</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">createTeacher</span><span class="token punctuation">(</span><span class="token variable">$manager</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// add as many roles as you need here</span>

        <span class="token variable">$manager</span><span class="token operator">-&gt;</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">function</span> <span class="token function-definition function">createTeacher</span><span class="token punctuation">(</span><span class="token class-name type-declaration">ObjectManager</span> <span class="token variable">$manager</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">userRoleRepository</span><span class="token operator">-&gt;</span><span class="token function">findOneByName</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Teacher&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token variable">$teacher</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">UserRole</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Teacher&#39;</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">setLocked</span><span class="token punctuation">(</span><span class="token constant boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// Locked roles can&#39;t be removed in the admin interface</span>
            <span class="token operator">-&gt;</span><span class="token function">setCapabilities</span><span class="token punctuation">(</span>
                <span class="token punctuation">[</span>
                    <span class="token comment">// Choose the capabilities you want to be enabled by default.</span>
                    <span class="token comment">// Add your custom capabilities, or remove some you don&#39;t want.</span>
                    <span class="token comment">//</span>
                    <span class="token comment">// Below are the complete Administrator capabilities</span>
                    <span class="token class-name static-context">Capabilities</span><span class="token operator">::</span><span class="token constant">READ</span><span class="token punctuation">,</span>
                    <span class="token class-name static-context">Capabilities</span><span class="token operator">::</span><span class="token constant">ACCESS_ADMIN</span><span class="token punctuation">,</span>
                    <span class="token class-name static-context">Capabilities</span><span class="token operator">::</span><span class="token constant">UPLOAD_FILES</span><span class="token punctuation">,</span>
                    <span class="token class-name static-context">Capabilities</span><span class="token operator">::</span><span class="token constant">MANAGE_CATEGORIES</span><span class="token punctuation">,</span>
                    <span class="token class-name static-context">Capabilities</span><span class="token operator">::</span><span class="token constant">MODERATE_COMMENTS</span><span class="token punctuation">,</span>
                    <span class="token class-name static-context">Capabilities</span><span class="token operator">::</span><span class="token constant">MANAGE_OPTIONS</span><span class="token punctuation">,</span>
                    <span class="token class-name static-context">Capabilities</span><span class="token operator">::</span><span class="token constant">LIST_USERS</span><span class="token punctuation">,</span>
                    <span class="token class-name static-context">Capabilities</span><span class="token operator">::</span><span class="token constant">PROMOTE_USERS</span><span class="token punctuation">,</span>
                    <span class="token class-name static-context">Capabilities</span><span class="token operator">::</span><span class="token constant">REMOVE_USERS</span><span class="token punctuation">,</span>
                    <span class="token class-name static-context">Capabilities</span><span class="token operator">::</span><span class="token constant">EDIT_USERS</span><span class="token punctuation">,</span>
                    <span class="token class-name static-context">Capabilities</span><span class="token operator">::</span><span class="token constant">ADD_USERS</span><span class="token punctuation">,</span>
                    <span class="token class-name static-context">Capabilities</span><span class="token operator">::</span><span class="token constant">CREATE_USERS</span><span class="token punctuation">,</span>
                    <span class="token class-name static-context">Capabilities</span><span class="token operator">::</span><span class="token constant">DELETE_USERS</span><span class="token punctuation">,</span>
                    <span class="token class-name static-context">Capabilities</span><span class="token operator">::</span><span class="token constant">MANAGE_ROLES</span><span class="token punctuation">,</span>
                    <span class="token class-name static-context">Capabilities</span><span class="token operator">::</span><span class="token constant">CUSTOMIZE</span><span class="token punctuation">,</span>
                    <span class="token operator">...</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">capabilityGenerator</span><span class="token operator">-&gt;</span><span class="token function">generateMappedEditorCapabilities</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;post&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token operator">...</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">capabilityGenerator</span><span class="token operator">-&gt;</span><span class="token function">generateMappedEditorCapabilities</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;page&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token operator">...</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">capabilityGenerator</span><span class="token operator">-&gt;</span><span class="token function">generateMappedEditorCapabilities</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;block&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token operator">...</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">capabilityGenerator</span><span class="token operator">-&gt;</span><span class="token function">generateMappedEditorCapabilities</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;media_file&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">)</span>
        <span class="token punctuation">;</span>

        <span class="token variable">$manager</span><span class="token operator">-&gt;</span><span class="token function">persist</span><span class="token punctuation">(</span><span class="token variable">$teacher</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function-definition function">getGroups</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;app&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The new roles will be automatically created at project installation.</p><p>To manually load them on an existing project, run the command below.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> compose <span class="token builtin class-name">exec</span> php bin/console doctrine:fixtures:load <span class="token parameter variable">--append</span> <span class="token parameter variable">--group</span><span class="token operator">=</span>app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If you&#39;re not using Docker, strip the <code>docker compose exec php</code> part.</p></div>`,9),o=[p];function c(i,l){return s(),a("div",null,o)}const u=n(t,[["render",c],["__file","create-a-built-in-role.html.vue"]]);export{u as default};