<template>
    <div class="container">
      <appQuoteGrid :quotes="quotes"></appQuoteGrid>
    </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue'

export default {
  data() {
    return {
      quotes: [
        'Just a Quote to see something'
      ],
      maxQuotes: 10
    }
  },
  components: {
    appQuoteGrid: QuoteGrid
  }
}
</script>

<style>
</style>
