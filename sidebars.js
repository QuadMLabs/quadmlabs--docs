// @ts-check

/**
 * Sidebar of the "Projects" section (default docs plugin instance).
 * To add a project, add a new category inside the "Projects" items.
 *
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  projectsSidebar: [
    {
      type: 'category',
      label: 'Projects',
      link: { type: 'doc', id: 'intro' },
      items: [
        {
          type: 'category',
          label: 'Project Performance & Flow Analytics',
          link: { type: 'doc', id: 'project-performance-and-flow-analytics/index' },
          items: [],
        },
      ],
    },
  ],
};

export default sidebars;
