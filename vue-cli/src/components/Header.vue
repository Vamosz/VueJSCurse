<template>
    <ul class="nav nav-tabs" id="myTab" role="tablist">
        <a  class="nav-item"><router-link to="/" tag="li" class="nav-link" role="presentation" active-class="active" exact>Home
        </router-link></a>
        <a class="nav-item" ><router-link to="/user/2" tag="li" class="nav-link" role="presentation" active-class="active">User 2
        </router-link></a>
        <a class="nav-item" ><router-link to="/user/1" tag="li" class="nav-link" role="presentation" active-class="active">User 1
        </router-link></a>
    </ul>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>
