<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{stock.name}}
                    <small>(Price: {{stock.price | currency}} | Quantity: {{stock.quantity}})</small>
                </h3>
            </div>

            <div class="panel-body">
                <div class="pull-left">
                    <input
                            type="number"
                            class="form-control"
                            placeholder="Quantity"
                            v-model.number="quantity"
                            :class="{danger: insuficientQuantity}">
                </div>

                <div class="pull-right">
                    <button
                            class="btn btn-info"
                            @click="sellStock"
                            :disabled="insuficientQuantity || quantity <= 0 || !Number.isInteger(quantity)">
                        {{insuficientQuantity ? 'Not enaugh Stocks' : 'Sell'}}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>


<script type="text/babel">
    import {mapActions} from 'vuex';

    export default{
        props: ['stock'],
        data(){
            return {
                quantity: 0
            }
        },
        computed: {
            insuficientQuantity(){
                return this.quantity > this.stock.quantity;
            }
        },
        methods: {
            ...mapActions({
                placeSellOrder: 'sellStockAction'
            }),
            sellStock(){
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                this.placeSellOrder(order);
//                this.$store.dispatch('sellStockAction', order);
                this.quantity = 0;
            }
        }
    }

</script>


<style scoped>
    .pull-left {
        width: 50%;
    }

    .danger {
        border: 1px solid red;
    }
</style>