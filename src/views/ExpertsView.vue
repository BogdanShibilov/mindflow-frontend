<template>
  <div class="container">
    <TheHeader id="header" />
    <ExpertsFilter id="filter" />
    <ExpertList id="expert-list" :experts="experts" />
    <TheFooter id="footer" />
  </div>
</template>

<script>
import TheHeader from '../components/shared/TheHeader.vue'
import TheFooter from '../components/shared/TheFooter.vue'
import ExpertList from '../components/expert/ExpertList.vue'
import ExpertsFilter from '../components/expert/ExpertsFilter.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
    ExpertList,
    ExpertsFilter
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
.container {
  display: grid;
  min-height: 100vh;
  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr 2.5fr 1fr;
  row-gap: 4vh;
}

#header {
  grid-row: 1;
  grid-column: 1 / 4;
}

#expert-list {
  grid-row: 2;
  grid-column: 2;
}

#footer {
  grid-row: 3;
  grid-column: 1 / 4;
}

#filter {
  padding: 40px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
}
</style>
