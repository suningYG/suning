<template>
    <div>
        <TableContent :goods="goodsContent"></TableContent>
    </div>
</template>

<script>
import TableContent from "../../../components/TableContent.vue"
export default {
    components:{
        TableContent
    },
    
    data() {
        return {
             goodsContent:[
                {
                    id:"001",
                    imgsrc:"",
                    goodsName:"婴儿奶粉"
                },
                {
                    id:"002",
                    imgsrc:"",
                    goodsName:"纸尿裤"
                },
                {
                    id:"003",
                    imgsrc:"",
                    goodsName:"童装童鞋"
                },
                {
                    id:"004",
                    imgsrc:"",
                    goodsName:"喂养洗护"
                },
                {
                    id:"005",
                    imgsrc:"",
                    goodsName:"童车童床"
                },
                {
                    id:"006",
                    imgsrc:"",
                    goodsName:"益智玩具"
                },
                {
                    id:"007",
                    imgsrc:"",
                    goodsName:"孕妈专区"
                },
                {
                    id:"008",
                    imgsrc:"",
                    goodsName:"营养辅食"
                },
                {
                    id:"009",
                    imgsrc:"",
                    goodsName:"进口母婴"
                },
                {
                    id:"010",
                    imgsrc:"",
                    goodsName:"母婴会员"
                }
            ]
        }
    },
}
</script>
<style lang="stylus" scoped>

</style>