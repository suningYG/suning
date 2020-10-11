<template>
    <div class="position">
            <header>
                <h1>
                    购物车
                </h1>
            </header>
            <router-view></router-view>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus" scoped>
.position
    background-color #f2f2f2
    height 100%
    header 
        height 0.44rem
        display flex
        background-color #ffffff
        justify-content center
        align-items center
        h1
            font-size 0.2rem

</style>