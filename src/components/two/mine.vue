<template>
  <div>
    <div class="page">
        <!-- 头部 -->
        <header class="headCon">
            <goback></goback>
            <h2>我的订单</h2>
            <p class="menu">
                <span></span>
                <span></span>
                <span></span>
            </p>
        </header>
        <!-- 头像部分 -->
        <div class="userInfo">
            <div class="dp clearfix">
                <div class="img fl">
                    <img src="../../assets/images/mine.png" alt="mine">
                </div>
                <div class="info fl">
                    <p class="nick">悠朔</p>
                    <p class="level">V1</p>
                </div>
            </div>
            <div class="sign">
                <a href="#">每日签到</a>
            </div>
        </div>
        <!-- icons -->
        <ul class="icons">
            <li><a href="#">
                <img src="../../assets/images/iconMine_1.jpg" alt="iconMine_1">
                <p>全部订单</p>
            </a></li>
            <li><a href="#">
                <img src="../../assets/images/iconMine_2.jpg" alt="iconMine_1">
                <p>待付款</p>
            </a></li>
            <li><a href="#">
                <img src="../../assets/images/iconMine_3.jpg" alt="iconMine_3">
                <p>待收货</p>
            </a></li>
        </ul>
        <!-- items -->
        <ul class="items">
            <li>
                <p><em></em>地址管理</p>
                <a href="#"><img src="../../assets/images/arrowRight.jpg" alt="arrowRight"></a>
            </li>
            <li>
                <p><em></em>我的钱包</p>
                <a href="#">
                    <span>200余额</span>
                    <img src="../../assets/images/arrowRight.jpg" alt="arrowRight">
                </a>
            </li>
            <li>
                <p><em></em>我的优惠券</p>
                <a href="#"><img src="../../assets/images/arrowRight.jpg" alt="arrowRight"></a>
            </li>
            <li>
                <p><em></em>我的二维码</p>
                <a href="#"><img src="../../assets/images/arrowRight.jpg" alt="arrowRight"></a>
            </li>
            <li>
                <p><em></em>我的小伙伴</p>
                <a href="#"><img src="../../assets/images/arrowRight.jpg" alt="arrowRight"></a>
            </li>
        </ul>

          <!-- footer -->
         <bottom-nav></bottom-nav>
    </div>
  </div>
</template>

<script>
import bottomNav from '../common/bottomNav'
export default {
  data() {
    return {

    };
  },
  components:{
    bottomNav
  }
};
</script>

<style lang="" scoped>
@import "../../assets/css/mine.css";
</style>
