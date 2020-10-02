<template>
  <div class="searchDemo">
    <div class="top">
      <h2>{{title}}</h2>
      <span v-if="title==='最近搜索'" @click="clear">清空历史</span>
    </div>
    <ul class="ul">
      <li v-for="(item, index) in list" :key="index">{{item}}</li>
      
    </ul>
  </div>
</template>

<script>
export default {
  name: "searchDemo",
  props:{
      title:{
        type:String,
        requried:true,  
      },
      list:{
          type:Array,
          requried:true, 
      }
  },
  methods: {
    clear(){
      console.log('2');
      
      this.$emit("clearHistory",'')
      console.log('2');

    }
  },
};
</script>

<style lang="stylus" scoped>
.searchDemo
  width 3.58rem
  height 100%
  margin  0 auto
  .top
    width 100%
    display flex
    justify-content space-between
    padding-top .3rem
    line-height .15rem
    h2
      font-size  .15rem
    span 
      color #999 
      font-size .09rem  
  .ul
    display flex
    flex-wrap wrap
    padding-top .22rem
    li
      margin-left .13rem
      border-radius .05rem
      font-size .12rem
      line-height .12rem
      padding  .05rem .08rem
      margin-bottom .1rem
      background-color #f4f4f4
</style>