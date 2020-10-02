<template>
  <div class="TypeScreen">
 <header>
      <van-nav-bar
  title="筛选"
  left-text=""
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
 </header>

 <SelectCom v-for="(item,index) in date" :key="index" :list="item.list" :title="item.title" :num="item.num" ></SelectCom>
<!-- <div class="components">
    <div class="top"><h2>服务</h2><span></span></div>
    <ul>
        <li>北京</li>
    </ul>
</div>
<div class="prices">
    <div class="top"><h2>价格区间</h2><span></span></div>
    <div><input type="number"><span></span><input type="text"></div>
</div> -->
  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar,Toast } from 'vant';
Vue.use(NavBar);
import SelectCom from '../components/shopList/selectCom'
export default {
  name: "TypeScreen",
   data() {
    return {
        date:[
            {
                title:"服务",
                list:["苏宁易购","免费快递","我的服务","苏宁易","免费递","的服务","易购","免费","的务"],
                num:false
            },
              {
                title:"服务",
                list:["苏宁易购","免费快递","我的服务","苏宁易","免费递","的服务","易购","免费","的务"],
                num:true
            },
             {
                title:"收货地",
                list:["北京"],
                num:false
            },
             {
                title:"价格区间",
                list:[],
                num:false
            },
             {
                title:"相关分类",
                list:["苏宁易购","免费快递","我的服务","苏宁易","免费递","的服务","易购","免费","的务"],
                num:true
            },
        ]
    };
  },
  components:{
      SelectCom
  },
  methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    },
  },
};
</script>

<style lang="stylus" scoped>
.TypeScreen
    display flex
    flex-direction column
    background-color #fefefe
    width 100%
    .van-nav-bar
       ::before
            color #000
            font-size .17rem 
    
            
</style>