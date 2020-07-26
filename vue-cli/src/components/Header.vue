<template>
    <b-navbar toggleable="lg" type="dark" variant="dark">
        <router-link class="navbarBrand" tag="b-navbar-brand" to="/">
            Stock Trader
        </router-link>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <router-link tag="b-nav-item" active-class="active" to="/portfolio">
                    Portfolio
                </router-link>
                <router-link tag="b-nav-item" active-class="active" to="/stocks">
                    Stocks
                </router-link>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item>
                    End day
                </b-nav-item>
                <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
                <em>Save/Load</em>
            </template>
            <b-dropdown-item href="#">Save</b-dropdown-item>
            <b-dropdown-item href="#">Load</b-dropdown-item>
            </b-nav-item-dropdown>
            </b-navbar-nav>
            <strong class="navbar-text ml-3">Funds: {{funds | currency}}</strong>
        </b-collapse>
    </b-navbar>
</template>

<script>
    export default {
        name: "Header",
        computed:{
            funds(){
                return this.$store.getters.funds;
            }
        }
    }
</script>

<style scoped>
    .navbarBrand{
        cursor: pointer;
    }
</style>
