// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'NumberNine CMS',
  icon: {
    favicon: './src/assets/favicon.png',
    touchicon: './src/assets/favicon.png'
  },
  siteUrl: (process.env.SITE_URL ? process.env.SITE_URL : 'https://numberninecms.github.io'),
  settings: {
    web: process.env.URL_WEB || false,
    twitter: 'https://twitter.com/numberninecms',
    github: 'https://github.com/numberninecms',
    nav: {
      links: [
        { path: '/docs/', title: 'Docs' }
      ]
    },
    sidebar: [
      {
        name: 'docs',
        sections: [
          {
            title: 'Getting Started',
            items: [
              '/docs/',
              '/docs/screenshots/',
              '/docs/installation/',
              '/docs/first-steps/',
            ]
          },
          {
            title: 'Tooling',
            items: [
              '/docs/docker/',
            ]
          },
          {
            title: 'Architecture',
            items: [
              '/docs/architecture/symfony/',
              '/docs/architecture/user-management/',
              '/docs/architecture/theming/',
              '/docs/architecture/content-types/',
            ]
          },
          {
            title: 'How to',
            items: [
              '/docs/howto/theming/create-a-component/',
              '/docs/howto/theming/create-a-shortcode/',
              '/docs/howto/content/create-a-content-type/',
              '/docs/howto/user-management/create-a-capability/',
            ]
          },
          {
            title: 'Reference',
            items: [
              '/docs/reference/events/',
            ]
          },
        ]
      }
    ]
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: './content',
        path: '**/*.md',
        typeName: 'MarkdownPage',
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['noopener', 'noreferrer'],
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    },

    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {
          // Prevent purging of prism classes.
          whitelistPatternsChildren: [
            /token$/
          ]
        }
      }
    },

    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: (process.env.GA_ID ? process.env.GA_ID : 'XX-999999999-9')
      }
    },

    {
      use: '@gridsome/plugin-sitemap',
      options: {
      }
    }

  ]
}