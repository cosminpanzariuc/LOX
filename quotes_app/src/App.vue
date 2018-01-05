<template>
    <div id="container">
        <app-quote-grid :quotes="quotes"></app-quote-grid>
    </div>
</template>

<script type="text/babel">
    import QuoteGrid from './components/QuoteGrid';

    export default {
        data(){
            return{
                quotes: [
                    'Just a Quote too see something'
                ],
                maxQuotes: 10
            }
        },

        components:{
            appQuoteGrid: QuoteGrid
        }
    }
</script>

<style>

</style>
