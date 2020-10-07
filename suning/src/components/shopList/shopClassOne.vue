<template>
    <div class="shopClassOne" >
          <div>
            <img :src="data.dynamicImg||data.adSrc"  />
          </div>
          <ul>
            <li class="shopName">{{data.catentdesc||data.title}}</li> 
            <li class="shopClass"  v-show="data.lightPoint!==''">
              <div v-if="data.extenalFileds">
                <em   v-for="(item, index2) in data.extenalFileds.appAttrTitleJson" :key="index2">{{item}}</em>
                </div> 
              <div v-else v-show="data.lightPoint!==''">
                <em>{{data.lightPoint}}</em>
              </div>
              </li>
            <li class="shopPrice" v-if="data.cmdPrice">￥{{data.cmdPrice}}</li>
            <li class="shopType" v-if="data.shopType">
              <div v-for="(tp, index1) in data.shopType" :key="index1" ><em class="typeRed">{{tp}}</em></div>
              <div v-for="(mj, index3) in data.mj" :key="'index1-'+index3" ><em class="typeOrign">{{mj}}</em></div>
            </li>
            <li class="shopPj">
              <span :class="{'default':true,'active':data.salesName==='苏宁自营'||data.shopName==='苏宁自营'}">{{(data.salesName||data.shopName)|zy}}</span>
              <span >{{data.commentStr||data.extenalFileds.commentShow}}好评</span>
              <span>{{data.praiseRat||data.praiseDegree}}好评</span>
            </li>
            <li class="shopStore">
              <span>{{data.salesName||data.shopName||data.extenalFileds.njSnVendorName}}</span>
              <span>进店</span>
            </li>
          </ul>
    
    </div>
</template>

<script>
export default {
 name:"shopClassOne",
 props: {
   shop:{
     type:Object,
     required:true
   }
 },
 data () {
   return {
     data:{},
   }
 },
 
 created() {
    this.data = this.shop;
    this.data.shopImg = ""+this.data.shopImg;
 },
filters: {
  zy: function (value) {
    if(value==="苏宁自营") return value.substr(0,2)
    else return ''
  }
}

}
</script>
<style lang="stylus" scoped>
 @import '../../assets/stylus/ellipsis.styl';
 .shopClassOne
    background-color  #fff
    display flex
    width 3.56rem
    min-height 1.52rem
    border-radius  0.1rem
    margin 0 auto .09rem
    >div
      width 1.35rem
      height 1.35rem
      margin-right .1rem
      img   
        width  1.35rem
        height 1.35rem
    ul
      display flex
      flex-direction column  
      flex 1
      padding-top .1rem
      padding-right .1rem
      .shopName
        height .4rem
        line-height .2rem
        font-size .15rem
        font-weight bold
        text-align left 
        ellipsis(1,2)

      .shopClass
        font-size  .12rem
        color   #999
        height .2rem
        display flex
        flex-wrap wrap
        align-items center
        margin-top .05rem
        overflow hidden
        div
          font-size  .12rem
          color   #999
          height .2rem
          display flex
          flex-wrap wrap
          align-items center
          overflow hidden
          em
            padding-left .06rem
            border-left 1px solid #dcdcdc
            line-height .12ren
            font-size .12rem
            color #999
            height .16rem
            padding 0 0.05rem
            &:nth-child(1)
              padding-left 0
              border none
      .shopPrice
        font-size .14rem   
        color  #eb5435
        font-weight bolder
        text-align left
        height .25rem
        line-height .25rem
        &:first-letter
          font-size  .09rem
      .shopType
        display flex
        font-size .09rem
        div
          em
            padding .01rem .03rem
            border-radius .03rem
            margin-left .03rem
          .typeRed
            background-color  #e13d32
            color #ffffff
            &:first-child
              margin-left 0
          .typeOrign
            background-color #fdfbef
            border 1px solid #f4bd41
      .shopPj
        color  #ababab
        margin-top .13rem
        text-align left 
        display flex
        height .13rem
        line-height .13rem

        font-size .09rem
        aitems center
        span 
          display inline-block
          line-height .09rem
          padding 0.02rem .03rem
          margin-right .1rem
        .default
            display none
        .active
          margin-left 0
          background-color rgb(255,204,0)
          border-radius .03rem
          margin-right .12rem
          color  #000
          display inline-block
          
      .shopStore
        display flex
        font-size .09rem 
        height .16rem
        line-height .16rem
        text-align center
        margin-top .03rem
        color  #ababab
        span  
          display inline-block
          margin-right .05rem
          &:last-child
            color #333



          





            



      
</style>