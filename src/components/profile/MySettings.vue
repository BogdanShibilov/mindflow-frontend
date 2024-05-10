<template>
  <h1>Настройки</h1>
  <form id="myinfo" @submit.prevent="submitForm">
    <div class="input-wrapper">
      <label for="email">Почта</label>
      <input id="email" type="text" v-model="email" />
    </div>
    <div class="input-wrapper">
      <label for="phone">Номер телефона</label>
      <input id="phone" type="tel" v-model="phone" />
    </div>
    <div class="input-wrapper">
      <label for="oldpassword">Старый пароль</label>
      <input id="oldpassword" type="password" v-model="oldPassword" />
    </div>
    <div class="input-wrapper">
      <label for="newpassword">Новый пароль</label>
      <input id="newpassword" type="password" v-model="newPassword" />
    </div>
    <button id="savemyinfo-btn">Сохранить</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      phone: '',
      newPassword: '',
      oldPassword: ''
    }
  },
  computed: {
    token() {
      return this.$store.getters.token
    }
  },
  methods: {
    async loadData() {
      let url = import.meta.env.VITE_API_URL + '/users/me'
      let headers = new Headers()
      headers.append('Content-Type', 'application/json')
      headers.append('authorization', 'Bearer ' + this.token)
      let res = await fetch(url, {
        method: 'GET',
        headers
      })

      let data = await res.json()
      if (!res.ok) {
        const error = new Error(data.error || 'Failed to get consultation.')
        throw error
      }
      this.email = data.email
      this.phone = data.phone
    },
    async submitForm() {
      let url = import.meta.env.VITE_API_URL + '/users/settings'
      let headers = new Headers()
      headers.append('Content-Type', 'application/json')
      headers.append('authorization', 'Bearer ' + this.token)
      const res = await fetch(url, {
        method: 'PUT',
        headers,
        body: JSON.stringify({
          newEmail: this.email,
          newPhone: this.phone,
          newPassword: this.newPassword,
          oldPassword: this.oldPassword
        })
      })

      if (!res.ok) {
        let data = await res.json()
        const error = new Error(data.error || 'Failed to update settings.')
        throw error
      }
    }
  },
  created() {
    this.loadData()
  }
}
</script>

<style scoped>
#myinfo,
.input-wrapper {
  display: flex;
  flex-direction: column;
}

#myinfo {
  width: 55vw;
  gap: 15px;
  padding: 15px 35px 0px 35px;
}

.input-wrapper {
  gap: 2px;
}

.input-wrapper > label {
  font-family: 'Montserrat Regular';
  color: #515b6f;
  font-weight: bold;
}

.input-wrapper > input,
.input-wrapper > textarea {
  font-family: 'Poppins Regular';
  min-height: 50px;
  max-height: 300px;
  width: 100%;
  padding: 12px 16px;
  color: #202430;
  font-size: 16px;
  outline: none;
  border: 1px solid #d6ddeb;
  border-radius: 6px;
  resize: vertical;
}

#savemyinfo-btn {
  height: 50px;
  padding: 0px 40px;
  border: none;
  border-radius: 16px;
  background-color: #4640de;
  color: white;
  font-size: 16px;
  font-family: 'Manrope Bold';
  align-self: flex-start;
}
</style>
