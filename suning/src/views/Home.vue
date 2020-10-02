<template>
  <div class="home">
      <router-link to="/ShopList">商品列表</router-link>
        <router-link to="/Search">搜索</router-link>
        <router-link to="/TypeScreen">筛选</router-link>
 </div>
</template>

<script>

export default {
  name: 'Home',

}
</script>
<style lang="stylus" scoped>
    a{
      display flex
      border 1px solid red
      text-align center
      font-size .2rem
      line-height .4rem
    }
</style>
