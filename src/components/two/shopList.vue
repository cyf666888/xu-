<template>
  <div>
    <div class="page">
        <!-- 头部 -->
        <header class="headCon">
            <a href="#" class="back"><img src="../../assets/images/arrowLeft.jpg" alt="back" @click="$router.go(-1)"></a>
            <a href="#" class="logo"><img src="../../assets/images/logo.jpg" alt="logo"></a>
            <p class="menu">
                <span></span>
                <span></span>
                <span></span>
            </p>
        </header>
        <!-- 搜索商品 -->
        <div class="search">
            <a href="#"> <em></em>搜索商品</a>
        </div>
        <!--  商品列表-->
        <ul class="shopList">
            <li>
                <img src="../../assets/images/pic.jpg" alt="pic">
                <div class="des">
                    <p class="mess">滋源修护滋养洗发香乳 520ml*2瓶</p>
                    <p class="pri">&yen;123.00</p>
                    <a href="#">3625条评论</a>
                </div>
            </li>
            <li>
                <img src="../../assets/images/pic.jpg" alt="pic">
                <div class="des">
                    <p class="mess">滋源修护滋养洗发香乳 520ml*2瓶</p>
                    <p class="pri">&yen;123.00</p>
                    <a href="#">3625条评论</a>
                </div>
            </li>
            <li>
                <img src="../../assets/images/pic.jpg" alt="pic">
                <div class="des">
                    <p class="mess">滋源修护滋养洗发香乳 520ml*2瓶</p>
                    <p class="pri">&yen;123.00</p>
                    <a href="#">3625条评论</a>
                </div>
            </li>
            <li>
                <img src="../../assets/images/pic.jpg" alt="pic">
                <div class="des">
                    <p class="mess">滋源修护滋养洗发香乳 520ml*2瓶</p>
                    <p class="pri">&yen;123.00</p>
                    <a href="#">3625条评论</a>
                </div>
            </li>
        </ul>

        <!-- footer -->
        <bottom-nav></bottom-nav>
    </div>
  </div>
</template>

<script>
import bottomNav from "../common/bottomNav";
export default {
  data() {
    return {};
  },
  components: {
    bottomNav,
  },
};
</script>

<style lang="" scoped>
@import "../../assets/css/shopList.css";
</style>
