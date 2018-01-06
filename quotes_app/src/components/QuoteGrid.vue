<template>
  <div class="row">
    <app-quote v-for="(quote, index) in quotes" :key="quote" @click.native="quoteToDelete(index)">
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
    methods:{
      quoteToDelete(indexToDelete){
        this.$emit('quoteDeleted', indexToDelete);
      }
    },
    components: {
      appQuote: Quote
    }
  }
</script>

<style scoped>

</style>
