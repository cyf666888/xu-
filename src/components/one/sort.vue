<template>
  <div>
    <div class="page">
      <!-- 头部 -->
      <header class="headCon">
        <goback />
        <h2>商品分类</h2>
        <p class="menu">
          <span></span>
          <span></span>
          <span></span>
        </p>
      </header>
      <!-- 主要内容main -->
      <div class="main clearfix">
        <!-- 左边列表 -->
        <ul class="list fl">
          <!-- <li class="cur"><a href="#">施华蔻</a></li>
          <li><a href="#">施华蔻</a></li>
          <li><a href="#">施华蔻</a></li>
          <li><a href="#">施华蔻</a></li>
          <li><a href="#">施华蔻</a></li>
          <li><a href="#">施华蔻</a></li>
          <li><a href="#">施华蔻</a></li>
          <li><a href="#">施华蔻</a></li>
          <li><a href="#">施华蔻</a></li> -->
          <van-sidebar v-model="activeKey" @change="onChange">
            <van-sidebar-item title="标签名1" />
            <van-sidebar-item title="标签名2" />
            <van-sidebar-item title="标签名3" />
          </van-sidebar>
        </ul>
        <!-- 右边内容 -->
        <div class="cont fl">
          <div class="one">
            <div class="title clearfix">
              <h3 class="fl">洗发类</h3>
              <a href="#" class="fr">更多<em></em></a>
            </div>
            <ul class="items clearfix">
              <li v-for="item in goodsList1" :key="item.id" @click="goShopList">
                <img :src="item.img_url" alt="pic" />
                <p>{{ item.name }}</p>
              </li>
            </ul>
          </div>
          <div class="two">
            <div class="title clearfix">
              <h3 class="fl">染发类</h3>
              <a href="#" class="fr">更多<em></em></a>
            </div>
            <ul class="items clearfix">
              <li v-for="item in goodsList2" :key="item.id" @click="goShopList">
                <img :src="item.img_url" alt="pic" />
                <p>{{ item.name }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- footer -->
      <bottom-nav></bottom-nav>
    </div>
  </div>
</template>

<script>
import bottomNav from "../common/bottomNav";

export default {
  data() {
    return {
        activeKey: 0,
      goodsList1: [
        {
          id: 1,
          name: "护亮泽洗发水",
          img_url: require("../../assets/images/shopClassify_2.jpg"),
        },
        {
          id: 2,
          name: "护亮泽洗发水",
          img_url: require("../../assets/images/shopClassify_2.jpg"),
        },
        {
          id: 3,
          name: "护亮泽洗发水",
          img_url: require("../../assets/images/shopClassify_2.jpg"),
        },
        {
          id: 4,
          name: "护亮泽洗发水",
          img_url: require("../../assets/images/shopClassify_2.jpg"),
        },
        {
          id: 5,
          name: "护亮泽洗发水",
          img_url: require("../../assets/images/shopClassify_2.jpg"),
        },
        {
          id: 6,
          name: "护亮泽洗发水",
          img_url: require("../../assets/images/shopClassify_2.jpg"),
        },
      ],
      goodsList2: [
        {
          id: 1,
          name: "护亮泽洗发水",
          img_url: require("../../assets/images/shopClassify_1.jpg"),
        },
        {
          id: 2,
          name: "护亮泽洗发水",
          img_url: require("../../assets/images/shopClassify_1.jpg"),
        },
        {
          id: 3,
          name: "护亮泽洗发水",
          img_url: require("../../assets/images/shopClassify_1.jpg"),
        },
      ],
    };
  },
  components: {
    bottomNav,
  },
  methods: {
    goShopList() {
      this.$router.push("/shopList");
    },
    onChange(index) {
      // Notify({ type: 'primary', message: index });
    },
  },
};
</script>

<style lang="" scoped>
@import "../../assets/css/sort.css";
</style>
