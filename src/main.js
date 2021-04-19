import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')


import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
Vue.use(ElementUI);

import qr from 'qrcodejs2';
Vue.prototype.$qr = qr;

import common from '@/assets/js/common';
Vue.use(common);

import 'wowjs/css/libs/animate.css';
import wow from 'wowjs';
Vue.prototype.$wow = function () {
    new wow.WOW({ live: false }).init();
};