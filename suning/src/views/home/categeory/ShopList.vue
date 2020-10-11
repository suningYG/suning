<template>
  <div class="ShopList">
    <header>
      <router-link class="headerLink" to="/Search">
        <shopListHead :txt="txt" /></router-link>
      <!-- <input type="text" placeholder="月饼" /> -->
    </header>
    <div :class="{ black: true, dis_flex: seTwoTf }"></div>

    <div class="topImg">
      <img v-if="url" :src="url" alt />
    </div>
    <div class="classify">
      <ul class="topNav">
        <li @click="selectTop(0)">
          <span :class="seTop === 0 ? 'active' : ''">综合</span>
        </li>
        <li @click="selectTop(8)">
          <span :class="seTop === 8 ? 'active' : ''">销量</span>
        </li>
        <li @click="selectTop(9)">
          <span :class="seTop === 9 ? 'active' : ''">价格</span>
          <div class="three">
            <span :class="{ orignTop: sePrice === 9 }"></span>
            <span :class="{ orignBot: sePrice === 10, turnBot: true }"></span>
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
        <li @click="skip">筛选</li>
      </ul>
      <ul class="twoNav">
        <li
          v-for="(item, index) in nav"
          :key="index"
          :class="{
            active: seTwo === index || seNav[index].values.length !== 0,
          }"
          @click="selectTwo(index)"
        >
          <div v-if="!seNav[index].values.length" class="oneDiv">
            {{ nav[index].fieldDesc }}<span></span>
          </div>
          <div v-else class="twoDiv">
            <em v-for="(pp, index2) in seNav[index].values" :key="index2"
              >{{ nav[index].values[pp].valueDesc }} </em
            >
          </div>
        </li>
      </ul>
      <div>
        <ul :class="{ twoList: true, dis_flex: seTwoTf }" v-if="seTwo > -1">
          <li
            :class="{ active: item.checked }"
            v-for="(item, index) in nav[seTwo].values"
            :key="index"
            @click="selNav(index)"
          >
            {{ item.valueDesc }} <span></span>
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
import shopClassOne from "../../../components/shopList/shopClassOne";
import shopClassTwo from "../../../components/shopList/shopClassTwo";
import shopListHead from "../../../components/shopList/shopListHead";
import { get } from "../../../utils/http";
export default {
  name: "ShopList",
  data() {
    return {
      seClass: true,
      txt: this.$route.params.content,
      sePrice: 0,
      seTop: 0,
      st: 0,
      cf: "",
      seTwoTf: false,
      seTwo: -1,
      nav: [],
      seNav: [],
      zs: [],
      url: "",
      shopList: [],
      res:[]
    };
  },
  components: {
    shopClassOne,
    shopClassTwo,
    shopListHead,
  },
  async mounted() {
    //获取四个分类数据
    // console.log(this.$router.history.current.params.key)
    if(this.$router.history.current.params.key){
      this.txt = this.$router.history.current.params.key
    }else{
      this.txt = localStorage.getItem('txt')
    }
    
    let res = await get({
      url: `/ebuy/mpapi/mobile/clientSearch?keyword=${this.txt}&iv=0&st=0&cp=0&cf=&ci=&ct=0&sp=&spf=&operate=0&cityId=358&clientType=yg_wxminpro&jlfStoreCode=&saleMode=&jlfOnly=&store=%5B%5D&ch=100040&ps=10&v=10.0`,
    });
    let res2 = await get({
      url: `/th/mpapi/cpc/getCpcDataForMip?&t=mip&q=${this.txt}&positionID=700000003&v_m=3&dev_id=&city=351&member_id=7062798981`,
    });
    let res3 = await get({
      url: `th/mpapi/cpm/getMTBrandCGoods?m_pid=500000003&t_pid=&q=${this.txt}&c_pid=100000007&ts_pid=&cpc_shop_pid=&cpm_brand_pid=500001022&city=351&clt=minipro&dev_id=&v_m=3&brandName=`,
    });
    res.data.filters.forEach(item=>{
      if(item.values.length>18){
        item.values = item.values.filter((item, index) => index < 18)
      }
    })
    console.log( res.data.filters);
    // if (res.data.filters[0].values.length > 18)
    //   res.data.filters[0].values = res.data.filters[0].values.filter(
    //     (item, index) => index < 18
    //   );
    // else res.data.filters[0].values = res.data.filters[0].values;
    this.nav = res.data.filters;
    // console.log(this.nav);
    this.nav.length > 4 ? (this.nav.length = 4) : this.nav;

    this.nav.forEach((item, index) => {
      this.seNav.push({ values: [] });
    });
    // console.log(res2.data.rows.length);
    if (res2.data.rows.length === 0) {
      this.shopList = res.data.goods;
      this.shopList.forEach((item, index) => {
        item.cmdPrice = (Math.random() * 100).toFixed(2);
      });
    } else {
      this.shopList = res2.data.rows;
    }
    this.url = res3.data.cpmDatas.adSrc;
    this.res = res;
    // console.log(this.shopList);
  },
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
    async selectTop(ind) {
      this.seTop = ind;
      if (this.seTop === 9) {
        if (this.sePrice === 0 || this.sePrice === 9) this.sePrice = 10;
        else this.sePrice = 9;
      } else {
        this.sePrice = 0;
      }
      this.st = this.seTop === 9 ? this.sePrice : this.seTop;
      let res = await get({
        url: `/ebuy/mpapi/mobile/clientSearch?keyword=${this.txt}&iv=0&st=${this.st}&cp=0&cf=&ci=&ct=0&sp=&spf=&operate=0&cityId=358&clientType=yg_wxminpro&jlfStoreCode=&saleMode=&jlfOnly=&store=%5B%5D&ch=100040&ps=10&v=10.0`,
      });
      this.res = res;
      this.shopList = res.data.goods;
      // console.log(this.shopList);
    },
    //选择商品属性分类
    selectTwo(txt) {
      console.log(txt);
      if (txt === this.seTwo) {
        this.seTwoTf = false;
        this.seTwo = -1;
        return;
      }
      // console.log("123");

      this.seTwoTf = true;
      this.seTwo = txt;
      this.zs = JSON.parse(JSON.stringify(this.seNav[this.seTwo]));
      // console.log(this.nav[this.seTwo]);

      this.bl();
    },
    // 遍历
    bl() {
      this.nav[this.seTwo].values.forEach((item, index) => {
        if (this.seNav[this.seTwo].values.indexOf(index) !== -1) {
          item.checked = true;
        } else {
          item.checked = false;
        }
      });
    },
    //筛选分类属性
    selNav(ind) {
      var index = this.zs.values.indexOf(ind);

      // console.log(index);

      if (index === -1) {
        // this.seNav[this.seTwo].push(ind);
        this.zs.values.unshift(ind);
        this.nav[this.seTwo].values[ind].checked = true;
      } else {
        //  this.seNav[this.seTwo].splice(index,1)
        this.zs.values.splice(index, 1);

        this.nav[this.seTwo].values[ind].checked = false;
      }
      // console.log(this.zs.values);
    },
    // 重选
    reset() {
      this.zs.values.length = 0;
      this.nav[this.seTwo].values.forEach((item, index) => {
        item.checked = false;
      });
    },
    async sure() {
      this.seNav[this.seTwo] = JSON.parse(JSON.stringify(this.zs));
      this.bl();
      this.seTwoTf = false;
      this.seTwo = -1;
      // console.log(this.seNav);
      let arr = [];
      this.seNav.forEach((item, index) => {
        item.values.forEach((item) =>
          arr.push(this.nav[index].values[item].value)
        );
      });
      this.cf = arr.join("%");

      let res = await get({
        url: `/ebuy/mpapi/mobile/clientSearch?keyword=${this.txt}&iv=0&st=${this.st}&cp=0&cf=${this.cf}&ci=&ct=0&sp=&spf=&operate=0&cityId=358&clientType=yg_wxminpro&jlfStoreCode=&saleMode=&jlfOnly=&store=%5B%5D&ch=100040&ps=10&v=10.0`,
      });
      this.res = res;
      this.shopList = res.data.goods;
      this.shopList.forEach((item, index) => {
        item.cmdPrice = (Math.random() * 100).toFixed(2);
      });
    },
    jrup() {
      this.$router.push("search");
    },
    skip(){
      this.$router.push({name:'typeScreen',params:{res:this.res.data}})
    }
  },
};
</script>

<style lang="stylus" scoped>
@import '../../../assets/stylus/border.styl';
@import '../../../assets/stylus/ellipsis.styl';

.ShopList {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  position: relative;
  text-align: center;

  header {
    height: 0.39rem;
    width: 100%;
    display: flex;
    align-items: center;
    background: #fff;
    position: fixed;
    z-index: 100;

    .headerLink {
      height: 0.39rem;
    }
  }

  .topImg {
    width: 3.58rem;
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
          color #343
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
          width: 100%;
          padding: 0 0.15rem;
          ellipsis(1, 1);
        }
      }

      .active {
        border_1px(1, #FFCC00, solid, 0.05rem);
        background-color: rgb(255, 238, 171);

        div {
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
        padding: 0 0.15rem;
        ellipsis(1, 1);

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
          background: url('../../../assets/images/shopList/icons.png') no-repeat 0 -38.28rem;
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
      margin-left: -0.1rem;
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

  .black {
    flex: 1;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    min-height: 6rem;
    position: fixed;
    top: 2rem;
    display: none;
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
