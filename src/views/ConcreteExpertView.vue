<template>
  <div class="container">
    <TheHeader id="header" />
    <ConcreteExpert id="concrete-expert" />
    <TheFooter id="footer" />
  </div>
</template>

<script>
import TheHeader from '../components/shared/TheHeader.vue'
import TheFooter from '../components/shared/TheFooter.vue'
import ConcreteExpert from '@/components/expert/ConcreteExpert.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
    ConcreteExpert
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

#concrete-expert {
  grid-row: 2;
  grid-column: 2;
}

#header {
  grid-row: 1;
  grid-column: 1 / 4;
}

#footer {
  grid-row: 3;
  grid-column: 1 / 4;
}
</style>
