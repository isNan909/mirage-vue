import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { makeServer } from '@/mirage-data/server';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
