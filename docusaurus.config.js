// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/**
 * Top-level sections of the site. Each one is its own docs plugin instance so
 * that it gets a clean URL (/about, /skills, ...). They have no sidebar since
 * each section is a single page.
 */
const sections = [
  { id: 'about', label: 'About' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

/** @param {string} id */
const sectionPlugin = (id) => [
  '@docusaurus/plugin-content-docs',
  {
    id,
    path: id,
    routeBasePath: id,
    sidebarPath: false,
  },
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'QuadMLabs',
  tagline:
    'Atlassian Consultant combining platform expertise, solution design, automation, integrations, and custom development.',
  favicon: 'img/LOGO.jpg',

  url: 'https://quadmlabs.com',
  baseUrl: '/',

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
        // "Projects" section (default docs plugin instance, served at /docs).
        docs: {
          sidebarPath: './sidebars.js',
        },
        // Blog is disabled for now (pass an options object to enable it later).
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  plugins: sections.map((s) => sectionPlugin(s.id)),

  themeConfig: {
    image: 'img/LOGO.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'QuadMLabs',
      logo: {
        alt: 'QuadMLabs logo',
        src: 'img/LOGO.jpg',
      },
      items: [
        {
          type: 'doc',
          docId: 'about',
          docsPluginId: 'about',
          position: 'left',
          label: 'About',
        },
        {
          type: 'docSidebar',
          sidebarId: 'projectsSidebar',
          position: 'left',
          label: 'Projects',
        },
        ...sections
          .filter((s) => s.id !== 'about')
          .map((s) => ({
            type: 'doc',
            docId: s.id,
            docsPluginId: s.id,
            position: 'left',
            label: s.label,
          })),
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} QuadMLabs.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
