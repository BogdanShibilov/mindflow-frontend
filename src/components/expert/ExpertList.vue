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
  props: ['experts']
}
</script>

<style scoped>
#list {
  display: flex;
  flex-direction: column;
  row-gap: 4vh;
}
</style>
