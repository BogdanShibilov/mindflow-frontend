<template>
  <div class="background">
    <slot></slot>
  </div>
</template>

<style scoped>
.background {
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
