<template>
    <div class="EmptyCar">
        <header>购物车</header>
        <main>
            <div><img src="../../../assets/imgs/buyCar/sn-cart-empty.png" alt=""></div>
            <img src="" alt="">
            <div>登陆后查看购物车</div>
        </main>
        <footer>

        </footer>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="stylus" scoped>
.EmptyCar
    height 100%
    display flex
    flex-direction column

    header 
        height .44rem
        text-align center
        line-height .44rem
        font-size .16rem
        font-weight bold
        color #000
    
    main
        display flex
        flex-direction column
        align-items center
        justify-content center
        height 5.81rem
        background-color #f2f2f2
        
        >div:first-child
            display flex
            height 1.96rem
            width 1.96rem
            align-items center
            margin-top -0.7rem
            
            img 
                width 100%
                height 100%

        >div:last-child
            
            text-align center
            width 1.57rem
            height 0.33rem
            line-height 0.33rem
            font-size 0.14rem
            font-weight bold
            background-color #f7ce46
            border-radius 0.05rem
            margin-top 0.2rem
            color #000    
</style>