module.exports = {
    title: 'ccj技术博客',
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
    }
}