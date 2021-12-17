const path = require("path");
module.exports = {
  pluginOptions: {
    // style-resource-loader的作用：
    // 导入css预处理器的一些公共的样式文件变量，比如：variables，mixins，functions，
    // 避免在每个样式文件中手动的@import引入，可以直接使用
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/styles/_variables.scss'),
        path.resolve(__dirname, 'src/styles/_mixins.scss')
      ]
    }
  }
}
