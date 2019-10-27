import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Detail from '@/page/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
