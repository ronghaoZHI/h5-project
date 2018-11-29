import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Upload from '@/components/upload'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/upload',
      name: 'upload',
      component: Upload
    }
  ]
})
