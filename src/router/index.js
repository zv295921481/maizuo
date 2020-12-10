import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from '../views/Film.vue'
import Cinema from '../views/Cinema.vue'
// import Center from '../views/Center.vue'
import Nowplaying from '../views/film/Nowplaying.vue'
import Comingsoon from '../views/film/Comingsoon.vue'
import Detail from '../views/Detail.vue'
import City from '../views/City.vue'
import Search from '../views/Search.vue'

Vue.use(VueRouter) // 注册模块,已经创建了全局组件 router-view
// kerwin -1111111

// tiechui -2222222222222
const routes = [
  {
    path: '/film',
    component: Film,
    // 嵌套路由
    children: [
      {
        path: 'nowplaying', // 简写
        component: Nowplaying
      },
      {
        path: '/film/comingsoon',
        component: Comingsoon
      },
      {
        path: '',
        redirect: 'nowplaying'
      }
    ]
  },
  {
    path: '/cinema',
    component: Cinema
  },
  {
    path: '/cinema/search',
    component: Search
  },
  {
    path: '/center',
    component: () => import('../views/Center.vue')
  },
  {
    path: '/detail/:myid', // 动态路由
    component: Detail,
    name: 'zzyDetail'
  },
  {
    path: '/detail',
    component: Detail
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/city',
    component: City
  },
  {
    path: '*', // 通配符
    redirect: '/film'
  }

  // 修复了其他bug
  // 添加了两个路由
]

const router = new VueRouter({
  mode: 'hash', // hash  history
  routes: routes
})

// 全局路由守卫  拦截
// router.beforeEach((to, from, next) => {
//   // to and from are both route objects. must call `next`.
//   const auth = ['/center', '/order', 'money']
//   // console.log(to);
//   if (auth.includes(to.fullPath)) {
//     // console.log('验证token');
//     if(!localStorage.getItem('token')){
//       next('/login')
//     }else {
//       next()
//     }
//   }else {
//     next()
//   }

// })

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
