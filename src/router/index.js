import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CheapHome from '@/components/CheapHome'
import { Input, Button } from 'element-ui'

Vue.use(Router)
Vue.use(Input)
Vue.use(Button)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'CheapHome',
      component: CheapHome
    }
  ]
})
