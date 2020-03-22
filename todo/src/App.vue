<template>
  <div id="app">
    <h1>ToDo List</h1>
    <AddTodo></AddTodo>
    <SearchTodo></SearchTodo>
    <Todos></Todos>
  </div>
</template>

<script>
import AddTodo from './components/AddTodo.vue'
import SearchTodo from './components/SearchTodo.vue'
import Todos from './components/Tdodos.vue'
export default {
  components: {
    Todos,
    AddTodo,
    SearchTodo
  }
}
</script>

<style>
body {
  background: #f6f5f4;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
