<template>
    <div class="container-fluid">
        <appHeader></appHeader>
        <b-row>
            <b-col col sm="12">
                <router-view class="view"></router-view>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import Header from "./components/Header";
    export default {
        components: {
            appHeader: Header
        }
    }
</script>

<style>
    body{
        padding: 30px;
    }
    .view{
        margin-top: 20px;
    }
</style>
