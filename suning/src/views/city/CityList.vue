<template>
    <div class="cityList">
        <div class="search">
            <van-search
             v-model="value"
             shape="round"
             background="#f2f2f2"
            placeholder="输入城市名称"
             /> 
             <span class="retUp" @click="retUpRouter">取消</span>
        </div>
        <div class="nowcity">
            当前定位城市
        </div>
        <div class="nowPos">
            <div class="city">
                <svg t="1601901312452" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10274" width="0.2rem" height="0.2rem"><path d="M512 861.090909c-193.163636 0-349.090909-155.927273-349.090909-349.090909S318.836364 162.909091 512 162.909091s349.090909 155.927273 349.090909 349.090909-155.927273 349.090909-349.090909 349.090909z m0-651.636364C344.436364 209.454545 209.454545 344.436364 209.454545 512s134.981818 302.545455 302.545455 302.545455 302.545455-134.981818 302.545455-302.545455S679.563636 209.454545 512 209.454545z" fill="#ec612a" p-id="10275"></path><path d="M500.363636 512m-116.363636 0a116.363636 116.363636 0 1 0 232.727273 0 116.363636 116.363636 0 1 0-232.727273 0Z" fill="#ec612a" p-id="10276"></path><path d="M849.454545 488.727273h116.363637v46.545454h-116.363637zM34.909091 488.727273h116.363636v46.545454h-116.363636zM477.090909 861.090909h46.545455v116.363636h-46.545455zM477.090909 46.545455h46.545455v116.363636h-46.545455z" fill="#ec612a" p-id="10277"></path></svg>
                <span>北京市</span>
            </div>

        </div>
        <div class="hotcity">
            热门城市
        </div>
        <div class="hotPos">
            <div class="hotPosList">
                <ul>
                    <li>
                        <span>上海市</span> 
                    </li>
                    <li>
                       <span>重庆市</span> 
                    </li>
                    <li>
                       <span>成都市</span> 
                    </li>
                    <li>
                       <span>北京市</span> 
                    </li>
                    <li>
                       <span>天津市</span> 
                    </li>
                        <li>
                       <span>广州市</span> 
                    </li>
                </ul>
            </div>
        </div>

        <div class="list">
            <van-index-bar>
                <section v-for="item in cityList" :key="item.spell">
                    <van-index-anchor :index="item.spell" />
                    <div v-for="city in item.cityList" :key="city.arsCode">
                        <van-cell 
                        :title="city.arsName"
                        @click="cityHandler(city.arsName,city.arsCode)"
                         />
                    </div>
                </section>
            </van-index-bar>
        </div>

    </div>
</template>
<script>
import Vue from 'vue';
import { Search , IndexBar, IndexAnchor ,Cell, Form} from 'vant';
Vue.use(Search)
Vue.use(IndexBar)
Vue.use(IndexAnchor)
Vue.use(Cell)
import {get} from '../../utils/http.js'
export default {
    data() {
        return {
            value:'',
            cityList:[]
        }
    },
    methods:{
        retUpRouter(){
            this.$router.back()
        },
        cityHandler(name,code){
            // console.log(name)
            let obj = {
                name,
                code
            }
            this.$store.state.city = name
            this.$router.back()
        }
    },
    async mounted(){
        let result = await get({
            url:'/nsafs/mpapi//nsafs-web/city/citylist.htm?isOpen=0&source=applet&version=4.1.1'
        })
        // console.log(result.data.resultData.cityInfoMapList)
        this.cityList = result.data.resultData.cityInfoMapList
    }
    
}
</script>
<style lang="stylus" scoped>
.cityList
    background #f2f2f2
    overflow-y scroll
    height 100%
    .search 
        padding-right 0.4rem
        position relative
        display flex
        flex-direction column
        height 0.65rem
        justify-content center
        .van-search__content
            background-color #ffffff
        .retUp
            position absolute
            right 0.1rem
    .nowcity
        height 0.14rem
        font-size 0.14rerm
        line-height 0.14rem
        padding-left 0.12rem
        color #6a6a6a
    .nowPos
        height 0.7rem
        display flex
        align-items center
        .city
            display flex
            align-items center
            background #ffffff
            height 0.45rem
            width 100% 
            padding-left 0.15rem
            span 
                padding-left 0.09rem
                color #000000
                font-size 0.14rem
    .hotcity
        height 0.15rem
        font-size 0.14rerm
        line-height 0.15rem
        padding-left 0.12rem
        color #6a6a6a
    .hotPos
        height 1.06rem
        padding-top 0.15rem
        .hotPosList
            height 100%
            background #ffffff
            ul
                display flex
                padding-left 0.18rem
                padding-right 0.18rem
                flex-wrap wrap
                align-items center
                li
                    width 0.80rem
                    height 0.4rem
                    padding-top 0.1rem
                    span 
                        display block
                        width 0.68rem
                        height 0.3rem
                        text-align center
                        line-height 0.3rem
                        background #f2f2f2
                        border-radius 6px


  
        

</style>
<style lang="stylus">
.van-index-bar
    .van-index-bar__sidebar
        .van-index-bar__index
            color #ff883c
            margin-top  0.03rem
            font-size 0.1rem
           
</style>