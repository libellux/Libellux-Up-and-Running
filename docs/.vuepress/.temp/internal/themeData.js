export const themeData = {
  "docsDir": "docs",
  "docsBranch": "master",
  "logo": "/test.png",
  "repo": "libellux/Libellux-Up-and-Running-dev",
  "plugins": [
    [
      "@vuepress/pwa",
      {
        "skipWaiting": false
      }
    ],
    [
      "@vuepress/plugin-pwa-popup"
    ]
  ],
  "navbar": [
    {
      "text": "Libellux: Up & Running",
      "link": "/",
      "children": [
        {
          "text": "Zero Trust Network",
          "children": [
            "/docs/"
          ]
        },
        {
          "text": "Intrusion Detection and Prevention",
          "children": [
            {
              "text": "OSSEC Host Intrusion Detection",
              "link": "/ossec/"
            },
            {
              "text": "Greenbone Vulnerability Manager",
              "link": "/openvas/"
            },
            {
              "text": "ClamAV Antivirus Server",
              "link": "/clamav/"
            },
            {
              "text": "PSAD Intrusion Detection",
              "link": "/psad/"
            }
          ]
        },
        {
          "text": "Monitoring and Management",
          "children": [
            "/docs/"
          ]
        }
      ]
    },
    {
      "text": "Portal",
      "link": "https://portal.libellux.com"
    }
  ],
  "sidebar": [
    {
      "text": "Libellux: Up and Running",
      "collapsable": false,
      "sidebarDepth": 1,
      "children": [
        {
          "text": "Introduction",
          "link": "/",
          "sidebarDepth": 2
        }
      ]
    },
    {
      "text": "Intrusion Detection and Prevention",
      "collapsable": false,
      "sidebarDepth": 1,
      "children": [
        {
          "text": "OSSEC Host Intrusion Detection",
          "link": "/ossec/",
          "sidebarDepth": 2
        },
        {
          "text": "Greenbone Vulnerability Manager",
          "link": "/openvas/",
          "sidebarDepth": 2
        },
        {
          "text": "ClamAV Antivirus Server",
          "link": "/clamav/",
          "sidebarDepth": 2
        },
        {
          "text": "PSAD Intrusion Detection",
          "link": "/psad/",
          "sidebarDepth": 2
        }
      ]
    }
  ],
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}
