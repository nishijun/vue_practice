<template>
  <div>
    <appServer v-for="server in servers" :server="server"></appServer>
  </div>
</template>

<script>
import Server from './Server.vue'

export default {
  data() {
    return {
      servers: [
        {id: 1, status: 'Normal'},
        {id: 2, status: 'Critical'},
        {id: 3, status: 'Unknown'},
        {id: 4, status: 'Normal'},
      ]
    }
  },
  components: {
    appServer: Server
  }
}
</script>

<style>

</style>
