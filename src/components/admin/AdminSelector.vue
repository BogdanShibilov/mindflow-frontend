<template>
  <div id="selector">
    <h2>Admin panel</h2>
    <p :class="{ selected: this.currentlySelected == 'users' }" @click="emitTab('users')">Users</p>
    <p :class="{ selected: this.currentlySelected == 'experts' }" @click="emitTab('experts')">
      Experts
    </p>
    <p :class="{ selected: this.currentlySelected == 'students' }" @click="emitTab('students')">
      Students
    </p>
  </div>
</template>

<script>
export default {
  props: ['currentlySelected'],
  emits: ['tabChange'],
  data() {
    return {
      alwaystrue: true
    }
  },
  methods: {
    emitTab(tab) {
      this.$emit('tabChange', tab)
    }
  }
}
</script>

<style scoped>
#selector {
  background-color: white;
  padding: 20px;
}

h2 {
  font-family: 'Montserrat Semibold';
}

p {
  font-size: 16px;
  font-family: 'Poppins Medium';
  padding: 10px 20px;
  cursor: pointer;
}

.selected {
  background-color: #f0f0f0;
}

p::before {
  position: relative;
  top: 3px;
  right: 5px;
  content: url('../../assets/icons/dark-profile-icon.svg');
}
</style>
