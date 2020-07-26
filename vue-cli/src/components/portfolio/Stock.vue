<template>
    <b-col col sm="6" md="4">
        <b-card border-variant="success" :header="stock.name + ' (Price: ' +stock.price + '| Quantity:' + stock.quantity + ')'" align="center">
            <b-card-text>
                <b-row>
                    <b-col col sm="6"> <input type="number" class="form-control" v-model="quantity" :class="{danger: insufficientQuantity}"></b-col>
                    <b-col col sm="6" class="text-right">
                        <b-button variant="outline-success" @click="sellStock" :disabled="insufficientQuantity || quantity <= 0">
                            {{insufficientQuantity? 'Not enough' : 'Sell'}}</b-button>
                    </b-col>
                </b-row>


            </b-card-text>
        </b-card>
    </b-col>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        name: "Stock",
        props: ['stock'],
        data(){
            return{
                quantity: 0
            }
        },
        computed: {
            funds(){
                return this.$store.getters.funds;
            },
            insufficientQuantity(){
                return this.quantity > this.stock.quantity;
            }
        },
        methods:{
            ...mapActions({
                placeSellOrder:'sellStock'
            }),
            sellStock(){
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                this.placeSellOrder(order);
                this.quantity = 0;
            }
        }
    }
</script>

<style scoped>
    .danger{
        border: 1px solid red;
    }
</style>
