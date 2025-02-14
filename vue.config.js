module.exports = {
  publicPath: '/',
  chainWebpack: (config) => {
        config.resolve.symlinks(false)
  },
  devServer: {
    clientLogLevel: 'debug',
    compress: false,
    contentBase: './dist'
  },
  transpileDependencies: [], //
}