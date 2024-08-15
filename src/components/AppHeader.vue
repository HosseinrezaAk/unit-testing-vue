<template>
  <div>
    <button v-shiow="loggedIn">Logout</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: false,
    }
  },
}
</script>

<style></style>
