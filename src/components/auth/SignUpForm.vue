<template>
  <form @submit.prevent="submitForm">
    <div class="page" v-show="currentPage == 1">
      <div class="input-wrapper">
        <label for="name">ФИО</label>
        <input id="name" type="text" placeholder="Введите полное имя" v-model.trim="name" />
      </div>
      <div class="input-wrapper">
        <label for="email">Почта</label>
        <input id="email" type="email" placeholder="Введите email" v-model.trim="email" />
      </div>
      <div class="input-wrapper">
        <label for="password">Пароль</label>
        <input id="password" type="password" placeholder="Введите пароль" v-model.trim="password" />
      </div>
      <button @click.prevent="incrementPage">Продолжить</button>
    </div>
    <div class="page" v-show="currentPage == 2">
      <div class="input-wrapper">
        <label for="phone">Номер телефона</label>
        <input id="phone" type="tel" placeholder="Введите номер телефона" v-model="phone" />
      </div>
      <div class="input-wrapper">
        <label for="field">Ваша сфера деятельности</label>
        <input id="field" type="text" placeholder="Введите название" v-model="field" />
      </div>
      <div class="input-wrapper">
        <label for="experience">Опишите свой опыт</label>
        <textarea id="experience" type="text" placeholder="Введите текст" v-model="experience" />
      </div>
      <button>Продолжить</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      name: '',
      email: '',
      password: '',
      phone: '',
      field: '',
      experience: ''
    }
  },
  methods: {
    async submitForm() {
      await this.$store.dispatch('signUp', {
        username: this.email,
        password: this.password,
        name: this.name,
        email: this.email,
        phone: this.phone,
        professionalField: this.field,
        experienceDescription: this.experience
      })
      this.$router.replace('/')
    },
    incrementPage() {
      if (this.currentPage == 1 && (!this.name || !this.email || !this.password)) {
        return
      }
      this.currentPage++
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

.input-wrapper > input,
.input-wrapper > textarea {
  min-height: 50px;
  max-height: 300px;
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
