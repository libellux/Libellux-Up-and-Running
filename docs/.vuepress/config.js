module.exports = {
  plugins: [
    [
      'social-share',
      {
         networks: ['twitter', 'facebook', 'reddit']
      },
    ],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-174138980-1'
      }
    ],
    [
      'sitemap',
      {
        hostname: 'https://docs.libellux.com'
      }
    ],
    [
      '@vuepress/back-to-top',
    ],
    [
      '@vuepress/last-updated',
      {
        dateOptions:{
          hours12: false
        }
      }
    ],
    [
      '@vuepress/medium-zoom',
      {
        selector: 'img.zoom-custom-imgs',
        options: {
          margin: 16
        }
      }
    ],
  ],
  title: 'Libellux',
  description: 'Libellux: Up and Running is a collection of personal notes and documentation regarding open-source software configuration.',
  head: [
    // Robots
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'Twitterbot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' }],
    ['meta', { name: 'googlebot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' }],
    ['meta', { name: 'bingbot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' }],

    // Twitter
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:creator', content: '@libellux1' }],

    ['meta', { name: 'twitter:title', content: 'Libellux: Up and Running' }],
    ['meta', { name: 'twitter:description', content: 'Libellux: Up and Running is a collection of personal notes and documentation regarding open-source software configuration.' }],

    ['meta', { name: 'twitter:image', content: 'https://docs.libellux.com/img/icons/4096x4096.png' }],
    ['meta', { name: 'twitter:width', content: '4096' }],
    ['meta', { name: 'twitter:height', content: '4096' }],

    // Open Graph
    ['meta', { property: 'og:locale', content: 'en_US' }],
    ['meta', { property: 'og:type', content: 'website' }],

    ['meta', { property: 'og:title', content: 'Libellux: Up and Running' }],
    ['meta', { property: 'og:description', content: 'Libellux: Up and Running is a collection of personal notes and documentation regarding open-source software configuration.' }],

    ['meta', { property: 'og:url', content: 'https://docs.libellux.com' }],
    ['meta', { property: 'og:site_name', content: 'Libellux: Up and Running' }],

    ['meta', { property: 'og:publisher', content: 'https://www.facebook.com/libellux1' }],
    ['meta', { property: 'og:author', content: 'https://www.facebook.com/fredrik.hilmersson.1' }],

    ['meta', { property: 'og:image', content: 'https://docs.libellux.com/img/icons/1200x627.png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '627' }],

    // Icons
    ['link', { rel: 'icon', href: 'https://docs.libellux.com/img/icons/72x72.png' }],
    ['meta', { name: 'msapplication-TileImage', content: 'https://docs.libellux.com/img/icons/144x144.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '48x48', href: 'https://docs.libellux.com/img/icons/48x48.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '72x72', href: 'https://docs.libellux.com/img/icons/72x72.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '144x144', href: 'https://docs.libellux.com/img/icons/144x144.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '192x192', href: 'https://docs.libellux.com/img/icons/192x192.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '256x256', href: 'https://docs.libellux.com/img/icons/256x256.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '384x384', href: 'https://docs.libellux.com/img/icons/384x384.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '512x512', href: 'https://docs.libellux.com/img/icons/512x512.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '1200x627', href: 'https://docs.libellux.com/img/icons/1200x627.png' }]
  ],
  themeConfig: {
    logo: '/img/icons/72x72.png',
    smoothScroll: true,
    repo: 'libellux/Libellux-Up-and-Running',
    docsDir: 'docs',
    editLinks: true,
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Libellux: Up and Running', link: '/' },
    ],
    sidebar: [
        {
          title: 'Libellux: Up and Running',   // required
          path: '/',      // optional, link of the title, which should be an absolute path and must exist
          collapsable: false, // optional, defaults to true
          sidebarDepth: 1,    // optional, defaults to 1
        },
        {
          title: 'Zero Trust Network',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            {
              title: 'WireGuard Secure VPN Tunnel',
              path: 'wireguard/',
            },
          ],
        },
        {
          title: 'Intrusion Detection and Prevention',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            {
              title: 'OSSEC Host Intrusion Detection',
              path: 'ossec/',
            },
            {
              title: 'PSAD Intrusion Detection',
              path: 'psad/',
            },
            {
              title: 'OpenVAS Vulnerability Scanner',
              path: 'openvas/',
            },
          ],
        },
        {
          title: 'Monitoring and Performance',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            {
              title: 'M/Monit System Monitoring',
              path: 'mmonit/',
            },
            {
              title: 'Performance Co-Pilot Grafana',
              path: 'pcp/',
            },

            {
              title: 'Graylog Centralized Log Management',
              path: 'graylog/',
            },
            {
              title: 'Rsyslog Log Processing',
              path: 'rsyslog/',
            },
          ],
        },
        {
          title: 'Miscellaneous',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            {
              title: 'Jira Software',
              path: 'jira/',
            },
          ],
        },
      ]
    }
  }

