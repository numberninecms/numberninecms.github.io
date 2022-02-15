import { defineUserConfig } from 'vuepress';
import type { DefaultThemeOptions } from 'vuepress';
import { path } from '@vuepress/utils';

export default defineUserConfig<DefaultThemeOptions>({
    lang: 'en-US',
    title: 'NumberNine CMS',
    description: 'Documentation for NumberNine CMS',
    clientAppEnhanceFiles: path.resolve(__dirname, './clientAppEnhance.ts'),
    head: [['link', { rel: 'icon', href: '/images/logo_square.png' }]],
    plugins: [
        [
            '@vuepress/search',
            {
                locales: {
                    '/': {
                        placeholder: 'Search',
                    },
                },
            },
        ],
        [
            '@vuepress/google-analytics',
            {
                id: 'G-6P5RWPRLS2',
            },
        ],
    ],

    themeConfig: {
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
    },
});
