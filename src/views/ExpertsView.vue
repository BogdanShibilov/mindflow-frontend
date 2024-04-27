<template>
  <div class="container">
    <TheHeader id="header" />
    <ExpertsFilter id="filter" />
    <ExpertList id="expert-list" experts="this.experts" />
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
