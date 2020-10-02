<template>
    <div class="imgshow">
        <div class="minImg">
            <div class="minImgBox" v-for="(item,index) in minImg.skus" :key="index">
                <img :src="item.pictureUrl" alt="">
                
            </div>
        </div>
        <div class="content">
            <span>排行榜</span>
            <h2>{{minImg.labelName}}</h2>
            <i>{{minImg.labelDes}}</i>
            <button>点击查看</button>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        minImg:{
            type:Object
        }
    },
}
</script>
<style lang="stylus" scoped>
.imgshow
    .minImg
        height 1.6rem
        border-radius 10px
        display flex
        flex-wrap wrap
        .minImgBox
            width 50%
            height 50%
            img 
                width  100%
                height 100%
        
            
    .content
        display flex
        flex-direction column
        justify-content center
        align-items center
        padding-top 0.06rem
        span 
            width 0.48rem
            height 0.16rem
            font-size 0.06rem
            text-align center
            line-height 0.16rem
            color #ffffff
            background rgb(255,85,0)
            border-radius 4px
        h2
            font-weight normal
            margin-top 0.08rem

        i 
            color rgb(255,85,0)
        button
            width 0.88rem
            height 0.26rem
            border 1px solid #ff5500
            border-radius 4px
            background #ffffff
            margin-top 0.04rem
            color rgb(255,85,0)

</style>