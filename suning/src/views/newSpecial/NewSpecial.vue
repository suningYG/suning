<template>
  <div class="NewSpecial">
    <head>
      <span @click="clickBack">
        <svg t="1602154479161" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2244" width="20" height="20"><path d="M768 160.853333L691.2 85.333333l-358.826667 353.706667L256 514.133333l76.8 75.946667L686.933333 938.666667l75.946667-75.093334-353.706667-348.586666z" p-id="2245"></path></svg>
      </span>
      <h1>新人1元购专场</h1>
    </head>
    <main>
      <div class="ban">
        <img src="../../assets/imgs/newSpecial/6_02.png" alt="">
      </div>
      <!-- 吸顶设置 -->
      <van-sticky :offset-top="38">
    
          <div class="nav">
            <ul>
              <li
                v-for="(item,index) in navList"
                :key="index"
                @click="clickHandler(index)"
                :class="{active:curIndex===index}"
              >
                <em v-if="curIndex===index">
                  <svg t="1602072708426" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2076" width="10" height="10"><path d="M512 93.672727c192.791273 0 349.090909 157.742545 349.090909 352.302546 0 126.650182-110.941091 298.728727-332.8 516.189091a23.272727 23.272727 0 0 1-32.581818 0l-10.472727-10.309819C270.359273 739.258182 162.909091 570.647273 162.909091 445.975273c0-194.56 156.299636-352.302545 349.090909-352.302546zM512 302.545455a116.363636 116.363636 0 1 0 0 232.727272 116.363636 116.363636 0 0 0 0-232.727272z" p-id="2077" fill="red"></path></svg>
                </em>
                {{ item }}
              </li>
            </ul>
          </div>

      </van-sticky>
      
      <div class="content">
        <p>①领券&emsp;----&emsp;②选择你的宝贝&emsp;----&emsp;③立即开团/开枪</p>
        <div class="buying">
          <img src="../../assets/imgs/newSpecial/3_03.png" alt="">
        </div>
      </div>
      <div class="newGoods">
        <h3>【1元精选】</h3>
        <ul class="Nui">
          <li class="Nlist" v-for="(item,index) in Ngoods" :key="index">
            <div class="tp">
              <!-- {{item.productPic}} -->
              <img :src=" 'http:'+item.productPic" alt="">
            </div>
            <div class="state">
              <span class="tag">包邮</span>
              <p>【券后1元包邮】网红日式海盐小圆饼约100g*3袋植物油饼干粗粮天日盐饼干零食海盐味休闲零食</p>
            </div>
            <div class="describe">
              9.9元2个
            </div>
            <div class="total">
              <div class="num">
                <div>￥{{item.pingouPrice}}</div>
                <div class="oldNum">￥9.9</div>
              </div>
              <div class="bn">+</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="newList">
        <h3>【1元精选】</h3>
        <ul class="Lui">
          <li class="Llist" v-for="(item,i) in liList" :key="i">
            <!--  -->
            <div class="tp">
              <img :src="item.productPic" alt="">
            </div>
            <div class="state">
              <!-- <span class="tag">包邮</span> -->
              <p>{{item.manualName}}</p>
            </div>
            <div class="box">
              <div class="price">￥{{item.pingouPrice}}</div>
              <div class="num">已拼515件</div>
            </div>
            <div class="btn">
              <div class="Lbt">2人团</div>
              <div class="Rbt">立即开团</div>
            </div>
          </li>         
        </ul>
      </div>
      <!-- <div class="newGoods">
        <van-tabs v-model="active" swipeable>
          <van-tab v-for="index in 4" :title="'选项 ' + index">
            内容 {{ index }}
          </van-tab>
        </van-tabs>
      </div> -->
      <div class="gift">
        <div class="exclusive">
          <img src="../../assets/imgs/newSpecial/1_03.png" alt="">
        </div>
        <!-- <div class="vouchers">
          <img src="../../assets/imgs/newSpecial/2_03.png" alt="">
        </div> -->
        <div class="txt">
          <p><span>————</span>&ensp;没有更多啦&ensp;<span>————</span></p>
        </div>
      </div>
      
    </main>
    <footer>
      <div class="lb">
        <div><svg t="1602157037736" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7954" width="30" height="30"><path d="M546.4 266.3h-69.6v199h-413V305.6c0-25.2 20.1-45.3 45.4-45.3h188.2c-50.6-10.5-88.4-32.2-89.9-72.2-1.4-47 51.7-123.1 129.1-105.7 80 18 135.9 79.9 178.7 132.9 43.2-54 104.4-123.7 187.8-134.7 69.8-8.8 127.4 60.8 120 106.8-6.3 40.3-44.9 62.2-94.2 72.8h185.8c25.2 0 45.4 20.2 45.4 45.3v159.7H547.3m-202.1-341c-38.6-15.2-61.2 1.1-77.5 28-8.9 15.2-18.3 35.4-4.2 50.1 37.1 38.2 139 35.4 207.4 28.3-32.4-40.2-72-85.2-125.7-106.4zM767.3 202c26.6-34-25.5-104.6-81.4-78.6-53.5 25.2-92 66.1-125.2 106.5 28.6 2.5 57.6 3.1 86.4 1.7 35-1.4 99.7-3.8 120.2-29.6zM112.5 501.9v289.3c0 89.5 73.3 162.8 162.8 162.8h202V501.9H112.5zM546.7 501.9V954h202.1c89.5 0 162.8-73.3 162.8-162.8V501.9H546.7z" fill="#d81e06" p-id="7955"></path></svg></div>
        199大礼包
      </div>
      <div class="by">
        <div><svg t="1601971935291" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4366" width="30" height="30"><path d="M353.952 817.52064c0 54.30784-44.01152 98.31936-98.31936 98.31936-54.30784 0-98.32064-44.01152-98.32064-98.31936s44.01152-98.31936 98.32064-98.31936C309.94048 719.2 353.952 763.21152 353.952 817.52064zM904.544 817.52064c0 54.30784-44.01152 98.31936-98.31936 98.31936-54.30784 0-98.31936-44.01152-98.31936-98.31936s44.01152-98.31936 98.31936-98.31936C860.53248 719.2 904.544 763.21152 904.544 817.52064zM992.41856 482.46528l-87.87456-156.54528c-17.97248-21.66144-30.10944-39.328-58.99136-39.328L707.904 286.592l0-117.984c0-21.66144-17.66656-39.328-39.328-39.328l-629.248 0C17.66656 129.28 0 146.94656 0 168.608L0 758.528c0 21.66144 17.66656 39.328 39.328 39.328l78.42432 0c9.64352-67.7504 67.48288-120.20992 137.88032-120.20992s128.2368 52.45952 137.88032 120.20992l274.83136-0.03968c9.67808-67.74656 67.51872-120.17024 137.88032-120.17024 70.39744 0 128.2368 52.45952 137.88032 120.20992l39.09632 0c21.66144 0 39.328-17.66656 39.328-39.328 0 0 0-159.38432 0-196.64C1022.528 524.63232 992.41856 482.46528 992.41856 482.46528zM747.232 561.888 747.232 365.248l96.20736 0c6.336 0 15.13344 9.2928 15.13344 9.2928l82.80064 153.93408c7.3344 10.79168 15.28704 23.58144 15.28704 33.41312L747.232 561.888z" p-id="4367" fill='red'></path></svg></div>
        9.9包邮
      </div>
      <div class="yh">
        <div><svg t="1602157096059" class="icon" viewBox="0 0 1280 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8795" width="30" height="30"><path d="M608.00128 544h-128a32 32 0 0 0 0 64h128V704a32 32 0 0 0 64 0V608h128a32 32 0 0 0 0-64h-128v-64h128a32 32 0 0 0 0-64h-114.752l105.408-105.344a32 32 0 1 0-45.312-45.312L640.00128 370.752 534.65728 265.344a32 32 0 1 0-45.312 45.312L594.75328 416H480.00128a32 32 0 0 0 0 64h128v64z m609.152 149.248c34.688 5.952 62.848 39.104 62.848 75.328V960c0 35.392-29.12 64.064-63.488 64.064H63.48928A63.616 63.616 0 0 1 0.00128 960v-191.36c0-35.712 28.352-67.392 62.848-75.392C62.84928 693.248 192.00128 704 192.00128 512S62.84928 330.752 62.84928 330.752C28.16128 324.8 0.00128 291.648 0.00128 255.424V64C0.00128 28.672 29.12128 0 63.48928 0h1153.024c35.072 0 63.488 28.48 63.488 64v191.36c0 35.712-28.352 67.392-62.848 75.392C1217.15328 330.752 1088.00128 320 1088.00128 512s129.152 181.248 129.152 181.248z" p-id="8796" fill="#d81e06"></path></svg></div>
        我的优惠券
      </div>
    </footer>
  </div>
</template>

<script>
import {get} from '../../utils/http.js'
import Vue from 'vue';
import { Tab, Tabs, Sticky ,Button} from 'vant';

Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Sticky);
Vue.use(Button)
export default {

  data() {
    return {
      navList:['券后1元购','新人5折专区','打牌用券专区','新人礼包券'],
      curIndex:0,
      active: 0,
      Ngoods:[],
      liList:[]
    };
  },

  methods:{
    clickBack(){
      this.$router.push('/index/bouti')
    },
    clickHandler(index){
      this.curIndex=index
    },

    async getNewGoods(){
      let result=await get({
        //https://lib.suning.com/scms/titansApi/getNewPgNoPriceFloorDatas_20200929150709140689_025_50_pinWhwj2Callback.jsonp?_=1602151136730&callback=pinWhwj2Callback
        url:'/scms/titansApi/getNewPgNoPriceFloorDatas_20200929150709140689_025_50_pinWhwj2Callback.jsonp?',
        params:{
          _:'1602151136730',
          callback:'pinWhwj2Callback'
        }
      })
      let g= JSON.parse(result.data.replace(/pinWhwj2Callback\(/ig,'').replace(/\)/ig,''))
      this.Ngoods = g.floorData
    
    },

    async getLisList(){
      let result1=await get({
        url:'/scms/titansApi/getNewPgNoPriceFloorDatas_20200929150500189016_025_48_pinWhwj1Callback.jsonp?',
        _:'1601703691339',
        callback:'pinWhwj1Callback'
      })
      let l=JSON.parse(result1.data.replace(/pinWhwj1Callback\(/ig,'').replace(/\)/ig,''))
      this.liList=l.floorData

    }

  },
  mounted(){
    this.getNewGoods()
    this.getLisList()
  }
}
</script>

<style lang="stylus" scoped>
.NewSpecial
  height 100%
  display flex
  flex-direction column
  head
    display flex
    width 100%
    height 0.4rem
    span
      display inline-block
      font-size .24rem
      margin-left 3%
    h1
      height .44rem
      text-align center
      line-height .44rem
      font-size .16rem
      margin 0 auto
    

  main 
    flex 1
    overflow auto
    background-color #f2f2f2
    width 100%
    .ban 
      width 100%
      height 1.9rem
      img 
        width 100%
        height 1.9rem
    .nav
      height .38rem
      background-color #fff
      margin 0 .11rem
      border-radius .08rem
      ul
        display flex
        justify-content center
        align-items center
        flex-direction row
        
        li
          display flex
          line-height .38rem
          font-size .12rem
          padding-left .17rem
          position relative
          &.active
            color red

         
          
    .content 
      text-align center
      p
        height .3rem
        line-height .3rem
        transform scale(0.9)
      .buying
        height 1.07rem
        img 
          height 1.07rem
    .newGoods
      h3
        height .39rem
        line-height .39rem
        text-align center
        margin-top .12rem
      .Nui
        width: 100%;
        overflow: hidden;
        display: flex;
        flex: 1;
        flex-wrap: wrap;    
        position: relative;
        margin 0 .1rem
        .Nlist
          flot left 
          position relative
          height 1.83rem
          text-align center
          width 30.33333%
          border-radius .1rem
          background-color #fff
          margin 0.025rem
          .tp
            height 1rem
            border-radius .1rem
            img
              height 100%
              width 100%
              border-radius .1rem
          .state
            display flex
            margin-top .02rem
            .tag
              width .48rem
              height .24rem
              line-height .24rem
              background-color #ff5b00
              color #ffffff
              // font-size .12rem
              transform scale(0.7)
              text-align center
              border-radius .05rem
              
            p
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              font-size .12rem
              
              
          .describe
            width 0.66rem
            height .2rem
            background-color #fff 
            font-size .12rem
            line-height .16rem
            margin .02rem 0rem
            border 1px solid #922d4b
            border-top 1px solid red
            border-radius .03rem
            margin-left 5%
            color #922d4b
          .total
            display flex
            margin-top .04rem
            position relative
            .num
              height .3rem
              width .5rem
              font-size .12rem
              line-height .16rem
              color red
              font-weight bold
              .oldNum 
                font-size .12rem
                transform scale(0.8)
                color #cccccc
                font-weight none 
                text-decoration line-through
            .bn
              margin-left 0.82rem
              margin-top 0.1rem  
              position absolute
              width .2rem
              height .2rem
              background-color #fa0100
              color #fff
              font-size .16rem
              font-weight bold
              border-radius .05rem
              line-height .2rem
    .newList
      width 100%
      h3
        height .39rem
        line-height .39rem
        text-align center
        margin-top .12rem
      .Lui
        width: 100%;
        overflow: hidden;
        display: flex;
        flex: 1;
        flex-wrap: wrap;    
        position: relative;
        margin 0 .1rem
        .Llist
          position relative
          height 2.5rem
          text-align center
          width 47%
          border-radius .1rem
          background-color #ffffff
          margin 0.025rem
          .tp
            height 1.53rem
            border-radius .1rem
            // margin-bottom .025rem
            img
              width 1.53rem
              height 1.43rem
              margin-top .05rem
              background-color #999
          .state
            width 100%
            height 0.34rem
            font-size .12rem
            transform scale(0.8)
            text-align left 
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            
          .box
            display flex
            height .21rem
            margin-bottom .05rem
            .price
              width 30%
              font-size .12rem
              color red
            .num
              color #666
              font-size .12rem
              transform scale(0.8)
              margin-left 30%
              //284 50
          .btn
            height .3rem
            display flex
            border 1px solid red
            margin 0 .1rem
            .Lbt
              width 50%
              color red
              font-size .12rem
              line-height .3rem
            .Rbt
              width 50%
              background-color red
              color #ffffff
              font-size .12rem
              text-align center
              line-height .3rem


             
    .gift
      display flex
      flex-direction column
      height .97rem
      width 3.37rem
      margin-bottom .1rem
      .exclusive 
        height .97rem
        width 100%
        margin .05rem 0
        margin-left 5%
        
        img
          height .97rem
          width 3.37rem
          
      .vouchers
        background-color pink 
        height 1.17rem
        width 100%
        margin-left 2%
        
        img
          height 1.17rem
          width 3.6rem
          text-align center
      .txt 
        height 0.6rem
        font-size .16rem
        text-align center
        color #999
        line-height 0.6rem



  footer 
    height .5rem
    display flex 
    text-align center
    justify-content center
    .lb
      width 33.3333%
      line-height .15rem
    .by
      width 33.3333%
      line-height .15rem
    .yh 
      text-align center
      line-height .15rem 

</style>