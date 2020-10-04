import Vue from "vue"

import Vuex from "vuex"
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        shopCar: JSON.parse(localStorage.getItem("shopCar"))
    },
    mutations:{
        addGoods(state,info){
           let isRep = state.shopCar.find(value => {
                if(info.sugGoodsCode === value.sugGoodsCode)
                return 1
            })
            if(isRep){
                let count = document.querySelector(".van-stepper__input")
                let lessBtn = document.querySelector(".van-stepper__minus")
                let c =count.attributes['aria-valuenow'].nodeValue
                let b = (++c).toString()
                count.setAttribute('aria-valuenow',b)
                count.value = b
                lessBtn.classList.remove("van-stepper__minus--disabled")
                return
            }else{
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
        }
    }
})

export default store