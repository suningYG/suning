<template>
    <div class="shopListHead">
         <svg
        t="1600780012654"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3845"
        width="200"
        height="200"
      >
        <path
          d="M245.01248 555.52512l447.0784 447.0784c22.42048 22.42048 58.81856 22.42048 81.31584 0 22.42048-22.42048 22.42048-58.81856 0-81.31584l-406.49216-406.4256 406.49728-406.49216c22.42048-22.42048 22.42048-58.81856 0-81.31584-22.42048-22.42048-58.81856-22.42048-81.31584 0L244.9408 474.20928c-22.43584 22.47168-22.40512 58.88 0.07168 81.31584 0-0.00512 0 0 0 0z"
          fill=""
          p-id="3846"
        ></path>
      </svg>
      <input type="text" :placeholder="txt" v-model="content"  @focus="focusInp" @blur="blurInp" @keyup="keyUpInpu" @input="inputed"/>
      <svg v-show="show" @click.self="clear"  t="1601342901594" class="icon" viewBox="0 0 1097 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15667" width="200" height="200"><path d="M476.282308 0C213.271094 0 0.042698 213.431156 0.000011 476.762516s213.132352 476.783859 476.143566 476.901247 476.303639-213.303097 476.431698-476.623786A476.570428 476.570428 0 0 0 476.282308 0.021343z m244.229271 661.401809a43.614657 43.614657 0 0 1-30.947517 74.199342 43.166451 43.166451 0 0 1-30.766101-12.80587L475.866117 538.838968 290.063624 722.165659a43.123765 43.123765 0 0 1-30.55267 12.613782 43.625328 43.625328 0 0 1-30.34991-74.412773l185.813164-183.326691-183.550794-186.026596a43.817416 43.817416 0 1 1 61.895035-62.001751l183.550794 186.015924 185.823836-183.326691a43.817416 43.817416 0 0 1 61.895035 62.001751l-186.752261 184.778023z m0 0" p-id="15668" fill="#8a8a8a"></path></svg>
    </div>
</template>

<script>
    export default {
        name:'shopListHead',
        data() {
            return {
                show:false,
                content:"",
                id:'',
            }
        }, 
        props:{
            txt:{
                type:String
            }
        },
        methods: {
           keyUpInpu(e){
               if(e.keyCode===13){
                   this.show = false
                   if(this.content.trim().length ===0)return;
                   this.$emit("search", this.content)
                    // 查找
               }
               
           },
           clear(){
               console.log("23");
               this.show = false
               this.content =""
           },
           focusInp(){
               this.show = true;
           },
            blurInp(){
                this.show =false;
                //查找
            },
            inputed(){
                console.log('1');
                
                    clearTimeout(this.id);
               this.id = setTimeout(()=>{
                this.$emit("store",this.content)
                },1000)
            }
        },
    }
</script>

<style lang="stylus" scoped>
.shopListHead
    height: 0.39rem;
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 0.15rem;
    background: #fff;
    position: fixed;
    z-index: 100;

    svg {
      height: 0.36rem;
      width: 0.18rem;
      
    }
    svg:nth-child(3)
        position absolute
        top 0
        left 2.3rem
        width .2rem
        margin-top .02rem
    input {
      margin-left: 0.15rem;
      border-radius: 0.2rem;
      background-color: #f7f7f7;
      height: 0.32rem;
      border: none;
      padding-left: 0.15rem;
      width: 2.1rem;
      font-size: 0.14rem;
    }
</style>