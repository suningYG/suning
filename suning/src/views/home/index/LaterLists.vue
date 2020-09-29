<template>
  <div class="list">
    <ul>
      <li>
        <img src="../../../assets/imgs/diamond.png" alt="" />
        <span>云钻打卡</span>
      </li>
      <li>
        <img src="../../../assets/imgs/snms.png" alt="" />
        <span>苏宁秒杀</span>
      </li>
      <li>
        <img src="../../../assets/imgs/sncs.png" alt="" />
        <span>苏宁超市</span>
      </li>
      <li>
        <img src="../../../assets/imgs/snpg.png" alt="" />
        <span>苏宁拼购</span>
      </li>
      <li>
        <img src="../../../assets/imgs/fruit.png" alt="" />
        <span>免费水果</span>
      </li>
      <li>
        <img src="../../../assets/imgs/fruit.png" alt="" />
        <span>免费水果</span>
      </li>
      <li>
        <img src="../../../assets/imgs/fruit.png" alt="" />
        <span>免费水果</span>
      </li>
      <li>
        <img src="../../../assets/imgs/fruit.png" alt="" />
        <span>免费水果</span>
      </li>
      <li>
        <img src="../../../assets/imgs/fruit.png" alt="" />
        <span>免费水果</span>
      </li>
      <li>
        <img src="../../../assets/imgs/fruit.png" alt="" />
        <span>免费水果</span>
      </li>
    </ul>
    <div class="slide"></div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="stylus" scoped>
.list
    height 0.9rem
    background-color yellow
    padding 0.1rem 0.21rem 0 
    ul
        display flex
        overflow-x auto
        justify-content space-between
        flex-wrap nowrap
        li
            display flex
            flex-direction column
            align-items center
            flex-shrink 0
            width 0.666rem
            span
                display inline-block
                font-size 0.12rem
                color #7c7c7c
                margin-top 0.05rem
            img
                display inline-block
                width 0.3rem
                height 0.34rem
    .slide
        width 0.2rem
        height 0.04rem
        border-radius 10px
        background red 
        margin 0.07rem auto 0   

</style>