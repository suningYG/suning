<template>
    <div class="container">
        <header>
            <p>商品分类</p>
            <div>
                <!-- <Search></Search> -->
            </div>
        </header>
        <div class="catetoryContainer">
            <van-sidebar
              class="cate-sildebar"
              v-model="active"
            >
              <van-sidebar-item
                v-for="item in items"
                :title="item.dirName"
                :key="item.id"
                @click="clickHandler(item.id)"
              />
            </van-sidebar>

            <div class="catetory-content">
               <div class="cateBox" v-for="tit in catetories" :key="tit.id">
                   <h1>
                       {{tit.dirName}}
                   </h1>
                   <ul>
                       <li v-for="imgItem in tit.children" :key="imgItem.id">
                           <p>
                               <img :src="imgItem.imgWx" alt="">
                           </p>
                           <span>
                               {{imgItem.dirName}}
                           </span>
                       </li>
                   </ul>
               </div>
            </div>

       </div>  
    </div> 

    
</template>

<script>
import Vue from "vue";
import { Form, Sidebar, SidebarItem} from "vant";
import axios from "axios";
import {get} from '../../../utils/http'
import Search from '../categeory/Search'
Vue.use(Sidebar);
Vue.use(SidebarItem);

export default {
  components: {
    // 这边引入搜索框插件
    Search
  },
  async mounted(){
        let result = await get({
            url:'/ds/mpapi/ds/terminal/categoryInfo/99999979-callback.json'
        })
        this.items = result.data.rs
        this.catetories=result.data.rs[0].children

  },
    methods:{
        clickHandler(id){
            let arr = this.items.find(value =>{
                return value.id === id
            })
            this.catetories = arr.children
            console.log(this.catetories)
        }
    },

    data() {
            return {
            active: 0,
            items:[],
            catetories: [],
            };
        },
       
}
</script>

<style lang="stylus" scoped>
.container
    height 100%
    dispaly flex
    flex-direction column
    header
        height .54rem
        widht 100%
        display flex
        align-items center
        p
            display block
            width 3.6rem
            height .54rem
            font-size .18rem
            text-algin center
            color #000
            font-weight bloder
            line-height 0.54rem
            text-align center
        div
            width 11.4rem
            height .54rem
            background-color yellow
            padding-left 0.15rem
            display flex
            align-items center
    .catetoryContainer
        display flex
        flex 1
        height 100%
        overflow hidden
        .cate-sildebar
            overflow scroll
            font-size 0.16rem
            background-color #F0F0F0
            width 0.9rem
        .catetory-content
            height 100%
            overflow-y auto
            -webkit-overflow-scrolling touch
            background #fff
            flex 1
            word-wrap break-word
            word-break break-all
            padding-left 0.19rem
            padding-right 0.19rem
            .cateBox
                h1
                    font-size 0.14rem
                    height 0.54rem
                    line-height .54rem
                ul
                    display flex
                    flex-wrap wrap
                    padding-bottom 0.55rem
                    justify-content space-between
                    li
                        width 0.64rem
                        display flex
                        flex-direction column
                        p
                            height 0.66rem
                            img
                                height 100%
                                width 100%
                        span 
                            font-size 0.14rem
                            text-align center
                            height 0.28rem
                            line-height 0.28rem
        
                

</style>