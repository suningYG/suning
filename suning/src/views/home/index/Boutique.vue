<template>
        <main> 
            <carousel></carousel>
            <later-list></later-list>
            <div class="prize">
                <section>
                    <div class="imgbox">
                        <img src="../../../assets/imgs/prize.png" alt="">
                    </div>
                    <p>已签0/4 每周累签4天赢周日惊喜</p>
                    <div class="rec">
                        <span>去领取</span>
                        <svg t="1600952524597" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1156" width="0.16rem" height="0.16rem"><path d="M340.992 820.736c11.776 11.776 31.232 11.776 43.008 3.072l287.232-287.232c8.704-11.264 11.264-25.088 6.656-35.84-0.512-2.56-5.12-7.68-8.704-12.288L385.536 205.312c-11.776-14.848-30.72-14.848-42.496-3.072-11.776 11.776-11.776 30.72 0 42.496l265.216 268.288-267.264 264.192c-11.776 12.288-12.288 31.232 0 43.52z" fill="#d81e06" p-id="1157"></path></svg>
                    </div>
                </section>
            </div>
            <div class="adver">
                <div class="adbox">
                    <!-- <img src="https://image.suning.cn/uimg/cms/img/160128602476555121.gif" alt="" class=""> -->
                    <ul>
                        <li>
                            <img src="" alt="">
                            <span></span>
                        </li>
                        <li>
                            <img src="" alt="">
                            <span></span>
                        </li>
                        <li>
                            <img src="" alt="">
                            <span></span>
                        </li>
                    </ul>
                    <div class="gifBox-1">
                    </div>

                </div>
            </div>
            <div class="snbuy">
                <div class="buybox">
                    <div class="head">
                        <h1>苏宁拼购</h1>
                        <img src="../../../assets/imgs/useravatar.png" alt="">
                        <span>更多 ></span>
                    </div>
                    <div class="good">
                        <ul>
                            <li>
                                <div></div>
                                <span class="through">￥89.00</span>
                                <h1>
                                    <i>￥</i><em>799</em><span class="group">2人团</span>
                                </h1>
                            </li>
                            <li>
                                <div></div>
                                <span class="through">￥89.00</span>
                                <h1>
                                    <i>￥</i><em>799</em><span class="group">2人团</span>
                                </h1>
                            </li>
                            <li>
                                <div></div>
                                <span class="through">￥89.00</span>
                               <h1>
                                    <i>￥</i><em>799</em><span class="group">2人团</span>
                                </h1>
                            </li>
                            <li>
                                <div></div>
                                <span class="through">￥899.00</span>
                                <h1>
                                    <i>￥</i><em>799</em><span class="group">2人团</span>
                                </h1>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
            <div class="purchase">
                <div class="pucharbox">
                    <img src="https://image.suning.cn/uimg/cms/img/159792519589758644.png" alt="">
                </div>
            </div>
            <div class="advater">
                <img src="../../../assets/imgs/advater.png" alt="">
            </div>
            
            <img src="https://image.suning.cn/uimg/cms/img/160128472441540158.gif" alt="" class="botbox">
            <GoodList :goodsList="goodsList"></GoodList>
        </main>
</template>
<script>
import Carousel from "../../../components/Carousel.vue"
import LaterList from "./LaterLists.vue"
import GoodList from "../../../components/GoodsLists.vue"
import {get} from '../../../utils/http.js'
export default {
    components:{
        GoodList,
        Carousel,
        LaterList,
    },
    data() {
        return {
            goodsList:[]
        }
    },
    async mounted(){
        let result = await get({
            url:"/msf/mpapi/wapIndex/getNewSmallGuessLike.do?c=&cityCode=010&u=6132551008&count=50&flag=1&sceneIds=13-30&sceneIds1=21-26&sceneIds2=21-27&sceneIds3=21-28&count1=100",
        })
        this.goodsList = result.data.data[0].skus
        // console.log(this.goodsList)
    }
}
</script>

<style lang="stylus" scoped>
 main
    flex 1
    overflow-y scroll
    .prize
        background-color #f4f4f4
        display flex
        justify-content center
        align-items center
        section 
            width 3.5rem
            height 0.42rem
            background #ffffff
            border-radius 10px
            display flex
            align-items center
            padding-left 0.1rem
            .imgbox
                width 0.87rem
                height 0.29rem
                img
                    width 100%
                    height 100%
            p
                padding-left 0.05rem
                font-size 0.1rem
                color #666666
            .rec
                padding-left 0.2rem
                font-size 0.12rem
                color red
                svg
                    padding-top 0.05rem

    .adver
        height 1.62rem
        background #f4f4f4
        display flex
        justify-content center
        align-items center
        .adbox
            width 3.52rem
            height 1.45rem
            border-radius 10px
            background url('https://image.suning.cn/uimg/cms/img/160128602476555121.gif') no-repeat 
            background-size 100% 
            position relative
            ul
                width 2.1rem
                height 0.93rem
                background yellow 
                position absolute
                bottom 0.22rem
                left 0.24rem
                border-radius 10px
                display flex
                justify-content space-between
                li
                    flex 1
                    display flex
                    flex-direction column
                    background yellowgreen 
                    height 100%
                


    .snbuy
        height 1.52rem
        background #f4f4f4
        display flex
        justify-content center
        align-items center
        .buybox
            width 3.52rem
            height 100%
            background #ffffff
            border-radius 16px
            padding 0.1rem 0.07rem
            display flex
            flex-direction column
            .head
                height 0.18rem
                display flex
                h1
                    font-size 0.14rem
                    font-weight bolder
                img 
                    display block
                    margin-left 0.12rem
                    margin-right 1.63rem
                    height 100%
                    width 0.69rem
                span 
                    color #666666
                    font-size 0.12rem
            .good
                height 1.075rem
                background blue
                margin-top 0.1rem
                ul
                    display flex
                    height 100%
                    justify-content space-between
                    li  
                        height 100%
                        width 0.785rem
                        display flex
                        background #f7f7f7
                        flex-direction column
                        div
                            height 0.8rem
                            width 100%
                            background yellow 
                            border-radius 10px
                        .through 
                            text-decoration line-through
                            font-size 0.08rem
                            color  #666666
                        h1
                            font-weight normal
                            i
                                font-size 0.06rem
                            em
                                font-size 0.14rem
                                color red
                                font-weight bolder
                            .group
                                width 0.27rem
                                height 0.11rem
                                background #f8d558
                                border-radius 3px
                                font-size 0.07rem
                                padding 0.02rem
    .purchase
        height 1.2rem
        background #f4f4f4
        display flex
        justify-content center
        align-items center
        .pucharbox
            width 3.47rem
            height 0.99rem
            img 
                width 100%
                height 100%
                        
    .advater
        height 1rem
        background #f4f4f4
        display flex
        justify-content center
        padding  0 0.12rem 
        img 
            width 100%
            height 100%
    .botbox
        width 1.35rem
        height 0.35rem
        position fixed
        bottom 0.5rem
        left calc(50% - 0.675rem )
</style>