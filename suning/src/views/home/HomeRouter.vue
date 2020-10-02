<template>
    <div class="container">
        <router-view></router-view>
        <Tabbar></Tabbar>
        <!-- <TableBar></TableBar> -->
    </div>

</template>
<script>
  import Tabbar from '../../components/TabBarList.vue'
  // import TableBar from '../../components/TableBar.vue'


export default {
    components:{
      Tabbar,
      // TableBar
    },
    mounted() {
      
    },
}
</script>
<style lang="stylus" scoped>
.container
    height 100%
    display flex
    flex-direction column


</style>