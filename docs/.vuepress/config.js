module.exports = {
  plugins: [
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
      'robots',
      {
        host: "https://docs.libellux.com",
        allowAll: true,
        sitemap: "/sitemap.xml"
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
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'googlebot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' }],
    ['meta', { name: 'bingbot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' }],
    ['link', { rel: 'icon', href: '/img/icons/72x72.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '48x48', href: '/img/icons/48x48.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '72x72', href: '/img/icons/72x72.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '144x144', href: '/img/icons/144x144.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '192x192', href: '/img/icons/192x192.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '256x256', href: '/img/icons/256x256.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '384x384', href: '/img/icons/384x384.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '512x512', href: '/img/icons/512x512.png' }],
    ['meta', { name: 'msapplication-TileImage', content: '/img/icons/144x144.png' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Open-source documentation and configuration.' }],
    ['meta', { property: 'og:description', content: 'Libellux: Up and Running is a collection of personal notes and documentation regarding open-source software configuration.' }],
    ['meta', { property: 'og:url', content: 'https://docs.libellux.com' }],
    ['meta', { property: 'og:site_name', content: 'Libellux: Up and Running' }],
    ['meta', { property: 'og:image', content: '/img/icons/1200x627.png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '627' }],
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
        title: 'Libellux: Up and Running',
        collapsable: false,
        siderbarDepth: 1,
        children: [
          '/',
          {
            title: 'M/Monit System Monitoring',
            path: 'mmonit/',
          },
          {
            title: 'Performance Co-Pilot Grafana',
            path: 'pcp/',
          },
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
          {
            title: 'Graylog Centralized Log Management',
            path: 'graylog/',
          },
          {
            title: 'Rsyslog Log Processing',
            path: 'rsyslog/',
          },
          {
            title: 'Jira Service Desk',
            path: 'jira/',
          },
        ]
      },
    ]
  }
}
