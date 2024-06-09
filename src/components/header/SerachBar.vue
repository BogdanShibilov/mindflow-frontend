<template>
  <span id="search-wrapper">
    <input @keyup.enter="loadExperts" type="search" placeholder="Search" v-model="searchString" />
  </span>
</template>

<script>
export default {
  emits: ['searchedExperts'],
  data() {
    return {
      searchString: ''
    }
  },
  methods: {
    async loadExperts() {
      if (!this.searchString) return
      let url = import.meta.env.VITE_API_URL + '/experts/approved' + '?name=' + this.searchString
      const res = await fetch(url, {
        method: 'GET'
      })
      const data = await res.json()
      this.$emit('searchedExperts', data)
    }
  }
}
</script>

<style scoped>
input[type='search'] {
  -webkit-appearance: none;
  appearance: none;
  width: 650px;
  height: 53px;
  padding: 14.5px 20px 14.5px 50px;
  border-radius: 20px;
  border: none;
  font-family: 'Poppins Regular';
}

input[type='search']::placeholder {
  color: #989ba5;
  font-family: 'Poppins Regular';
}

input[type='search']:focus {
  outline: none;
}

#search-wrapper::before {
  content: url('../../assets/icons/search-icon.svg');
  position: relative;
  left: 40px;
  top: 5px;
  pointer-events: none;
}
</style>
