<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please select your server</p>
        <p v-else>Server #{{ server.id }} selected, Status: {{ server.status }}</p>
        <button @click="changeStatus">Back to Normal</button>
    </div>

</template>

<script>
import { serverBus } from '../../main'

export default {
  data() {
    return {
      server: null
    }
  },
  created() {
    serverBus.$on('serverSelected', (server) => {
      this.server = server
    })
  },
  methods: {
    changeStatus() {
      this.server.status = 'Normal'
    }
  }
}
</script>

<style>

</style>
