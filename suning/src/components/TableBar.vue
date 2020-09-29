<template>
    <footer>

        <div
         v-for="item in imgList"
         :key="item.id" 
         @click="clickHandler(item.id)" 
         :class="{active : active == item.id}"
         >
            <img :src="item.imgsrc" alt="">
            <h1>{{item.content}}</h1>
        </div>
    </footer>
</template>
<script>
export default {
    methods: {
        clickHandler(id){
            let path = this.imgList.find(value => {
                return value.id === id
            }).route
            // console.log(path)
            // console.log(this.$route.path)
            if(this.$route.path === path) return
            this.$router.push(path)
            this.active = id
        }
    },
    mounted() {
        if (this.$route.matched[1].path === "/index") this.active = "001"
        this.up = this.active
    },
    beforeUpdate() {
        // console.log(this.up)

        // let src = this.imgList.find(value => {
        //     return value.id === this.active
        // }).imgsrc

        // this.imgList.find(value => {
        //     return value.id === this.active
        // }).imgsrc = this.imgList.find(value => {
        //     return value.id === this.active
        // }).imgsrc2

        // this.imgList.find(value => {
        //     return value.id === this.active
        // }).imgsrc2 = src

        // if(this.active !== this.up){
        //     this.imgList.find(value => {
        //             return value.id === this.up
        //     }).imgsrc = this.imgList.find(value => {
        //     return value.id === this.up
        // }).imgsrc2

            
        //     // console.log(this.imgList.find(value => {
        //     //         return value.id === this.up
        //     // }))
        // }
        // this.up = this.active
        // src = this.imgList.find(value => {
        //     return value.id === this.up
        // }).imgsrc2
        
    },
    data() {
        return {
            up:"",
            active:"",
            imgList:[
                {
                    id:"001",
                    imgsrc:require("../assets/imgs/首页.png"),
                    imgsrc2:require("../assets/imgs/首页选中.png"),
                    route:"/index",
                    content:"首页"
                },
                {
                    id:"002",
                    imgsrc:require("../assets/imgs/分类.png"),
                    imgsrc2:require("../assets/imgs/分类选中.png"),
                    route:"/cate",
                    content:"分类"
                },
                {
                    id:"003",
                    imgsrc:require("../assets/imgs/直播.png"),
                    imgsrc2:require("../assets/imgs/直播选中.png"),
                    route:"/live",
                    content:"直播"
                },
                {
                    id:"004",
                    imgsrc:require("../assets/imgs/购物车.png"),
                    imgsrc2:require("../assets/imgs/购物车选中.png"),
                    route:"/goods",
                    content:"购物车"
                },
                {
                    id:"005",
                    imgsrc:require("../assets/imgs/我的.png"),
                    imgsrc2:require("../assets/imgs/我的选中.png"),
                    route:"/self",
                    content:"我的易购"
                },

            ]   
        }
    },
}
</script>
<style lang="stylus" scoped>
footer 
    width 100%
    height 0.5rem
    padding-left 0.26rem
    padding-right 0.18rem
    background #fefefe
    display flex
    justify-content space-between
    div
        height 100%
        display flex
        flex-direction column
        justify-content center
        align-items center
        padding-top 0.07rem
        img
            width 0.24rem
            height 0.24rem 
        h1
            font-weight normal
            font-size 0.14rem
            color #6b6b6b
.active
    h1
        color #000000
        
</style>