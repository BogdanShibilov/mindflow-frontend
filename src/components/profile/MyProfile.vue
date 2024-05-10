<template>
  <h1>Профиль</h1>
  <form id="myinfo" @submit.prevent="updateMyProfileInfo">
    <div class="input-wrapper">
      <label for="name">ФИО</label>
      <input id="name" type="text" v-model="name" />
    </div>
    <div class="input-wrapper">
      <label for="field">Сфера деятельности</label>
      <input id="field" type="text" v-model="field" />
    </div>
    <div class="input-wrapper">
      <label for="exp">Опыт</label>
      <textarea id="exp" type="text" v-model="exp"></textarea>
    </div>
    <button id="savemyinfo-btn">Сохранить</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      user: null,
      name: '',
      field: '',
      exp: ''
    }
  },
  computed: {
    token() {
      return this.$store.getters.token
    }
  },
  methods: {
    async loadMyInfoData() {
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
        const error = new Error(data.error || 'Failed to get user.')
        throw error
      }

      this.user = data
      this.name = data.name
      this.field = data.professionalField
      this.exp = data.experienceDescription
    },
    async updateMyProfileInfo() {
      let url = import.meta.env.VITE_API_URL + '/users/myprofile'
      let headers = new Headers()
      headers.append('Content-Type', 'application/json')
      headers.append('authorization', 'Bearer ' + this.token)
      const res = await fetch(url, {
        method: 'PUT',
        headers,
        body: JSON.stringify({
          name: this.name,
          email: this.user.email,
          phone: this.user.phone,
          professionalField: this.field,
          experienceDescription: this.exp
        })
      })

      if (!res.ok) {
        let data = await res.json()
        const error = new Error(data.error || 'Failed to update user.')
        throw error
      }
    }
  },
  created() {
    this.loadMyInfoData()
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
