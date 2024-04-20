<template>
  <form @submit.prevent="submitForm">
    <div class="input-wrapper">
      <label for="yourquestions">Ваши вопросы эксперту</label>
      <textarea
        name="yourquestions"
        id="yourquestions"
        placeholder="Введите текст"
        rows="5"
        v-model="questions"
      ></textarea>
    </div>
    <button>Далее</button>
    <span id="agree"
      >Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и с правилами пользования
      платформой</span
    >
  </form>
</template>

<script>
export default {
  props: ['mentorId'],
  emits: ['closeWindow'],
  data() {
    return {
      questions: ''
    }
  },
  methods: {
    async submitForm() {
      let enrollmentUrl = 'http://localhost:8080/api/v1/enrollment/'
      let res = await fetch(enrollmentUrl, {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + this.$store.getters.token
        },
        body: {
          mentorId: this.mentorId,
          menteeQuestions: this.questions
        }
      }).catch(console.error)
      if (!res.ok) {
        alert('failed')
      }
      this.$emit('closeWindow')
    }
  }
}
</script>

<style scoped>
* {
  font-family: 'Montserrat Regular';
}

textarea {
  background-color: #00093c10;
  border-radius: 6px;
}

form {
  margin: 15px 10px 0px 10px;
}

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

.input-wrapper > textarea {
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
  width: 40%;
  border: none;
  border-radius: 10px;
  background-color: #f44e77;
  color: white;
  font-size: 16px;
  font-family: 'Manrope Bold';
}

#agree {
  display: inline-block;
  color: #4f4f4f;
  font-size: 14px;
  margin-top: 30px;
}
</style>
