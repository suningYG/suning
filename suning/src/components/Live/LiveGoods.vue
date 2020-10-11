<template>
  <ul class="pList">
    <li class="product" v-for="(item, index) in liveList" :key="index">
      <div class="pro_left">
        <img :src="item.coverUrl" alt="" />
      </div>
      <div class="pro_right">
        <h3>{{ item.title }}</h3>
        <div class="recommend">
          <div class="photo">
            <img :src="item.headPic" alt="" />
          </div>
          <p>{{item.nickName}}</p>
        </div>
        <div class="introduce">
          <div class="conn">
            <img :src="item.productList[0].imgUrl" alt="" />
          </div>
          <div class="comm">
            <img :src="item.productList[1].imgUrl" alt="" />
          </div>
        </div>
        <div class="btn">
          <!-- <span>#</span> -->
          {{ item.labelName }}
        </div>
      </div>

    </li>
  </ul>
</template>

<script>
import { get } from "../../utils/http.js"

export default {
  props:{
    liveList:{
      type:Array
    },
  },

};
</script>

<style lang="stylus" scoped>
.pList {
  display: flex;
  flex-direction: column;
  border-radius: 0.15rem;
  padding: 0.12rem;

  .product {
    display: flex;
    width: 3.5rem;
    height: 2rem;
    margin-bottom: 0.1rem;

    .pro_left {
      width: 2rem;
      height: 2rem;
      background-color: #cccccc;
      border-top-left-radius: 0.15rem;
      border-bottom-left-radius: 0.15rem;

      img {
        width: 2rem;
        height: 2rem;
        border-top-left-radius: 0.15rem;
        border-bottom-left-radius: 0.15rem;
      }
    }

    .pro_right {
      height: 2rem;
      padding: 0.1rem 0 .1rem .1rem;
      background-color: #fff;
      border-top-right-radius: 0.15rem;
      border-bottom-right-radius: 0.15rem;

      h3 {
        height: 0.36rem;
        font-size: 0.16rem;
        line-height: 0.18rem;
        text-align: left;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }

      .recommend {
        display: flex;
        align-items: center;
        margin: 0.05rem 0;

        .photo {
          width: 0.3rem;
          height: 0.3rem;
          margin-right: 0.05rem;

          img {
            width: 0.3rem;
            height: 0.3rem;
            border-radius: 50%;
          }
        }

        p {
          font-size: 0.14rem;
          color: #444;
          width : 1rem
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      }

      .introduce {
        display: flex;

        img {
          width: 0.6rem;
          height: 0.6rem;
        }

        .conn, .comm {
          width: 0.6rem;
          height: 0.6rem;
          background-color: #999;
        }

        .conn {
          margin-right: 0.1rem;
        }
      }

      .btn {
        width: 0.67rem;
        height: 0.27rem;
        background-color: #fcf2eb;
        color: #FF729C;
        font-size: 0.12rem;
        line-height: 0.27rem;
        margin-top: 0.1rem;
        text-align: center;

        span {
          margin-right: 0.05rem;
        }
      }
    }
  }
}
</style>