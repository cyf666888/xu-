import Vue from 'vue'
import Router from 'vue-router'

import index from '../components/one/index'
import home from '../components/two/home'
// import cart from '../components/two/cart'
// import mine from '../components/two/mine'
// import shopDetail from '../components/one/shopDetail'
// import shopList from '../components/two/shopList'
// import order from '../components/two/order'
// import sort from '../components/one/sort'
// import login from '../components/one/login'
// import register from '../components/one/register'


Vue.use(Router)

export default new Router({
  routes: [
   {
     path: '/index',
     component: index,
     children: [
       {
         path: '/home',
         component: home
       },
       {
         path: '/cart',
         component: ()=>import('../components/two/cart')
       },
       {
        path: '/mine',
        component: ()=>import('../components/two/mine')
      },
      {
        path: '/shopList',
        component: ()=>import('../components/two/shopList') ,
       },
       {
        path: '/order',
        component: ()=>import('../components/two/order') ,
       },
       {
         path:'',
         redirect: '/home'
       }
     ]
   },
   {
    path: '/shopDetail',
    component: ()=>import('../components/one/shopDetail') ,
   }, 
   {
    path: '/sort',
    component: ()=>import('../components/one/sort'),
   },
   {
    path: '/login',
    component: ()=>import('../components/one/login'),
   },
   {
    path: '/register',
    component:()=>import('../components/one/register'),
   },
   {
     path: '*',
     redirect: '/index'
   }
  ]
})
