Vue.config.productionTip = false;
import Vue from 'vue';
import MovieList from './components/MovieList.vue';
import MovieFilter from './components/MovieFilter.vue';
import './style.scss';

import VueResource from 'vue-resource';
Vue.use(VueResource);

import moment from 'moment-timezone';
moment.tz.setDefault('UTC');
Object.defineProperty(Vue.prototype, '$moment', {
    get(){
        return this.$root.moment
    }
});


import {checkFilter} from './util/bus';
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
    components: {
        MovieList,
        MovieFilter
    },

    created(){
        this.$http.get('/api').then(response => {
            this.movies = response.data;
            console.log('Movies:', this.movies);
        });
        this.$bus.$on('check-filter', checkFilter.bind(this));
    }
});