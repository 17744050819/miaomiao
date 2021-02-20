import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 直接通过this.axios调用
import axios from 'axios'
Vue.prototype.axios = axios;

// 图片的条件选择器
Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg)
});
// 电影2D3D的选择器
Vue.filter('setImg',(version)=>{
  if(version ==="v2d imax"){
    return '/images/2D.png'
  }else if(version ==="v3d"){
    return '/images/3D.png'
  }else if(version ==="v3d imax"){
    return '/images/3DIMAX.png'
  }else{
    return "";
  }
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
