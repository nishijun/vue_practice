<template>
    <div class="container">
      <appNewQuote @quoteAdded="newQuote"></appNewQuote>
      <appQuoteGrid :quotes="quotes" @quoteDeleted="deleteQuote"></appQuoteGrid>
      <div class="row">
        <div class="col-sm-12 text-center">
          <div class="alert alert-info">Info: Click on a Quote to delete it!</div>
        </div>
      </div>
    </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue'
import NewQuote from './components/NewQuote.vue'

export default {
  data() {
    return {
      quotes: [
        'Just a Quote to see something'
      ],
      maxQuotes: 10
    }
  },
  methods: {
    newQuote(quote) {
      this.quotes.push(quote)
    },
    deleteQuote() {
      this.quotes.splice(index, 1)
    }
  },
  components: {
    appQuoteGrid: QuoteGrid,
    appNewQuote: NewQuote,
  }
}
</script>

<style>
</style>
