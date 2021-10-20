module.exports = {
  plugins: [
    [
      '@vuepress/plugin-google-analytics',
      {
        id: 'G-BF661YHCGV',
      },
    ],
    [
      '@vuepress/docsearch',
      {
        apiKey: '0883cb6afad528a5d7eec6dd61da7b25',
        indexName: 'libellux',
      },
    ],
    [
      '@vuepress/pwa',
      {
        skipWaiting: true,
      },
    ],
    [
      'vuepress-plugin-sitemap2',
      {
        hostname: 'https://www.libellux.com',
        changefreq: 'weekly',
        exclude: 'https://www.libellux.com/404.html'
      },
    ],
  ],
  title: 'Libellux',
  description: 'Libellux: Up & Running provides documentation on how-to install open-source software from source. The focus is Zero Trust Network to enhance the security for existing applications or install tools to detect and prevent threats.',
  head: [
    // Robots
    ['meta', { name: 'robots', content: 'index, follow' }],

    // Web manifest
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#8c7bce' }],
    
    // Twitter
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:creator', content: '@libellux1' }],

    ['meta', { name: 'twitter:title', content: 'Libellux' }],
    ['meta', { name: 'twitter:description', content: 'Libellux: Up & Running provides documentation on how-to install open-source software from source. The focus is Zero Trust Network to enhance the security for existing applications or install tools to detect and prevent threats.' }],

    ['meta', { name: 'twitter:image', content: 'https://www.libellux.com/img/icons/4096x4096.png' }],
    ['meta', { name: 'twitter:width', content: '4096' }],
    ['meta', { name: 'twitter:height', content: '4096' }],

    // Open Graph
    ['meta', { property: 'og:locale', content: 'en_US' }],
    ['meta', { property: 'og:type', content: 'website' }],

    ['meta', { property: 'og:title', content: 'Libellux' }],
    ['meta', { property: 'og:description', content: 'Libellux: Up & Running provides documentation on how-to install open-source software from source. The focus is Zero Trust Network to enhance the security for existing applications or install tools to detect and prevent threats.' }],

    ['meta', { property: 'og:url', content: 'https://www.libellux.com' }],
    ['meta', { property: 'og:site_name', content: 'Libellux' }],

    ['meta', { property: 'og:publisher', content: 'https://www.facebook.com/libellux1' }],
    ['meta', { property: 'og:author', content: 'https://www.facebook.com/fredrik.hilmersson.1' }],

    ['meta', { property: 'og:image', content: 'https://www.libellux.com/img/icons/1200x627.png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '627' }],

    // Icons
    ['link', { rel: 'icon', href: 'https://www.libellux.com/img/icons/72x72.png' }],
    ['meta', { name: 'msapplication-TileImage', content: 'https://www.libellux.com/img/icons/144x144.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '48x48', href: 'https://www.libellux.com/img/icons/48x48.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '72x72', href: 'https://www.libellux.com/img/icons/72x72.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '144x144', href: 'https://www.libellux.com/img/icons/144x144.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '192x192', href: 'https://www.libellux.com/img/icons/192x192.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '256x256', href: 'https://www.libellux.com/img/icons/256x256.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '384x384', href: 'https://www.libellux.com/img/icons/384x384.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '512x512', href: 'https://www.libellux.com/img/icons/512x512.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '1200x627', href: 'https://www.libellux.com/img/icons/1200x627.png' }],
  ],
  themeConfig: {
    docsDir: 'docs',
    docsBranch: 'master',
    docsRepo: 'https://github.com/libellux/Libellux-Up-and-Running/tree/master/docs',
    darkMode: true,
    // public file path
    logo: '/img/icons/72x72.png',
    // If you set it in the form of `organization/repository`
    // we will take it as a GitHub repo
    repo: 'https://github.com/libellux/Libellux-Up-and-Running',
    navbar: [
      // NavbarItem
      {
        text: 'Libellux: Up & Running',
        link: '/',
        children: [
          {
            text: 'Libellux: Up & Running',
            children: [
              {
                text: 'Introduction',
                link: '/'
              },
            ],
          },
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
        link: 'https://libellux.cloudflareaccess.com',
      },
      {
        text: 'Status',
        link: 'https://stats.uptimerobot.com/nlXRNfXlXk',
      }
    ],
    sidebar: [
      // SidebarItem
      {
        text: 'Libellux: Up & Running',
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
