<template>
  <div class="selectCom">
    <div class="one">
      <div class="top">
        <h2>{{title}}</h2>
        <svg @click="show(0)" v-if="defaults===0" t="1601430065119" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="78141" width="200" height="200"><path d="M553.8336 763.06346667l418.00106667-418.41173334c23.1008-23.09866667 23.1008-60.56959999 0-83.67146666-23.0976-23.1584-60.51306667-23.1584-83.61173334 1e-8l-376.19946666 376.51946665-376.256-376.51946666c-23.09653333-23.1584-60.51306667-23.1584-83.60853334 0-23.10186667 23.10186667-23.10186667 60.57173334 0 83.67146666l418.06293334 418.41173334c23.0368 23.09546667 60.51306667 23.09546667 83.61173333 0z" fill="#cccccc" p-id="78142"></path></svg>
        <svg  v-if="defaults===1" t="1601430544398" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="78623" width="200" height="200"><path d="M763.06346667 470.1664l-418.41173334-418.00106667c-23.09866667-23.1008-60.56959999-23.1008-83.67146666 0-23.1584 23.0976-23.1584 60.51306667 1e-8 83.61173334l376.51946665 376.19946666-376.51946666 376.256c-23.1584 23.09653333-23.1584 60.51306667 0 83.60853334 23.10186667 23.10186667 60.57173334 23.10186667 83.67146666 0l418.41173334-418.06293334c23.09546667-23.0368 23.09546667-60.51306667 0-83.61173333z" fill="#cccccc" p-id="78624"></path></svg>
        <svg @click="show(2)" v-if="defaults===2" t="1601430428158" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="78330" width="200" height="200"><path d="M472.781 276.628L80.905 668.889c-21.657 21.655-21.657 56.784 0 78.442 21.654 21.711 56.731 21.711 78.386 0l352.687-352.987 352.74 352.987c21.653 21.711 56.731 21.711 78.383 0 21.658-21.658 21.658-56.786 0-78.442L551.167 276.628c-21.597-21.652-56.731-21.652-78.386 0z" p-id="78331" fill="#f7ce46"></path></svg>
      </div>
      <ul v-if="defaults===1" @click="updateAdd">
        <li class="active" >{{list[0]}}<span></span></li>
      </ul>
      <ul v-if="defaults===-1" class="price">
        <li> <input type="number" placeholder="最低价" maxlength="8" v-model="minPrice"></li>
        <li><span></span></li>
        <li><input type="number" placeholder="最高价" maxlength="8" v-model="maxPrice"></li>
      </ul>
      <ul v-if="defaults===0||defaults===2||defaults===-2"  :class="{'ul':defaults===2}">
          <li :class="{'active':selectList.indexOf(item)>-1}" v-for="(item,index ) in list "  :key="index" @click="select(item)" >{{item.valueDesc||item.name}}<span></span></li>
      </ul>
      <div v-show="title==='相关分类'||title==='价格区间'" class="ccc"></div>
    </div>
  
  </div>
</template>

<script>
export default {
  name: "selectCom",
  props:{
    num:{
      type:Boolean
    },
    list:{
      type:Array
    },
    title:{
      type:String,
      required:true
    },
    
  },
  data() {
      return {
           defaults:0,
          // num:false,//false 为单选  true 为多选
          selectList:[],
          minPrice:null,
          maxPrice:null,

      }
  },
  mounted() {
      if(this.title==="收货地"){this.defaults = 1;}
      else if(this.title==="价格区间"){this.defaults =-1;}
      else if(this.list.length<4) {this.defaults = -2;}
      let date = JSON.parse(localStorage.getItem('date')||'[]')
      date.forEach(item=>{
        if(item.title === '区间价格'){
            this.minPrice = item.Min_price
            this.maxPrice = item.Max_price
        }else if(item.title===this.title){
          this.selectList = item.list
        }
      })
      
  },
  computed: {
   /*  minPrice(){
      if(this.minPrice!==null){
               let date = JSON.parse(localStorage.getItem('date')||'[]');
             date.forEach(item=>{
        if(item.title ==='价格区间'){
            item = {title:this.title,Min_price:this.minPrice,Max_price:this.maxPrice}
          localStorage.setItem('date',JSON.stringify(date))
        }

      })    
      }
    } */
  },
  methods: {
    show(ind){
      if(ind ===0)  this.defaults=2;
      else if(ind ===2) this.defaults=0
    },
    select(txt){
      let date = JSON.parse(localStorage.getItem('date')||'[]');
      if(!this.num){
        if(this.selectList.length===0)this.selectList.push(txt);
        else (this.selectList.length--,this.selectList.push(txt))
        
      }else{
        let index =  this.selectList.indexOf(txt);
        if(index>-1)this.selectList.splice(index,1);
        else this.selectList.push(txt)
      }
     /*  date.forEach(item=>{
        if(item.title ==='价格区间'){
            item = {title:this.title,Min_price:this.minPrice,Max_price:this.maxPrice}
        }else if(item.title ===this.title){
            item = {title:this.title,list:this.selectList}
        }
          localStorage.setItem('date',JSON.stringify(date))

      })
       */
      
      
    },
    updateAdd(){
      console.log("修改地址");
      
    }
   
  },
};
</script>

<style lang="stylus" scoped>
 @import '../../assets/stylus/ellipsis.styl';

.selectCom
    display flex
    flex-direction column
    padding 0 .09rem
    width 100%
    overflow-y auto
   
    >div
        display flex
        flex-direction column
        .top
            display flex
            color #999
            font-size .13rem
            padding-bottom  .09rem
            padding-top .2rem
            line-height .13rem
            width  100%
            justify-content space-between
            svg 
                width .13rem
                height .13rem
                

                
        ul
            display flex
            flex-wrap wrap
            font-size .12rem
            overflow hidden
            height .4rem
            position relative

            li 
                width  1.12rem    
                height .3rem 
                background-color #f7f7f7
                line-height .3rem
                text-align center
                margin-right .1rem
                margin-bottom .1rem
                border-radius .05rem
                border 1px solid #fefefe
                ellipsis(1, 1);

                &:nth-child(3n)
                    margin-right 0
                
            .active
                border 1px solid #f7ce46
                border-radius .05rem
                width  1.12rem    
                height .3rem
                background-color #fefefe
                position relative
                overflow hidden
                span 
                    display: inline-block;
                    background: url('../../assets/images/shopList/icons.png') no-repeat 0 -38.28rem;
                    background-size: 3.64rem 39.18rem;
                    width: 0.15rem;
                    height: 0.15rem;
                    position: absolute;
                    right: -0.01rem;
                    bottom: -0.01rem;
        .ul
            height auto
        .ccc
            width 3.75rem
            height .06rem
            background-color #f7f7f7
            position relative
            left -.1rem
  
        .price
            overflow none 
            height .6rem
            display flex
            align-items center
            flex-wrap wrap
            li
              width  1.34rem
              border 1px solid #cccccc
              overflow hidden
              input 
                  width  100%
                  outline none 
                  border none
                  font-size .12rem
                  text-align center
                  &::placeholder
                      color #ccc
              &:nth-child(2)
                  width .15rem
                  height .01rem
              

            
</style>