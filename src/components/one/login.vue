<template>
  <div>
    <div>
      <!-- 头部 -->
      <header class="headCon">
        <goback />
        <h2>登录</h2>
        <router-link to="/register" class="reg">注册</router-link>
      </header>
      <!-- 内容 -->
      <div class="cont">
        <p>手机号：</p>
        <input type="tel" @blur="blur1" v-model.trim="userInfo.tel" />
        <p v-show="isErr1" class="err">请输入手机号</p>
        <p class="pwd">密码：</p>
        <input type="password" @blur="blur2" v-model.trim="userInfo.pwd" />
        <p v-show="isErr2" class="err">请输入密码</p>
        <div class="clearfix"><a class="fr">忘记密码</a></div>
        <button @click="login">登录</button>
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
      userInfo: {
        tel: "",
        pwd: "",
      },
    };
  },
  methods: {
    blur1() {
      if (!this.userInfo.tel) {
        this.isErr1 = true;
      } else {
        this.isErr1 = false;
      }
    },
    blur2() {
      if (!this.userInfo.pwd) {
        this.isErr2 = true;
      } else {
        this.isErr2 = false;
      }
    },
    login() {
      if (this.userInfo.tel && this.userInfo.pwd) {
        console.log(this.userInfo);
        let uInfo = JSON.parse(localStorage.getItem("userInfo"));
        console.log(uInfo);
         if(!uInfo){
           alert('没有此用户');
         } else if (
          this.userInfo.tel === uInfo.tel &&
          this.userInfo.pwd === uInfo.pwd
        ) {
          alert("登陆成功");
          this.$router.push('/home');
        } else {
          alert("电话号或密码输入有误");
        };       
      }else{
        alert('请输入内容');
      };
     
    },
  },
};
</script>

<style lang="" scoped>
@import "../../assets/css/login.css";
</style>
