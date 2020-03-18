<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as types from '../store/types'
export default {
  computed: {
    ...mapGetters({
      counter: types.DOUBLE_COUNTER,
    })
  }
}
</script>
