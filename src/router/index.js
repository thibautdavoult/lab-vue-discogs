import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/router/Home'
import Artist from '@/router/Artist'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/artist/:id',
      component: Artist
    }
  ]
})
