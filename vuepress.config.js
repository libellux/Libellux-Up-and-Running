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
    sidebar: {
      '/docs/': [
        {
          text: 'Guide',
          children: ['/docs/README.md', '/docs/README.md'],
        },
      ],
      '/docs/': [
        {
          text: 'Reference',
          children: ['/docs/README.md', '/docs/README.md'],
        },
      ],
    },
  }
}
