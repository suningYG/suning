<template>
  <div class="Live">
    <header>
      <h1>苏宁直播</h1>
    </header>
    <main>
     
      <div class="box">
        <div class="bk"></div>
      </div>
       <div class="nav">
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
            <img src="../../assets/images/live/3_03.png" alt="">
          </div>
        </div>
        <div class="box2">
          <div class="tit">
            <p>直播排行榜</p>
            <div class="go">
              GO
              <span>></span>
            </div>
          </div>
          <div class="tt">
            <img src="../../assets/images/live/4_03.png" >
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
            <img src="" alt="">
          </div>
          <div class="pro_right">
            <h3>超市好物超市好物超市</h3>
            <div class="recommend">
              <div class="photo"><img src="" alt=""></div>
              <p>小二推荐</p>
            </div>
            <div class="introduce">
              <div class="conn"><img src="" alt=""></div>
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
import http from "../../Utils/http"
export default {
  name:"Live",

  data(){
   return{
      productlist:[],
      loading:true
   }
  },
  // async mounted () {
  //   let result=await http.get('/api/mzfs/mpapi/slv/slvHallTab.do?',{
  //     content_code: "305e0a7a4aba32b08c6dd6dc5da47fa9"
      
  //   })

  //   console.log(result);
  // }
}
</script>

<style lang='stylus' scoped>

.Live
    height 100%
    display flex
    flex-direction column
    background-color rgba(0,0,0,.05)
    header
      height .44rem
      font-size .22rem
      h1
        color #ffffff
        line-height .44rem
        margin-left -2.1rem
    main
      flex 1
      .box
        top 0rem
        right 0
        position absolute
        overflow hidden
        height 2.15rem
        width: 3.75rem;
        
        .bk
          height 2.15rem
          width 160%;
          background-color #ff3d6f
          position absolute
          left -30%
          top 0
          z-index -1
          display flex
          border-radius: 0 0 50% 50%;
      .nav 
        width 100%
        position relative
        overflow-x scroll
        ul
          display flex
          overflow-x scroll
          li
            height .4rem
            flex-shrink 0
            font-size .14rem
            text-align center
            line-height .4rem
            padding 0 .1rem
            a
              color #fff    
      .carousel
        height 2.3rem
        background-color rgba(0 0 0 0.2)
      .goods
        margin .12rem   
        height 0.7rem 
        display flex
        flex-direction row
        .box1,.box2
          width  1.75rem
          height 0.7rem
          border-radius .15rem
          display flex
          flex-direction row
          background-color #fff
          .tit
            width 0.9rem
            p 
              font-size .16rem
              color #db453c
              margin 0.06rem 0 
            .go 
              width .6rem
              height .2rem
              display block
              background-color #db453c
              margin-left .1rem
              border-radius .3rem
              color #ffffff  
              span 
                margin-left .02rem  
          .tt
            width 0.7rem
            height 0.65rem
            margin-top .02rem
            img 
              width 100%
              height 100%
        .box2
          margin-left .1rem
          .tit p
            color #b549e3
          .tit .go 
            background-color #b549e3  
      .title
        font-size .19rem
        margin-left -2.6rem
        // border-bottom 4px solid #ea3c5e
        display inline-block
        margin-top .1rem
        position relative
        .txt 
          position: relative;
          z-index: 999;
        .line
          width 100%
          height .06rem
          background #ea3c5e
          position absolute
          bottom 0.04rem
          z-index 0
          left 0
        
      .productList
        display flex
        flex-direction column
        border-radius .15rem
        background-color #fff 
        margin 0.12rem
        .product
          display flex
          width 3.5rem
          height 2.0rem
          .pro_left
            width 2.4rem
            height 2.0rem
            background-color #cccccc
            border-top-left-radius .15rem
            border-bottom-left-radius .15rem
          .pro_right
            height 1.76rem
            margin 0.12rem
            background-color #fff 
            h3
              font-size .14rem
              text-align left 
            .recommend
              display flex
              align-items center
              margin 0.1rem 0
              .photo
                width .3rem
                height .3rem
                margin-right 0.05rem
                background-color red
                border-radius 50%
              p 
                font-size .12rem
                color #444  
            .introduce
              display flex

              .conn,.comm 
                width 0.6rem
                height 0.6rem
                background-color #999
                border-radius .1rem
              .conn 
                margin-right 0.1rem
            .btn
              width .67rem
              height .27rem
              background-color #fcf2eb
              color #ec612a
              font-size .1rem
              line-height .27rem 
              span 
                margin-right 0.05rem

        
      


    footer 
      display flex
      
      height .48rem
      background-color skyBlue   

    

</style>