<template>
  <div>
    <span @click="signOut">Sign out</span>
  </div>
</template>

<script>
export default {
  methods: {
    signOut() {
      this.$store.dispatch('signOut')
    }
  }
}
</script>

<style scoped>
div {
  position: absolute;
  left: 86.5%;
  top: 12%;
  background-color: #e1e2ec;
  min-width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

span {
  padding: 10px 0px;
  width: 100%;
  text-align: center;
  cursor: pointer;
  font-family: 'Manrope Semiold';
  font-size: 18px;
}
</style>
