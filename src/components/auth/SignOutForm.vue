<template>
  <form @submit.prevent="submitForm">
    <p>Вы сейчас пользуетесь аккаунтом {{ userEmail }}</p>
    <button>Выйти</button>
  </form>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated
    },
    userEmail() {
      return this.$store.getters.email
    }
  },
  methods: {
    async submitForm() {
      await this.$store.dispatch('signOut')
      this.$router.replace('/')
    }
  },
  created() {
    if (!this.isAuthenticated) {
      this.$router.replace('/signin')
    }
  }
}
</script>

<style scoped>
form {
  width: 100%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #f8f8f6;
  border-radius: 32px;
}

button {
  height: 50px;
  width: 100%;
  border: none;
  background-color: #4640de;
  color: white;
  font-size: 16px;
  font-family: 'Manrope Bold';
}

p {
  text-align: center;
  font-size: 16px;
  font-family: 'Manrope Semibold';
}
</style>
