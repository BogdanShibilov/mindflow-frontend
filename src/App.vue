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
  }
}
</script>
