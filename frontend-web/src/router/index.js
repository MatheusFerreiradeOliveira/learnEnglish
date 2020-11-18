import Vue from 'vue'
import Router from 'vue-router'
import Error404 from '@/features/error404/pages/error404'
import Login from '@/features/login/pages/login'
import Cadastro from '@/features/cadastro/pages/cadastro'
import Home from '@/features/home/pages/Home'
import Forum from '@/features/forum/pages/Forum'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Cadastro
    },
    {
      path: '/forum',
      name: 'Forum',
      component: Forum
    },
    {
      path: '*',
      name: 'Error-404',
      component: Error404
    }
  ]

})
