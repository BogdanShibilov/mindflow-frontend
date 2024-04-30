<template>
  <form @submit.prevent="submitForm">
    <div class="input-wrapper">
      <label for="name">Имя</label>
      <input id="name" type="text" v-model="name" />
    </div>
    <div class="input-wrapper">
      <label for="email">Email</label>
      <input id="email" type="email" v-model="email" />
    </div>
    <div class="input-wrapper">
      <label for="phone">Phone</label>
      <input id="phone" type="tel" v-model="phone" />
    </div>
    <div class="input-wrapper">
      <label for="field">направление</label>
      <input id="field" type="text" v-model="field" />
    </div>
    <div class="input-wrapper">
      <label for="experience">Опыт</label>
      <textarea id="experience" type="text" v-model="experience" />
    </div>
    <button>Сохранить</button>
  </form>
</template>

<script>
export default {
  emits: ['formSubmitted'],
  props: ['user'],
  data() {
    return {
      id: '',
      name: '',
      email: '',
      phone: '',
      field: '',
      experience: ''
    }
  },
  computed: {
    token() {
      return this.$store.getters.token
    }
  },
  methods: {
    async submitForm() {
      let url = 'http://localhost:8080/api/v1/users/forceupdateuserprofile'
      let headers = new Headers()
      headers.append('Content-Type', 'application/json')
      headers.append('authorization', 'Bearer ' + this.token)
      const res = await fetch(url, {
        method: 'PUT',
        headers,
        body: JSON.stringify({
          id: this.id,
          name: this.name,
          email: this.email,
          phone: this.phone,
          professionalField: this.field,
          experienceDescription: this.experience
        })
      })

      if (!res.ok) {
        let data = await res.json()
        const error = new Error(data.error || 'Failed to update user.')
        throw error
      }

      this.$emit('formSubmitted')
    }
  },
  beforeMount() {
    this.id = this.user.id
    this.name = this.user.name
    this.email = this.user.email
    this.phone = this.user.phone
    this.field = this.user.professionalField
    this.experience = this.user.experienceDescription
  }
}
</script>

<style scoped>
form,
.input-wrapper {
  display: flex;
  flex-direction: column;
}

form {
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
}

.input-wrapper > input,
.input-wrapper > textarea {
  font-family: 'Poppins Medium';
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

button {
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
