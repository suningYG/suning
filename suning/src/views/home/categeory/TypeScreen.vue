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
    <div class="content">
      <SelectCom
        v-for="(item, index) in list"
        :key="index"
        :list="item.list"
        :title="item.title"
        :num="item.num"
      ></SelectCom>
    </div>
    <div class="bott">
      <span @click="reset">重选</span>
      <span @click="sure" class="sure">确定</span>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar, Toast } from "vant";
Vue.use(NavBar);
import SelectCom from "../../../components/shopList/selectCom";
export default {
  name: "TypeScreen",
  data(){
    return {
      list:[
        {
          title: "服务",
          list: [{name:'苏宁服务',value:-1},{name:'有货商品',value:1},{name:'苏宁国际',value:2}],
          num: true,
        },
        {
          title: "收货地",
          list: ["北京"],
          num: false,
        },
        {
          title: "价格区间",
          list: [],
          num: false,
        },
      ],
    };
  },
  mounted() {
    let res = this.$route.params.res;
    if(res.hotDirectory.length!==0)this.list.push({ title: '相关分类', list: res.hotDirectory ,num:false});
    res.filters.forEach((item) => {
      this.list.push({ title: item.fieldDesc, list: item.values ,num:true});
    });
  },
  components: {
    SelectCom,
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      Toast("按钮");
    },
    reset() {},
    sure() {},
  },
};
</script>

<style lang="stylus" scoped>
@import '../../../assets/stylus/border.styl';
@import '../../../assets/stylus/ellipsis.styl';

.TypeScreen {
  display: flex;
  flex-direction: column;
  background-color: #fefefe;
  width: 100%;
  height: 100%;

  .van-nav-bar {
    ::before {
      color: #000;
      font-size: 0.17rem;
    }
  }

  header {
    height: 0.39rem;
  }

  .content {
    flex: 1;
    overflow-y: scroll;
    padding-bottom: 0.1rem;
    border-bottom: 1px solid #f2f2f2;
  }

  .bott {
    width: 3.58rem;
    height: 0.34rem;
    line-height: 0.34rem;
    display: flex;
    justify-content: space-around;
    border-radius: 0;
    margin-top: 0.1rem;
    margin-bottom: 0.4rem;

    span {
      font-size: 0.14rem;
      display: inline-block;
      width: 1.74rem;
      border_1px(1, #c9c9c9, solid, 0.05rem);
      background-color: #fff;
      text-align: center;

      &:last-child {
        border_1px(1, #ffc55f, solid, 0.05rem);
        background-color: #f8ce46;
        margin-left: 0.07rem;
      }
    }
  }
}
</style>