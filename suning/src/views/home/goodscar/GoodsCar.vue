<template>

    <div class="goodsCar">
        <header>
            <h1>购物车</h1>
        </header>
        <div class="position" v-if="this.$store.state.shopCar.length > 0">
            <svg t="1601717744183" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14080" width="0.15rem" height="0.15rem" @click="posClickHandler"><path d="M640 426.666667c0 72.533333-55.466667 128-128 128s-128-55.466667-128-128 55.466667-128 128-128 128 55.466667 128 128z m213.333333 0c0 85.333333-29.866667 166.4-85.333333 226.133333L512 938.666667l-256-285.866667C200.533333 593.066667 170.666667 512 170.666667 426.666667c0-187.733333 153.6-341.333333 341.333333-341.333334s341.333333 153.6 341.333333 341.333334z m-115.2 196.266666C785.066667 567.466667 810.666667 499.2 810.666667 426.666667c0-166.4-132.266667-298.666667-298.666667-298.666667S213.333333 260.266667 213.333333 426.666667c0 72.533333 25.6 140.8 72.533334 196.266666 8.533333 8.533333 21.333333 25.6 42.666666 42.666667l85.333334 102.4 98.133333 106.666667 98.133333-106.666667 89.6-98.133333c12.8-21.333333 25.6-34.133333 38.4-46.933334z" fill="#f7ce46" p-id="14081"></path></svg>
            <p>{{this.$store.state.nowPos}}</p>
            <button @click="writeHandler" class="write">编辑</button>
            <van-popup 
                v-model="posShow"
                position="bottom" 
                round 
                :style="{ height: '70%' }" 
                closeable>
                <div class="head">
                    选择地址
                </div>
                <section>
                    <div class="nowPos">
                        <svg t="1601899539766" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8204" width="0.24rem" height="0.24rem">
                        <path d="M512 137.05728c73.22112 0 142.94016 26.81344 196.3264 75.49952 59.69408 54.44096 93.58848 128.73216 95.4368 209.18784 1.85344 80.512-28.47744 156.20096-85.4016 213.12-46.4128 46.4128-135.09632 157.12768-204.3136 245.7856-70.74304-88.25856-161.32096-198.69696-208.4096-245.7856-56.92416-56.92416-87.25504-132.608-85.4016-213.12 1.84832-80.45056 35.74272-154.74176 95.4368-209.18784C369.05984 163.87072 438.77888 137.05728 512 137.05728m0-71.68c-87.87968 0-175.75936 31.40608-244.62848 94.22336-154.27072 140.6976-158.40768 379.96544-12.42112 525.95712 48.5376 48.5376 150.46144 174.01856 211.23584 250.01472a61.0816 61.0816 0 0 0 47.96416 23.06048c18.08896 0 36.1728-7.90528 48.45568-23.68 59.45856-76.34944 158.93504-201.89184 206.4384-249.3952 145.99168-145.98656 141.8496-385.2544-12.42112-525.95712-68.864-62.81728-156.74368-94.22336-244.62336-94.22336z" fill="#ec612a" p-id="8205">
                        </path>
                        <path d="M512 315.86304c50.816 0 92.16 41.344 92.16 92.16s-41.344 92.16-92.16 92.16-92.16-41.344-92.16-92.16 41.344-92.16 92.16-92.16m0-71.68c-90.48576 0-163.84 73.35424-163.84 163.84 0 90.48576 73.35424 163.84 163.84 163.84s163.84-73.35424 163.84-163.84c0-90.48576-73.35424-163.84-163.84-163.84z" fill="#ec612a" p-id="8206"></path></svg>                  
                        <p>
                            送至：{{this.$store.state.nowPos}}
                        </p>
                    </div>
                    <div class="currLocation">
                        <span>
                            当前定位
                        </span>
                        <span>
                            <svg t="1601900850723" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9364" width="0.18rem" height="0.18rem"><path d="M833.264 370.463c-19.328-38.153-44.711-73.248-75.595-104.132-157.951-157.951-412.905-159.245-569.457-2.694C31.661 420.19 32.955 675.143 190.906 833.094c157.951 157.951 412.905 159.245 569.457 2.694 46.455-46.456 80.028-102.65 98.94-164.246 4.445-14.481-3.69-29.825-18.17-34.271-14.482-4.446-29.826 3.689-34.272 18.17-16.299 53.087-45.21 101.478-85.288 141.557-135.04 135.04-355.261 133.922-491.877-2.694C93.08 657.688 91.962 437.467 227.002 302.427c135.04-135.04 355.261-133.922 491.877 2.694 27.856 27.855 50.507 59.605 67.457 94.162l-92.649-28.326c-14.084-4.306-29.028 3.737-33.377 17.965-4.35 14.228 3.54 29.253 17.625 33.558l153.009 46.78c7.042 2.153 14.299 1.219 20.339-2.032a26.993 26.993 0 0 0 13.038-15.933l47.257-154.57c4.35-14.228-3.541-29.253-17.625-33.558-14.084-4.306-29.028 3.737-33.378 17.965l-27.311 89.331z" p-id="9365" fill="#8a8a8a"></path></svg>
                            刷新定位
                        </span>
                    </div>
                    <div class="dress">
                        <svg t="1601901312452" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10274" width="0.24rem" height="0.24rem"><path d="M512 861.090909c-193.163636 0-349.090909-155.927273-349.090909-349.090909S318.836364 162.909091 512 162.909091s349.090909 155.927273 349.090909 349.090909-155.927273 349.090909-349.090909 349.090909z m0-651.636364C344.436364 209.454545 209.454545 344.436364 209.454545 512s134.981818 302.545455 302.545455 302.545455 302.545455-134.981818 302.545455-302.545455S679.563636 209.454545 512 209.454545z" fill="#ec612a" p-id="10275"></path><path d="M500.363636 512m-116.363636 0a116.363636 116.363636 0 1 0 232.727273 0 116.363636 116.363636 0 1 0-232.727273 0Z" fill="#ec612a" p-id="10276"></path><path d="M849.454545 488.727273h116.363637v46.545454h-116.363637zM34.909091 488.727273h116.363636v46.545454h-116.363636zM477.090909 861.090909h46.545455v116.363636h-46.545455zM477.090909 46.545455h46.545455v116.363636h-46.545455z" fill="#ec612a" p-id="10277"></path></svg>
                        <p>
                            {{this.$store.state.nowPos}}
                        </p>
                    </div>
                </section>
                <div class="btn">
                    <button class="selPos" @click="morePosHandler">选择更多地址</button>
                </div>
                
            </van-popup>
        </div>

        <main>
            <div class="carempty" v-if="this.$store.state.shopCar.length === 0">
                <div class="coupon">
                    <i></i>
                    <em></em>
                    <span></span>
                    <p>
                        恭喜您获得一张优惠券!
                    </p>
                    <span></span>
                    <em></em>
                    <i></i>
                 </div>
                <div class="discount">
                    <img src="../../../assets/imgs/优惠券.png" alt="">
                </div>
                <div class="empty">
                    <h2>您的购物车还是空的，快来挑选好货吧</h2>
                </div>
            </div>
            <div class="shopCarList" v-else v-for="item in this.$store.state.shopCar" :key="item.sugGoodsCode">
                <div class="shopname">
                    <van-checkbox v-model="shopAll" checked-color="#f7ce46" icon-size="0.2rem" @click="isChecked"></van-checkbox>
                    <div class="shop">
                        <h2>苏宁官方旗舰店</h2>
                    </div>
                    <div class="disbox">
                        <img src="../../../assets/imgs/领券.png" alt="">
                    </div>
                </div>
            <van-swipe-cell>
                <div class="goodsInfo">
                    <van-checkbox v-model="goodAll" checked-color="#f7ce46" icon-size="0.2rem"></van-checkbox>
                    <div class="goods">
                        <div class="goodsimg">
                            <img :src="item.pictureUrl" alt="">
                        </div>
                        <div class="goodscontent">
                            <p>{{item.sugGoodsName}}</p>
                                <h3  @click="showPopup">
                                    购买服务
                                    <svg t="1601723067493" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14933" width="0.08rem" height="0.06rem"><path d="M944.083879 289.536302c14.264888 18.286482 15.462157 41.208541 2.670829 51.196009l-417.191704 325.421604c-2.885723 2.261507-12.156878 7.828292-13.732769 9.578146-15.544021 17.181311-37.893029 22.338774-49.947576 11.461029l-392.908648-354.309538c-12.054547-10.887978-9.271154-33.666774 6.272867-50.889017 15.544021-17.21201 37.893029-22.349007 49.988508-11.471262l357.584118 322.443783 408.258241-318.463122C907.910005 264.516466 929.84969 271.260054 944.083879 289.536302z" p-id="14934" fill="#515151"></path></svg>
                                </h3>
                            <div class="title">
                                <div v-if="item.productType == 4">
                                    <p>苏宁国际</p>
                                    <em>直营</em>
                                </div>
                                <span v-if="item.promotionInfo">{{item.promotionInfo}}</span>
                                <i v-if="item.productType == 1">自营</i>
                            </div>
                            <h2>最多可买20件</h2>
                        </div>
                    </div>
                </div>
                <div class="numprice">
                  <div class="price">
                    <i>￥</i>
                    <em>{{item.price | firstPrice}}</em>
                    <h5>{{item.price | lastPoint}}</h5>
                    <Steeper :item="item"></Steeper>
                    </div>
                </div>
                <template #right>
                    <van-button square text="删除" type="danger" class="delete-button" @click="delGoodsHandler(item.sugGoodsCode)" />
                </template>
            </van-swipe-cell>
            </div>
            <div class="like">
                <img src="../../../assets/imgs/youlike.png" alt="">
            </div>
            <GoodsCarList 
            :recommend="recommend"
            ></GoodsCarList>
            <van-popup 
                v-model="show"
                position="bottom" 
                round 
                :style="{ height: '60%' }" 
                closeable>
                <div class="head">
                    购买服务
                </div>
                <section>

                </section>
                <div class="btn">
                    <button>确&nbsp;定</button>
                </div>
            </van-popup>
        </main>
        <div class="toPrice" v-if="this.$store.state.shopCar.length > 0">
            <van-checkbox v-model="checked" checked-color="#f7ce46" icon-size="0.2rem" @click="isAllChecked">全选</van-checkbox>
                <div class="toPirceBox" v-if="!write">
                    <div class="price">
                        <span>合计：</span>
                        <i>￥</i>
                        <p>{{toPrice}}</p>
                    </div>
                    <div class="free">
                        免运费
                    </div>
                </div>
                <div class="settlment" v-if="!write">
                    去结算
                </div>

                <div class="settlment" v-else @click="delAllGoods">
                    删除
                </div>

        </div>

   </div>

</template>
<script>
import GoodsCarList from "../../../components/goodsCarList/GoodsCarList.vue"
import Vue from 'vue';
import { Checkbox, CheckboxGroup ,Stepper,SwipeCell,Button, Popup} from 'vant';
import { get } from "../../../utils/http.js"
import Steeper from "../../../components/goodsCarList/Steeper.vue"
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Stepper);
Vue.use(SwipeCell)
Vue.use(Button)
Vue.use(Popup)

export default {
    data() {
        return {
            // shopCar:[
            //     {}
            // ],
            checked: true,
            goodsNum:1,
            show: false,
            recommend:[],
            write:false,
            posShow:false,
            shopAll:[],
            goodAll:true,
        }
    },
    computed: {
        toPrice(){
            let toPrice = this.$store.state.shopCar.reduce((value,item)=>{
                return value + (Number(item.price)*item.count)
            },0)
            return toPrice.toFixed(2)
          
        }
    },
    components:{
        GoodsCarList,
        Steeper
    },
    async mounted(){
    
            let result = await get({
                url:"/tuijian/mpapi/recommend-portal/recommend/paramsBiz.jsonp?sceneIds=32-61&u=6132551008&count=16&callback=callback"
            })
            this.recommend = JSON.parse(result.data.substring(9,result.data.length-2)).sugGoods[0].skus
            // console.log(this.recommend)
    },
    watch:{
        isAllChecked(){
            this.shopAll = this.checked
            this.goodAll = this.checked
        }
    },
    methods:{
        showPopup() {
            this.show = true;
        },
        delGoodsHandler(id){
            this.$store.commit('delGoods',id)
        },
        lessNumHandler(id){

        },
        plusNumHandler(id){
            let good = this.$store.state.shopCar.find(value=>{
                return value.sugGoodsCode === id
            })
            console.log(good)
            let count = document.querySelector(".count")
            good.count = count.value
            good.count++
            count.value = good.count
        },
        writeHandler(){
            this.write = !this.write
            if(this.write) {
                event.target.innerHTML = '完成'
            }else{
                event.target.innerHTML = "编辑"
            }
        },
        posClickHandler(){
            this.posShow = true
        },
        morePosHandler(){
            this.$router.push({name:"position"})
        },
        delAllGoods(){
            this.$store.commit("delAllGoods")
            this.$forceUpdate()
        },
        isChecked(){
            this.goodAll = this.shopAll
        },
        isAllChecked(){
            this.shopAll = this.checked
            this.goodAll = this.checked
        }
    },
    filters:{
        shopName(value){
            return value.split(" ")[0]
        },
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
    }
}
</script>
<style lang="stylus" scoped>

.EmptyCar
    height 100%
    display flex
    flex-direction column

    header 
        height .44rem
        text-align center
        line-height .44rem
        font-size .16rem
        font-weight bold
        color #000
    
    main
        display flex
        flex-direction column
        align-items center
        justify-content center
        height 5.81rem
        background-color #f2f2f2
        
        >div:first-child
            display flex
            height 1.96rem
            width 1.96rem
            align-items center
            margin-top -0.7rem
            
            img 
                width 100%
                height 100%

        >div:last-child
            
            text-align center
            width 1.57rem
            height 0.33rem
            line-height 0.33rem
            font-size 0.14rem
            font-weight bold
            background-color #f7ce46
            border-radius 0.05rem
            margin-top 0.2rem
            color #000    

@import "../../../assets/stylus/border.styl";
.goodsCar
    height 100%
    background #f2f2f2
    display flex
    flex-direction column
    header 
        height 0.44rem
        background-color #f9dc63
        display flex
        justify-content center
        align-items center
        h1
            font-size 0.2rem
    .position
        height 0.4rem
        background-color #ffffff
        display flex
        align-items center
        padding 0 0.12rem
        p
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-left 0.08rem
        .write
            height 100%
            background-color #ffffff
            width 0.4rem
            border none
            font-size 0.14rem
            color #91aff8
        .selPos
            background-color #ec702d
            color #ffffff
        section
            
            .nowPos
                padding 0 0.12rem
                height 0.45rem
                background-color #fdf3eb
                display flex
                align-items center
                p
                    color #ec612a
            .currLocation
                height 0.32rem
            
                display flex
                justify-content space-between
                align-items center
                padding 0 0.12rem
                color #a4a4a4
            .dress
                height 0.48rem
                
                display flex
                align-items center
                padding 0 0.12rem
                border_1px(0 0 1px 0)
                

    .toPrice
        height 0.45rem
        background-color #ffffff
        display flex
        margin-bottom 0.5rem
        padding 0 0.12rem
        position relative
        .toPirceBox
            flex 1
            padding-right 1.1rem
            padding-top 0.04rem
            display flex
            flex-direction column
            .price
            
                display flex
                align-items flex-end
                justify-content flex-end
                i 
                    font-size 0.1rem
                    color #eb5435
                p
                    font-size 0.16rem
                    color #eb5435
                    font-weight bold
                    
                span 
                    font-size 0.14rem
                    color #000000
            .free
                font-size 0.08rem
                color #000000
                text-align right 

        .settlment
            width 1rem
            background-color #f7ce46
            border-radius 10px
            font-size 0.16rem
            font-weight bold
            color #000
            text-align center
            line-height 0.45rem
            position absolute
            right 0.12rem
    .writeInfo
        height 0.45rem
        background-color red
        display flex
        margin-bottom 0.5rem
        padding 0 0.12rem
        position relative

    main
        flex 1
        overflow-y scroll
        padding 0.14rem 0.12rem 0
        .shopCarList
            min-height 2.07rem
            background-color #ffffff
            border-radius 15px
            padding-left 0.06rem
            padding-right 0.12rem
            margin-bottom 0.1rem
            .shopname
                height 0.46rem
                display flex
                align-items center
                .shop
                    flex 1
                    margin-left 0.07rem
                    font-size 0.14rm
                 
                    h2
                        width 2.62rem                    
                .disbox
                    width 0.48rem
                    height 0.16rem
                    margin-bottom 0.06rem
                    img 
                        width 100%
                        height 100%
            .goodsInfo
                height 1.01rem
                display flex
                align-items center  
                .goods
                    width 3.165rem
                    height 1.01rem
                    padding-left 0.1rem
                    display flex
                    .goodsimg
                        width 0.94rem
                        height 0.94rem
                        background-color #efefef
                        border-radius 6px
                        display flex
                        justify-content center
                        align-items center
                        img 
                            width 85%
                            height 92%
                    .goodscontent
                        height 1.01rem
                        flex 1
                        margin-left 0.11rem
                        background-color #ffffff
                        display flex
                        flex-direction column
                        p
                            font-size 0.12rem
                            text-overflow -o-ellipsis-lastline;
                            overflow hidden;
                            text-overflow ellipsis;
                            display -webkit-box;
                            -webkit-line-clamp 2;
                            line-clamp 2;
                            -webkit-box-orient vertical
                        h3
                            width 0.6rem
                            height 0.2rem
                            background-color #f6f6f6
                            font-weight normal
                            font-size 0.12rem
                            color #a5a5a5
                            line-height 0.2rerm
                            margin-top 0.04rem
                            margin-bottom 0.06rem
                        .title
                            margin-bottom 0.04rem
                            display flex
                            div
                                width 0.8rem
                                height 0.16rem
                                background-color #6d57e9
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
                                margin-right 0.02rem
                                border-radius 4px
                                line-height 0.16rem
                            i
                                display block
                                width 0.26rem
                                height 0.16rem
                                background-color #f7ce46
                                border-radius 4px
                                font-size 0.1rem
                                text-align center
                                line-height 0.16rem
                        h2
                            font-size 0.12rem
                            color #ee7e66
                            font-weight normal

            .numprice
                height 0.42rem
                display flex
                justify-content center
                align-items center
                position relative
                .price
                    font-weight bold
                    display flex
                    align-items center
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
                    



        .carempty
            .coupon
                height 0.37rem
                display flex
                align-items center
                justify-content center
                p
                    font-size 0.15rem
                    color #444444
                    margin 0 0.05rem

                i
                    display block
                    height 0.02rem
                    width 0.02rem
                    border-radius 100%
                    background #eacfcf
                    margin-right 0.035rem
                    margin-left 0.035rem
                em
                    display block
                    height 0.04rem
                    width 0.04rem
                    border-radius 100%
                    background #e4b0af
                    margin-right 0.035rem
                    margin-left 0.035rem
                span 
                    display block
                    height 0.06rem
                    width 0.06rem
                    border-radius 100%
                    background #dc8281
                    margin-right 0.035rem
                    margin-left 0.035rem

            .discount
                width 3.515rem
                height 1.845rem
                padding 0 0.04rem
                img 
                    width 100%
                    height 100%   
            .empty
                height 1.2rem
                
                display flex
                justify-content center
                align-items center
                h2
                    font-weight normal
                    font-size 0.14rem
                    color #666666
        .like
            height 0.495rem
            img
                width 100%
                height 100%

</style>
<style lang="stylus">
.van-stepper
    .van-stepper__plus
        background-color  #f2f2f2
        color #000000
    .van-stepper__minus
        background-color  #f2f2f2
        color #000000
        border none
.delete-button {
    height: 100%;
    background-color #ec662b
  }
.van-overlay
    height 90%
.van-popup--bottom
    bottom 49px
    background-color #f5f5f5
.van-popup
    padding-bottom 0.1rem
    display flex
    flex-direction column
    .van-popup__close-icon--top-right
        top 0.13rem
        right 0.1rem
    .van-popup__close-icon
        position absolute
        z-index: 1;
        color: #4c4c4c;
        font-size: 0.2rem;
        cursor: pointer;
    .head
        height 0.44rem
        text-align center
        line-height 0.44rem
        font-size 0.18rem
        color #000000
        font-weight bold
    section 
        flex 1
    .btn
        padding 0 0.12rem
        button
            height 0.46rem
            width 100%
            background-color #f7ce46
            border none 
            font-size 0.16rem
            font-weight bold
            border-radius 12px
.van-checkbox__label
    margin-top 0.05rem
    font-size 0.14rem
</style>