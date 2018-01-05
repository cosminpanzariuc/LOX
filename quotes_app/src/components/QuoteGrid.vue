<template>
  <div class="row">
    <app-quote v-for="quote in quotes" :key="quote">
      {{quote}}
    </app-quote>
  </div>
</template>

<script>
  import Quote from './Quote';
  export default {
//    props: ['quotes'],
    props: {
      quotes: {
        type: Array,
        required: true
      }
    },
    components: {
      appQuote: Quote
    }
  }
</script>

<style scoped>

</style>
