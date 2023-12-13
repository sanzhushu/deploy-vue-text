import Vue from 'vue'
import App from './App.vue'

import * as Sentry from "@sentry/vue";

import router  from './router'
import store from './store'

import { Icon } from '@iconify/vue2';
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Level from '@/components/Level.vue'
import Card from '@/views/home/children/Card.vue'
import AudioPlayer from '@/components/AudioPlayer/'


import'@/assets/main.css'
import '@/assets/iconfont/iconfont.css'
import 'vant/lib/index.css';
import Vant from 'vant';
// Vue.use(AudioPlayer);
// Vue.use(module); module的要求是什么
//1 module 本身是一个函数
// 2、module不是一个函数但具备一个install方法
// Vue.$use= function (module) {
//   if (typeof module === 'function') {
//     module(this) //this ->vue
//   }else if (typeof module.install === 'function') {
//     module.install(this) //this ->vue
//   }
// }
Vue.use(Vant);
Vue.use(AudioPlayer);
Vue.config.productionTip = false
// 全局组件
Vue.component('Header', Header)
Vue.component('Footer', Footer)
Vue.component('Icon', Icon)
Vue.component('Level', Level)
Vue.component('Card', Card)
// Vue.component('AudioPlayer', AudioPlayer)

import VueRouter  from 'vue-router'
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {return originalPush.call(this, location).catch(err => err)
}

Sentry.init({
  Vue,
  dsn: "https://181e840193882cb387d1a95c40cc991d@o4506386935185409.ingest.sentry.io/4506387406061568",
  integrations: [
    new Sentry.BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracePropagationTargets: [],
    }),
  ],
  tracesSampleRate: 1.0, 
  replaysSessionSampleRate: 0.1, 
  replaysOnErrorSampleRate: 1.0, 
});

new Vue({
  render: h => h(App),
  router,
  store,
  created() {
    this.f();
  }
}).$mount('#app')
