import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FirstPage from './../page/FirstPage'
import BlogPage from './../page/BlogPage'
import EditPage from './../page/EditPage'
import Something from './../page/Something'

Vue.use(Router)

export default new Router({
  base: '/frontvue',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/FirstPage',
      name: 'FirstPage',
      component: FirstPage
    },
    {
      path: '/BlogPage',
      name: 'BlogPage',
      component: BlogPage
    },
    {
      path: '/EditPage',
      name: 'EditPage',
      component: EditPage
    },
    {
      path: '/Something',
      name: 'Something',
      component: Something
    }
  ]
})
