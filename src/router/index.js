import Vue from 'vue'
import Router from 'vue-router'
import CheapHome from '@/components/CheapHome'
import { Input, Button } from 'element-ui'

Vue.use(Router)
Vue.use(Input)
Vue.use(Button)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CheapHome',
      component: CheapHome
    }
  ]
})
