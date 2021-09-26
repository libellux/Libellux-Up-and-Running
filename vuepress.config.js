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
              {
                text: 'WireGuard Secure VPN Tunnel',
                link: '/wireguard/'
              },
              {
                text: 'Two-factor authentication w/ privacyIDEA and YubiKey',
                link: '/privacyidea/'
              },
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
              {
                text: 'M/Monit System Monitoring',
                link: '/mmonit/'
              },
              {
                text: 'Graylog Centralized Log Management',
                link: '/graylog/'
              },
              {
                text: ' Rsyslog Syslog Processing',
                link: '/rsyslog/'
              },
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
        text: 'Zero Trust Network',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          // WireGuard
          {
            text: 'WireGuard Secure VPN Tunnel',
            link: '/wireguard/',
            sidebarDepth: 2,
          },
          // PrivacyIDEA
          {
            text: 'Two-factor authentication w/ privacyIDEA and YubiKey',
            link: '/privacyidea/',
            sidebarDepth: 2,
          },
        ]
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
      },
      {
        text: 'Monitoring and Management',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          // M/Monit
          {
            text: 'M/Monit System Monitoring',
            link: '/mmonit/',
            sidebarDepth: 2,
          },
          // Graylog
          {
            text: 'Graylog Centralized Log Management',
            link: '/graylog/',
            sidebarDepth: 2,
          },
          // Rsyslog
          {
            text: 'Rsyslog Syslog Processing',
            link: '/rsyslog/',
            sidebarDepth: 2,
          },
        ]
      }
    ]
  }
}
