import fullStocks from '../../data/stocks';

const state = {
    stocks: []
};

const mutations = {
    'SET_STOCKS'(state, fullStocks){
        state.stocks = fullStocks
    },
    'RND_STOCKS'(state){

    }
};

const actions = {
    buyStock: (context, order) => { //in portfolio module
        context.commit('BUY_STOCK', order);
    },
    initStocks: (context) => {
        context.commit('SET_STOCKS', fullStocks);
    },
    randomizeStocks: (context) => {
        context.commit('RND_STOCKS');
    }
};

const getters = {
    stocks: state => {
        return state.stocks;
    }
};

export default{
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}