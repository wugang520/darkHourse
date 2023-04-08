const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({

    transpileDependencies: true,
    //dev环境解决跨域问题
    devServer: {
        host:'localhost',
        port:'19100',
        // https:false,
        open:true,
        proxy: {
            '/api': {
                target: 'http://localhost:19100/',//此处可以换成自己需要的地址
                changeOrigin: true,
                pathRewrite: {
                  '^/api': '/'
                }
              }
        }
    }

})