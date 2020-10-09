import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

import Home from "../views/home/HomeRouter.vue"
export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:"/",
            name:"home",
            redirect:"/index",
            component:Home,
            children:[
                {
                    path:"/index",
                    name:"index",
                    redirect:"/index/bouti",
                    component:() => import("../views/home/index/Home.vue"),
                    children:[
                        {
                            path:"bouti",
                            name:"bouti",
                            component:() => import("../views/home/index/Boutique.vue")
                        },
                        {
                            path:"Goods/:id",
                            name:"Goods",
                            component:()=>import("../views/home/index/Goods.vue"),
                        },
                        // {
                        //     path:"food",
                        //     name:"food",
                        //     component:() => import("../views/home/index/Food.vue")
                        // },
                        // {
                        //     path:"mumson",
                        //     name:"mumson",
                        //     component:() => import("../views/home/index/MumSon.vue")
                        // },
                        // {
                        //     path:"percare",
                        //     name:"percare",
                        //     component:() => import("../views/home/index/PerCare.vue")
                        // },
                        {
                            path:"import",
                            name:"import",
                            component:() => import("../views/home/index/Import.vue")
                        },
                        // {
                        //     path:"phone",
                        //     name:"phone",
                        //     component:() => import("../views/home/index/Phone.vue")
                        // },
                        // {
                        //     path:"checken",
                        //     name:"checken",
                        //     component:()=>import("../views/home/index/Checken.vue")
                        // },
                        // {
                        //     path:"appli",
                        //     name:"appli",
                        //     component:() => import("../views/home/index/Appli.vue")
                        // },
                        // {
                        //     path:"duds",
                        //     name:"duds",
                        //     component:() => import("../views/home/index/Duds.vue")
                        // },
                        // {
                        //     path:"health",
                        //     name:"health",
                        //     component: () => import("../views/home/index/Health.vue")
                        // }
                    ]
                },
                {
                    path:"/cate",
                    name:"cate",
                    component:() => import("../views/home/categeory/Cate.vue"),
                },
                {
                    path:"/live",
                    name:"live",
                    component:() => import("../views/home/livebroadcast/LiveBroadCast.vue")
                },
                {
                    path:"/goods",
                    name:"goods",
                    component:() => import('../views/home/goodscar/GoodsCar.vue')
                },
                {
                    path:"/self",
                    name:"self",
                    redirect:'/recommend',
                    component:() => import("../views/home/myyigou/suning.vue"),
                    children:[
                        {
                            path:'/recommend',
                            name:'recommend',
                            component:() => import("../views/home/myyigou/recommend.vue")
                        },
                        // {
                        //     path:'/footprint',
                        //     name:'footprint',
                        //     component:() => import('../views/home/myyigou/footprint.vue')
                        // }
                    ]
              
                },
                {
                    path: '/Order' ,
                    name:'Order',
                    component:()=>import('../views/home/myyigou/Order.vue')
                }

               
                
            ]
            
        },
        {
            path:"/newSpecial",
            name:"newSpecial",
            component:()=> import('../views/newSpecial/NewSpecial.vue')
        },
        {
            path: '/shopList',
            name: 'shopList',
            component: () => import( '../views/home/categeory/ShopList.vue')
          },
          {
            path: '/search',
            name: 'search',
            component: () => import( '../views/home/categeory/Search.vue')
          },
          {
            path: '/typeScreen',
            name: 'typeScreen',
            component: () => import(/* webpackChunkName: "about" */ '../views/home/categeory/TypeScreen.vue')
          },
          {
            path:"/position",
            name:'position',
            redirect:'/posCity',
            component:()=> import("../views/city/Position.vue"),
            children:[
                {
                    path:'/cityList',
                    name:'cityList',
                    component:() => import("../views/city/CityList.vue")
                },
                {
                    path:'/posCity',
                    name:'posCity',
                    component:() => import("../views/city/PosCity.vue")
                }
            ]
        },
        {
            path:"/newSpecial",
            name:"newSpecial",
            component: () => import(/* webpackChunkName: "about" */ '../views/newSpecial/NewSpecial.vue'),
          }

    ]
})