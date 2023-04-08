import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Film from '@/components/Film'
import Student from '@/components/Student'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/film',
      name: 'Film',
      component: Film
    },
    {
      path: '/student',
      name: 'Student',
      component: Student
    }
  ]
})
