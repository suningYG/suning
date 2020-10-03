<template>
  <div class="Order">
    <h1 class="header">
      订单列表
    </h1>
    <van-tabs v-model="active">
      <van-tab title="全部订单"></van-tab>
      <van-tab title="待支付"></van-tab>
      <van-tab title="待收货"></van-tab>
      <van-tab title="已完成"></van-tab>
    </van-tabs>
    <div class="content">
      <div class="tp"><img src="../../../assets/imgs/self/5_03.png" alt=""></div>
      <p>您还没有订单哦</p>
      <div class="btn">去首页</div>
    </div>
  </div>
  
</template>

<script>
import Vue from 'vue';
import { Tab, Tabs } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);

export default {
  data() {
    return {
      active: 0,
    }
  },
}
</script>

<style lang="stylus" scoped>
.Order
  display flex
  flex-direction column
  // align-items center
  // justify-content center
  height 100%
  width 100%
  .header
    background-color #FFDB47
    display flex
    align-items center
    justify-content center
    height .44rem
    line-height .44rem
    text-align center
    font-size .20rem
    width 100%
  .content
    text-align center
    flex 1
    background-color #f2f2f2
    margin-top 0.03rem
    width 100%
    //  228  284
    .tp 
      // width 2.28rem
      // height 2.84rem
      text-align center
      img 
        width 1.38rem
        height 1.94rem
        margin-top 20%
    p 
      font-size .16rem
      margin 4% 0
    .btn 
      width 1.64rem
      height .4rem
      line-height .4rem
      background-color #fff
      font-size .14rem
      color #666
      border-radius .1rem
      border 2px solid #ccc
      margin-left 28%
   
        
</style>