<template>
  <TheHeader></TheHeader>
  <main>
    <div id="filter-area">
      <ExpertsFilter></ExpertsFilter>
    </div>
    <div id="experts-area">
      <ExpertItem></ExpertItem>
    </div>
  </main>
  <TheFooter></TheFooter>
</template>

<script>
import TheHeader from '../components/shared/TheHeader.vue'
import TheFooter from '../components/shared/TheFooter.vue'
import ExpertsFilter from '../components/experts/ExpertsFilter.vue'
import ExpertItem from '../components/experts/ExpertItem.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
    ExpertsFilter,
    ExpertItem
  }
}
</script>

<style scoped>
main {
  display: flex;
  gap: 50px;
  margin-top: 5vh;
  min-height: 59.8vh;
}

#filter-area {
  padding: 20px;
  margin-left: 80px;
  width: 20%;
}

#experts-area {
  width: 55%;
}
</style>
