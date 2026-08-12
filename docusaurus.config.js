// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'QuadMLabs',
  tagline:
    'Technical consulting for Jira, JSM, and Confluence, from administration and optimization to automation, integrations, and custom solutions.',
  favicon: 'img/LOGO.jpg',

  // 👇 Tu dominio REAL
  url: 'https://quadmlabs.com',
  baseUrl: '/',

  // GitHub Pages config
  organizationName: 'QuadMLabs',
  projectName: 'quadmlabs--docs',

  future: {
    v4: true,
  },

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: undefined,
        },
        /*blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/QuadMLabs/quadmlabs--docs/tree/main/',
        },*/
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/LOGO.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'QuadMLabs',
      logo: {
        alt: 'Logo',
        src: 'img/LOGO.jpg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'sidebarsAbout',
          docsPluginId: 'about',
          position: 'left',
          label: 'About',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'docSidebar',
          sidebarId: 'sidebarsPortfolio',
          docsPluginId: 'portfolio',
          position: 'left',
          label: 'Portfolio',
        },
        {
          type: 'docSidebar',
          sidebarId: 'sidebarsContact',
          docsPluginId: 'contact',
          position: 'left',
          label: 'Contact',
        },
        {
          type: 'docSidebar',
          sidebarId: 'sidebarsPrivacy',
          docsPluginId: 'policy',
          position: 'left',
          label: 'Security & Privacy',
        },
        //{ to: '/blog', label: 'Blog', position: 'left' },
        /*{
          href: 'https://github.com/QuadMLabs/quadmlabs--docs',
          label: 'GitHub',
          position: 'right',
        },*/
      ],
    },
    footer: {
      style: 'dark',
      links: [
        /*{
          title: 'Documentation',
          items: [{ label: 'Documentation', to: '/docs/intro' }],
        },*/
        /*{
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },*/
        /*{
          title: 'More',
          items: [
            
            { label: 'Contacts', to: '/contact/contact' },
            
            {
              label: 'GitHub',
              href: 'https://github.com/QuadMLabs/quadmlabs--docs',
            },
          ],
        },*/
      ],
      copyright: `Copyright © ${new Date().getFullYear()} QuadMLabs.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },

  // --- PLUGIN PORTFOLIO ---
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'portfolio',
        path: 'portfolio',
        routeBasePath: 'portfolio',
        sidebarPath: './sidebarsPortfolio.js',
        editUrl: undefined,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'contact',
        path: 'contact', 
        routeBasePath: 'contact',
        sidebarPath: './sidebarsContact.js',
        editUrl: undefined,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'policy',
        path: 'policy', 
        routeBasePath: 'policy',
        sidebarPath: './sidebarsPrivacy.js',
        editUrl: undefined,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'about',
        path: 'about', 
        routeBasePath: 'about',
        sidebarPath: './sidebarsAbout.js',
        editUrl: undefined,
      },
    ],
  ],
};

export default config;
