import Vue from 'vue'
import Router from 'vue-router'
import Error404 from "@/features/error404/pages/Error404"
import Login from '@/features/login/pages/login'
import Cadastro from '@/features/cadastro/pages/cadastro'
import Home from '@/features/home/pages/Home'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'*',
      name: "Erro404",
      component:Error404
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
    }
  ]
})
