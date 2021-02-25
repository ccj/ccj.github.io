module.exports = {
    title: 'ccj',
    description: '持续更新，是坚持也是进步',
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: `/favicon.ico`
            }
        ]
    ],
    markdown: {
        lineNumbers: true
	},
    themeConfig: {
        nav: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: 'JS',
                link: '/pages/js/react'
            }
        ],
        sidebarDepth: 2,
        sidebar: {
            '/pages/js/': getBasicsSidebar(
                'JS基础'
            )
        },
        repo: 'ccj',
        repoLabel: 'Github'
    },
    plugins: [
        ['@vuepress/back-to-top', true],
        [
            '@vuepress/pwa',
            {
                serviceWorker: true,
                updatePopup: true
            }
        ]
    ]
}

function getBasicsSidebar(groupA) {
    return [
        {
            title: groupA,
            collapsable: false,
            children: ['/pages/js/react','/pages/js/m']
        }
    ]
  }