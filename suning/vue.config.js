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
          
          '/slv': {
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
          },
          '/nsafs':{
            target:'https://ifast.suning.com',
            changeOrigin:true
          },
          '/ip-web':{
            target:'https://ipservice.suning.com',
            changeOrigin:true
          },
  
          '/ds': {
            target: 'https://ifast.suning.com',
            changeOrigin: true
          }
    
<<<<<<< HEAD
    
=======

>>>>>>> 70d4a00057298ece510b3dbf27bbb429e16afb4c
        }
    }
}