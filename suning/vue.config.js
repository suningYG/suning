module.exports = {
    devServer: {
        proxy: {
          '/pdua': {
            target: 'https://ifast.suning.com',
            changeOrigin: true,
          },
          '/msf': {
            target: 'https://ifast.suning.com',
            changeOrigin: true,
          },
          '/ds': {
            target: 'https://ifast.suning.com',
            changeOrigin: true,
          },
          '/ebuy': {
            target: 'https://ifast.suning.com',
            changeOrigin: true,
          },
          '/th': {
            target: 'https://ifast.suning.com',
            changeOrigin: true,
          },
        }
    }
}