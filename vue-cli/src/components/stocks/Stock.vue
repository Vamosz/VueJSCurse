<template>
    <b-col col sm="6" md="4">
        <b-card border-variant="success" :header="stock.name + ' (Price: ' +stock.price+ ')'" align="center">
            <b-card-text>
                <b-row>
                    <b-col col sm="6"> <input type="number" class="form-control" v-model="quantity"></b-col>
                    <b-col col sm="6" class="text-right"><b-button variant="outline-success" @click="buyStock" :disabled="quantity <= 0">Buy</b-button></b-col>
                </b-row>


            </b-card-text>
        </b-card>
    </b-col>
</template>

<script>
    export default {
        name: "Stock",
        props: ['stock'],
        data(){
            return{
                quantity: 0
            }
        },
        methods:{
            buyStock(){
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stockPrice,
                    quantity: this.quantity
                }
                this.$store.dispatch('buyStock', order)
                this.quantity = 0;
            }
        }
    }
</script>

<style scoped>

</style>
