<template>
    <div>
        <h1>Trader or View Portfolio</h1>
        <h6>Yo my Save & Load your Data</h6>
        <h6>Click on 'End day' to begin a new day!</h6>
        <hr>
        <p>Your Funds: {{ funds | currency}}</p>
    </div>
</template>

<script>
    export default {
        name: "Home",
        computed: {
            funds(){
                return this.$store.getters.funds;
            }
        }
    }
</script>

<style scoped>

</style>
