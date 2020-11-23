// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入vuex中的store仓库
import store from './store'

import '@/assets/css/reset.css'
import '@/assets/css/public.css'
import '../src/assets/js/remScale'
import '../src/assets/font/iconfont.css'
// 引入封装好的公共组件
import  comComp from  './public'

// 引入vantUI框架
import VantUI from 'vant'
Vue.use(VantUI);
import 'vant/lib/index.css'
// 引入修改vant css文件
import '../src/assets/css/resetVant.css'

// 在vue原型上挂载一个服务器地址
Vue.prototype.$imgUrl = 'http://localhost:3000'




for(let key in comComp){
  Vue.component( key,comComp[key]);
}

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
