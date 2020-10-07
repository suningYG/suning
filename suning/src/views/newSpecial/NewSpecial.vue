<template>
  <div class="NewSpecial">
    <head>
      <h1>新人1元购专场</h1>
      <div class="ban">
        <img src="../../assets/imgs/newSpecial/6_02.png" alt="">
      </div>
    </head>
    <main>
      <div class="nav">
        <ul>
          <li>券后1元购</li>
          <li>新人5折专区</li>
          <li>打牌用券专区</li>
          <li>新人礼包券</li>
        </ul>
      </div>
      <div class="content">
        <p>①领券&emsp;----&emsp;②选择你的宝贝&emsp;----&emsp;③立即开团/开枪</p>
        <div class="buying">
          <img src="../../assets/imgs/newSpecial/3_03.png" alt="">
        </div>
      </div>
      <div class="newGoods">
        <h3>【1元精选】</h3>
        <ul class="Nui">
          <li class="Nlist">
            <div class="tp">
              <img src="" alt="">
            </div>
            <div class="state">
              <span class="tag">包邮</span>
              <p>【券后1元购】</p>
            </div>
            <div class="describe">
              9.9元2个
            </div>
            <div class="total">
              <div class="num">
                <div>￥6</div>
                <div class="oldNum">￥9.9</div>
              </div>
              <div class="bn">+</div>
            </div>
          </li>
          <li class="Nlist">
            <div class="tp">
              <img src="" alt="">
            </div>
            <div class="state">
              <span class="tag">包邮</span>
              <p>【券后1元购】</p>
            </div>
            <div class="describe">
              9.9元2个
            </div>
            <div class="total">
              <div class="num">
                <div>￥6</div>
                <div class="oldNum">￥9.9</div>
              </div>
              <div class="bn">+</div>
            </div>
          </li>
          <li class="Nlist">
            <div class="tp">
              <img src="" alt="">
            </div>
            <div class="state">
              <span class="tag">包邮</span>
              <p>【券后1元购】</p>
            </div>
            <div class="describe">
              9.9元2个
            </div>
            <div class="total">
              <div class="num">
                <div>￥6</div>
                <div class="oldNum">￥9.9</div>
              </div>
              <div class="bn">+</div>
            </div>
          </li>
          <li class="Nlist">
            <div class="tp">
              <img src="" alt="">
            </div>
            <div class="state">
              <span class="tag">包邮</span>
              <p>【券后1元购】</p>
            </div>
            <div class="describe">
              9.9元2个
            </div>
            <div class="total">
              <div class="num">
                <div>￥6</div>
                <div class="oldNum">￥9.9</div>
              </div>
              <div class="bn">+</div>
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
        <div class="vouchers">
          <img src="../../assets/imgs/newSpecial/2_03.png" alt="">
        </div>
        <div>
          <p>没有更多啦</p>
        </div>
      </div>
    </main>
    <footer>
      <van-tabbar v-model="active">
        <van-tabbar-item icon="point-gift" color="red">199大礼包</van-tabbar-item>
        <van-tabbar-item icon="search">9.9包邮</van-tabbar-item>
        <van-tabbar-item icon="friends-o">我的优惠券</van-tabbar-item>
      </van-tabbar>
      <!-- <svg t="1601972026990" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5002" width="200" height="200"><path d="M911.644444 291.038384H645.559596l46.157576-46.157576c30.254545-30.254545 30.254545-79.385859 0-109.769697s-79.385859-30.254545-109.769697 0L512 205.187879l-69.947475-69.947475c-30.254545-30.254545-79.385859-30.254545-109.769697 0s-30.254545 79.385859 0 109.769697l46.157576 46.157576H112.355556v258.585858H188.767677v362.020202h646.464646v-362.020202h76.412121V291.038384z m-366.157575-46.157576l73.179798-73.179798c10.084848-10.084848 26.505051-10.084848 36.589899 0s10.084848 26.505051 0 36.589899l-73.179798 73.179798c-10.084848 10.084848-26.505051 10.084848-36.589899 0-10.214141-10.214141-10.214141-26.505051 0-36.589899z m-176.614142-73.179798c10.084848-10.084848 26.505051-10.084848 36.589899 0l73.179798 73.179798c10.084848 10.084848 10.084848 26.505051 0 36.589899-10.084848 10.084848-26.505051 10.084848-36.589899 0l-73.179798-73.179798c-10.084848-10.084848-10.084848-26.505051 0-36.589899zM164.072727 497.907071v-155.151515H486.141414v155.151515H164.072727z m76.412121 51.717171h245.656566v310.303031H240.484848v-310.303031z m543.030304 310.303031H537.858586v-310.303031h245.656566v310.303031z m76.412121-362.020202H537.858586v-155.151515h322.068687v155.151515z" p-id="5003" fill='red'></path></svg>
      <svg t="1601971935291" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4366" width="200" height="200"><path d="M353.952 817.52064c0 54.30784-44.01152 98.31936-98.31936 98.31936-54.30784 0-98.32064-44.01152-98.32064-98.31936s44.01152-98.31936 98.32064-98.31936C309.94048 719.2 353.952 763.21152 353.952 817.52064zM904.544 817.52064c0 54.30784-44.01152 98.31936-98.31936 98.31936-54.30784 0-98.31936-44.01152-98.31936-98.31936s44.01152-98.31936 98.31936-98.31936C860.53248 719.2 904.544 763.21152 904.544 817.52064zM992.41856 482.46528l-87.87456-156.54528c-17.97248-21.66144-30.10944-39.328-58.99136-39.328L707.904 286.592l0-117.984c0-21.66144-17.66656-39.328-39.328-39.328l-629.248 0C17.66656 129.28 0 146.94656 0 168.608L0 758.528c0 21.66144 17.66656 39.328 39.328 39.328l78.42432 0c9.64352-67.7504 67.48288-120.20992 137.88032-120.20992s128.2368 52.45952 137.88032 120.20992l274.83136-0.03968c9.67808-67.74656 67.51872-120.17024 137.88032-120.17024 70.39744 0 128.2368 52.45952 137.88032 120.20992l39.09632 0c21.66144 0 39.328-17.66656 39.328-39.328 0 0 0-159.38432 0-196.64C1022.528 524.63232 992.41856 482.46528 992.41856 482.46528zM747.232 561.888 747.232 365.248l96.20736 0c6.336 0 15.13344 9.2928 15.13344 9.2928l82.80064 153.93408c7.3344 10.79168 15.28704 23.58144 15.28704 33.41312L747.232 561.888z" p-id="4367" fill='red'></path></svg>
      <svg t="1601972077921" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5801" width="200" height="200"><path d="M821.333 138.667c64.8 0 117.334 52.533 117.334 117.333v149.333a32 32 0 0 1-32 32 74.667 74.667 0 0 0 0 149.334 32 32 0 0 1 32 32V768c0 64.8-52.534 117.333-117.334 117.333H202.667c-64.8 0-117.334-52.533-117.334-117.333V618.667a32 32 0 0 1 32-32 74.667 74.667 0 0 0 0-149.334 32 32 0 0 1-32-32V256c0-64.8 52.534-117.333 117.334-117.333h618.666z m0 64H202.667A53.333 53.333 0 0 0 149.333 256v121.045C210.485 391.488 256 446.432 256 512c0 65.568-45.515 120.512-106.667 134.955V768a53.333 53.333 0 0 0 53.334 53.333h618.666A53.333 53.333 0 0 0 874.667 768V646.955C813.515 632.512 768 577.568 768 512c0-65.568 45.515-120.512 106.667-134.955V256a53.333 53.333 0 0 0-53.334-53.333z m-436.48 124.746a32 32 0 0 1 45.067 4.096L512 430.016l82.08-98.507a32 32 0 1 1 49.173 40.982l-71.84 86.176h47.254a32 32 0 0 1 31.946 30.122l0.054 1.878a32 32 0 0 1-32 32h-69.334v42.666h69.334a32 32 0 0 1 31.946 30.123l0.054 1.877a32 32 0 0 1-32 32h-69.334V672a32 32 0 0 1-30.122 31.947l-1.878 0.053a32 32 0 0 1-32-32v-42.667h-80a32 32 0 0 1-31.946-30.122l-0.054-1.878a32 32 0 0 1 32-32h80v-42.666h-80a32 32 0 0 1-31.946-30.123l-0.054-1.877a32 32 0 0 1 32-32h47.232l-71.818-86.187a32 32 0 0 1 2.581-43.723z" p-id="5802" fill='red'></path></svg> -->
    </footer>
  </div>
</template>

<script>
import Vue from 'vue';
import { Tab, Tabs } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);
export default {
  data() {
    return {
      active: 0,
    };
  },
}
</script>

<style lang="stylus" scoped>
.NewSpecial
  height 100%
  display flex
  flex-direction column
  head
    display flex
    flex-direction column
    width 100%
    height 2.34rem
    h1
      height .44rem
      text-align center
      line-height .44rem
      font-size .16rem
    .ban 
      width 100%
      height 1.9rem
      img 
        width 100%
        height 1.9rem

  main 
    flex 1
    overflow auto
    background-color #f2f2f2
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
          padding-left .07rem
          //676   214         60    78    366--183  
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
          border 1px solid red
          margin 0.025rem
          .tp
            height 1rem
            background-color pink
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
            height .16rem
            background-color #fff 
            font-size .14rem
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
              //674  194    710   234
    .gift
      height .97rem
      width 3.37rem
      
      .exclusive 
        height .97rem
        width 100%
        text-align center
        img
          height .97rem
          width 3.37rem
          text-align center
      .vouchers
        background-color #fff
        height 1.17rem
        width 100%
        img
          height 1.17rem
          width 3.6rem
          text-align center

  footer 
    display flex   

</style>