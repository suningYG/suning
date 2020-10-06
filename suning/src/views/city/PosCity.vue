<template>
    <div class="poscity">
        <main>
            <input type="text" placeholder="写字楼、小区、学校" v-model="value" @input="inputHandler">
            <span @click="goUpRouterHandler">取消</span>
            <div class="city" @click="clickHandler">
                {{ this.$store.state.city}}
            <svg t="1601961304417" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1247" width="0.1rem" height="0.1rem"><path d="M859.8528 292.9664H164.1472c-40.1408 0-60.3136 48.5376-31.8464 77.0048L480.1536 717.824c17.6128 17.6128 46.1824 17.6128 63.7952 0l347.8528-347.8528c28.3648-28.4672 8.2944-77.0048-31.9488-77.0048z" p-id="1248" fill="#707070"></path></svg>    
            </div>
        </main>
        <div class="cityArray">
            <ul>
                <li v-for="(item,index) in cityGroup" :key="item.address + index">
                    <p>
                        {{value}}
                        <span>
                            {{item.outPoiName}}
                        </span>
                    </p>
                    <h1>
                        {{item.address | getDress}}
                    </h1>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import {get} from "../../utils/http"
export default {
    data() {
        return {
            value:'',
            cityGroup:[],
            showCity:false
        }
    },
    methods:{
        clickHandler(){
            this.$router.push({name:'cityList'})
        },
        goUpRouterHandler(){
            this.$router.back()
        },
        async inputHandler(){ 
            let result = await get({
                url:'/ip-web/app/o2o/searchPoiListByKeyWords.html?page=1&offset=25',
                params:{
                    keywords:this.value,
                    cityName:this.$store.state.city
            }       
            })
            this.cityGroup = result.data.resultData
            
            if(this.value === undefined) this.cityGroup = []
        }
    },
    filters:{
        getDress(value){
            if(value.length < 20) return value
        }
    }
    
}
</script>
<style lang="stylus" scoped>
@import "../../assets/stylus/border.styl";
.poscity
    display flex
    flex-direction column
    main
        height 0.65rem
        display flex
        align-items center
        padding 0 0.1rem
        justify-content space-between
        position relative
        .city
            min-width 0.72rem
            position absolute
            height 0.14rem
            font-size 0.14rem
            line-height 0.14rem
            border-right 1px solid  #cccccc
            display flex
            justify-content space-between
            align-items center
            left 0.24rem
            padding-right 0.08rem
        input 
            width 3.17rem
            border-radius 20px
            border none 
            height 0.3rem
            padding-left 0.94rem
        span 
            font-size 0.15rem
.cityArray
    background-color #f2f2f2
    border-radius 12px
    padding 0 0.12rem
    height 7.1rem
    ul
    
        border-radius 10px
        li
            height 0.64rem
            border_1px(0 0 1px 0)
            border-color #ffffff
            font-size 0.16rem
            font-weight bold
            display flex
            flex-direction column
            justify-content center
            
            p
                height 0.37rem
                color #ee844c
                line-height 0.37rem
                span 
                    color #000000
            h1
                height 0.25rem
                font-size 0.13rem
                color #d5d5d5 
</style>