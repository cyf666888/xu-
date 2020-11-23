<template>
  <div>
    <div>
      <!-- 头部 -->
      <header class="headCon">
       <goback/>
        <h2>注册</h2>
        <router-link to="/login" class="reg">登录</router-link>
      </header>
      <!-- 主体 -->
      <div class="cont">
        <div>
          <span>昵<i>哈</i>称:</span>
          <input type="text" v-model.trim="userInfo.nick" @blur="blur1" />
        </div>
        <p v-show="isErr1" class="err">请输入昵称</p>
        <div>
          <span>手机号:</span>
          <input type="tel" v-model.trim="userInfo.tel" @blur="blur2" />
        </div>
        <p v-show="isErr2" class="err">请输入手机号</p>
        <div>
          <span>密<i>哈</i>码:</span>
          <input type="text" v-model.trim="userInfo.pwd" @blur="blur3" />
        </div>
        <p v-show="isErr3" class="err">请输入密码</p>
        <div>
          <span>验证码:</span>
          <input type="text" v-model.trim="userInfo.code" @blur="blur4" />
        </div>
        <p v-show="isErr4" class="err">请输入验证码</p>
        <button @click="next">下一步</button>
        <label for="agree"
          ><input
            type="checkbox"
            id="agree"
            v-model="userInfo.isGree"
          />我已阅读并同意使用<a href="javascript:;">条款和隐私政策</a></label
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isErr1: false,
      isErr2: false,
      isErr3: false,
      isErr4: false,
      userInfo: {
        nick: "",
        tel: "",
        pwd: "",
        code: "",
        isGree: "true",
      },
    };
  },
  methods: {
    blur1() {
      if (!this.userInfo.nick) {
        this.isErr1 = true;
      } else {
        this.isErr1 = false;
      }
    },
    blur2() {
      if (!this.userInfo.tel) {
        this.isErr2 = true;
      } else {
        this.isErr2 = false;
      }
    },
    blur3() {
      if (!this.userInfo.pwd) {
        this.isErr3 = true;
      } else {
        this.isErr3 = false;
      }
    },
    blur4() {
      if (!this.userInfo.pwd) {
        this.isErr4 = true;
      } else {
        this.isErr4 = false;
      }
    },
    next() {
      if (!this.userInfo.isGree) {
        alert("同意协议才可进行下一步");
        return;
      }
      if (
        this.userInfo.nick &&
        this.userInfo.tel &&
        this.userInfo.pwd
      ) {
        // console.log(this.userInfo);
        localStorage.setItem("userInfo", JSON.stringify(this.userInfo));
        this.$router.push('/login');
      } else {
        alert("输入内容不能为空");
      }
    },
  },
};
</script>

<style lang="" scoped>
@import "../../assets/css/register.css";
</style>
