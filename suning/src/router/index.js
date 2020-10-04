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
                    component:() => import("../views/home/categeory/Categeory.vue"),
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
                    component:() => import("../views/home/myyigou/MyYiGou.vue")
                },
               
                
            ]
            
        },
        {
            path: '/shopList',
            name: 'shopList',
            component: () => import(/* webpackChunkName: "about" */ '../views/home/categeory/ShopList.vue')
          },
          {
            path: '/search',
            name: 'search',
            component: () => import(/* webpackChunkName: "about" */ '../views/home/categeory/Search.vue')
          },
          {
            path: '/typeScreen',
            name: 'typeScreen',
            component: () => import(/* webpackChunkName: "about" */ '../views/home/categeory/TypeScreen.vue')
          }

    ]
})