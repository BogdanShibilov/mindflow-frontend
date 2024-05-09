<template>
  <div id="selector">
    <p :class="{ selected: this.currentlySelected == 'profile' }" @click="emitTab('profile')">
      Профиль
    </p>
    <p :class="{ selected: this.currentlySelected == 'schedule' }" @click="emitTab('schedule')">
      Моё расписание
    </p>
    <p :class="{ selected: this.currentlySelected == 'settings' }" @click="emitTab('settings')">
      Настройки
    </p>
    <button @click="signOut">Logout</button>
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
    },
    signOut() {
      this.$store.dispatch('signOut')
      this.$router.replace('/experts')
    }
  }
}
</script>

<style scoped>
#selector {
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
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

button {
  background-color: #ffffff;
  border: 1px solid #e2e7f5;
  border-radius: 8px;
  box-shadow: 2px 2px 2px 2px #e2e7f5;
  margin-top: 25px;
  padding: 20px 0px;
  color: #ff6550;
  font-family: 'Montserrat Semibold';
}

button::before {
  content: url('../../assets/icons/logout-icon.svg');
  position: relative;
  top: 3px;
  right: 30px;
}
</style>
