<template>
  <div class="Search">
    <header>
      <ShopListHead txt="请输入您想要的商品" @search="search" @store="store"  />
    </header>
    <div class="content">
      <div class="historys" v-show="historyList.length !== 0">
        <SearchDemo
          title="最近搜索"
          :list="historyList"
          @clearHistory="clear"
          @search = 'search'
        />
      </div>
      <div class="hots">
        <SearchDemo title="热门搜索" :list="hostList"  @search = 'search'/>
      </div>
    </div>
    <div class="result" v-show="storeShow">
      <ul>
        <li>
            <svg t="1601373954598" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="75140" width="200" height="200"><path d="M856.117895 538.947368c-18.297263 0-33.145263 14.767158-33.145263 32.983579v307.658106c0 13.554526-11.048421 24.522105-24.656843 24.522105H198.736842a24.602947 24.602947 0 0 1-24.683789-24.522105V572.685474c0-18.216421-14.821053-32.983579-33.145264-32.983579-18.297263 0-33.118316 14.767158-33.118315 32.983579v306.903579C107.789474 929.576421 148.48 970.105263 198.736842 970.105263h599.578947A90.731789 90.731789 0 0 0 889.263158 879.562105V571.957895c0-18.216421-14.821053-32.983579-33.145263-32.983579zM789.342316 269.473684H207.710316c-10.509474 0-19.078737 7.706947-19.078737 17.084632v19.725473c0 9.404632 8.569263 17.084632 19.078737 17.084632h581.632c10.509474 0 19.078737-7.68 19.078737-17.084632v-19.725473c0-9.377684-8.569263-17.084632-19.078737-17.084632z" fill="#F55102" p-id="75141"></path><path d="M1022.113684 368.963368c-0.862316-7.168-9.431579-26.192842-16.707368-39.073684l-0.269474 0.215579a24.252632 24.252632 0 0 0-1.832421-4.042105L872.825263 89.222737l-3.584-5.632c-0.754526-0.997053-1.428211-1.967158-2.074947-2.910316-6.144-8.704-18.917053-26.812632-47.804632-26.812632H194.263579c-16.491789 0-35.220211 9.404632-47.72379 23.956211l-2.398315 2.775579L14.551579 313.586526a46.888421 46.888421 0 0 0-3.584 9.701053 17.650526 17.650526 0 0 0-0.61979 2.344421C-35.489684 470.528 79.144421 587.776 193.104842 592.842105c70.467368 0 132.527158-37.025684 167.962947-92.779789 35.570526 55.781053 96.687158 92.645053 165.99579 92.645052 69.928421 0 131.503158-37.537684 166.938947-94.127157 33.037474 57.209263 92.510316 93.749895 164.082527 93.749894 53.301895 0 98.088421-23.04 128.40421-75.021473 22.905263-39.181474 44.058947-76.368842 35.624421-148.345264z m-82.728421 114.310737c-20.668632 30.208-49.017263 40.636632-79.225263 40.636632-66.56 0-116.250947-45.918316-125.871158-111.966316 0.080842-12.395789-12.395789-24.602947-23.848421-24.602947h-19.806316a15.279158 15.279158 0 0 0-1.509052 0.080842h-9.458527c-12.126316 0.727579-20.399158 9.701053-20.210526 24.791579 0.889263 70.197895-63.110737 112.559158-132.392421 112.559158-68.176842 0-124.550737-53.355789-132.042105-121.802106a17.300211 17.300211 0 0 0-17.057685-15.548631h-10.078315c-5.524211-0.431158-11.264 0-16.168421 0h-6.278737c-10.24 0-19.671579 8.353684-20.722527 18.593684-6.844632 66.991158-63.272421 117.086316-131.610947 117.382737-73.889684 0.323368-147.752421-106.765474-123.041684-173.702737v-0.026947a181.894737 181.894737 0 0 0 5.766737-12.314948L197.200842 121.802105h617.606737l1.320421 1.832421 133.012211 231.612632c5.173895 5.685895 11.398737 24.225684 11.964631 25.653895a7.545263 7.545263 0 0 0 1.347369 2.45221c8.245895 36.648421-11.533474 83.051789-23.066948 99.893895z" fill="#F55102" p-id="75142"></path></svg>
            搜索" <b>{{ content }}</b> "相关的店铺</li>
        <li  v-show="list.length!==0" v-for="(item, index) in list" :key="index" @click="toShopList(content,item.keyword)"><b>{{content}}</b>{{item.keyword}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import ShopListHead from "../../../components/shopList/shopListHead";
import SearchDemo from "../../../components/search/searchDemo";
import {get} from '../../../utils/http'
export default {
  name: "Search",
  data() {
    return {
      content: "",
      storeShow: false,
      historyList: [
      ],
      hostList: [],
      list: [],
    };
  },
  components: {
    ShopListHead,
    SearchDemo,
  },

  async mounted() {
    this.getHistory();
    //获取热门搜索数据
     let res = await get({url:"/ds/mpapi/ds/terminal/word/channel/-100040-minipro---showHotkeywords.json",})
       this.hostList = res.data.rs.hotWord
  },

  methods: {
  search(content) {
      if(content.trim().length === 0 ) return ;
      let index = this.historyList.indexOf(content);
      if (index === -1) this.historyList.unshift(content);
      else this.historyList.splice(index, 1), this.historyList.unshift(content);
      localStorage.setItem("historyList", JSON.stringify(this.historyList));
      localStorage.setItem('txt',content)
      this.$router.push({name:"shopList",params:{content}})
 },
 toShopList(con,keyword){
   let content =  con.trim()+keyword.trim();
   this.search(content) 
 },
    getHistory() {
      this.historyList = JSON.parse(
        localStorage.getItem("historyList") || "[]"
      );
    },
   getHostList(){
    },
    clear() {
      localStorage.removeItem("historyList");
      this.getHistory();
    },
    store(content,res) {
      if (content.trim().length === 0) {
        this.storeShow = false;
      } else {
        this.storeShow = true;
        this.content = content
        res.length&&res.filter((item,index)=>index<10).forEach(element => {
          element.keyword = element.keyword.split("").filter((item,index)=>index>1).join("");
        });
        this.list =res
        //接口给数据并修改数据
        
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.Search {
  width: 100%;
  height: 100%;

  header {
    width: 100%;
    height: 0.39rem;
    position: relative;
  }

  .result {
    width: 100%;
    position: fixed;
    background-color: #f7f7f7;
    top: 0.4rem;
    bottom: 0;
    left: 0;
    right: 0;

    ul {
      display: flex;
      flex-direction: column;
      width: 3.55rem;
      margin: 0 auto;

      li {
        width: 100%;
        height: 0.5rem;
        line-height: 0.5rem;
        text-align: left;
        font-size: 0.15rem;
        padding-left: 0.05rem;
        border-bottom: 1px solid #e8e8e8;
        display flex
        align-items center
        padding-left .05rem
        svg {
            width .2rem
            height .2rem
            margin-right .1rem
        }
        &:nth-child(1){
            padding 0
        }
      }
    }
  }
}
</style>