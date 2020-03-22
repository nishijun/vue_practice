<template>
  <div>
    <label for="add">Add Todo</label><br>
    <input id="add" type="text" v-model="content"><br>
    <button class="btn" @click="addTodo">Add</button>
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
.btn {
  cursor: pointer;
  width: 60px;
  height: 30px;
  color: white;
  float: right;
  border: none;
  font-size: 16px;
  border-radius: 5px;
  background: blue;
}
</style>
