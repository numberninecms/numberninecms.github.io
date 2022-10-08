import { defineUserConfig, viteBundler } from 'vuepress';
import { defaultTheme } from '@vuepress/theme-default';
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';
import { searchPlugin } from '@vuepress/plugin-search';
import { getDirname, path } from '@vuepress/utils';

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
    lang: 'en-US',
    title: 'NumberNine CMS',
    description: 'Documentation for NumberNine CMS',
    head: [
        ['link', { rel: 'icon', href: '/images/logo_square.png' }],
        ['link', { rel: 'stylesheet', href: '/images/logo_square.png' }],
    ],
    plugins: [
        searchPlugin({
            locales: {
                '/': {
                    placeholder: 'Search',
                },
            },
        }),
        googleAnalyticsPlugin({
            id: 'G-6P5RWPRLS2',
        }),
    ],
    theme: defaultTheme({
        logo: './images/logo_square.png',
        repo: 'numberninecms/cms',
        docsRepo: 'numberninecms/numberninecms.github.io',
        docsBranch: 'master',
        docsDir: 'docs',
        contributors: false,
        navbar: [
            {
                text: 'Developer docs',
                link: '/developers/',
            },
            {
                text: 'Demo',
                link: '/developers/demo.md',
            },
            {
                text: 'Blog',
                link: 'https://dev.to/numberninecms',
            },
        ],
        sidebar: [
            {
                text: 'Introduction',
                children: [
                    '/developers/index.md',
                    '/developers/who-is-it-for.md',
                    '/developers/features.md',
                    '/developers/demo.md',
                    '/developers/screenshots.md',
                ],
            },
            {
                text: 'Getting started',
                children: [
                    '/developers/installation.md',
                    '/developers/first-steps.md',
                ],
            },
            {
                text: 'Tooling',
                children: [
                    '/developers/docker.md',
                ],
            },
            {
                text: 'Architecture',
                children: [
                    '/developers/architecture/symfony.md',
                    '/developers/architecture/user-management.md',
                    '/developers/architecture/theming.md',
                    '/developers/architecture/content-types.md',
                ],
            },
            {
                text: 'How to',
                children: [
                    '/developers/howto/theming/create-a-component.md',
                    '/developers/howto/theming/create-a-shortcode.md',
                    '/developers/howto/content/create-a-content-type.md',
                    '/developers/howto/content/create-a-taxonomy.md',
                    '/developers/howto/user-management/create-a-capability.md',
                    '/developers/howto/user-management/create-a-built-in-role.md',
                    '/developers/howto/user-management/extend-registration-form.md',
                ],
            },
            {
                text: 'Reference',
                children: [
                    '/developers/reference/events.md',
                ],
            },
        ],
    }),
    alias: {
        '@theme/HomeHero.vue': path.resolve(__dirname, './components/HomeHero.vue'),
    },
});
