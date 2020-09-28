<template>
    <nav>
        <ul>
            <li
             v-for="item in list"
             :key="item.id"
            @click="clickHandler(item.id)"
            :class="{active : active == item.id}"
            >{{item.text}}</li>
        </ul>
        <div class="arrow">
        <svg t="1600785803652" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27460" width="0.16rem" height="0.16rem"><path d="M927.804 352.193l-415.804 415.632-415.803-415.632 63.616-63.445 352.209 352.017 352.102-352.017z" p-id="27461" fill="#707070"></path></svg>                   
        </div>
    </nav>        
</template>
<script>
export default {
    data() {
        return {
            active:"",
            list:[
                {
                    id:"001",
                    route:"/bouti",
                    text:"精选"
                },
                {
                    id:"002",
                    route:"/food",
                    text:"食品"
                },
                {
                    id:"003",
                    route:"/mumson",
                    text:"母婴"
                },
                {
                    id:"004",
                    route:"/percare",
                    text:"个护清洁"
                },
                {
                    id:"005",
                    route:"/import",
                    text:"进口"
                },
                {
                    id:"006",
                    route:"/phone",
                    text:"手机"
                },
                {
                    id:"007",
                    route:"/checken",
                    text:"厨卫"
                },
                {
                    id:"008",
                    route:"/appli",
                    text:"小家电"
                },
                {
                    id:"009",
                    route:"/duds",
                    text:"服饰"
                },
                {
                    id:"010",
                    route:"/health",
                    text:"苏宁健康"
                },
                {
                    id:"011",
                    route:"/footwear",
                    text:"鞋靴"
                },
            ]
        }
    },
    methods: {
        clickHandler(id){
            let path = this.list.find(value =>{
                return id === value.id
            } ).route
            if(this.$route.path === path) return
            this.$router.push(path)
            this.active = id
        }
    },
    mounted() {
        if(this.$route.path === "/bouti") this.active = "001"
    },
}
</script>
<style lang="stylus" scoped>
nav
    height 0.38rem
    background yellowgreen
    overflow-x auto
    display flex
    position relative
    ul
        height 100%
        display flex
        justify-content space-between
        padding-left 0.05rem
        padding-right 0.13rem
        align-items center
        flex-wrap nowrap
        li  
            font-size 0.16rem
            color #333333
            flex-shrink 0
            margin 0 0.12rem
        .active
            font-size 0.2rem
            color #000
    .arrow
        width 0.42rem
        height 0.38rem
        background white
        position fixed
        right 0
        display flex
        justify-content center
        align-items center
</style>