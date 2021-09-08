module.exports = {
  themeConfig: {
    home: '/',
    docsDir: '/docs/',
    docsBranch: 'master',
    // public file path
    logo: '/test.png',
    // If you set it in the form of `organization/repository`
    // we will take it as a GitHub repo
    repo: 'libellux/Libellux-Up-and-Running-dev',
    navbar: [
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
        text: 'Greenbone Vulnerability Manager',
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
      }
    ]
  }
}
