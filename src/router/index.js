import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Cat from '@/views/Cat'
import Dog from '@/views/Dog'
import Chicken from '@/views/Chicken'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Cat',
      name: 'Cat',
      component: Cat
    },
    {
      path: '/Dog', 
      name: 'Dog',
      component: Dog
    },
    {
      path: '/Chicken',
      name: 'Chicken',
      component: Chicken
    },
  ]
})
