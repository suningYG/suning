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
          '/tuijian':{
            target:"https://ifast.suning.com",
            changeOrigin: true
          },
          '/api':{
            target:'https://lib.suning.com',
            changeOrigin:true
          }
    
        }
    }
}