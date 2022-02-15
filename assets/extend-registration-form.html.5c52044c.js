import{_ as t,r as e,o as p,c as o,a as c,b as l,w as i,F as r,e as s,d as n}from"./app.8aa8894e.js";var u="/images/screenshots/howto_extend_registration_form.jpg";const k={},b=s(`<h1 id="extend-the-registration-form" tabindex="-1"><a class="header-anchor" href="#extend-the-registration-form" aria-hidden="true">#</a> Extend the registration form</h1><p>Your app might require some extra fields to the registration form.</p><p>Thanks to the <code>RegistrationFormBuilderEvent</code> event, you can intercept the form builder and customize it as you wish.</p><h2 id="retrieve-the-form-builder" tabindex="-1"><a class="header-anchor" href="#retrieve-the-form-builder" aria-hidden="true">#</a> Retrieve the form builder</h2><p>Let&#39;s create an event subscriber: <code>src/EventSubscriber/RegistrationFormBuilderEventSubscriber.php</code>.</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>EventSubscriber</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">NumberNine<span class="token punctuation">\\</span>Event<span class="token punctuation">\\</span>RegistrationFormBuilderEvent</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>EventDispatcher<span class="token punctuation">\\</span>EventSubscriberInterface</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Form<span class="token punctuation">\\</span>Extension<span class="token punctuation">\\</span>Core<span class="token punctuation">\\</span>Type<span class="token punctuation">\\</span>ChoiceType</span><span class="token punctuation">;</span>

<span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name-definition class-name">RegistrationFormBuilderEventSubscriber</span> <span class="token keyword">implements</span> <span class="token class-name">EventSubscriberInterface</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function-definition function">getSubscribedEvents</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token class-name static-context">RegistrationFormBuilderEvent</span><span class="token operator">::</span><span class="token keyword">class</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;build&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">build</span><span class="token punctuation">(</span><span class="token class-name type-declaration">RegistrationFormBuilderEvent</span> <span class="token variable">$event</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token function">getBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;accountType&#39;</span><span class="token punctuation">,</span> <span class="token class-name static-context">ChoiceType</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
                <span class="token string single-quoted-string">&#39;mapped&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">false</span><span class="token punctuation">,</span>
                <span class="token string single-quoted-string">&#39;choices&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
                    <span class="token string single-quoted-string">&#39;Free trial&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;free_trial&#39;</span><span class="token punctuation">,</span>
                    <span class="token string single-quoted-string">&#39;Pro&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;pro&#39;</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="override-the-template" tabindex="-1"><a class="header-anchor" href="#override-the-template" aria-hidden="true">#</a> Override the template</h2>`,7),m=n("Then you'll need to override the registration form template, as "),d=n("everything can be overriden"),g=n("."),h=s(`<p>Create a file named <code>src/Component/Account/RegistrationForm/template.html.twig</code> and put this content inside:</p><div class="language-twig ext-twig line-numbers-mode"><pre class="language-twig"><code><span class="token twig language-twig"><span class="token delimiter punctuation">{{</span> form_start<span class="token punctuation">(</span>form<span class="token punctuation">)</span> <span class="token delimiter punctuation">}}</span></span>
    <span class="token twig language-twig"><span class="token delimiter punctuation">{{</span> form_row<span class="token punctuation">(</span>form<span class="token punctuation">.</span>accountType<span class="token punctuation">)</span> <span class="token delimiter punctuation">}}</span></span> <span class="token twig language-twig"><span class="token comment">{# &lt;- this is what we override #}</span></span>
    <span class="token twig language-twig"><span class="token delimiter punctuation">{{</span> form_row<span class="token punctuation">(</span>form<span class="token punctuation">.</span>username<span class="token punctuation">)</span> <span class="token delimiter punctuation">}}</span></span>
    <span class="token twig language-twig"><span class="token delimiter punctuation">{{</span> form_row<span class="token punctuation">(</span>form<span class="token punctuation">.</span>email<span class="token punctuation">)</span> <span class="token delimiter punctuation">}}</span></span>
    <span class="token twig language-twig"><span class="token delimiter punctuation">{{</span> form_row<span class="token punctuation">(</span>form<span class="token punctuation">.</span>plainPassword<span class="token punctuation">)</span> <span class="token delimiter punctuation">}}</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text-gray-500 mb-5<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>small</span><span class="token punctuation">&gt;</span></span>
            <span class="token twig language-twig"><span class="token delimiter punctuation">{%</span> <span class="token tag-name keyword">trans</span> with <span class="token punctuation">{</span><span class="token string"><span class="token punctuation">&#39;</span>%path%<span class="token punctuation">&#39;</span></span><span class="token punctuation">:</span> N9_path<span class="token punctuation">(</span>PAGE_FOR_PRIVACY<span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token delimiter punctuation">%}</span></span>Your personal data will be used to support your experience throughout this website,
            to manage access to your account, and for other purposes described in our <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>%path%<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>privacy policy<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>.<span class="token twig language-twig"><span class="token delimiter punctuation">{%</span> <span class="token tag-name keyword">endtrans</span> <span class="token delimiter punctuation">%}</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>small</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn btn-color-primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token twig language-twig"><span class="token delimiter punctuation">{{</span> <span class="token string"><span class="token punctuation">&#39;</span>Register<span class="token punctuation">&#39;</span></span><span class="token operator">|</span>trans <span class="token delimiter punctuation">}}</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token twig language-twig"><span class="token delimiter punctuation">{{</span> form_end<span class="token punctuation">(</span>form<span class="token punctuation">)</span> <span class="token delimiter punctuation">}}</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>Here you go.</p><p>The form now looks like this:</p><p><img src="`+u+`" alt="Overriden registration form"></p><h2 id="handle-form-submission" tabindex="-1"><a class="header-anchor" href="#handle-form-submission" aria-hidden="true">#</a> Handle form submission</h2><p>When the user clicks <code>Register</code>, a new <code>User</code> entity is created, and the user logged in. But our new <code>accountType</code> field is useless.</p><p>Now, create a new event subscriber that will intercept the <code>RegistrationFormSuccessEvent</code> event: <code>src/EventSubscriber/RegistrationFormSuccessEventSubscriber.php</code>.</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>EventSubscriber</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">NumberNine<span class="token punctuation">\\</span>Event<span class="token punctuation">\\</span>RegistrationFormSuccessEvent</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>EventDispatcher<span class="token punctuation">\\</span>EventSubscriberInterface</span><span class="token punctuation">;</span>

<span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name-definition class-name">RegistrationFormSuccessEventSubscriber</span> <span class="token keyword">implements</span> <span class="token class-name">EventSubscriberInterface</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span>
        <span class="token comment">// inject any service you need</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function-definition function">getSubscribedEvents</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token class-name static-context">RegistrationFormSuccessEvent</span><span class="token operator">::</span><span class="token keyword">class</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;process&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">process</span><span class="token punctuation">(</span><span class="token class-name type-declaration">RegistrationFormSuccessEvent</span> <span class="token variable">$event</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$user</span> <span class="token operator">=</span> <span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$form</span> <span class="token operator">=</span> <span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token function">getForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$response</span> <span class="token operator">=</span> <span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token function">getResponse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token variable">$accountType</span> <span class="token operator">=</span> <span class="token variable">$form</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;accountType&#39;</span><span class="token punctuation">]</span><span class="token operator">-&gt;</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Do what you need here, and override the response if needed.</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p><strong>Note</strong>: if you change something in the <code>$user</code> entity and persist it, you&#39;ll need to reauthenticate. To authenticate the user, inject <code>NumberNine\\Security\\UserAuthenticator</code> service and retrieve the new response:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$response</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">authenticator</span><span class="token operator">-&gt;</span><span class="token function">authenticateUser</span><span class="token punctuation">(</span><span class="token variable">$user</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token function">setReponse</span><span class="token punctuation">(</span><span class="token variable">$response</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,11);function v(f,w){const a=e("RouterLink");return p(),o(r,null,[b,c("p",null,[m,l(a,{to:"/developers/architecture/theming.html"},{default:i(()=>[d]),_:1}),g]),h],64)}var _=t(k,[["render",v]]);export{_ as default};
