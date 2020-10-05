<template>
    <div class="num">
        <button class="less" :disabled="goodsNum <= 1" @click="lessNumHandler(item.sugGoodsCode)">-</button>
        <input type="text" disabled :value="goodsNum" class="count" :id="item.sugGoodsName">
        <button class="plus" @click="plusNumHandler(item.sugGoodsCode)">+</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            goodsNum:1
        }
    },
    props:{
        item:{
            type:Object
        }
    },
    methods:{
        lessNumHandler(id){
            let good = this.$store.state.shopCar.find(value=>{
                return value.sugGoodsCode === id
            })
            this.goodsNum--
            if(this.goodsNum<=1) this.goodsNum = 1
            good.count = this.goodsNum
        },
        plusNumHandler(id){
            let good = this.$store.state.shopCar.find(value=>{
                return value.sugGoodsCode === id
            })
            this.goodsNum++
            if(this.goodsNum>=20) this.goodsNum = 20
            good.count = this.goodsNum
            console.log(good)
        }
    }
}
</script>
<style lang="stylus" scoped>
 .num
    position absolute
    right 0
    top 0.07rem
    height 0.27rem
    width 0.95rem
    border 1px solid #cccccc
    border-radius 20px
    display flex
    align-items center
    justify-content center
    button
        display flex
        width 0.2rem
        height 0.2rem
        border-radius 100%
        border none
        padding-left 0.04rem
        line-height 0.16rem
        font-size 0.2rem
    input
        width 0.5rem
        border none 
        text-align center
</style>