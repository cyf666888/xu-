<template>
 <div>
  <div class="page">
        <!-- 头部 -->
        <header class="headCon">
           <goback/>
            <h2>确认订单</h2>
            <p class="menu">
                <span></span>
                <span></span>
                <span></span>
            </p>
        </header>
        <!-- 收货人部分 -->
        <div class="receive">
            <div class="left">
                <div class="name">
                    <p>收货人 : YouSu</p>
                    <p>10000000000</p>
                </div>
                <div class="address">
                    <p > 收货地址 : </p>
                    <p>北京市海淀区银泉路清林苑6号楼中公优就业总部3层</p>
                </div>
            </div>
            <a href="#"><img src="../../assets/images/arrowRight.jpg" alt="arrowRight"></a>
        </div>
        <!-- 订单内容 -->
        <div class="main">
            <div class="cont1">
                <div class="pro">
                    <div class="left clearfix">
                        <img src="../../assets/images/shop_4.jpg" alt="shop_4">
                        <div>
                            <p>雅诗兰黛护肤霜</p>
                            <p>规格：50g</p>
                        </div>
                    </div>
                    <p class="right">
                        &yen;123.00
                    </p>
                </div>
                <div class="num">
                    <p>购买数量:</p>
                    <div>
                        <span>-</span>
                        <input type="text" value="1">
                        <span>+</span>
                    </div>
                </div>
                <div class="style">
                    <p>配送方式</p>
                    <p>xx快递</p>
                </div>
            </div>
            <div class="cont2">
                <div class="discount">
                    <p>优惠券</p>
                    <p>无可用</p>
                </div>
                <div class="points">
                    <p>使用积分</p>
                    <div>
                        <input type="text" placeholder="输入积分">
                        <a href="#">使用</a>
                        <p>可用<span>50</span>积分</p>
                    </div>
                </div>
            </div>
            <ul class="cont3">
                <li>
                    <p>商品金额</p>
                    <p>&yen;123.00</p>
                </li>
                <li>
                    <p>运费</p>
                    <p>+&yen;0.00</p>
                </li>
                <li>
                    <p>优惠券</p>
                    <p>-&yen;0.00</p>
                </li>
                <li>
                    <p>会员优惠</p>
                    <p>-&yen;0.00</p>
                </li>
                <li>
                    <p>积分折扣</p>
                    <p>-&yen;0.00</p>
                </li>
            </ul>
            <div class="cont4">
                <p>实付金额 ：<span>&yen;123.00</span></p>
                <a href="#">提交订单</a>
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
    return {};
  },
  components: {
    bottomNav,
  },
};
</script>

<style lang="" scoped>
@import "../../assets/css/order.css";
</style>
