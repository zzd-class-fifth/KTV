import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import routerJs from './router';
// const routes = require('./router');
const routes = routerJs;

const router = new VueRouter({
    routes
})

export default router