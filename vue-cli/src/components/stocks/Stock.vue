<template>
    <b-col col sm="6" md="4">
        <b-card border-variant="success" header="Success (Price: PRICE)" align="center">
            <b-card-text>
                <b-row>
                    <b-col col sm="6"> <input type="number" class="form-control"></b-col>
                    <b-col col sm="6" class="text-right"><b-button variant="outline-success">Buy</b-button></b-col>
                </b-row>


            </b-card-text>
        </b-card>
    </b-col>
</template>

<script>
    export default {
        name: "Stock"
    }
</script>

<style scoped>

</style>
