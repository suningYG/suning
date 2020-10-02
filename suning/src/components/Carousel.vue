<template>
<div class="swipe">
    <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image"  />
        </van-swipe-item>
    </van-swipe>
</div>

</template>

<script>
    import Vue from "vue"
    import { Swipe, SwipeItem, Lazyload} from 'vant'
    Vue.use(Swipe)
    Vue.use(SwipeItem)
    Vue.use(Lazyload)
export default {
    data() {
        return {
            images:[
                
                "https://image.suning.cn/uimg/cms/img/160118992858023565.jpg",
                "https://image.suning.cn/uimg/cms/img/160118984746926637.png",
                'https://image.suning.cn/uimg/cms/img/160129236927331836.jpg',
                'https://image.suning.cn/uimg/cms/img/160128621517037420.jpg',
                'https://image.suning.cn/uimg/cms/img/160119008877932555.jpg'

            ]
        }
    },
}
</script>
<style lang="stylus">
.swipe
    height 0.92rem
    background #f6f6f6
    display flex
    justify-content center
    align-items center
.van-swipe
    height 0.85rem
    width 3.52rem
    border-radius 12px
    .van-swipe__track
        width 100%
        height 100%
        border-radius 12px
        .van-swipe-item
            width 100%
            height 100%
            img
                width 100%
                height 100%

         


</style>