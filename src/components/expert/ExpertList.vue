<template>
  <div>
    <div id="list">
      <ExpertItem v-for="expert in experts" :key="expert.userId" :expert="expert" />
    </div>
  </div>
</template>

<script>
import ExpertItem from './ExpertItem.vue'

export default {
  components: {
    ExpertItem
  },
  data() {
    return {
      experts: null
    }
  },
  methods: {
    async loadExpertsData() {
      let expertsUrl = 'http://localhost:8080/api/v1/experts/approved'
      let headers = new Headers()
      headers.append('Accept', 'application/json')

      const res = await fetch(expertsUrl, {
        method: 'GET',
        headers
      })

      const responseData = await res.json()

      if (!res.ok) {
        const error = new Error(responseData.message || 'Failed to load experts.')
        throw error
      }

      this.experts = responseData
    }
  },
  created() {
    this.loadExpertsData()
  }
}
</script>

<style scoped>
#list {
  display: flex;
  flex-direction: column;
  row-gap: 4vh;
}
</style>
