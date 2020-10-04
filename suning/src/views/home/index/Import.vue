<template>
    <div class="foods">
        <TableContent :foodcate="foodcate"></TableContent>
        <!-- <LimitedTimeSpike :foodList="foodList"></LimitedTimeSpike> -->
        <h5>为你推荐</h5>
        <GoodList :goodsList="goodsList"></GoodList>
    </div>
</template>

<script>
import TableContent from "../../../components/TableContent.vue"
import { get } from "../../../utils/http.js"
import GoodList from "../../../components/GoodsLists.vue"
export default {
    data() {
        return {
            goodsList:[],
            foodcate:[],
        }
    },
    components:{
        TableContent,
        GoodList
    },
    async mounted() {
        let result = await get({
            url:"/pdua/mpapi/pd/xcxTabPage.do?callback=callback",
            params:{
                flag:1,
                msCount:20,
                catalogueId:192943
            }
        })
        this.goodsList = JSON.parse(result.data.substring(9,result.data.length-2)).data.skus
        this.foodcate = JSON.parse(result.data.substring(9,result.data.length-2)).data.iconTags
        
    },
    methods: {

    },
}
</script>
<style lang="stylus" scoped>
.foods
    overflow-y scroll
    h5
        font-size 0.16rem
        color #000000
        margin 0.19rem 0 0.1rem
        padding-left 0.2rem
</style>