module.exports = {
  publicPath: '/',
  lintOnSave: process.env.NODE_ENV !== 'production', // Disable ESLint for production
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