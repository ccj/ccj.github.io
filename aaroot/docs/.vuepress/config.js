module.exports = {
    title: 'ccj',
    description: '持续更新，是坚持也是进步',
    configureWebpack: {
        resolve: {
            alias: {
                '@': 'docs/' // 设置别名 
            }
        }
    },
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        // sidebarDepth: 0,
        // displayAllHeaders: true,
        sidebarDepth: 2,
        nav: [
            {
                text: 'JS',
                link: 'summary/js/vue'
            },
            {
                text: 'CSS',
                link: 'summary/js/css'
            },
            {
                text: 'VUE',
                link: 'summary/js/vue'
            },
            {
                text: 'WEBPACK',
                link: 'summary/js/webapck'
            },
            {
                text: 'NODE',
                link: 'summary/js/node'
            },
        ],
        sidebar: {
            '/summary/js/': getBasicsSidebar(
              'JS基础',
              'HTML',
              'CSS',
              'VUE基础',
              'React',
              'Wepback',
              'Http',
              // '常见考点',
              '性能优化',
            )
        },
        repo: 'ccj',
        repoLabel: 'Github'
    }
}

function getBasicsSidebar(groupA, groupB, groupC, groupD,groupE, groupF,groupG,groupH,groupI) {
    return [{
        title: groupA,
        collapsable: false,
        children: ['/summary/js/vue','/about/basics/事件流','/about/basics/跨域','/about/basics/generator','/about/basics/循环相关函数','/about/basics/Object','/about/basics/数据类型','/about/basics/数组操作','/about/basics/new的过程','/about/basics/原型链', '/about/basics/闭包','/about/basics/异步', '/about/brower/事件循环','/about/brower/渲染过程', '/about/basics/arguments','/about/basics/promise','/about/basics/ts学习','/about/basics/垃圾回收机制']
      },
      {
        title: groupB,
        collapsable: true,
        children: ['/summary/js/react']
      },
      {
        title: groupC,
        collapsable: true,
        children: ['/about/css/盒子模型','/about/css/盒子布局','/about/css/scss使用','/about/css/清除浮动的几种方式','/about/css/BFC介绍和解决的问题']
      },
      {
        title: groupD,
        collapsable: true,
        children: ['/about/vue/newVue时候都做了什么','/about/vue/vue实例挂载','/about/vue/render函数','/about/vue/虚拟DOM','/about/vue/update','/about/vue/watch实现','/about/vue/nextTick','/about/vue/路由原理','/about/vue/生命周期', '/about/vue/自定义model','/about/vue/响应式observe','/about/vue/模版渲染','/about/vue/组件通信','/about/vue/vue3']
      },
      {
        title: groupE,
        collapsable: true,
        children: ['/about/react/react',]
      },
      {
        title: groupF,
        collapsable: true,
        children: ['/about/webpack/webpack配置',]
      },
      {
        title: groupG,
        collapsable: true,
        children: [ '/about/http/HTTP基础知识', '/about/http/缓存','/about/http/web安全']
      },
      // {
      //   title: groupH,
      //   collapsable: true,
      //   children: ['/about/question/vue','/about/question/js','/about/question/移动端问题']
      // },
      {
        title: groupI,
        collapsable: true,
        children: ['/about/nature/节流防抖','/about/nature/性能优化总结']
      }
    ]
  }