module.exports = {
  configureWebpack: {
    resolve: {
      // extensions: ['.js', '.vue', '.json'],
      // 起别名
      alias: {
        // '@': resolve('src'),
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    },
  }
  
}