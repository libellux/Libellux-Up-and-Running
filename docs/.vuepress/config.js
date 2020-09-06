module.exports = {
  plugins: [
    [
      'social-share',
      {
         networks: ['twitter', 'facebook', 'reddit']
      },
    ],
    [
      'robots',
      {
        host: 'https://wwww.libellux.com',
        sitemap: '/sitemap.xml',
        disallowAll: false,
        allowAll: true,
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
        hostname: 'https://www.libellux.com'
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
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-html5-embed'), {
        html5embed: {
          useImageSyntax: true,
          useLinkSyntax: false
        }
      })
    }
  },
  title: 'Libellux',
  description: 'Libellux Up and Running is a collection of personal notes and documentation regarding open-source software configuration. The focus is to build a so called Zero Trust Network using a central authentication server to enhance the security for our existing applications. We will manage our network using an open-source software tool for provisioning and configuration management to automate and speed up productivity.',
  head: [
    // Robots
    ['meta', { name: 'robots', content: 'index, follow' }],

    // Twitter
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:creator', content: '@libellux1' }],

    ['meta', { name: 'twitter:title', content: 'Libellux' }],
    ['meta', { name: 'twitter:description', content: 'Libellux Up and Running is a collection of personal notes and documentation regarding open-source software configuration. The focus is to build a so called Zero Trust Network using a central authentication server to enhance the security for our existing applications. We will manage our network using an open-source software tool for provisioning and configuration management to automate and speed up productivity.' }],

    ['meta', { name: 'twitter:image', content: 'https://www.libellux.com/img/icons/4096x4096.png' }],
    ['meta', { name: 'twitter:width', content: '4096' }],
    ['meta', { name: 'twitter:height', content: '4096' }],

    // Open Graph
    ['meta', { property: 'og:locale', content: 'en_US' }],
    ['meta', { property: 'og:type', content: 'website' }],

    ['meta', { property: 'og:title', content: 'Libellux' }],
    ['meta', { property: 'og:description', content: 'Libellux Up and Running is a collection of personal notes and documentation regarding open-source software configuration. The focus is to build a so called Zero Trust Network using a central authentication server to enhance the security for our existing applications. We will manage our network using an open-source software tool for provisioning and configuration management to automate and speed up productivity.' }],

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
    
    ['meta', { name: 'google-site-verification', content: 'ETZL1kPGWFR91LmM1H7-ahMFCFKID7P2aXf3k29ISWw' }],
    ['script', {}, `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-5DHC7KR');
    `],
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
          collapsable: false, // optional, defaults to true
          sidebarDepth: 1,    // optional, defaults to 1
          path:'/',
          children: [
            {
              title: 'Introduction',
              path: '/',  
            },
          ],
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
          title: 'Monitoring and Management',
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

