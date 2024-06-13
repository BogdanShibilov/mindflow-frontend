<template>
  <header>
    <router-link to="/">
      <img src="../../assets/images/mindflow-logo.png" />
    </router-link>
    <SearchBar @searchedExperts="emitSearchedExperts" />
    <router-link to="/internships">
      <button id="internships-link">Internships</button>
    </router-link>
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

#internships-link {
  -webkit-appearance: none;
  appearance: none;
  width: 140px;
  height: 55px;
  border-radius: 30px;
  font-size: 20px;
  background-color: #554dde;
  color: #fefefe;
  border: none;
}
</style>
