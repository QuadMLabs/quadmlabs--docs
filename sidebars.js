// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Documentation',
      link: { 
        type: 'doc',
        id: 'intro', // <- Archivo intro.md o intro.mdx en /docs
      },
      items: [
        {
          type: 'category',
          label: 'Project Performance & Flow Analytics',
          link: { type: 'doc', id: 'project-performance-and-flow-analytics/index' },
          items: [
            'project-performance-and-flow-analytics/ppfa-overview',
            'project-performance-and-flow-analytics/ppfa-getting-started',
            'project-performance-and-flow-analytics/ppfa-key-indicators-period-analyzed',
            'project-performance-and-flow-analytics/ppfa-quick-cards',
            'project-performance-and-flow-analytics/ppfa-flow-health',
          ],
        },

        // AQUI PUEDES AGREGAR MÁS CATEGORÍAS EN EL FUTURO
        // Ejemplo:
        // {
        //   type: 'category',
        //   label: 'Jira Administration',
        //   items: [
        //     'jira-admin/overview',
        //     'jira-admin/workflows',
        //   ],
        // },
      ],
    },
  ],
   
};

export default sidebars;
