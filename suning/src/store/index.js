import Vue from "vue"

import Vuex from "vuex"
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        shopCar: JSON.parse(localStorage.getItem("shopCar")) || [],
        
        city:'北京',
        nowPos:'北京市北京昌平区沙河镇沙河路18号北京科技职业学院'
    },
    mutations:{
        addGoods(state,info){
           let isRep = state.shopCar.find(value => {
                if(info.sugGoodsCode === value.sugGoodsCode)
                return 1
            })
            if(isRep){
                // let count = document.querySelector(".count")
                // let lessBtn = document.querySelector(".less")
                // let c =count.value
                // let b = (++c).toString()
                // count.value = b
                // info.count++
                // console.log(info)
                return
            }else{
                info.count=1
                state.shopCar.push(info)
            }
            localStorage.setItem("shopCar",JSON.stringify(state.shopCar))
        },
        delGoods(state,id){
            let index = state.shopCar.find((value,index) => {
                if(value.sugGoodsCode === id) return index
            })
            state.shopCar.splice(index,1)
            localStorage.setItem("shopCar",JSON.stringify(state.shopCar))
        },
        delAllGoods(state){
            state.shopCar.length = 0
            localStorage.setItem("shopCar",JSON.stringify(state.shopCar))
        },
        setNowCity(state,pos){
            state.nowPos = pos
        }
    }
})

export default store