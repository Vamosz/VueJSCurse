<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <app-quote></app-quote>
      </div>
    </div>
  </div>
</template>

<script>
  import Qoute from './components/Quote.vue';
  export default {
    components: {
      appQuote: Qoute
    }
  }
</script>

<style lang="scss">
</style>
