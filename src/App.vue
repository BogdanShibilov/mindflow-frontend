<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<script>
export default {
  created() {
    this.$store.dispatch('trySignIn')
    console.log('is logged in: ' + this.$store.getters.isAuthenticated)
  }
}
</script>
