<template>
  <div>
    <MessageDisplay></MessageDisplay>
  </div>
</template>

<script>
import { getMessage } from '@/services/axios'
import MessageDisplay from './MessageDisplay.vue'
export default {
  components: {
    MessageDisplay,
  },
  data() {
    return {
      message: {},
      error: null,
    }
  },
  async created() {
    try {
      this.message = await getMessage()
    } catch (err) {
      this.error = 'Oops! Something went wrong.'
    }
  },
}
</script>

<style></style>
