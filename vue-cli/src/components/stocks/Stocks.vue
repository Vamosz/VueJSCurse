<template>
    <b-row >
        <app-stock class="mb-4" v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
    </b-row>
</template>

<script>
    import Stock from "./Stock";
    export default {
        name: "Stocks",
        components:{
            appStock: Stock
        },
        computed: {
            stocks(){
                return this.$store.getters.stocks;
            }
        }

    }
</script>

<style scoped>

</style>
