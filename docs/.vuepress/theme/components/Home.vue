<template>
    <main class="home" :aria-labelledby="heroText ? 'main-title' : undefined">
        <header class="hero">
            <img v-if="heroImage" :src="heroImage" :alt="heroAlt" />

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
                <NavLink
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

        <div v-if="features.length" class="features">
            <div
                v-for="feature in features"
                :key="feature.title"
                class="feature"
            >
                <h2>{{ feature.title }}</h2>
                <p>{{ feature.details }}</p>
            </div>
        </div>

        <div class="theme-default-content custom">
            <Content />
        </div>

        <template v-if="footer">
            <!-- eslint-disable-next-line vue/no-v-html -->
            <div v-if="footerHtml" class="footer" v-html="footer" />
            <div v-else class="footer" v-text="footer" />
        </template>
    </main>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import {
    usePageFrontmatter,
    useSiteLocaleData,
    withBase,
} from "@vuepress/client";
import { isArray } from "@vuepress/shared";
import type { DefaultThemeHomePageFrontmatter } from "@vuepress/theme-default/lib/shared";
import NavLink from "@vuepress/theme-default/lib/client/components/NavLink.vue";
import { LocalThemeHomePageFrontmatter } from "../home";

export default defineComponent({
    name: "Home",

    components: {
        NavLink,
    },

    setup() {
        const frontmatter = usePageFrontmatter<LocalThemeHomePageFrontmatter>();
        const siteLocale = useSiteLocaleData();

        const heroImage = computed(() => {
            if (!frontmatter.value.heroImage) {
                return null;
            }

            return withBase(frontmatter.value.heroImage);
        });

        const heroText = computed(() => {
            if (frontmatter.value.heroText === null) {
                return null;
            }
            return (
                frontmatter.value.heroText || siteLocale.value.title || "Hello"
            );
        });

        const heroAlt = computed(
            () => frontmatter.value.heroAlt || heroText.value || "hero"
        );

        const tagline = computed(() => {
            if (frontmatter.value.tagline === null) {
                return null;
            }
            return (
                frontmatter.value.tagline ||
                siteLocale.value.description ||
                "Welcome to your VuePress site"
            );
        });

        const actions = computed(() => {
            if (!isArray(frontmatter.value.actions)) {
                return [];
            }

            return frontmatter.value.actions.map(
                ({ text, link, type = "primary" }) => ({
                    text,
                    link,
                    type,
                })
            );
        });

        const features = computed(() => {
            if (isArray(frontmatter.value.features)) {
                return frontmatter.value.features;
            }
            return [];
        });

        const footer = computed(() => frontmatter.value.footer);

        const footerHtml = computed(() => frontmatter.value.footerHtml);

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

        return {
            heroImage,
            heroAlt,
            heroText,
            tagline,
            actions,
            features,
            footer,
            footerHtml,
            introductionText,
            license,
            version,
            versionStatus,
            caption,
        };
    },
});
</script>

<style lang="scss">
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
