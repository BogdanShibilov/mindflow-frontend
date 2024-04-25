<template>
  <form @submit.prevent="submitForm">
    <div class="page">
      <div class="input-wrapper">
        <label for="email">Почта</label>
        <input id="email" type="email" placeholder="Введите email" v-model.trim="email" />
      </div>
      <div class="input-wrapper">
        <label for="password">Пароль</label>
        <input id="password" type="password" placeholder="Введите пароль" v-model.trim="password" />
      </div>
      <button>Продолжить</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    async submitForm() {
      await this.$store.dispatch('signIn', {
        email: this.email,
        password: this.password
      })
      this.$router.replace('/')
    }
  },
  created() {
    if (this.isAuthenticated) {
      this.$router.replace('/signout')
    }
  }
}
</script>

<style scoped>
form {
  width: 100%;
}

.page {
  display: flex;
  flex-direction: column;
  gap: 11px;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
}

.input-wrapper > label {
  font-family: 'Manrope Semibold';
  color: #515b6f;
}

.input-wrapper > input {
  min-height: 50px;
  max-height: 300px;
  width: 100%;
  padding: 12px 16px;
  color: #202430;
  font-size: 16px;
  outline: none;
  border: 1px solid #d6ddeb;
}

.input-wrapper > input::placeholder {
  color: #a8adb7;
}

.input-wrapper > textarea {
  resize: vertical;
}

.page > button {
  height: 50px;
  width: 100%;
  border: none;
  background-color: #4640de;
  color: white;
  font-size: 16px;
  font-family: 'Manrope Bold';
}
</style>
