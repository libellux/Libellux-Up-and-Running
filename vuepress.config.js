module.exports = {
  themeConfig: {
    docsDir: 'docs',
    docsBranch: 'master',
    // public file path
    logo: '/test.png',
    // If you set it in the form of `organization/repository`
    // we will take it as a GitHub repo
    repo: 'libellux/Libellux-Up-and-Running-dev',
    plugins: [
      [
        '@vuepress/pwa',
        {
          skipWaiting: false,
        },
      ],
      ['@vuepress/plugin-pwa-popup']
    ],
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
              {
                text: 'OSSEC Host Intrusion Detection',
                link: '/ossec/'
              },
              {
                text: 'Greenbone Vulnerability Manager',
                link: '/openvas/'
              },
              {
                text: 'ClamAV Antivirus Server',
                link: '/clamav/'
              },
              {
                text: 'PSAD Intrusion Detection',
                link: '/psad/'
              },
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
          {
            text: 'Greenbone Vulnerability Manager',
            link: '/openvas/',
            sidebarDepth: 2,
          },
          {
            text: 'ClamAV Antivirus Server',
            link: '/clamav/',
            sidebarDepth: 2,
          },
          {
            text: 'PSAD Intrusion Detection',
            link: '/psad/',
            sidebarDepth: 2,
          }
        ],
      }
    ]
  }
}
