const { defineConfig } = require('@vue/cli-service')
const path = require('path');

module.exports = {
  lintOnSave : false,//关闭语法检查
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      }
    }
  }
}
