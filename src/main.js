import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css';
import './main.css'
import ElementUI from 'element-ui';
import router from './router/router'

Vue.config.productionTip = false

Vue.use(ElementUI);

//测试数据
import dataFor10 from './test/page10'
import dataFor14 from './test/page14'
Vue.prototype.dataFor10 = dataFor10;
Vue.prototype.dataFor14 = dataFor14;


new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
