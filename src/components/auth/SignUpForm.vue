<template>
  <form @submit.prevent="submitForm">
    <div class="input-wrapper">
      <label for="name">Full name</label>
      <input id="name" type="text" placeholder="Full name" v-model.trim="name" />
    </div>
    <div class="input-wrapper">
      <label for="email">Email address</label>
      <input id="email" type="email" placeholder="Email address" v-model.trim="email" />
    </div>
    <div class="input-wrapper">
      <label for="password">Password</label>
      <input id="password" type="password" placeholder="Enter password" v-model.trim="password" />
    </div>
    <button>Продолжить</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      name: ''
    }
  },
  methods: {
    async submitForm() {
      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.password.length < 5 ||
        this.name === ''
      ) {
        console.log('Invalid credentials')
        return
      }

      await this.$store.dispatch('signup', {
        email: this.email,
        password: this.password,
        name: this.name
      })

      const redirectUrl = '/updateuserdetails'
      this.$router.replace(redirectUrl)
    }
  }
}
</script>

<style scoped>
form {
  width: 100%;
}

form > button {
  margin: 11px 0px;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  padding: 11px 0px;
}

.input-wrapper > label {
  font-family: 'Manrope Semibold';
  color: #515b6f;
}

.input-wrapper > input {
  height: 50px;
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

form > button {
  height: 50px;
  width: 100%;
  border: none;
  background-color: #4640de;
  color: white;
  font-size: 16px;
  font-family: 'Manrope Bold';
}
</style>
