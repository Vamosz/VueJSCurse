<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <app-quote>
          <h2>The Qoute</h2>
          <p>A wonderful quote</p>
        </app-quote>
      </div>
    </div>
  </div>
</template>

<script>
import Qoute from "./components/Quote.vue";
export default {
  components: {
    appQuote: Qoute
  }
};
</script>

<style lang="scss">
</style>
