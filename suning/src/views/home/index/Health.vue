<template>
    <div class="foods">
        <TableContent :foodcate="foodcate"></TableContent>
        <LimitedTimeSpike :foodList="foodList"></LimitedTimeSpike>
        <h5>为你推荐</h5>
    </div>
</template>

<script>
import TableContent from "../../../components/TableContent.vue"
import LimitedTimeSpike from "../../../components/LimitedTimeSpike.vue"
import { get } from "../../../utils/http.js"
export default {
    data() {
        return {
            foodList:[],
            foodcate:[],
        }
    },
    components:{
        TableContent,
        LimitedTimeSpike
    },
    async mounted() {
        let result = await get({
            url:"/pdua/mpapi/pd/xcxTabPage.do?callback=callback&_=1601344836504&cityCode=010&msCount=20&catalogueId=202253",
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