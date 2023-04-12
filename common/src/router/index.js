import Vue from 'vue'
import Router from 'vue-router'
import Film from '@/components/Film'
import Login from '@/view/Login'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/film',
    //   name: 'Film',
    //   component: Film
    // }
    {
      path: '/',
      name: 'Login',
      component: Login
    }
   
  ]
})
