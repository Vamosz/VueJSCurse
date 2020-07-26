<template>
    <div>
        <appHeader></appHeader>
        <b-container>
            <b-row>
                <b-col col sm="12">
                    <router-view class="view"></router-view>
                </b-col>
            </b-row>
        </b-container>
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
    .view {
        margin-top: 20px;
    }
</style>
