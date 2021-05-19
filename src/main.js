import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
// 安装插件
Vue.use(VueLazyload, {
  // 当加载图片成功时
  loading: require('./assets/img/common/placeholder.png'),
  // 当加载图片失败时
  // err: require('')
})
new Vue({
  router,
  store,
  render: h => h(App),
  
}).$mount('#app')
