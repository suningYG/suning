<template>
    <div class="goodlist">
        <div class="goodbox" v-for="(item,index) in goodsList" :key="index">
            <div v-if="item.pictureUrl">
                <div class="imgbox">
                    <img :src="item.pictureUrl" alt="">
                </div>
                <div class="content">
                    <p>
                        <span v-if="item.productType == 1">自营</span>
                        {{item.sugGoodsName}}
                    </p>
                    <ul v-if="item.promotionList">
                        <li v-for="(desc,index) in item.promotionList" :key="index">{{desc.bonusRulesDesc}}</li>
                    </ul>
                    <ul v-else>

                    </ul>
                    <div class="price">
                        <i>￥</i>
                        <em>{{item.price | firstPrice}}</em>
                        <h5>{{item.price | lastPoint}}</h5>
                        <p>{{item.comments}}评论</p>
                    </div>
                </div>    
            </div>
            <div v-else>
                <MinImgShow :minImg="item"></MinImgShow>
            </div>
        </div>
 
    </div>
</template>
<script>

import MinImgShow from './MinImgShow.vue'
export default {
    props:{
        goodsList:{
            type:Array,
            required:true
        }
    },
    components:{
        MinImgShow,
    },
    filters:{
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

    },
    computed:{
        imgShow(){
            let pictureUrl = this.goodsList.forEach((item,index)=>{
              if(item.pictureUrl){
                  return item.pictureUrl
              }else{
                  item.skus.forEach((item,index)=>{
                      if(item.pictureUrl) return item.pictureUrl
                  })
              }
            })
        },
    },
    watch:{
        goodsList(value){
            // console.log(value)
        }
    }
}
</script>
<style lang="stylus" scoped>
.goodlist
    padding 0.1rem 0.12rem 0
    display flex
    flex-wrap wrap
    justify-content space-between
    background #eeeeee
    .goodbox
        width 1.715rem
        height 2.86rem
        background #ffffff
        border-radius 10px
        margin-bottom 0.09rem
        .imgbox
            height 1.8rem
            border-radius 10px
            img 
                width 100%
                height 100%
        .content
            padding 0.025rem 0.12rem 0rem 0.065rem
            p
                font-size 0.12rem
                text-overflow -o-ellipsis-lastline;
                overflow hidden;
                text-overflow ellipsis;
                display -webkit-box;
                -webkit-line-clamp 2;
                line-clamp 2;
                -webkit-box-orient vertical;

                span 
                    width 0.26rem
                    height 0.13rem
                    background #f7ce46
                    border-radius 4px
                    font-size 0.1rem
                    color #333022
                    font-weight normal
                    padding 0 0.04rem
            ul
                display flex
                height 0.15rem
                margin-top 0.09rem
                li
                    height 0.16rem
                    border-radius 4px
                    font-size 0.06rem
                    color #da3036
                    line-height 0.15rem
                    text-align center
                    list-style none
                    padding 0 0.02rem
                    border 1px solid #da3036
                    margin-right 0.03rem

            .price
                margin-top 0.16rem
                font-weight bold
                display flex
                align-items center
                i
                    font-size 0.08rem
                    color #eb5435
                em
                    font-size 0.16rem
                    color #eb5435
                p
                    padding-left 0.08rem
                    font-size 0.06rem
                    color #b5b5b5
                    font-weight normal
                    margin-top 0.02rem
                h5
                    font-size 0.1rem
                    color #eb5435
                    margin-top 0.02rem
            



</style>