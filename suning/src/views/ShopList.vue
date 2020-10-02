<template>
  <div class="ShopList">
    <header>
       <shopListHead txt="月饼" />
      <!-- <input type="text" placeholder="月饼" /> -->
    </header>
    <div :class="{'black':true,'dis_flex':seTwoTf}" ></div>

    <div class="topImg">
      <img src="../assets/images/shopList/showImg.png" alt />
    </div>
    <div class="classify">
      <ul class="topNav">
        <li @click="selectTop(1)">
          <span :class="seTop === 1 ? 'active' : ''">综合</span>
        </li>
        <li @click="selectTop(2)">
          <span :class="seTop === 2 ? 'active' : ''">销量</span>
        </li>
        <li @click="selectTop(3)">
          <span :class="seTop === 3 ? 'active' : ''">价格</span>
          <div class="three">
            <span :class="{ orignTop: sePrice === 1 }"></span>
            <span :class="{ orignBot: sePrice === 2, turnBot: true }"></span>
          </div>
        </li>
        <li v-if="seClass" @click="selectClass">
          <svg
            t="1601199825681"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="12653"
            width="200"
            height="200"
          >
            <path
              d="M149 148v264h259V148H149z m-36-72h331c19.882 0 36 16.118 36 36v336c0 19.882-16.118 36-36 36H113c-19.882 0-36-16.118-36-36V112c0-19.882 16.118-36 36-36z m505 72v264h259V148H618z m-36-72h331c19.882 0 36 16.118 36 36v336c0 19.882-16.118 36-36 36H582c-19.882 0-36-16.118-36-36V112c0-19.882 16.118-36 36-36z m36 536v264h259V612H618z m-36-72h331c19.882 0 36 16.118 36 36v336c0 19.882-16.118 36-36 36H582c-19.882 0-36-16.118-36-36V576c0-19.882 16.118-36 36-36z m-433 72v264h259V612H149z m-36-72h331c19.882 0 36 16.118 36 36v336c0 19.882-16.118 36-36 36H113c-19.882 0-36-16.118-36-36V576c0-19.882 16.118-36 36-36z"
              p-id="12654"
            ></path>
          </svg>
        </li>
        <li v-else @click="selectClass">
          <svg
            t="1601199855004"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="12790"
            width="200"
            height="200"
          >
            <path
              d="M149 148v264h259V148H149z m-36-72h331c19.882 0 36 16.118 36 36v336c0 19.882-16.118 36-36 36H113c-19.882 0-36-16.118-36-36V112c0-19.882 16.118-36 36-36z m36 536v264h259V612H149z m-36-72h331c19.882 0 36 16.118 36 36v336c0 19.882-16.118 36-36 36H113c-19.882 0-36-16.118-36-36V576c0-19.882 16.118-36 36-36z m503.485-334c-19.882 0-36-16.118-36-36s16.118-36 36-36H904c19.882 0 36 16.118 36 36s-16.118 36-36 36H616.485z m0 220c-19.882 0-36-16.118-36-36s16.118-36 36-36H904c19.882 0 36 16.118 36 36s-16.118 36-36 36H616.485z m0 244c-19.882 0-36-16.118-36-36s16.118-36 36-36H904c19.882 0 36 16.118 36 36s-16.118 36-36 36H616.485z m0 220c-19.882 0-36-16.118-36-36s16.118-36 36-36H904c19.882 0 36 16.118 36 36s-16.118 36-36 36H616.485z"
              p-id="12791"
            ></path>
          </svg>
        </li>
        <li></li>
        <li>筛选</li>
      </ul>
      <ul class="twoNav">
        <li
          :class="{ active: seTwo === 'pp' || seNav.pp.length !== 0 }"
          @click="selectTwo('pp')"
        >
          <div v-if="!seNav.pp.length" class="oneDiv">品牌<span></span></div>
          <div v-else class="twoDiv">
            <em v-for="(pp, index) in seNav.pp" :key="index">{{
              nav["pp"][pp].name
            }}</em>
          </div>
        </li>
        <li
          :class="{ active: seTwo === 'lb' || seNav.lb.length !== 0 }"
          @click="selectTwo('lb')"
        >
          <div v-if="!seNav.lb.length" class="oneDiv">类别<span></span></div>
          <div v-else class="twoDiv">
            <em v-for="(lb, index) in seNav.lb" :key="index">{{
              nav["lb"][lb].name
            }}</em>
          </div>
        </li>
        <li
          :class="{ active: seTwo === 'gc' || seNav.gc.length !== 0 }"
          @click="selectTwo('gc')"
        >
          <div v-if="!seNav.gc.length" class="oneDiv">
            国产/进口<span></span>
          </div>
          <div v-else class="twoDiv">
            <em v-for="(gc, index) in seNav.gc" :key="index">{{
              nav["gc"][gc].name
            }}</em>
          </div>
        </li>
        <li
          :class="{ active: seTwo === 'kw' || seNav.kw.length !== 0 }"
          @click="selectTwo('kw')"
        >
          <div v-if="!seNav.kw.length" class="oneDiv">口味<span></span></div>
          <div v-else class="twoDiv">
            <em v-for="(kw, index) in seNav.kw" :key="index">{{
              nav["kw"][kw].name
            }}</em>
          </div>
        </li>
      </ul>
      <div >
        <ul :class="{ twoList: true, dis_flex: seTwoTf }">
          <li
            :class="{ active: item.selected }"
            v-for="(item, index) in nav[seTwo]"
            :key="index"
            @click="selNav(index)"
          >
            {{ item.name }} <span></span>
          </li>
          <li>
            <span @click="reset">重选</span>
            <span @click="sure" class="sure">确定</span>
          </li>
        </ul>
      </div>
      <div class="topTxt">
        <p>苏宁服务 正品保障 极速送达苏宁服务</p>
      </div>
      
    </div>
    <div class="content">
      <ul class="shopListsTwo">
        <div v-if="seClass">
          <shopClassOne
            v-for="(shop, index) in shopList"
            :key="index"
            :shop="shop"
          ></shopClassOne>
        </div>
        <div class="two" v-else>
          <div class="twoLeft">
            <shopClassTwo
              v-for="(shop, index) in listTwoLeft"
              :key="index"
              :shop="shop"
            ></shopClassTwo>
          </div>
          <div class="twoRight">
            <shopClassTwo
              v-for="(shop, index) in listTwoRight"
              :key="index"
              :shop="shop"
            ></shopClassTwo>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import shopClassOne from "../components/shopList/shopClassOne";
import shopClassTwo from "../components/shopList/shopClassTwo";
import shopListHead from "../components/shopList/shopListHead";

export default {
  name: "ShopList",
  data() {
    return {
      seClass: true,
      sePrice: 0,
      seTop: 1,
      seTwoTf: false,
      seTwo: "",
      nav: {
        pp: [
          { name: "坚果1", selected: false },
         
        ],
        lb: [
          { name: "坚果22", selected: false },
          { name: "坚果2", selected: false },
          { name: "坚果2", selected: false },
          { name: "坚果2", selected: false },
          { name: "坚果2", selected: false },
          { name: "坚果2", selected: false },
          { name: "坚果2", selected: false },
          { name: "坚果2", selected: false },
          { name: "坚果2", selected: false },
          { name: "坚果2", selected: false },
        ],
        gc: [
          { name: "坚果333", selected: false },
          { name: "坚果2", selected: false },
          { name: "坚果2", selected: false },
          { name: "坚果2", selected: false },
          { name: "坚果2", selected: false },
          { name: "坚果2", selected: false },
          { name: "坚果2", selected: false },
          { name: "坚果2", selected: false },
          { name: "坚果2", selected: false },
          { name: "坚果2", selected: false },
        ],
        kw: [
          { name: "坚果2444", selected: false },
          { name: "坚果2", selected: false },
          { name: "坚果2", selected: false },
          { name: "坚果2", selected: false },
          { name: "坚果2", selected: false },
          { name: "坚果2", selected: false },
          { name: "坚果2", selected: false },
          { name: "坚果2", selected: false },
          { name: "坚果2", selected: false },
          { name: "坚果2", selected: false },
        ],
      },
      seNav: {
        pp: [],
        lb: [],
        gc: [],
        kw: [],
      },
      zs: [],
      shopList: [
        {
          shopId: "20201001",
          shopImg: "static/ia_300000011.jpg",
          shopName: "真好吃的吃的真好吃的吃的真好吃的吃的",
          shopClass: ["白壳五香", "白壳五香"],
          shopPrice: 100,
          shopType: ["免运费"],
          stopStoreType: ["自营"],
          mj: ["每59-20", "领劵150-20"],
          shopPjNum: 1200,
          shopPjGood: 99,
          shopStore: "假货美食店",
        },
        {
          shopId: "20201002",
          shopImg: "assets/ia_300000014.jpg",
          shopName: "真好吃的吃的真好吃的吃的真好吃的吃的",
          shopClass: ["白壳五香", "白壳五香"],
          shopPrice: 100,
          shopType: ["免运费"],
          mj: ["每59-20", "领劵150-20"],
          shopPjNum: 1200,
          stopStoreType: ["自营"],
          shopPjGood: 99,
          shopStore: "假货美食店",
        },
        {
          shopId: "20201002",
          shopImg: "assets/ia_300000014.jpg",
          shopName: "真好吃的吃的真好吃的吃的真好吃的吃的",
          shopClass: ["白壳五香", "白壳五香"],
          shopPrice: 100,
          shopType: ["免运费"],
          mj: ["每59-20", "领劵150-20"],
          stopStoreType: ["自营"],
          shopPjNum: 1200,
          shopPjGood: 99,
          shopStore: "",
        },
        {
          shopId: "20201002",
          shopImg: "assets/ia_300000014.jpg",
          shopName: "真好吃的吃的真好吃的吃的真好吃的吃的",
          shopClass: ["白壳五香", "白壳五香"],
          shopPrice: 100,
          shopType: ["免运费"],
          stopStoreType: ["自营"],
          mj: ["每59-20", "领劵150-20"],
          shopPjNum: 1200,
          shopPjGood: "99%",
          shopStore: "假货美食店",
        },
        {
          shopId: "20201001",
          shopImg: "static/ia_300000011.jpg",
          shopName: "真好吃的吃的真好吃的吃的真好吃的吃的",
          shopClass: ["白壳五香", "白壳五香"],
          shopPrice: 100,
          shopType: ["免运费"],
          stopStoreType: ["自营"],
          mj: ["每59-20", "领劵150-20"],
          shopPjNum: 1200,
          shopPjGood: 99,
          shopStore: "假货美食店",
        },
        {
          shopId: "20201002",
          shopImg: "assets/ia_300000014.jpg",
          shopName: "真好吃的吃的真好吃的吃的真好吃的吃的",
          shopClass: ["白壳五香", "白壳五香"],
          shopPrice: 100,
          shopType: ["免运费"],
          mj: ["每59-20", "领劵150-20"],
          shopPjNum: 1200,
          stopStoreType: ["自营"],
          shopPjGood: 99,
          shopStore: "假货美食店",
        },
        {
          shopId: "20201001",
          shopImg: "static/ia_300000011.jpg",
          shopName: "真好吃的吃的真好吃的吃的真好吃的吃的",
          shopClass: ["白壳五香", "白壳五香"],
          shopPrice: 100,
          shopType: ["免运费"],
          stopStoreType: ["自营"],
          mj: ["每59-20", "领劵150-20"],
          shopPjNum: 1200,
          shopPjGood: 99,
          shopStore: "假货美食店",
        },
      ],
    };
  },

  components: {
    shopClassOne,
    shopClassTwo,
    shopListHead
  },
  mounted() {},
  computed: {
    listTwoLeft() {
      return this.shopList.filter((item, index) => index % 2 === 0);
    },
    listTwoRight() {
      return this.shopList.filter((item, index) => index % 2 === 1);
    },
  },
  methods: {
    //选择商品展示样式
    selectClass() {
      this.seClass = !this.seClass;
    },
    //选择排序方式
    selectTop(ind) {
      this.seTop = ind;
      if (this.seTop === 3) {
        if (this.sePrice === 0 || this.sePrice === 2) this.sePrice = 1;
        else this.sePrice = 2;
      } else {
        this.sePrice = 0;
      }
      console.log(this.sePrice);
    },
    //选择商品属性分类
    selectTwo(txt) {
      if(txt===this.seTwo){
       this.seTwoTf = false;
       this.seTwo = "";
       return
      }
      console.log('123');
      
      this.seTwoTf = true;
      this.seTwo = txt;
      this.zs = JSON.parse(JSON.stringify(this.seNav[this.seTwo]));
      console.log(this.zs);

      this.bl();
    },
    // 遍历
    bl() {
      this.nav[this.seTwo].forEach((item, index) => {
        if (this.seNav[this.seTwo].indexOf(index) !== -1) {
          item.selected = true;
        } else {
          item.selected = false;
        }
      });
    },
    //筛选分类属性
    selNav(ind) {
      var index = this.zs.indexOf(ind);

      console.log(index);

      if (index === -1) {
        // this.seNav[this.seTwo].push(ind);
        this.zs.unshift(ind);
        this.nav[this.seTwo][ind].selected = true;
      } else {
        //  this.seNav[this.seTwo].splice(index,1)
        this.zs.splice(index, 1);

        this.nav[this.seTwo][ind].selected = false;
      }
      console.log(this.zs);
    },
    // 重选
    reset() {
      this.zs.length = 0;
      this.nav[this.seTwo].forEach((item, index) => {
        item.selected = false;
      });
    },
    sure() {
      this.seNav[this.seTwo] = JSON.parse(JSON.stringify(this.zs));
      this.bl();
      this.seTwoTf = false;
      this.seTwo = "";
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/border.styl';
@import '../assets/stylus/ellipsis.styl';

.ShopList {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  position: relative;
  text-align center

  header {
    height: 0.39rem;
    width: 100%;
    display: flex;
    align-items: center;
    background: #fff;
    position: fixed;
    z-index: 100;

  }

  .topImg {
    width: 3.58rem;
    height: 1.35rem;
    margin: 0.39rem auto 0;

    img {
      width: 3.58rem;
      height: 1.35rem;
      border-radius: 0.1rem;
    }
  }

  .classify { 
    position: sticky;
    top: 0.389rem;
    width: 100%;
    padding: 0 0.09rem;
    margin: 0 auto;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    

    .topNav {
      padding-top: 0.05rem;
      display: flex;
      align-items: center;
      line-height: 0.32rem;

      li {
        font-size: 0.13rem;
        width: 0.78rem;
        position: relative;

        &:nth-child(3) {
          margin-left: 0.05rem;
          position: relative;

          span:nth-child(1) {
            display: inline-block;
            width: 0.34rem;
            height: 0.3rem;
            text-align: left;
          }

          .three {
            position: absolute;
            top: 0.08rem;
            left: 0.5rem;
            width: 0.09rem;
            display: flex;
            flex-direction: column;

            span {
              width: 0px;
              height: 0px;
              border-width: 0.03rem;
              border-style: solid;
              border-color: transparent transparent #999 transparent;
            }

            .turnBot {
              margin-top: 0.02rem;
              border-color: #999 transparent transparent transparent;
            }

            .orignBot {
              border-color: #f7ce46 transparent transparent transparent;
            }

            .orignTop {
              border-color: transparent transparent #f7ce46 transparent;
            }
          }
        }

        &:nth-child(4) {
          width: 0.32rem;
          height: 0.32rem;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 0.22rem;

          svg {
            width: 0.15rem;
            height: 0.15rem;
          }
        }

        &:nth-child(5) {
          width: 0;
          border-right: 1px solid #ccc;
          height: 0.15rem;
          margin: 0 0.06rem;
        }

        &:nth-child(6) {
          width: 0.31rem;
          margin-left: 0.08rem;
        }

        >span:nth-child(1) {
          padding: 0 0 0.04rem;

          &.active {
            font-weight: bold;
            border-bottom: 0.03rem solid #f7ce46;
          }
        }
      }
    }

    .twoNav {
      margin-top: 0.12rem;
      margin-bottom: 0.1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      li {
        width: 0.82rem;
        height: 0.27rem;
        background-color: #f2f2f2;
        border-radius: 0.05rem;
        line-height: 0.27rem;
        font-size: 0.12rem;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;

        .oneDiv {
          display: flex;
          justify-content: center;
          align-items: center;

          span {
            margin-left: 0.04rem;
            margin-top: 0.04rem;
            width: 0px;
            height: 0px;
            border-width: 0.03rem;
            border-style: solid;
            border-color: #999 transparent transparent transparent;
          }
        }

        .twoDiv {
          width: 0.6rem;
          ellipsis(1, 1);
        }
      }

      .active {
        border_1px(1, #FFCC00, solid, 0.05rem);
        background-color: rgb(255, 238, 171);
        div{
          span {
            margin-left: 0.04rem;
            margin-top: -0.05rem;
            width: 0px;
            height: 0px;
            border-width: 0.03rem;
            border-style: solid;
            border-color: transparent transparent #999 transparent;
        }
        }
        
      }
    }

  
    .twoList {
      padding-top: 0.15rem;
      padding: 0.15rem 0.1rem 0;
      width: 100%;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      display: none;
      position: absolute;
      background-color: #fff;
      left: 0;
      z-index: 99;

      li {
        height: 0.3rem;
        line-height: 0.3rem;
        font-size: 0.11rem;
        width: 1.11rem;
        margin-right: 0.1rem;
        background-color: #f7f7f7;
        border-radius: 0.05rem;
        margin-bottom: 0.12rem;

        &:nth-child(3n) {
          margin-right: 0;
        }

        &:last-child {
          width: 3.58rem;
          height: 0.34rem;
          line-height: 0.34rem;
          display: flex;
          justify-content: space-around;
          border-radius: 0;
          margin-top: 0.3rem;

          span {
            font-size: 0.14rem;
            display: inline-block;
            width: 1.74rem;
            border_1px(1, #c9c9c9, solid, 0.05rem);
            background-color: #fff;

            &:last-child {
              border_1px(1, #ffc55f, solid, 0.05rem);
              background-color: #f8ce46;
              margin-left: 0.07rem;
            }
          }
        }
      }

      .active {
        border_1px(1, #FFCC00, solid, 0.05rem);
        position: relative;
        overflow: hidden;
        span {
          display: inline-block;
          background: url('../assets/images/shopList/icons.png') no-repeat 0 -38.28rem;
          background-size: 3.64rem 39.18rem;
          width: 0.15rem;
          height: 0.15rem;
          position: absolute;
          right: -0.01rem;
          bottom: -0.01rem;
        }
      }
    }

      .dis_flex {
        display: flex;
      }

      .dis_none {
        display: none;
      }

    .topTxt {
      width: 3.75rem;
      margin-left -.1rem
      height: 0.5rem;
      background-color: #f2f2f2;
      display: flex;
      align-items: center;
      position: sticky;
      top: 1.24rem;
      z-index: 20;
      p {
        width: 3.56rem;
        margin: 0 auto;
        height: 0.25rem;
        line-height: 0.25rem;
        text-align: center;
        font-size: 0.13rem;
        background-color: #f7ce46;
        color: #222;
        border-radius: 0.05rem;
      }
    }
    
  }
  .black{
    flex 1
    width 100%
    background-color rgba(0,0,0,0.3)
    min-height 6rem
    position fixed
    top 2rem
    display none
    }
  .dis_flex {
      display: flex;
    }
  .content {
    // overflow-y scroll
    width: 100%;
    background-color: #f2f2f2;
    

    .shopListsOne {
      flex: 1;
      overflow-y: auto;
      margin: 0 auto;
    }

    .shopListsTwo {
      flex: 1;
      overflow-y: auto;
      margin: 0 auto;
      width: 100%;
      background-color: #f2f2f2;
      display: flex;
      flex-wrap: wrap;
      width: 3.56rem;

      .two {
        width: 100%;
        display: flex;
        justify-content: space-between;

        div {
          width: 1.72rem;
        }
      }
    }
  }
}
</style>
