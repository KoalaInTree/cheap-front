import Vue from 'vue'
import Router from 'vue-router'
import CheapHome from '@/components/Cheap'
import SearchPage from '@/components/Search'
import Product from '@/components/Product'
import { Search ,Button,Image,Divider,Icon,Toast,Swipe,SwipeItem,Row,Col,CountDown, GoodsAction,GoodsActionIcon,GoodsActionButton } from 'vant'
import VueClipboard from 'vue-clipboard2'
import axios from 'axios'
import Meta from 'vue-meta'
 
Vue.use(Meta)

Vue.use(Search)
Vue.use(Button)
Vue.use(Image)
Vue.use(Divider)
Vue.use(Icon)
Vue.use(Toast)
Vue.use(Swipe).use(SwipeItem)
Vue.use(Row).use(Col)
Vue.use(CountDown)
Vue.use(Router)
Vue
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton);
Vue.use(VueClipboard)
VueClipboard.config.autoSetContainer = true
axios.defaults.baseURL=process.env.BASE_URL
axios.defaults.timeout = 5000;                        //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';        //配置请求头
Vue.prototype.$axios=axios

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CheapHome',
      component: CheapHome
    },
    {
      path: '/search',
      name: 'SearchPage',
      component: SearchPage
    }
    // ,
    // {
    //   path:'/test2',
    //   name:'Porduct',
    //   component:Porduct
    // }
    ,
    {
      path:"/product",
      name:'Product',
      component:Product
    }
  ]
})


