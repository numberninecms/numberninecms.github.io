<script setup lang="ts">
import AutoLink from '@theme/AutoLink.vue'
import {
  ClientOnly,
  usePageFrontmatter,
  useSiteLocaleData,
  withBase,
} from '@vuepress/client'
import { isArray } from '@vuepress/shared'
import type { FunctionalComponent } from 'vue'
import { computed, h, ref } from 'vue'
import type { DefaultThemeHomePageFrontmatter } from '@vuepress/theme-default/lib/shared/index.js'

const frontmatter = usePageFrontmatter<DefaultThemeHomePageFrontmatter>()
const siteLocale = useSiteLocaleData()
const isDarkMode = ref(false)

const heroImage = computed(() => {
  if (isDarkMode.value && frontmatter.value.heroImageDark !== undefined) {
    return frontmatter.value.heroImageDark
  }
  return frontmatter.value.heroImage
})

const heroText = computed(() => {
  if (frontmatter.value.heroText === null) {
    return null
  }
  return frontmatter.value.heroText || siteLocale.value.title || 'Hello'
})

const heroAlt = computed(
  () => frontmatter.value.heroAlt || heroText.value || 'hero'
)

const tagline = computed(
  () => frontmatter.value.tagline || siteLocale.value.description || 'Welcome to your VuePress site'
)

const introductionText = computed(
    () => frontmatter.value.introductionText
);

const license = computed(() => frontmatter.value.license);

const version = computed(() => frontmatter.value.version);

const versionStatus = computed(() => {
    const semver = version.value.match(/(\d+\.?\d*)/);

    if (semver.length === 0) {
        return "yellow";
    }

    return parseFloat(semver[1]) > 1.0 ? "green" : "yellow";
});

const caption = computed(() => frontmatter.value.caption);

const actions = computed(() => {
  if (!isArray(frontmatter.value.actions)) {
    return []
  }

  return frontmatter.value.actions.map(({ text, link, type = 'primary' }) => ({
    text,
    link,
    type,
  }))
})

const HomeHeroImage: FunctionalComponent = () => {
  if (!heroImage.value) return null
  const img = h('img', {
    src: withBase(heroImage.value),
    alt: heroAlt.value,
  })
  if (frontmatter.value.heroImageDark === undefined) {
    return img
  }
  // wrap hero image with <ClientOnly> to avoid ssr-mismatch
  // when using a different hero image in dark mode
  return h(ClientOnly, () => img)
}
</script>

<template>
  <header class="hero">
    <HomeHeroImage />

    <h1 v-if="heroText" id="main-title">
      {{ heroText }}
    </h1>

    <p v-if="tagline" class="description">
      {{ tagline }}
    </p>

    <p v-if="introductionText" class="introduction-text">
        {{ introductionText }}
    </p>

    <div class="video-container">
        <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/GcDZgwmVSSM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
    </div>

    <p v-if="actions.length" class="actions">
      <AutoLink
        v-for="action in actions"
        :key="action.text"
        class="action-button"
        :class="[action.type]"
        :item="action"
      />
    </p>

    <p v-if="license" class="license">{{ license }}</p>

    <div v-if="version" class="version-wrapper">
        <p class="version" :class="versionStatus">
            {{ version }}
        </p>
        <small v-if="caption" class="caption">{{ caption }}</small>
    </div>
  </header>
</template>

<style lang="scss">
@import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
@import '@fortawesome/fontawesome-free/css/brands.min.css';
@import '@fortawesome/fontawesome-free/css/solid.min.css';

.license {
    margin-top: 2rem;
    text-align: center;
}

.version-wrapper {
    margin-top: 1.75rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .version {
        margin-bottom: 0.25rem;
        padding: 0.25rem 1.75rem;
        text-align: center;
        display: inline-block;
        font-weight: 600;
        border-radius: 0.25rem;

        &.yellow {
            color: rgb(221, 107, 32);
            background-color: rgba(251, 211, 141);
        }

        &.green {
            color: rgb(15, 126, 57);
            background-color: rgb(154, 247, 189);
        }
    }

    .caption {
        color: var(--c-text-lightest);
    }
}

.video-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
}

.video-container iframe,
.video-container object,
.video-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
