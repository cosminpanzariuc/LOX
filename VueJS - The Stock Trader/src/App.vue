<template>
    <div class="container">
        <app-header></app-header>
        <div class="row">
            <div class="col-xs-12">
                <transition name="slide" mode="out-in">
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>
                </transition>
            </div>
        </div>

        <div style="display: none">
            <div style="text-align: center">
                <button class="btn btn-primary" @click="selectedComponent='appHome'">Home</button>
                <button class="btn btn-primary" @click="selectedComponent='appStocks'">Portfolio</button>
                <button class="btn btn-primary" @click="selectedComponent='appPortfolio'">Stocks</button>
            </div>
            <component :is="selectedComponent"></component>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    import Home from './components/Home.vue';
    import Stocks from './components/stocks/Stocks.vue';
    import Portfolio from './components/portfolio/Portfolio.vue';

    export default {
        data(){
            return {
                selectedComponent: 'appHome'
            }
        },
        components: {
            appHeader: Header,
            appHome: Home,
            appStocks: Stocks,
            appPortfolio: Portfolio

        },
        created(){
            this.$store.dispatch('initStocksAction');
        }
    }
</script>

<style>
    body {
        padding: 30px;
    }

    .slide-enter-active {
        animation: slide-in 200ms ease-out forwards;
    }

    .slide-leave-active {
        animation: slide-out 200ms ease-out forwards;
    }

    @keyframes slide-in {
        from {
            transform: translateY(-30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(-30px);
            opacity: 0;
        }
    }
</style>
