<template>
    <div class="goodscarlist">
        <div class="goodsbox" v-for="item in recommend" :key="item.sugGoodsCode">
            <div class="imgbox">
                <img :src="item.pictureUrl" alt="">
            </div>
            <div class="content">
                <p>
                    {{item.sugGoodsName}}
                </p>
                <div class="title">
                    <div v-if="item.productType == 4">
                        <p>苏宁国际</p>
                        <em>直营</em>
                    </div>
                    <span v-if="item.promotionInfo">{{item.promotionInfo}}</span>
                    <i v-if="item.productType == 1">自营</i>
                </div>
                <div class="price">
                    <i>￥</i>
                    <em>{{item.price | firstPrice}}</em>
                    <h5>{{item.price | lastPoint}}</h5>
                </div>
                <div class="car" @click="addCarList(item.sugGoodsCode)">
                    <img src="../../assets/imgs/购物车.png" alt="">
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    props:{
        recommend:{
            type:Array
        }
    },
    methods:{
        addCarList(id){
            // console.log(this.$store.state)
            let info = this.recommend.find(value =>{
                return value.sugGoodsCode === id
            })
            this.$store.commit('addGoods',info)
            // console.log(this.$store.state.shopCar)
        },
 

    },
    mounted(){
        
    },
    filters:{
        firstPrice(value){
            if(value) return value.split(".")[0]
        },
        lastPoint(value){
            if(value){
                if(Number(value.split(".")[1]) === 0){
                    return ""
                }else{
                    return "." + value.split(".")[1]
                }               
            }

        }

    },
}
</script>
<style lang="stylus" scoped>
.goodscarlist
    display flex
    flex-wrap wrap
    justify-content space-between
    padding-bottom 0.45rem
    .goodsbox
        height 2.81rem
        width 1.74rem
        background #ffffff
        border-radius 15px
        margin-bottom 0.06rem
        padding 0 0.115rem 0.09rem
        .imgbox
            height 1.82rem
            img 
                width 100%
                height 100%
        .content
            height 0.91rem
            position relative
            p 
                font-size 0.12rem
                color #222222
                text-overflow -o-ellipsis-lastline;
                overflow hidden;
                text-overflow ellipsis;
                display -webkit-box;
                -webkit-line-clamp 2;
                line-clamp 2;
                -webkit-box-orient vertical
            .price
                font-weight bold
                display flex
                align-items center
                position absolute
                bottom 0
                left 0.04rem
                i
                    font-size 0.08rem
                    color #eb5435
                em
                    font-size 0.16rem
                    color #eb5435
                h5
                    font-size 0.1rem
                    color #eb5435
                    margin-top 0.02rem
            .car
                width 0.28rem
                height 0.28rem
                border-radius 100%
                background-color #f7ce46
                position absolute
                bottom 0
                right 0
                img 
                    height 100%
                    width 100%
            .title
                display flex
                div
                    width 0.8rem
                    height 0.16rem
                    background-color #6d57e9
                    margin-top 0.1rem
                    margin-right 0.02rem
                    border-radius 4px
                    display flex
                    align-items center
                    text-align center
                    p
                        width 0.48rem
                        height 0.16rem
                        font-size 0.1rem
                        color #ffffff
                        background-color #6d57e9
                    em
                        flex 1
                        height 0.16rem
                        font-size 0.1rem
                        color #6d57e9
                        background-color #ffffff

                span 
                    display block
                    height 0.16rem
                    padding 0 0.04rem
                    background-color #ed7a30
                    font-size 0.12rem
                    color #ffffff
                    margin-top 0.1rem
                    margin-right 0.02rem
                    border-radius 4px
                    line-height 0.16rem
                i
                    display block
                    width 0.26rem
                    height 0.16rem
                    background-color #f7ce46
                    margin-top 0.1rem
                    border-radius 4px
                    font-size 0.1rem
                    text-align center
                    line-height 0.16rem
</style>