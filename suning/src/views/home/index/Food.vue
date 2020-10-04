<template>
    <div class="foods">
<<<<<<< HEAD
        <TableContent :foodcate="foodcate"></TableContent>
        <LimitedTimeSpike :foodList="foodList"></LimitedTimeSpike>
        <h5>为你推荐</h5>
=======
        <van-pull-refresh
            v-model="isLoading"
            success-text="刷新成功"
            @refresh="onRefresh"
        >
        <van-list
            v-model="loading"
            @load="onLoad"
            :finished="finished"
            finished-text="duang 到底啦~"
        >
            <TableContent :foodcate="foodcate"></TableContent>
            <LimitedTimeSpike :goodsList="goodsList"></LimitedTimeSpike>
            <h5>为你推荐</h5>
            <GoodList :goodsList="goodsList"></GoodList>
        </van-list>
        </van-pull-refresh>

>>>>>>> 1cbe5af19b204e6ae3023da622ca64cd6666b0c9
    </div>
</template>

<script>
import TableContent from "../../../components/TableContent.vue"
import LimitedTimeSpike from "../../../components/LimitedTimeSpike.vue"
<<<<<<< HEAD
import { get } from "../../../utils/http.js"
export default {
    data() {
        return {
            foodList:[],
            foodcate:[],
=======
import GoodList from "../../../components/GoodsLists.vue"
import { get } from "../../../utils/http.js"
import Vue from 'vue';
import { PullRefresh , List } from 'vant';
Vue.use(List)
Vue.use(PullRefresh);
export default {
    data() {
        return {
            goodsList:[],
            foodcate:[],
            isLoading: false,
            loading: false,
            finished: false,
>>>>>>> 1cbe5af19b204e6ae3023da622ca64cd6666b0c9
        }
    },
    components:{
        TableContent,
<<<<<<< HEAD
        LimitedTimeSpike
    },
    async mounted() {
        let result = await get({
            url:"/pdua/mpapi/pd/xcxTabPage.do?callback=callback&_=1601276261750&cityCode=010&msCount=20&catalogueId=202275",
            // query:{
            //     _:1601276261750,
            //     cityCode:010,
            //     msCount:20,
            //     catalogueId:202275
            // }
        })
        this.foodList = JSON.parse(result.data.substring(9,result.data.length-2)).data.msSkus
        this.foodcate = JSON.parse(result.data.substring(9,result.data.length-2)).data.iconTags
    },
    methods: {

=======
        LimitedTimeSpike,
        GoodList,
    },
    created(){
        this.u = 6132551008,
        this.msCount = 20,
        this.catalogueId = 202275
        this.flag = 1
    },
    // async mounted() {
    //     let result = await get({
    //         url:"/pdua/mpapi/pd/xcxTabPage.do?callback=callback",
    //         params:{
    //             flag:1,
    //             msCount:20,
    //             catalogueId:202275
    //         }
    //     })
    //     this.goodsList = JSON.parse(result.data.substring(9,result.data.length-2)).data.msSkus
    //     this.foodcate = JSON.parse(result.data.substring(9,result.data.length-2)).data.iconTags
        
    // },
    methods: {
        async loadData(){
            if(this.isLoading){
                this.foodcate = [],
                this.goodsList = [],
                this.u = 6132551008
                this.flag = 1
            }
            let result = await get({
                    url:"/pdua/mpapi/pd/xcxTabPage.do?callback=callback&cityCode=010",
                    params:{
                        u:this.u,
                        catalogueId:this.catalogueId,
                        flag:this.flag
                    }
                })
            this.goodsList =[
                ...this.goodsList,
                ...JSON.parse(result.data.substring(9,result.data.length-2)).data.msSkus
            ]
            // console.log(this.goodsList)
            this.foodcate = [
                ...JSON.parse(result.data.substring(9,result.data.length-2)).data.iconTags
            ]
            this.loading = false
            this.isLoading = false
            this.u++
            this.flag++
            if(this.u>6132551010) this.finished = true
        },
        onRefresh() {
            this.loadData()
        },
        onLoad(){
            this.loadData()
        }   
>>>>>>> 1cbe5af19b204e6ae3023da622ca64cd6666b0c9
    },
}
</script>
<style lang="stylus" scoped>
.foods
    overflow-y scroll
    h5
        font-size 0.16rem
        color #000000
<<<<<<< HEAD
        margin 0.19rem 0 0.1rem
        padding-left 0.2rem
=======
        background #eeeeee
        padding-left 0.2rem
        height 0.36rem
        padding-top 0.16rem
>>>>>>> 1cbe5af19b204e6ae3023da622ca64cd6666b0c9
</style>