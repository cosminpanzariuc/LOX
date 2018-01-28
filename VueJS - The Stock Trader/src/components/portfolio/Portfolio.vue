<template>
    <div>
        <h4 v-if="stocks.length < 1">There are no stocks in here yet...</h4>
        <app-stock v-else v-for="stock in stocks" :stock="stock"></app-stock>
    </div>
</template>

<script type="text/babel">
    import {mapGetters} from 'vuex';
    import Stock from './Stock.vue';


    export default{
        computed:{
                ...mapGetters({
                    stocks: 'stockPortfolio'
                })
        },
        components: {
            appStock: Stock
        }
    }

</script>