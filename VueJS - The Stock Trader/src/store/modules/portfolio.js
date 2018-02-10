const state = {
    funds: 10000,
    prtfolioStocks: []
};

const mutations = {
    'BUY_STOCK'(state, order){
        const record = state.prtfolioStocks.find(element => element.id == order.stockId);
        if (record) {
            record.quantity += order.quantity;
        } else {
            state.prtfolioStocks.push({
                id: order.stockId,
                quantity: order.quantity
            });
        }
        state.funds -= order.stockPrice * order.quantity;
    },

    'SELL_STOCK'(state, order){
        const record = state.prtfolioStocks.find(element => element.id == order.stockId);
        if (record.quantity > order.quantity) {
            record.quantity -= order.quantity;
        } else {
            state.prtfolioStocks.splice(state.prtfolioStocks.indexOf(record), 1);
        }
        state.funds += order.stockPrice * order.quantity;
    }
};

const actions = {
    sellStockAction: (context, order) => {
        console.log('Sell order:', order);
        context.commit('SELL_STOCK', order);
    }
};

const getters = {
    stockPortfolio(state, getters){
        return state.prtfolioStocks.map(stock => {
            console.log('Global getters:', getters);
            const record = getters.stocks.find(element => element.id == stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        });
    },
    funds(state){
        return state.funds;
    }
};

export default{
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}