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
<<<<<<< HEAD
=======


>>>>>>> 1cbe5af19b204e6ae3023da622ca64cd6666b0c9
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

<<<<<<< HEAD
=======

>>>>>>> 1cbe5af19b204e6ae3023da622ca64cd6666b0c9
</style>