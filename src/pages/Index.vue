<template>
  <Layout>
    <div class="pt-8 md:pt-16 container">
      <div class="flex flex-col items-center">
        <h1 class="flex flex-col items-center mb-2 text-ui-primary">
          <Logo :width="512" with-text />
        </h1>
        <span class="text-2xl text-center lg:text-2xl font-bold">
          Every good business needs a good CMS software
        </span>

        <p class="pt-8 xl:w-3/4 lg:w-5/6 text-center">
          NumberNine is a new generation CMS aimed to simplify the creation of websites with Symfony.<br>
          Whatever website or application you're creating, this is the tool you've always wished for.
        </p>

        <div class="flex justify-center mt-8">
          <g-link
            to="/docs/"
            class="flex items-center px-6 py-4 ml-auto text-2xl font-bold leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1"
          >
            Get started
            <ArrowRightCircleIcon class="ml-4" size="1x" />
          </g-link>
        </div>

        <p class="mt-8 text-center">
          Open Source. MIT License.
        </p>

        <div class="mt-5 flex flex-col justify-center">
            <p class="mb-1 py-1 px-5 text-center bg-orange-300 text-orange-600 rounded inline-block font-semibold">
                pre-alpha v0.1
            </p>
            <small class="text-gray-600 text-center">Things may break. Use with caution.</small>
        </div>
      </div>

      <div class="pt-8 mx-auto mt-8 border-t md:mt-8 md:pt-8 border-top border-ui-border max-w-screen-sm"></div>

      <div class="flex flex-wrap justify-center -mx-4">
        <div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
          <CodeIcon size="3x" class="mb-6 text-ui-primary" />
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            Top technologies
          </h3>
          <p class="text-lg text-left">
            Built with Symfony, the most powerful PHP framework on the market, alongside with Stimulus and Vue 3
            for the frontend to deliver the best user experience and robustness your website needs. Designed to be
            simple, full featured and extensible.
          </p>
        </div>

        <div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
          <LayoutIcon size="3x" class="mb-6 text-ui-primary" />
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            Page builder
          </h3>
          <p class="text-lg text-left">
            Create pages, blog articles or any content with the built-in page builder and its dozens of predesigned blocks.
            Extend default theme to change the look and feel of the components. Build your blocks featuring your own business objects.
          </p>
        </div>

        <div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
          <ImageIcon size="3x" class="mb-6 text-ui-primary" />
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            Media library
          </h3>
          <p class="text-lg text-left">
            A great media management tool is the key to productivity. NumberNine's very reactive media library comes with integrated
            image editing tools, dropzone upload, client-side image resizing before upload, and neat integration with the text editor.
          </p>
        </div>
      </div>

      <div class="pt-8 mx-auto mt-8 border-t md:mt-8 md:pt-8 border-top border-ui-border max-w-screen-sm"></div>

      <div class="flex flex-col items-center justify-center -mx-4 gap-5">
          <p>Thanks to <a href="https://jb.gg/OpenSource" target="_blank">JetBrains</a> for supporting this project.</p>
          <a href="https://jb.gg/OpenSource" target="_blank"><img src="/jetbrains.png" alt="JetBrains"></a>
      </div>
    </div>
  </Layout>
</template>

<script>
import Logo from '@/components/Logo';
import { ArrowRightCircleIcon, ZapIcon, CodeIcon, MoonIcon, SearchIcon, LayoutIcon, ImageIcon } from 'vue-feather-icons';

export default {
  components: {
    Logo,
    ArrowRightCircleIcon,
    ZapIcon,
    CodeIcon,
    MoonIcon,
    SearchIcon,
    LayoutIcon,
    ImageIcon,
  },

  metaInfo() {
    const title = 'NumberNine CMS - Every good business needs a good CMS software';
    const description = 'NumberNine CMS is a new generation CMS aimed to simplify the creation of websites with Symfony.';

    return {
      title: title,
      meta: [
        {
          name: 'description',
          content: description
        },
        {
          key: 'og:title',
          name: 'og:title',
          content: title,
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: description,
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
      ]
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
