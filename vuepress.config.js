module.exports = {
  themeConfig: {
    docsDir: 'docs',
    docsBranch: 'master',
    // public file path
    logo: '/test.png',
    // If you set it in the form of `organization/repository`
    // we will take it as a GitHub repo
    repo: 'libellux/Libellux-Up-and-Running-dev',
    locales: {
      '/': {
        lang: 'en-US',
        selectLanguageName: 'English',
        title: 'Libellux',
        description: 'Open-source documentation',
      }
    },
    navbar: [
      // NavbarItem
      {
        text: 'Libellux: Up & Running',
        link: '/',
        children: [
          {
            text: 'Zero Trust Network',
            children: [
              '/docs/'
            ],
          },
          {
            text: 'Intrusion Detection and Prevention',
            children: [
              '/docs/'
            ],
          },
          {
            text: 'Monitoring and Management',
            children: [
              '/docs/'
            ],
          },
        ],
      },
      // NavbarItem
      {
        text: 'Portal',
        link: 'https://portal.libellux.com',
      }
    ],
    sidebar: [
      // SidebarItem
      {
        text: 'Libellux: Up and Running',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          // SidebarItem
          {
            text: 'Introduction',
            link: '/',
            sidebarDepth: 2,
          },
        ],
      },
      {
        text: 'Intrusion Detection and Prevention',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          // OSSEC
          {
            text: 'OSSEC Host Intrusion Detection',
            link: '/ossec/',
            sidebarDepth: 2,
          },
        ],
      }
    ]
  }
}
