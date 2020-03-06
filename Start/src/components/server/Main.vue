<template>
  <div class="row">
      <div class="col-xs-12 col-sm-6">
          <ul class="list-group">
              <li class="list-group-item" v-for="index in 5">
                  Server #{{ index }}
              </li>
          </ul>
      </div>
      <serverDetail></serverDetail>
  </div>
</template>

<script>
import ServerDetail from './ServerDetail.vue'
export default {
  components: {
    'serverDetail': ServerDetail
  }
}
</script>

<style scoped>
  div {
    border: 1px solid blue;
  }
</style>
