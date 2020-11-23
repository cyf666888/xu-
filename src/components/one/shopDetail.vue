<template>
  <div>
    <div class="page">
      <!-- 头部 -->
      <header class="headCon">
        <goback />
        <h2>商品详情</h2>
        <p class="menu">
          <span></span>
          <span></span>
          <span></span>
        </p>
      </header>
      <!-- cont1 -->
      <div class="cont1">
        <img src="../../assets/images/picDetail_1.jpg" alt="picDetail_1" />
        <img src="../../assets/images/picDetail_2.jpg" alt="picDetail_2" />
        <p>娅芝贵妇素颜霜 贵妇膏神仙膏补水保湿懒人霜遮瑕珍珠膏</p>
        <p><span>&yen;123.00</span> （此价格不与套装优惠同时享受）</p>
      </div>
      <!-- cont2 -->
      <ul class="cont2">
        <li>
          <div>
            <p>促销：</p>
            <p>满减</p>
            <p>满2件9折；3件8折</p>
          </div>
          <a href="#">
            <img src="../../assets/images/arrow.jpg" alt="arrow" />
          </a>
        </li>
        <li>
          <p>购买数量</p>
          <div class="clearfix">
            <!-- <span>-</span>
                    <input type="text" value="1">
                    <span>+</span> -->
            <van-stepper v-model="value" integer />
          </div>
        </li>
        <li>
          <p>商品属性</p>
          <a href="#"
            ><img src="../../assets/images/arrow.jpg" alt="arrow"
          /></a>
        </li>
        <li>
          <span>规格</span>
          <span>30g</span>
          <span>5g</span>
        </li>
      </ul>
      <!-- cont3 -->
      <div class="cont3">
        <h3>商品详情</h3>
        <img src="../../assets/images/picDetail_3.jpg" alt="picDetail_3" />
        <img src="../../assets/images/picDetail_4.jpg" alt="picDetail_4" />
        <img src="../../assets/images/picDetail_5.jpg" alt="picDetail_5" />
        <img src="../../assets/images/picDetail_6.jpg" alt="picDetail_6" />
        <img src="../../assets/images/picDetail_7.jpg" alt="picDetail_7" />
      </div>
      <!-- cont4 -->
      <ul class="cont4">
        <li>商品评价</li>
        <li>1235668fg</li>
        <li>效果很好，物流到位，下次继续来！</li>
        <li>
          <img src="../../assets/images/picDetail_8.jpg" alt="picDetail_8" />
          <img src="../../assets/images/picDetail_9.jpg" alt="picDetail_9" />
          <img src="../../assets/images/picDetail_10.jpg" alt="picDetail_10" />
        </li>
        <li>2020-01-13</li>
        <li>
          <p>共1000+评论</p>
          <a href="#">查看更多<em></em></a>
        </li>
      </ul>
      <!-- footer -->
      <footer>
        <!-- <a href="./cart.html">
                <img src="../../assets/images/iconCart.jpg" alt="iconCart">
                <p>购物车</p>
                <em>2</em>
            </a>
            <a href="#">加入购物车</a>
            <a href="./order.html">立即购买</a> -->
        <van-goods-action route>
          <van-goods-action-icon icon="chat-o" text="客服" dot />
          <van-goods-action-icon icon="cart-o" text="购物车" badge="5" to="/cart" />
          <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
          <van-goods-action-button type="warning" text="加入购物车" />
          <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
};
</script>

<style lang="" scoped>
@import "../../assets/css/detial.css";
</style>
