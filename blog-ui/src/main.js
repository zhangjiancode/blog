/*
 * @Description: 
 * @Author: 张健66
 * @Date: 2021-08-10 22:23:38
 * @LastEditTime: 2021-08-10 22:45:50
 * @LastEditors: 张健66
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import less from 'less'
import { Button,Input,Form,
  FormItem,Dialog, } from 'element-ui'

Vue.config.productionTip = false
Vue.use(less)
Vue.use(Button)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Dialog)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
