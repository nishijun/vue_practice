<template>
<div>
  <label for="search">Search Todo</label><br>
  <input type="text" v-model="text" @change="searchTodo">
</div>
</template>

<script>
import { searchBus } from '../main'

export default {
  data() {
    return {
      text: ''
    }
  },
  methods: {
    searchTodo() {
      searchBus.$emit('searchTodo', this.text)
    }
  }
}
</script>
