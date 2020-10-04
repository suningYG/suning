<template>
    <div class="limite">
        <div class="limitBox">
            <header>
                <h1>

                    <div></div>
                    <span>限时秒杀</span>

                    <img src="../assets/imgs/秒杀头部.png" alt="">

                    <img src="../assets/imgs/秒杀头部.png" alt="">

                </h1>
            </header>
            <section>
                <div class="goodsInfo" v-for="(item,index) in limitTime" :key="index" v-if="index < 6" >
                    <div class="imgbox">
                        <h1>
                            <i>限时</i>
                            <em>特价</em>
                        </h1>
                        <img :src="item.pictureUrl" alt="">
                    </div>
                    <div class="content">
                        <h3>
                            抢
                        </h3>
                        <h2>
                            {{item.sugGoodsName}}
                        </h2>
                        <p>{{item.feature}}</p>
                        <h4>
                            <i>￥</i>
                            <span>{{item.price | firstPrice}}</span>
                            <em>{{item.price | lastPoint}}</em>
                        </h4>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
export default {
    props:{

        foodList:{
            type:Array,
        },

        goodsList:{

            type:Array,
            required:true
        }
    },
    data() {
        return {
            limitGoods:[]
        }
    },
    computed: {
         limitTime(){

           let arr = this.goodsList.filter((value,index)=>{

               return value.promotionInfo === "秒杀"
           })
           return arr
        }

    },
    filters:{
        firstPrice(value){
            return value.split(".")[0]
        },
        lastPoint(value){
            if(Number(value.split(".")[1]) === 0){
                return ""
            }else{
                return "." + value.split(".")[1]
            }
        }

    }

}
</script>
<style lang="stylus" scoped>
.limite
    width 100%
    height 4.18rem

   
    padding 0 0.12rem
    .limitBox
        height 100%
        width 3.51rem
        border-radius 15px
        padding 0 0.09rem
        background yellowgreen 

    background #eeeeee
    padding 0.1rem 0.12rem
    .limitBox
        height 100%
        width 3.51rem

    background #eeeeee
    padding 0.1rem 0.12rem
    .limitBox
        height 100%
        width 3.51rem

        header 
            height 0.4rem
            h1
                display flex
                align-items center
                background skyblue

                div
                    width  0.18rem
                    height 0.18rem
                    border-radius 100%
                    background red
                    margin-right 0.04rem 
                span 
                    height 0.4rem
                    font-size 0.16rem
                    line-height 0.4rem

                img 
                    width 100%
                    height 100%

                img 
                    width 100%
                    height 100%

        section 
            height 3.72rem
            display flex
            justify-content space-between
            flex-wrap wrap
            .goodsInfo
                width 1.08rem
                height 1.86rem
                .imgbox
                    width 1.08rem
                    height 1.06rem
                    background #f7f7f7
                    border-radius 10px
                    position relative
                    img 
                        width 100%
                        height 100%
                    h1
                        font-size 0.12rem
                        font-weight bolder
                        width 0.31rem
                        height 0.31rem
                        background #ea4350
                        position absolute
                        top 0
                        right 0
                        display flex
                        flex-direction column
                        justify-content center
                        align-items center
                        border-top-right-radius 8px
                        border-bottom-left-radius 8px
                        i 
                            color #fdf75d
                .content
                    height 0.8rem
                    position relative
                    padding-top 0.12rem       
                    h3
                        width 0.26rem
                        height 0.26rem
                        background #dd3249
                        border-radius 100%
                        position absolute
                        bottom 0.1rem
                        right 0
                        text-align center
                        line-height 0.26rem
                        font-size 0.14rem
                        color #ffffff
                        font-weight normal
                    h2
                        font-size 0.14rem
                        font-weight bolder
                        line-height 0.14rem
                        overflow hidden
                        text-overflow ellipsis 
                        white-space nowrap
                    p
                        font-size 0.12rem
                        color #ec6c32
                        font-weight normal
                        overflow hidden
                        text-overflow ellipsis 
                        white-space nowrap
                    h4
                        position absolute
                        left 0
                        bottom 0.08rem
                        color #ec6c32
                        font-weight normal
                        i
                            font-size 0.1rem
                        span 
                            font-size 0.14rem
                            font-weight bolder
                        em
                            font-size 0.1rem


</style>            