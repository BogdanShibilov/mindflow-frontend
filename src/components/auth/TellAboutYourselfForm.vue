<template>
  <form @submit.prevent="submitForm">
    <div class="input-wrapper">
      <label for="phone">Номер телефона</label>
      <input v-model="phone" id="phone" type="tel" placeholder="Введите номер телефона" />
    </div>
    <div class="input-wrapper">
      <label for="field">Ваша сфера деятельности</label>
      <input v-model="field" id="field" type="text" placeholder="Введите название" />
    </div>
    <div class="input-wrapper">
      <label for="experience">Опишите свой опыт</label>
      <textarea v-model="experience" id="experience" type="text" placeholder="Введите текст" />
    </div>
    <button>Продолжить</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      phone: '',
      field: '',
      experience: ''
    }
  },
  methods: {
    submitForm() {
      if (this.$store.getters.isAuthenticated) {
        let updateUserDetailsUrl = 'http://localhost:8080//api/v1/user/updatedetails'
        fetch(updateUserDetailsUrl, {
          method: 'POST',
          body: JSON.stringify({
            phoneNumber: this.phone,
            professionalField: this.field,
            experienceDescription: this.experience
          })
        })

        const redirectUrl = '/experts'
        this.$router.replace(redirectUrl)
      } else {
        const redirectUrl = '/login'
        this.$router.replace(redirectUrl)
      }
    }
  },
  beforeCreate() {
    if (!this.$store.getters.isAuthenticated) {
      const redirectUrl = '/login'
      this.$router.replace(redirectUrl)
    }
  }
}
</script>

<style scoped>
form {
  width: 100%;
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

.input-wrapper > input,
.input-wrapper > textarea {
  height: 50px;
  width: 100%;
  padding: 12px 16px;
  color: #202430;
  font-size: 16px;
  outline: none;
  border: 1px solid #d6ddeb;
}

.input-wrapper > input::placeholder,
.input-wrapper > textarea::placeholder {
  color: #a8adb7;
}

form > button {
  display: block;
  cursor: pointer;
  margin: auto;
  height: 50px;
  width: 60%;
  border: none;
  background-color: #4640de;
  color: white;
  font-size: 16px;
  font-family: 'Manrope Bold';
}
</style>
