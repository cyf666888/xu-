<template>
  <div>
    <div class="page" id="app">
      <!-- 头部 -->
      <header class="headCon">
        <goback />
        <h2>购物车</h2>
        <p class="menu">
          <span></span>
          <span></span>
          <span></span>
        </p>
      </header>
      <!-- main -->
      <ul class="main">
        <li class="clearfix" v-for="(item, i) in shopList" :key="item.id">
          <div>
            <input type="checkbox" v-model="item.sel" @change="single" />
          </div>
          <div><img :src="item.img_src" alt="shop_4" /></div>
          <div>
            <h3>{{ item.title }}</h3>
            <p>规格：{{ item.size }}</p>
            <p>&yen;{{ item.price.toFixed(2) }}</p>
          </div>
          <div class="clearfix">
            <span @touchstart="sub(i)">-</span>
            <input type="text" :value="item.nb" />
            <span @touchstart="add(i)">+</span>
          </div>
          <div class="del">删除</div>
        </li>
        <!-- <van-checkbox></van-checkbox>
        <van-swipe-cell>
          
          <van-card
            price="2.00"
            desc="描述信息"
            title="商品标题"
            class="goods-card"
            thumb="https://img.yzcdn.cn/vant/cat.jpeg"
          >
            <template #footer>
             <div>
                <van-stepper
                v-model="value"
                theme="round"
                button-size="22"
                disable-input
              />
             </div>
            </template>
          </van-card>
          <template #right>
            <van-button
              square
              text="删除"
              type="danger"
              class="delete-button"
            />
          </template>
        </van-swipe-cell> -->
      </ul>
      <!-- 结算 -->
      <div class="sum">
        <div class="selAll">
          <input type="checkbox" v-model="selAll" @change="all" /> 全选
        </div>
        <div class="pri">
          <p>
            总计:<span>{{ allPrice }} </span>
          </p>
          <p>不含运费，已优惠&yen;0.00</p>
        </div>
        <router-link class="num" to="/order"
          >去结算(共{{ totalNum }}件)</router-link
        >
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
      num: 1,
      selAll: false,
      shopList: [
        {
          title: "欧莱雅面霜",
          img_src: require("../../assets/images/shop_4.jpg"),
          size: "50g",
          price: 222,
          sel: false,
          nb: 1,
        },
        {
          title: "曼秀雷敦面霜",
          img_src: require("../../assets/images/shop_4.jpg"),
          size: "70g",
          price: 333,
          sel: false,
          nb: 1,
        },
        {
          title: "玛丽艳清新面膜",
          img_src: require("../../assets/images/shop_4.jpg"),
          size: "120g",
          price: 168,
          sel: false,
          nb: 1,
        },
      ],
    };
  },

  methods: {
    // 尾部切换
    changeCol(idx) {
      this.num = idx;
    },
    // 全选
    all() {
      this.shopList.forEach((item) => (item.sel = this.selAll));
    },
    // 单选
    single() {
      this.selAll = this.shopList.every((item) => item.sel);
    },
    // 加
    add(i) {
      this.shopList[i].nb++;
    },
    // 减
    sub(i) {
      if (this.shopList[i].nb < 2) {
        alert("爱要消失了吗，不能再减了，宝贝");
        return;
      }
      this.shopList[i].nb--;
    },
  },
  computed: {
    // 总计价钱
    allPrice() {
      let sum = 0;
      this.shopList.map((item) => (sum += item.price * item.nb));
      return sum.toFixed(2);
    },
    // 总件数
    totalNum() {
      let sum = 0;
      this.shopList.map((item) => (sum += item.nb));
      return sum;
    },
  },
  components: {
    bottomNav,
  },
};
</script>

<style lang="" scoped>
@import "../../assets/css/cart.css";
.delete-button {
  height: 100%;
}
</style>
