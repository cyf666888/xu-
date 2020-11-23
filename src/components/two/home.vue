<template>
  <div>
    <div class="page">
      <!-- 头部 -->
      <header class="headCon">
        <a href="#" class="logo"
          ><img src="../../assets/images/logo.jpg" alt="logo"
        /></a>
        <input class="search" type="search" placeholder="寻找商品" />
        <p class="menu">
          <span></span>
          <span></span>
          <span></span>
        </p>
      </header>
      <!-- 导航栏 -->
      <nav class="navbar">
        <ul class="bar clearfix">
          <li class="cur"><a href="#">推荐</a></li>
          <li><a href="#">女装</a></li>
          <li><a href="#">鞋包</a></li>
          <li><a href="#">居家</a></li>
          <li><a href="#">母婴儿童</a></li>
          <li><a href="#">美食</a></li>
          <li><a href="#">果蔬</a></li>
          <li><a href="#">家电</a></li>
        </ul>
        <p class="arrow"></p>
      </nav>
      <!-- banner -->
      <div class="banner">
        <!-- <a href="#">
          <img src="../../assets/images/banner.jpg" alt="banner" />
        </a> -->
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="item in bannerList" :key="item.id">
            <img :src="$imgUrl + item.img" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 限时抢购-商品分类等 -->
      <ul class="iMenu">
        <li>
          <a href="#"
            ><img src="../../assets/images/indexicon1.jpg" alt="icon1"
          /></a>
          <p>限时抢购</p>
        </li>
        <li>
          <a href="#"
            ><img src="../../assets/images/indexicon2.jpg" alt="icon1"
          /></a>
          <p>积分商城</p>
        </li>
        <li>
          <a href="#"
            ><img src="../../assets/images/indexicon3.jpg" alt="icon1"
          /></a>
          <p>联系我们</p>
        </li>
        <li>
          <router-link to="/sort">
            <img src="../../assets/images/indexicon4.jpg" alt="icon1" />
            <p>商品分类</p>
          </router-link>
        </li>
      </ul>
      <!-- 限时秒杀等 -->
      <div class="limit">
        <div class="liTime">
          <div class="title clearfix">
            <img src="../../assets/images/timer.jpg" alt="timer" />
            <p>限时秒杀</p>
          </div>
          <p>每天零点场 好货秒不停</p>
          <div class="iconTime">
            <span>02</span>
            <em>:</em>
            <span>16</span>
            <em>:</em>
            <span>45</span>
            <i>秒杀</i>
          </div>
          <a href="#">
            <img src="../../assets/images/shop_5.jpg" alt="shop_5" />
            <em>&yen;14.8</em>
          </a>
        </div>
        <div class="right">
          <div class="top">
            <div class="lef">
              <h3>品牌上新<em></em></h3>
              <p>每日9点 抢大牌</p>
              <img src="../../assets/images/brand.jpg" alt="brand" />
            </div>
            <div class="rig">
              <img src="../../assets/images/indexshop.jpg" alt="indexshop" />
            </div>
          </div>
          <div class="bottom">
            <div>
              <h3>每日十件</h3>
              <p>只为你挑选好货</p>
              <img src="../../assets/images/shop_2.jpg" alt="iconIndex2" />
            </div>
            <div>
              <h3>拼啊</h3>
              <p>超级好价拼团</p>
              <img src="../../assets/images/shop_3.jpg" alt="iconIndex2" />
            </div>
          </div>
        </div>
      </div>
      <!-- 能率冰爽节 -->
      <div class="imgbar">
        <img src="../../assets/images/bar.jpg" alt="bar" />
      </div>
      <!-- 热门推荐等 -->

      <div class="hotdoor">
        <!-- <ul class="selBar">
          <li class="active"><a href="#">热门推荐</a></li>
          <li><a href="#">发现好货</a></li>
          <li><a href="#">只看专场</a></li>
          <li><a href="#">只看商品</a></li>
        </ul> -->
        <van-tabs type="card">
          <van-tab title="热门推荐">
            <ul class="show_shop">
              <li
                class="clearfix"
                v-for="item in hotList"
                :key="item.id"
                @click="goDetail"
              >
                <img class="fl" :src="$imgUrl+ item.img" alt="4" />
                <div class="cont fl">
                  <h3>{{ item.goodsname }}</h3>
                  <p class="pri">&yen;{{ item.price }}</p>
                  <p class="num">已售{{ item.market_price }} 件</p>
                  <a href="#">立即抢购</a>
                </div>
              </li>
            </ul>
          </van-tab>
          <van-tab title="新品上市">
            <ul class="show_shop">
              <li
                class="clearfix"
                v-for="item in newList"
                :key="item.id"
                @click="goDetail"
              >
                <img class="fl" :src="$imgUrl+ item.img" alt="4" />
                <div class="cont fl">
                  <h3>{{ item.goodsname }}</h3>
                  <p class="pri">&yen;{{ item.price }}</p>
                  <p class="num">已售{{ item.market_price}} 件</p>
                  <a href="#">立即抢购</a>
                </div>
              </li>
            </ul>
          </van-tab>
          <van-tab title="全部商品">
            <ul class="show_shop">
              <li
                class="clearfix"
                v-for="item in shopList"
                :key="item.id"
                @click="goDetail"
              >
                <img class="fl" :src="$imgUrl+ item.img" alt="4" />
                <div class="cont fl">
                  <h3>{{ item.goodsname }}</h3>
                  <p class="pri">&yen;{{ item.price }}</p>
                  <p class="num">已售{{ item.market_price }} 件</p>
                  <a href="#">立即抢购</a>
                </div>
              </li>
            </ul>
          </van-tab>
        </van-tabs>
      </div>
      <bottom-nav></bottom-nav>
    </div>
  </div>
</template>

<script>
import bottomNav from "../common/bottomNav";
import { getBannerList, getIndexGoods } from "../../utils/axios";
//单独调用axios
import axios from "axios";
// 引入轻提示
import { Toast } from "vant";
export default {
  data() {
    return {
      shopList: [],
      bannerList: [],
      hotList: [],
      newList: [],
    };
  },
  components: {
    bottomNav,
  },
  methods: {
    goDetail() {
      this.$router.push("/shopDetail");
    },
  },
  mounted() {
    // axios并发处理
    axios.all([getBannerList(), getIndexGoods()]).then(
      axios.spread((bannerList, indexGoods) => {
        // console.log(bannerList, "相应1");
        // console.log(indexGoods, "相应2");
        if (bannerList.code == 200) {
          this.bannerList = bannerList.list;
        } else {
          Toast.fail(bannerList.msg);
        };
        if (indexGoods.code == 200) {
          this.hotList = indexGoods.list[0].content;
          this.newList = indexGoods.list[1].content;
          this.shopList = indexGoods.list[2].content;
        } else {
          Toast.fail(indexGoods.msg);
        }
      })
    );
  },
};
</script>

<style lang="" scoped>
@import "../../assets/css/index.css";
</style>
