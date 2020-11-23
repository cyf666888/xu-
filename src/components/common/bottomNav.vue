<template>
  <div>
    <!-- footer -->
    <footer class="footbox">
      <router-link to="/home" activeClass="active">
        <!-- <img src="../../assets/images/iconIndex2.jpg" alt="iconIndex2" /> -->
        <span class="iconfont icon-fangzi"></span>
        <p>首页</p>
      </router-link>

      <router-link to="/cart" activeClass="active">
        <!-- <img src="../../assets/images/iconCart2.jpg" alt="iconCart" /> -->
        <span class="iconfont icon-gouwuche"></span>
        <p>购物车</p>
      </router-link>
      <router-link to="/mine" activeClass="active">
        <!-- <img src="../../assets/images/iconMine2.jpg" alt="iconMine" /> -->
        <span class="iconfont icon-wode2"></span>
        <p>我的</p>
      </router-link>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="" scoped>
</style>
