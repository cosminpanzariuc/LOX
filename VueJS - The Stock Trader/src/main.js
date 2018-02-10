Vue.config.productionTip = false;
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import {routes} from './routes';
import store from './store/store';

Vue.use(VueRouter);
Vue.use(VueResource);


var router = new VueRouter({
    mode: 'history',
    routes: routes
});

Vue.http.options.root = 'https://vuejs-stock-trader-345ff.firebaseio.com/';

Vue.filter('currency', (value) => {
    return '$' + value.toLocaleString();
});

new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
});
