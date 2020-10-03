<template>
  <div class="Live">
    <header>
      <h1 class="Bt">苏宁直播</h1>
    </header>
    <main>
      <div class="box">
        <div class="bk"></div>
      </div>
      <div class="nav">
        <!-- <van-tabs v-model="active">
            <van-tab title="推荐">内容 1</van-tab>
            <van-tab title="家电家装">内容 2</van-tab>
            <van-tab title="超市好物">内容 3</van-tab>
            <van-tab title="3C数码">内容 4</van-tab>
            <van-tab title="时尚百货">内容 1</van-tab>
            <van-tab title="限量拼团">内容 2</van-tab>
            <van-tab title="母婴必备">内容 3</van-tab>
            <van-tab title="海外尖货">内容 4</van-tab>
            <van-tab title="居家生活">内容 1</van-tab>
            <van-tab title="生活电器">内容 2</van-tab>
        </van-tabs> -->
        <ul>
          <li><a href="">推荐</a></li>
          <li><a href="">家电家装</a></li>
          <li><a href="">超市好物</a></li>
          <li><a href="">3C数码</a></li>
          <li><a href="">时尚百货</a></li>
          <li><a href="">限量拼团</a></li>
          <li><a href="">母婴必备</a></li>
          <li><a href="">海外尖货</a></li>
          <li><a href="">居家生活</a></li>
          <li><a href="">生活电器</a></li>
        </ul>
      </div>
      <!-- <div class="carousel">
                <div> 
                <img src="../../assets/images/live/1.jpg" alt="">
                </div>
            </div> -->
      <div class="goods">
        <div class="box1">
          <div class="tit">
            <p>领券中心</p>
            <div class="go">
              GO
              <span>></span>
            </div>
          </div>
          <div class="tt">
            <img src="../../../assets/imgs/live/3_03.png" alt="" />
          </div>
        </div>
        <div class="box2">
          <div class="tit">
            <p>直播排行榜</p>
            <div class="go">
              GO
              <span class="gt">></span>
            </div>
          </div>
          <div class="tt">
            <img src="../../../assets/imgs/live/4_03.png" />
          </div>
        </div>
      </div>
      <div class="title">
        <span class="txt">好货热播</span>
        <span class="line"></span>
      </div>
      <ul class="productList">
        <li class="product">
          <div class="pro_left">
            <img src="" alt="" />
          </div>
          <div class="pro_right">
            <h3>超市好物超市好物超市</h3>
            <div class="recommend">
              <div class="photo"><img src="" alt="" /></div>
              <p>小二推荐</p>
            </div>
            <div class="introduce">
              <div class="conn"><img src="" alt="" /></div>
              <div class="comm"></div>
            </div>
            <div class="btn"><span>#</span>超市好物</div>
          </div>
        </li>
      </ul>
    </main>
    <footer></footer>
  </div>
</template>
<script>
import { get } from "../../../utils/http.js"


import Vue from "vue";
import { Tab, Tabs } from "vant";

Vue.use(Tab);
Vue.use(Tabs);

export default {
  data() {
    return {
      active: 2,
    };
  },

  async mounted(){
    let result=await get({
      url:'/mzfs/mpapi/slv/slvHallTab.do?u=7309636498&c=&sceneIds=N000075&cityId=010&shopCode=&parameter=&labelId=-1&page=3&count=20&pageTag=191903237&storeCode=&prevueState=&longitude=116.23128&latitude=40.22077&industryType=&bizCode=&source=wxapp'
    })
    console.log(result)
  }
};

</script>
<style lang="stylus" scoped>
.Live {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.05);

  header {
    height: 0.44rem;
    font-size: 0.22rem;

    .Bt {
      color: #ffffff;
      line-height: 0.44rem;
      margin-left: 10%;
    }
  }

  main {
    flex: 1;

    .box {
      top: 0rem;
      right: 0;
      position: absolute;
      overflow: hidden;
      height: 2.15rem;
      width: 3.75rem;

      .bk {
        height: 2.15rem;
        width: 160%;
        background-color: #FF2226;
        position: absolute;
        left: -30%;
        top: 0;
        z-index: -1;
        display: flex;
        border-radius: 0 0 50% 50%;
      }
    }

    .nav {
      width: 100%;
      position: relative;
      overflow-x: scroll;

      ul {
        display: flex;
        overflow-x: scroll;

        li {
          height: 0.4rem;
          flex-shrink: 0;
          font-size: 0.14rem;
          text-align: center;
          line-height: 0.4rem;
          padding: 0 0.1rem;

          a {
            color: #fff;
          }
        }
      }
    }

    .carousel {
      height: 2.3rem;
      background-color: rgba(0 0 0 0.2);
    }

    .goods {
      margin: 0.12rem;
      height: 0.7rem;
      display: flex;
      flex-direction: row;

      .box1, .box2 {
        width: 1.75rem;
        height: 0.7rem;
        border-radius: 0.15rem;
        display: flex;
        flex-direction: row;
        background-color: #fff;

        .tit {
          width: 0.9rem;

          p {
            font-size: 0.16rem;
            color: #db453c;
            margin: 0.06rem 0;
            margin-left: 0.1rem;
          }

          .go {
            width: 0.6rem;
            height: 0.2rem;
            display: block;
            background-color: #db453c;
            margin-left: 0.1rem;
            border-radius: 0.3rem;
            color: #ffffff;
            text-align: center;
            // .gt {
            // line-height .2rem
            // margin-top .2rem
            // }
          }
        }

        .tt {
          width: 0.7rem;
          height: 0.65rem;
          margin-top: 0.02rem;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }

      .box2 {
        margin-left: 0.1rem;

        .tit p {
          color: #b549e3;
        }

        .tit .go {
          background-color: #b549e3;
        }
      }
    }

    .title {
      font-size: 0.2rem;
      margin-left: 0.2rem;
      // border-bottom 4px solid #ea3c5e
      display: inline-block;
      margin-top: 0.1rem;
      position: relative;

      .txt {
        position: relative;
        z-index: 999;
      }

      .line {
        width: 100%;
        height: 0.06rem;
        background: #ea3c5e;
        position: absolute;
        bottom: 0.04rem;
        z-index: 0;
        left: 0;
      }
    }

    .productList {
      display: flex;
      flex-direction: column;
      border-radius: 0.15rem;
      background-color: #fff;
      margin: 0.12rem;

      .product {
        display: flex;
        width: 3.5rem;
        height: 2rem;

        .pro_left {
          width: 2.4rem;
          height: 2rem;
          background-color: #cccccc;
          border-top-left-radius: 0.15rem;
          border-bottom-left-radius: 0.15rem;
        }

        .pro_right {
          height: 1.76rem;
          margin: 0.12rem;
          background-color: #fff;

          h3 {
            font-size: 0.16rem;
            text-align: left;
          }

          .recommend {
            display: flex;
            align-items: center;
            margin: 0.1rem 0;

            .photo {
              width: 0.3rem;
              height: 0.3rem;
              margin-right: 0.05rem;
              background-color: red;
              border-radius: 50%;
            }

            p {
              font-size: 0.14rem;
              color: #444;
            }
          }

          .introduce {
            display: flex;

            .conn, .comm {
              width: 0.6rem;
              height: 0.6rem;
              background-color: #999;
              border-radius: 0.1rem;
            }

            .conn {
              margin-right: 0.1rem;
            }
          }

          .btn {
            width: 0.67rem;
            height: 0.27rem;
            background-color: #fcf2eb;
            color: #ec612a;
            font-size: 0.1rem;
            line-height: 0.27rem;

            span {
              margin-right: 0.05rem;
            }
          }
        }
      }
    }
  }
}
</style>