<template>
  <div class="Live">
    <header>
      <h1 class="Bt">苏宁直播</h1>
      <div class="nav">
    <ul>
      <li 
        v-for="(item,index) in hlist"
        :key="index"
        @click="clickHandler(index)"
        :class="{active:curIndex===index}"
      >{{ item }}</li>
    </ul>
  </div>
    </header>

    <main>
      <div class="box">
        <div class="bk"></div>
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

      <LiveGoods :liveList='liveList'></LiveGoods>
      
    </main>
    <footer></footer>
  </div>
</template>
<script>
import { get } from "../../../utils/http.js"

import LiveGoods from "../../../components/Live/LiveGoods"

export default {
  components:{
    LiveGoods,
  },
 
  data() {
    return{
       hlist:['推荐','家电家装','超市好物','3C数码','时尚百货','限量拼团','母婴必备','海外尖货','居家生活','生活电器'],
       curIndex:0,
       liveList:[],
       _:'',
       labelId:''
       
    }
  },

  methods:{
    clickHandler(index){
      this.curIndex=index
      
      switch(this.curIndex){
        case 0 :
          this.getRecList()
          break;
        case 1 :
          this._=1601897160541
          this.labelId=60
          this.getOtherList()
          break
        case 2:
          this._=1601901409484
          this.labelId=54
          this.getOtherList()
          break
        case 3:
          this._=1601902148601
          this.labelId=57
          this.getOtherList()
          break
        case 4:
          this._=1601902212062
          this.labelId=58
          this.getOtherList()
          break
        case 5:
          this._=1601902230925
          this.labelId=64
          this.getOtherList()
          break
        default:
          break

      }
    },

    async getRecList(){
      let result=await get({
      url:'/mzfs/mpapi/slv/slvHallTab.do?u=7309636498&c=&sceneIds=N000075&cityId=010&shopCode=&parameter=&labelId=-1&page=1&count=20&pageTag=&storeCode=&prevueState=&longitude=116.23128&latitude=40.22077&industryType=&bizCode=&source=wxapp',
      params:{}
    })
      let lList =result.data.slvHallData.data.liveList  
      this.liveList =[...lList]
      let rList=result.data.slvHallData.data.liveList.productList 
      
    },

    async getOtherList(){
      let result = await get({
        url:'/slv/mpapi/slv-web/pc/gateway/hall/wapLiveList.jsonp?callback=wapHallLiveCallback&categorId=1&page=1&pageSize=20&pageTag=&source=wxapp',
        params:{
          _:this._,
          labelId:this.labelId,
        }       
      })
      let obj = JSON.parse(result.data.replace(/wapHallLiveCallback\(/ig,'').replace(/\)/ig,''))
      this.liveList=[...obj.data.liveList]
    },

    
  },

  mounted(){
    this.getRecList()
  },

};

</script>
<style lang="stylus" scoped>
.Live {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.05);

  header {
    height: 0.84rem;
    font-size: 0.22rem;
 
    
    .Bt {
      color: #ffffff;
      line-height: 0.44rem;
      margin-left: 10%;
    }
    
  }
  .nav {
    height: 0.4rem;
    ul {
      display: flex;
      height: 0.4rem;
      overflow-x scroll
      li {
        display flex
        height: 0.4rem;
        flex-shrink: 0;
        font-size: 0.14rem;
        text-align: center;
        line-height: 0.4rem;
        padding: 0 0.1rem;
        color #ffffff
        position relative
        &.active::after{
          width .2rem
          height 0.1rem
          position absolute
          transform translate(-50%, 0)
          left 50%
          bottom 0
          content ''
          border-bottom 0.04rem solid #ffffff 
        } 
      }
    }
  }

 
  main {
    flex: 1;
    overflow auto
 
    .box {
      top: 0rem;
      right: 0;
      position: absolute;
      overflow: hidden;
      height: 2.15rem;
      width: 3.75rem;
      pointer-events: none;
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

    
  }
}
</style>