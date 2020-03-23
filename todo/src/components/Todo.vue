<template>
  <div class="todo" :class="{isDone: todo.isDone}" v-if="!todo.isEdit">
    <div class="todo-main">
      <input type="checkbox" v-model="todo.isDone">
      <p>{{ todo.content }}</p>
    </div>
    <div class="todo-sub">
      <button class="btn delete" @click="deleteTodo">削除</button>
      <button class="btn edit" @click="todo.isEdit = true">編集</button>
    </div>
  </div>
  <div v-else class="todo">
    <input type="text" v-model="todo.content">
    <button class="btn judge" @click="editTodo">決定</button>
  </div>
</template>

<script>
export default {
  props: ['todo'],
  methods: {
    deleteTodo() {
      this.$emit('deleteTodo', this.todo.id)
    },
    editTodo() {
      this.todo.isEdit = false
      this.$emit('editTodo', this.todo)
    }
  }
}
</script>

<style scoped>
.todo {
  width: 100%;
  margin: 0 auto 20px;
  height: 100px;
  box-sizing: border-box;
  padding: 20px;
  background: white;
  border: 1px solid #aaa;
  border-radius: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.todo.isDone {
  background: #aaa;
}
.todo.isDone p {
  text-decoration: line-through;
}
.todo-main {
  display: flex;
  align-items: center;
  width: 100%;
}
.todo-main p {
  width: 100%;
}
.todo-sub {
  position: absolute;
  bottom: 0;
  right: 0;
}
.btn {
  cursor: pointer;
  width: 60px;
  height: 30px;
  color: white;
  float: right;
  border: none;
  font-size: 16px;
  border-radius: 5px;
  margin-bottom: 10px;
}
.edit {
  background: lightgreen;
  margin-right: 10px;
}
.delete {
  background: red;
  margin-right: 10px;
}
.judge {
  background: skyblue;
  margin-bottom: 0;
  margin-left: 10px;
}
input[type="text"] {
  width: 100%;
  height: 30px;
  font-size: 16px;
  box-sizing: border-box;
  padding: 10px 5px;
}
</style>
