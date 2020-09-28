<template>
    <div class="foods">
        <TableContent :goods="goodsContent"></TableContent>
        <LimitedTimeSpike :foodList="foodList"></LimitedTimeSpike>
    </div>
</template>

<script>
import TableContent from "../../../components/TableContent.vue"
import LimitedTimeSpike from "../../../components/LimitedTimeSpike.vue"
import { get } from "../../../utils/http.js"
export default {
    data() {
        return {
            goodsContent:[
                {
                    id:"001",
                    imgsrc:"",
                    goodsName:"茶叶"
                },
                {
                    id:"002",
                    imgsrc:"",
                    goodsName:"坚果炒货"
                },
                {
                    id:"003",
                    imgsrc:"",
                    goodsName:"饼干糕点"
                },
                {
                    id:"004",
                    imgsrc:"",
                    goodsName:"方便速食"
                },
                {
                    id:"005",
                    imgsrc:"",
                    goodsName:"进口零食"
                },
                {
                    id:"006",
                    imgsrc:"",
                    goodsName:"米面粮油"
                },
                {
                    id:"007",
                    imgsrc:"",
                    goodsName:"调味干货"
                },
                {
                    id:"008",
                    imgsrc:"",
                    goodsName:"牛奶"
                },
                {
                    id:"009",
                    imgsrc:"",
                    goodsName:"休闲零食"
                },
                {
                    id:"010",
                    imgsrc:"",
                    goodsName:"饮用水"
                }
            ],
            foodList:[]
        }
    },
    components:{
        TableContent,
        LimitedTimeSpike
    },
    async mounted() {
        let result = await get({
            url:"/pdua/mpapi/pd/xcxTabPage.do?callback=callback&_=1601276261750&u=6132551008&c=&cityCode=010&districtCode=0100100&sceneIds2=31-5&flag=1&channel=321&msSceneId=31-6&msCount=20&catalogueId=202275",
            // query:{
            //     callback:callback,
            //     _:1601276261750,
             //    u:6132551008,
            //     catalogueId:202275
            // }
        })
        this.foodList = JSON.parse(result.data.substring(9,result.data.length-2)).data.msSkus
        // console.log(this.foodList)
        // console.log(JSON.parse(result.data.substring(9,result.data.length-2)))
    },
    methods: {

    },
}
</script>
<style lang="stylus" scoped>
.foods
    overflow-y scroll
</style>