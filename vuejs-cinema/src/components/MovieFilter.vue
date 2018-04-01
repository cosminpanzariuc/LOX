<template>
    <div id="movie-filter">
        <h2>Filter results</h2>
        <div class="filter-group">
            <check-filter v-for="genre in genres" :title="genre" :key="genre" @check-filter="checkFilter"></check-filter>
        </div>
    </div>
</template>

<script type="text/babel">
    import genres from '../util/genres';
    import CheckFilter from './CheckFilter.vue'

    export default{
        data(){
            return {
                genres: genres
            }
        },
        methods: {
            checkFilter(category, title, checked){
                this.$emit('check-filter', category, title, checked);
            }
        },
        components: {
            CheckFilter
        }
    }
</script>