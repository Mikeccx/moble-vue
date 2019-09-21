
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: true,
  publicPath: './',
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('layout', resolve('src/layout'))
      .set('base', resolve('src/base'))
      .set('static', resolve('src/static'))
      .set('@', resolve('src'))
      // 配置px2rem
      .set('config', resolve('config'))
    config.module
      .rule('css')
      .test(/\.css$/)
      .oneOf('vue')
      .resourceQuery(/\?vue/)
      .use('px2rem')
      .loader('px2rem-loader')
      .options({
        remUnit: 75
      })
      // 配置压缩图片
    // config.module
      // .rule('images')
      // .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
      // .oneOf('vue')
      // .resourceQuery(/\?vue/)
      // .use('image-webpack-loader')
      // .loader('image-webpack-loader')
      // .options({
      //   bypassOnDebug: true
      // })
      // .end()
    // // 配置less
    // .rule('less')
    // .test(/\.less$/)
    // .oneOf('vue')
    // .resourceQuery(/\?vue/)
    // .use('style-loader', 'css-loader')
    // .loader('postcss-loader')
    // .options({
    //   remUnit: 75
    // })
  }
}
