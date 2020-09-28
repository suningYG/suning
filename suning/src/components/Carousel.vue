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
                
                'https://oss.suning.com/aps/aps_learning/iwogh/2020/09/26/18/iwoghBannerPicture/85020b472d834925a99e51bf898f62b5.png?format=_is_1242w_610h',
                "https://image2.suning.cn/uimg/cms/img/160104012944146415.jpg?format=_is_1242w_610h",
                "https://image2.suning.cn/uimg/cms/img/160104008728485183.jpg?format=_is_1242w_610h",
                "https://oss.suning.com/adpp/creative_kit/material/picture/20200925-f5193425d2914a6795aa6279c8328b1c760d1072f54f4e32.jpg?format=_is_1242w_610h",
                "https://oss.suning.com/adpp/creative_kit/material/picture/20200926-45236fecbdce4fada45448c33b7e083f1d30f6b2f27c43d9.jpg?format=_is_1242w_610h",

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