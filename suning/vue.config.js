module.exports = {
    devServer: {
        proxy: {
          '/pdua': {
            target: 'https://ifast.suning.com',
            changeOrigin: true,
          },
          '/mzfs': {
            target: 'https://ifast.suning.com',
            changeOrigin: true,
          },

        }
    }
}