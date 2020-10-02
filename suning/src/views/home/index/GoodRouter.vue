<template>
    <div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    // 封装一个函数用来请求接口数据，根据传进来的路由首先在beforeRouteEnter里面调用一下
    // 看看请求哪个接口的数据，然后切换路由的时候在看一下是请求哪个接口的数据，也就是在beforeRouteUpdate里面调用一下
    // 这个请求接口的函数
    // beforeRouteEnter(to, from, next) {
        
    //     console.log(to,from)
    //     next(vm=>{
    //         vm.loadDataRoute(to.path)
    //     })
    // },
    // beforeRouteUpdate (to, from, next) {
    //     console.log(to,from)
    //     next()
    // },
    // methods:{
    //     loadDataRoute(path){
    //         // console.log(path)
    //         switch(path){
    //             case '/index/Goods/food':
                    
    //         }
    //     }
    // }

}
</script>
<style lang="stylus" scoped>

</style>