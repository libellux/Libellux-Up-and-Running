module.exports = {
  themeConfig: {
    docsDir: 'docs',
    docsBranch: 'master',
    // public file path
    logo: '/test.png',
    // If you set it in the form of `organization/repository`
    // we will take it as a GitHub repo
    repo: 'libellux/Libellux-Up-and-Running-dev',
    navbar: [
      // NavbarItem
      {
        text: 'Libellux: Up & Running',
        link: '/',
        activeMatch: '/',
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
        text: 'Foo',
        link: '/docs/',
        children: [
          // SidebarItem
          {
            text: 'github',
            link: 'https://github.com',
            children: ['/docs/readme.md', '/docs/readme.md'],
          },
          // string - page file path
          '/docs/readme.md',
        ],
      },
      {
        text: 'Intrusion Detection and Prevention',
        link: '/docs/',
        children: [
          // SidebarItem
          {
            text: 'OSSEC Host Intrusion Detection',
            link: '/docs/',
            children: ['/docs/readme.md', '/docs/readme.md'],
          },
          // SidebarItem
          {
            text: 'PSAD Intrusion Detection',
            link: '/docs/',
            children: ['/docs/readme.md', '/docs/readme.md'],
          },
          // SidebarItem
          {
            text: 'Greenbone Vulnerability Manager',
            link: '/docs/',
            children: ['/docs/readme.md', '/docs/readme.md'],
          },
          // SidebarItem
          {
            text: 'ClamAV Antivirus Server',
            link: '/docs/',
            children: ['/docs/readme.md', '/docs/readme.md'],
          },
          // string - page file path
          '/docs/readme.md',
        ],
      }
    ]
  }
}
