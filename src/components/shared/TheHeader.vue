<template>
  <header>
    <router-link to="/">
      <img src="../../assets/images/mindflow-logo.png" />
    </router-link>
    <SearchBar @searchedExperts="emitSearchedExperts" />
    <SignedIn v-if="isAuthenticated" />
    <SignedOut v-else />
  </header>
</template>

<script>
import SignedIn from '../header/SignedIn.vue'
import SignedOut from '../header/SignedOut.vue'
import SearchBar from '../header/SerachBar.vue'

export default {
  emits: ['searchedExperts'],
  components: {
    SignedIn,
    SearchBar,
    SignedOut
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    emitSearchedExperts(data) {
      this.$emit('searchedExperts', data)
    }
  }
}
</script>

<style scoped>
header {
  background-color: #e1e2ec;
  height: 12vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>
