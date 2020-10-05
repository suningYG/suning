<template>
  <div class="list">
    <ul>
      <!-- <li>
        <img src="../../../assets/imgs/diamond.png" alt="" />
        <span>云钻打卡</span>
      </li>
      <li>
        <img src="../../../assets/imgs/snms.png" alt="" />
        <span>苏宁秒杀</span>
      </li>
      <li>
        <img src="../../../assets/imgs/sncs.png" alt="" />
        <span>苏宁超市</span>
      </li>
      <li>
        <img src="../../../assets/imgs/snpg.png" alt="" />
        <span>苏宁拼购</span>
      </li>
      <li>
        <img src="../../../assets/imgs/fruit.png" alt="" />
        <span>免费水果</span>
      </li>
      <li>
        <img src="../../../assets/imgs/fruit.png" alt="" />
        <span>免费水果</span>
      </li>
      <li>
        <img src="../../../assets/imgs/fruit.png" alt="" />
        <span>免费水果</span>
      </li>
      <li>
        <img src="../../../assets/imgs/fruit.png" alt="" />
        <span>免费水果</span>
      </li>
      <li>
        <img src="../../../assets/imgs/fruit.png" alt="" />
        <span>免费水果</span>
      </li>
      <li>
        <img src="../../../assets/imgs/fruit.png" alt="" />
        <span>免费水果</span>
      </li> -->
      <li v-for="item in enterList" :key="item.elementName" @click="clickHandler(item.elementName)">
        <img :src="'https://lib.suning.com/'+item.picUrl" alt="">
        <span>{{item.elementName}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import {get} from "../../../utils/http.js"
export default {
  async mounted(){
      let result = await get({
        url:'/api/jsonp/cb/wapindex7-cmsJsonpApi.jsonp?_=1601884057982&callback=cmsJsonpApi'
      })
      this.enterList = JSON.parse(result.data.substring(12,result.data.length-3))[7].enter_list.tag
  },
  data() {
    return {
        enterList:[]  
    }
  },
  methods:{
    clickHandler(id){
      
    }
  }

};
</script>

<style lang="stylus" scoped>
.list
    height 0.9rem
    background-color #f2f2f2
    padding 0.1rem 0.21rem 0 
    ul
        display flex
        overflow-x auto
        justify-content space-between
        flex-wrap nowrap
        li
            display flex
            flex-direction column
            align-items center
            flex-shrink 0
            width 0.666rem
            span
                display inline-block
                font-size 0.12rem
                color #7c7c7c
                margin-top 0.05rem
            img
                display inline-block
                width 0.3rem
                height 0.34rem
    .slide
        width 0.2rem
        height 0.04rem
        border-radius 10px
        background red 
        margin 0.07rem auto 0   

</style>