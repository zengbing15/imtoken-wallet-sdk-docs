// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'imToken Wallet SDK',
  tagline: 'imToken Wallet SDK for DApp integration',
  url: 'https://github.com/zengbing15',
  baseUrl: '/imtoken-wallet-sdk-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'zengbing15', // Usually your GitHub org/user name.
  projectName: 'imtoken-wallet-sdk-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          /*
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        */
          },
        blog: false,
        /*
        {
          
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
       
          },
           */
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'imToken Wallet SDK',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          /*{to: '/blog', label: 'Blog', position: 'left'},*/
          {
            href: 'https://github.com/zengbing15/imtoken-wallet-sdk-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Support',
            items: [
              {
                label: 'Commit issues',
                to: 'https://github.com/zengbing15/imtoken-wallet-sdk-docs/issues',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Official website',
                href: 'https://token.im/',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/imToken',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/imTokenOfficial',
              },
            ],
          },
          {
            title: 'More',
            items: [
            /*
              {
                label: 'Blog',
                to: '/blog',
              },
              */
              {
                label: 'imToken Wallet SDK GitHub',
                href: 'https://github.com/zengbing15/webview',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ZengBella, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
