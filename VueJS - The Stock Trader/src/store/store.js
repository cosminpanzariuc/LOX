import Vue from 'vue';
import stocks from './modules/stocks';
import portfolio from './modules/portfolio';
import * as actions from './actions';

import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    actions: actions,
    modules: {
        stocks: stocks,
        portfolio: portfolio
    }
});