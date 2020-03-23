<template>
  <ul>
    <label for="search">Search Todo</label><br>
    <input type="text" v-model="filterText" @change="searchTodo">
    <Todo v-for="todo in searchTodo" :key="todo.id" :todo="todo" @editTodo="editTodo" @deleteTodo="deleteTodo" @searchTodo="searchTodo"></Todo>
  </ul>
</template>

<script>
import Todo from './Todo.vue'
import { eventBus } from '../main'
export default {
  data() {
    return {
      filterText: '',
      todos: []
    }
  },
  components: {
    Todo
  },
  methods: {
    editTodo(todo) {
      let result = this.todos.filter(item => {
        return item.id === todo.id
      })
      result.content = todo.content
    },
    deleteTodo(todo) {
      let result = this.todos.filter(item => {
        return item.id !== todo
      })
      this.todos = result
    }
  },
  computed: {
    searchTodo() {
      return this.todos.filter(element => {
        return element.content.match(this.filterText)
      })
    }
  },
  created() {
    eventBus.$on('addTodo', content => {
      if (this.todos.length == 0) {
        this.todos.push({
          id: 1,
          content,
          isDone: false,
          isEdit: false
        })
      } else {
        this.todos.push({
          id: this.todos[this.todos.length - 1].id + 1,
          content,
          isDone: false,
          isEdit: false
        })
      }
    })
  }
}
</script>

<style scoped>
ul {
  margin: 30px 0 0;
  padding: 0;
}
input {
  width: 100%;
  height: 40px;
  background: rgb(217, 211, 178);
  font-size: 16px;
  border: none;
  outline: none;
  padding: 10px;
  box-sizing: border-box;
  margin-bottom: 30px;
  border-radius: 20px;
}
</style>
