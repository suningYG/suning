<template>
    <div class="shopClassTwo" >
          <div>
            <!-- <img :src="data.shopImg"  /> -->
            <img src="../../assets/ia_300000014.jpg"  />
          </div>
          <ul>
            <li class="shopName">{{data.shopName}}{{data.shopName}}</li> 
            <li class="stopStoreType"  >
                           <span>{{data.stopStoreType[0]}}</span>
                        </li>
            <li class="shopType" >
              <!-- <div v-for="(tp, index1) in data.shopType" :key="index1" ><em class="typeRed">{{tp}}</em></div> -->
              <div v-for="(mj, index3) in data.mj" :key="'index1-'+index3" ><em class="typeOrign">{{mj}}</em></div>
            </li>
            <li class="shopPrice">￥{{data.shopPrice}}</li>
            <li class="shopPj">
              <span>{{data.shopPjNum}}好评</span>
              <span>{{data.shopPjGood}}好评</span>
            </li>
            <li class="shopStore" v-if="data.shopStore.length">
              <span>{{data.shopStore}}</span>
            </li>
          </ul>
    
    </div>
</template>

<script>
export default {
 name:"shopClassTwo",
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


}
</script>
<style lang="stylus" scoped>
 @import '../../assets/stylus/ellipsis.styl';
 .shopClassTwo
    background-color  #fff
    display flex
    width 1.72rem
    border-radius  0.1rem
    margin-right 0.09rem
    flex-direction column
    margin-top .1rem
    padding-bottom .07rem
    
    &:nth-child(1)
      margin-top 0
    >div
      width 1.72rem
      height 1.72rem
      overflow hidden
      border-radius .05rem
      img   
        width  1.72rem
        height 1.72rem
    ul
      display flex
      flex-direction column  
      flex 1
      padding-top .1rem
      padding-left .07rem
      .shopName
        margin-top .07rem
        height .4rem
        line-height .2rem
        font-size .13rem
        font-weight bold
        text-align left 
        ellipsis(1,2)
     
      .shopType
        display flex
        font-size .09rem
        flex-wrap wrap
        line-height .24rem
        margin-top .05rem
        div
          em
            padding .01rem .03rem
            border-radius .03rem
            margin-right .05rem
            line-height .24rem
          
          .typeOrign
            background-color #fdfbef
            border 1px solid #f4bd41
         
       .shopPrice
        font-size .12rem   
        color  #eb5435
        font-weight bolder
        text-align left
        height .24rem
        line-height .24rem
        &:first-letter
          font-size  .09rem
      .stopStoreType
        color  #ababab
        margin-top .05rem
        text-align left 
        display flex
        height .13rem
        line-height .13rem
        font-size .09rem
        span 
          display inline-block
          line-height .09rem
          padding 0.02rem .03rem
          background-color rgb(255,204,0)
          border-radius .03rem
          color  #000
      .shopPj
        color  #ababab
        margin-top .05rem
        text-align left 
        display flex
        height .13rem
        line-height .13rem
        font-size .09rem
        aitems center
        span 
          display inline-block
          margin-right .12rem
          line-height .09rem
          padding 0.02rem .03rem .02rem 0
       
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
          



          





            



      
</style>