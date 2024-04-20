<template>
  <div id="background" @click="$emit('closeWindow')">
    <div id="modal" @click.stop>
      <span id="name">{{ name }}</span>
      <img src="../../assets/icons/X.svg" @click="$emit('closeWindow')" />
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['closeWindow'],
  props: {
    name
  }
}
</script>

<style scoped>
#background {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100vw;
  height: 100vh;
  background-color: #00000040;
  display: flex;
  align-items: center;
  justify-content: center;
}

#modal {
  position: relative;
  background-color: white;
  border-radius: 20px;
  padding: 50px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  position: absolute;
  right: 30px;
  top: 30px;
  cursor: pointer;
}

#name {
  position: absolute;
  left: 30px;
  top: 15px;
  font-family: '';
  font-size: 28px;
  color: rgb(79, 79, 79);
}
</style>
