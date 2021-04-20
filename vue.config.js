const path = require('path')

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : './',

    chainWebpack: config => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
        // 这里修改 sylus 为 less
        types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)));
    },
}

function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                // 这里修改为所需要全局引入的less文件的路径
                // __dirname 这个是获取当前更目录的地址
                // path.resolve(__dirname, './src/styles/imports.styl'),

                path.resolve(__dirname, './src/assets/less/common.less'),
            ],
        })
}