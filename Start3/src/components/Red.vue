<template>
    <div>
      <button @click="num += 10">Increase 10!</button>
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
        border: 1px solid red;
        background-color: lightcoral;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>
