// @ts-check
// Docusaurus v3+ ESM config
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AI Assistant for Psychological Assessment, Guidance, and Support',
  tagline: 'Therapy is cool.',
  favicon: 'img/favicon.ico',

  future: { v4: true },

  // GitHub Pages URL settings
  url: 'https://alexstarbuck.github.io',
  baseUrl: '/ai-therapist-wiki/',

  // GH Pages repo
  organizationName: 'alexstarbuck',
  projectName: 'ai-therapist-wiki',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  trailingSlash: false,

  // Load Google Fonts for our “book-like” typography
  stylesheets: [
    {
      href:
        'https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600;700&family=Lora:wght@600;700&display=swap',
      rel: 'stylesheet',
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: 'docs',
          sidebarPath: './sidebars.js',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // editUrl: 'https://github.com/alexstarbuck/ai-therapist-wiki/edit/master',
        },
        blog: {
          showReadingTime: true,
          feedOptions: { type: ['rss', 'atom'], xslt: true },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Home',
        logo: { alt: 'AI Therapist Logo', src: 'img/logo.svg' },
        items: [
          { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Wiki' },
          { to: '/blog', label: 'Blog', position: 'left' },
          { href: 'https://github.com/alexstarbuck/', label: 'GitHub', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          { title: 'Docs', items: [{ label: 'Wiki Pages', to: '/docs/intro' }] },
          {
            title: 'Community',
            items: [
              { label: 'YouTube', href: 'https://www.youtube.com/@alexander.starbuck' },
              { label: 'Instagram', href: 'https://www.instagram.com/zeraxo.agency/?hl=en' },
              { label: 'Web', href: 'https://zeraxo.com' },
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'Blog', to: '/blog' },
              { label: 'GitHub', href: 'https://github.com/alexstarbuck/' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://zeraxo.com" target="_blank" rel="noopener noreferrer">Zeraxo LLC</a>. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
