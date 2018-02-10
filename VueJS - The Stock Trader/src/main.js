Vue.config.productionTip = false;
import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';
import {routes} from './routes';
import store from './store/store';

Vue.use(VueRouter);

var router = new VueRouter({
    mode: 'history',
    routes: routes
});

new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
});
