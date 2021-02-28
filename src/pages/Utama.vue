<template>
  <div>
    <span>{{ state.count }}</span>
    <input type="text" v-model="state.count">
  </div>
</template>

<script>
  import { reactive } from 'vue'
  export default {
    setup() {
      const state = reactive({
      	count:100
      })
      return {
        state,

        
      }
    }
  }
</script>