<template>
    <b-row >
        <app-stock class="mb-4" v-for="stock in stocks" :key="stock"></app-stock>
    </b-row>
</template>

<script>
    import Stock from "./Stock";
    export default {
        name: "Stocks",
        data(){
            return {
                stocks:[
                    {id: 1, name:'BMW', price: 110},
                    {id: 1, name:'Google', price: 200},
                    {id: 1, name:'Apple', price: 250},
                    {id: 1, name:'Twitter', price: 80}
                ]
            }
        },
        components:{
            appStock: Stock
        }

    }
</script>

<style scoped>

</style>
