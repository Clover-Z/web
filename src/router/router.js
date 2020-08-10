import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import page10 from './page10'
import page14 from './page14'

export default new VueRouter({
  mode: 'history',
  routes: [
    ...page10,
    ...page14,
  ]
})