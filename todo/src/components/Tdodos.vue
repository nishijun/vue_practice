<template>
  <ul>
    <Todo v-for="todo in todos" :key="todo.id" :todo="todo" @editTodo="editTodo" @deleteTodo="deleteTodo"></Todo>
  </ul>
</template>

<script>
import Todo from './Todo.vue'
import { eventBus, searchBus } from '../main'
export default {
  data() {
    return {
      todos: [
        {id: 1, content: 'Progate HTML・CSS入門', isDone: false, isEdit: false},
        {id: 2, content: 'Progate HTML・CSS中級', isDone: false, isEdit: false},
        {id: 3, content: 'Progate JavaScript入門', isDone: false, isEdit: false},
        {id: 4, content: 'Progate PHP入門', isDone: true, isEdit: false},
      ]
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

  },
  created() {
    eventBus.$on('addTodo', content => {
      if (this.todos.length === 0) {
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

    searchBus.$on('searchTodo', text => {
      if (text) {
        let result = this.todos.filter(item => {
          return item.content.match(text)
        })
        this.todos = result
      }
    })
  }
}
</script>

<style media="screen">
ul {
  margin: 30px 0 0;
  padding: 0;
}
</style>
