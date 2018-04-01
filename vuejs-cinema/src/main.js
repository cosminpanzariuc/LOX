Vue.config.productionTip = false;
import Vue from 'vue';
import VueResource from 'vue-resource';
import MovieList from './components/MovieList.vue';
import MovieFilter from './components/MovieFilter.vue';
import './style.scss';

Vue.use(VueResource);

new Vue({
    el: '#app',
    data(){
        return {
            genre: [],
            time: [],
            movies: []
        }
    },
    methods: {
        checkFilter(category, title, checked){
            if (checked) {
                this[category].push(title);
            } else {
                let index = this[category].indexOf(title);
                if (index > -1) {
                    this[category].splice(index, 1);
                }
            }
        }
    },
    components: {
        MovieList,
        MovieFilter
    },

    created(){
        this.$http.get('/api').then(response =>{
            this.movies = response.data;
            console.log(this.movies);
        })
    }
});