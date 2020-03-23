<template>
  <div>
    <label for="add">Add Todo</label><br>
    <input id="add" type="text" v-model="content" @change="addTodo"><br>
  </div>
</template>

<script>
import { eventBus } from '../main'
export default {
  data() {
    return {
      content: ''
    }
  },
  methods: {
    addTodo() {
      eventBus.$emit('addTodo', this.content)
      this.content = ''
    }
  }
}
</script>

<style scoped>
input {
  width: 100%;
  height: 40px;
  background: rgb(217, 211, 178);
  font-size: 16px;
  border: none;
  outline: none;
  padding: 10px;
  box-sizing: border-box;
}
</style>
