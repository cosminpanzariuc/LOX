import Vue from 'vue';

export const fetchDataAction = (context) => {
    Vue.http.get('data.json')
        .then(response => response.json())
        .then(data => {
            if (data) {
                const stocks = data.stocks;
                const funds = data.funds;
                const stockPortfolio = data.stockPortfolio;

                const portfolio = {
                    stockPortfolio: stockPortfolio,
                    funds: funds
                };

                context.commit('SET_STOCKS', stocks);
                context.commit('SET_PORTFOLIO', portfolio);
            }
        });
};