<template>
  <div id="app">
    <div class="container">
      <h1>ToDo List</h1>
      <AddTodo></AddTodo>
      <Todos></Todos>
    </div>
  </div>
</template>

<script>
import AddTodo from './components/AddTodo.vue'
import Todos from './components/Tdodos.vue'
export default {
  components: {
    Todos,
    AddTodo
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
.container {
  width: 400px;
  margin: 0 auto;
}
</style>
