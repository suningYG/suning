<template>
    <div class="tablegoods">
        <div class="tablebox">
            <ul>
                <li v-for="item in goods" :key="item.id">
                    <div class="imgbox">
                        <!-- <img src="" alt=""> -->
                        
                    </div>
                    <h5>{{item.goodsName}}</h5>
                </li>
            </ul>
        </div>
        
    </div>
</template>

<script>
export default {
    props:{
        goods:{
            type:Array,
            required:true
        }
    },
    mounted() {
        
    },
}
</script>
<style lang="stylus" scoped>
.tablegoods
    height 1.95rem
    background yellow
    padding 0 0.2rem 0.2rem
    .tablebox 
        width 100%
        height 100%
        ul
            display flex
            flex-wrap wrap
            justify-content space-between
            align-items space-between
            li 
                width 0.67rem
                height 0.68rem
              
                margin-top 0.2rem
                display flex
                justify-content center
                flex-direction column
                align-items center
                div
                    width 0.51rem
                    height 0.51rem
                    border-radius 100%
                    background #f1f3f3
                h5
                    font-size 0.12rem
                    font-weight normal
                    color #252525
                    margin-top 0.06rem


</style>