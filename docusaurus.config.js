// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/**
 * Top-level sections of the site. Each one is its own docs plugin instance so
 * that it gets a clean URL (/about, /experience, ...). Each section is a single
 * page (slug: /), so there is no sidebar. The first entry is shown before
 * "Projects" in the navbar.
 */
const sections = [
  { id: 'about', label: 'About & Contact' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Credentials & Skills' },
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

/** @param {{id: string, label: string}} s */
const navbarDoc = (s) => ({
  type: 'doc',
  docId: s.id,
  docsPluginId: s.id,
  position: 'left',
  label: s.label,
});

const [aboutItem, ...otherItems] = sections.map(navbarDoc);

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'QuadMLabs',
  tagline:
    'I work with Jira, Jira Service Management and Confluence: keeping them running in production, fixing what breaks, and building what the platform does not do out of the box.',
  favicon: 'img/favicon.ico',

  url: 'https://quadmlabs.com',
  baseUrl: '/',

  organizationName: 'QuadMLabs',
  projectName: 'quadmlabs--docs',

  future: {
    v4: true,
  },

  headTags: [
    {
      tagName: 'link',
      attributes: { rel: 'icon', type: 'image/svg+xml', href: '/img/logo-mark.svg' },
    },
    {
      tagName: 'link',
      attributes: { rel: 'apple-touch-icon', href: '/img/apple-touch-icon.png' },
    },
  ],

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    localeConfigs: {
      en: { label: 'English', htmlLang: 'en-US' },
      es: { label: 'Español', htmlLang: 'es-ES' },
    },
  },

  presets: [
    [
      'classic',
      {
        // "Projects" section (default docs plugin instance, served at /projects).
        docs: {
          routeBasePath: 'projects',
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
    image: 'img/social-card.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'QuadMLabs',
      logo: {
        alt: 'QuadMLabs logo',
        src: 'img/logo-mark.svg',
      },
      items: [
        aboutItem,
        { type: 'docSidebar', sidebarId: 'projectsSidebar', position: 'left', label: 'Projects' },
        ...otherItems,
        { type: 'localeDropdown', position: 'right' },
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
