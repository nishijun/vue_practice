<template>
    <div>
      <button @click="num++">Increase 1!</button>
      <p>{{ num }}</p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0
    }
  }
}
</script>

<style scoped>
    div {
        border: 1px solid green;
        background-color: lightgreen;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>
