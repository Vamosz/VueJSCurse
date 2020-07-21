<template>

    <div>
        <h3>Some User Details</h3>
        <p>User loaded has ID: {{this.$route.params.id}}</p>
        <router-link tag="button" :to="{ name: 'userEdit', params:{ id: this.$route.params.id } }" class="btn btn-primary">Edit User</router-link>
    </div>
</template>
<script>

</script>
