import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// 导入登入组建
import Login from '@/components/Login'

Vue.use(Router)

const router = new Router({
  routes: [{ path: '/', redirect: '/login' }, { path: '/login', component: Login }]
})

// 为路由对象，添加beforeEach 导航首位
router.beforeEach((to, from, next) => {
  // 如果用户访问登入也，直接放行，
  if (to.path === '/login') return next()
  // 从sessionStorage 中获取道 保存的token值
  const tokenStr = window.sessionStorage.getItem('token')
  //  如果没有token 强制跳转到登入面
  if (!tokenStr) return next('/login')
  next()
})

export default router
