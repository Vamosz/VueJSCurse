<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <button @click="selectedComponent = 'appNew'">New</button>
        <hr />
        <p>{{ selectedComponent }}</p>
        <component :is="selectedComponent">
          <p>Default Content</p>
        </component>
      </div>
    </div>
  </div>
</template>

<script>
import Qoute from "./components/Quote.vue";
import Author from "./components/Author.vue";
import New from "./components/New.vue";
export default {
  data: function() {
    return {
      quoteTitle: "The Qoute",
      selectedComponent: "appQuote"
    };
  },
  components: {
    appQuote: Qoute,
    appAuthor: Author,
    appNew: New
  }
};
</script>

<style lang="scss">
</style>
