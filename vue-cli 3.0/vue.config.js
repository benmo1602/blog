/* eslint-disable */
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');
// 拼接路径
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  productionSourceMap: false,
  baseUrl: '/',
  outputDir: 'dist',
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8888,
    proxy: {
      'operation': {
        target: 'http://localhost:8888/',
        ws: true,
        changeOrigin: true
      }
    }
  },
  configureWebpack: config => {
    config.externals = {
    }
    config.resolve = {
      extensions:['.js', '.vue', '.json'],
      alias: {
        'vue':'vue/dist/vue.common.js',
        '@': path.resolve(__dirname,'src')
      }
    }
    if (process.env.NODE_ENV === 'production') {
      // mutate config for production...
    } else {
      // mutate config for development...
    }
    if (process.argv[3] === 'analyse') {
      // mutate for test...
      config.plugins.push(new BundleAnalyzerPlugin());
    } 
  },
  // webpack 设置
  // 默认设置: https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-service/lib/config/base.js
  chainWebpack: config => {
    // markdown
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('text-loader')
      .loader('text-loader')
      .end()
    // i18n
    config.module
      .rule('i18n')
      .resourceQuery(/blockType=i18n/)
      .use('i18n')
      .loader('@kazupon/vue-i18n-loader')
      .end()
    // svg
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .include
      .add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
    // image exclude
    const imagesRule = config.module.rule('images')
    imagesRule
      .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
      .exclude
      .add(resolve('src/icons'))
      .end()
    // babel-polyfill 加入 entry
    const entry = config.entry('app')
    entry
      .add('babel-polyfill')
      .end()
  }
}
