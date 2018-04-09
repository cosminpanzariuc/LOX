Vue.config.productionTip = false;
import Vue from 'vue';
import './style.scss';

import VueResource from 'vue-resource';
Vue.use(VueResource);

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import routes from './util/routes';
const router = new VueRouter({
    mode: 'history',
    routes
});

import moment from 'moment-timezone';
moment.tz.setDefault('UTC');
Object.defineProperty(Vue.prototype, '$moment', {
    get(){
        return this.$root.moment
    }
});


import {checkFilter, setDay} from './util/bus';
const bus = new Vue();
Object.defineProperty(Vue.prototype, '$bus', {
    get(){
        return this.$root.bus;
    }
});
new Vue({
    el: '#app',
    data(){
        return {
            genre: [],
            time: [],
            movies: [],
            day: moment(),
            moment,
            bus
        }
    },
    created(){
        this.$http.get('/api').then(response => {
            this.movies = response.data;
            console.log('Movies:', this.movies);
        });
        this.$bus.$on('check-filter', checkFilter.bind(this));
        this.$bus.$on('set-day', setDay.bind(this));
    },
    router
});