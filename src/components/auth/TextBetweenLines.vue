<template>
  <div class="flex-parent">
    <div class="flex-child-edge"></div>
    <div class="flex-child-text">{{ text }}</div>
    <div class="flex-child-edge"></div>
  </div>
</template>

<script>
export default {
  props: {
    text: String
  }
}
</script>

<style scoped>
.flex-parent {
  display: flex;
  width: 100%;
  height: 26px;
  align-items: center;
  color: rgba(20, 24, 30, 0.5);
}

.flex-child-edge {
  flex-grow: 2;
  height: 0.5px;
  background-color: #d6ddeb;
}
.flex-child-text {
  flex-basis: auto;
  flex-grow: 0;
  margin: 0px 20px;
  text-align: center;
}
</style>
