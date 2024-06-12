<template>
  <form @submit.prevent="submitForm" v-if="!didSubmit">
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
    <button>Оплатить</button>
    <span id="agree"
      >Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и с правилами пользования
      платформой</span
    >
  </form>
  <div id="already-submitted" v-else>
    <p>Вы уже отправили заявку!</p>
    <button @click="$emit('closeWindow')">Закрыть</button>
  </div>
</template>

<script>
export default {
  props: ['mentorId'],
  emits: ['closeWindow'],
  data() {
    return {
      questions: '',
      didSubmit: false
    }
  },
  computed: {
    token() {
      return this.$store.getters.token
    }
  },
  methods: {
    async submitForm() {
      let url = import.meta.env.VITE_API_URL + '/consultation/apply'
      let res = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + this.$store.getters.token
        },
        body: JSON.stringify({
          expertId: this.mentorId,
          menteeQuestions: this.questions
        })
      }).catch(console.error)
      if (!res.ok) {
        alert('failed')
      }
      this.$emit('closeWindow')
      this.alreadyApplied = true
      window.open('https://pay.kaspi.kz/pay/tz9hfrum', '_blank')
    },
    async alreadyApplied() {
      let url = import.meta.env.VITE_API_URL + '/consultation/alreadyapplied/' + this.mentorId
      let headers = new Headers()
      headers.append('Content-Type', 'application/json')
      headers.append('authorization', 'Bearer ' + this.token)
      const res = await fetch(url, {
        method: 'GET',
        headers
      })

      let data = await res.json()
      if (!res.ok) {
        let data = await res.json()
        const error = new Error(data.error || 'Failed to check if already applied.')
        throw error
      }

      this.didSubmit = data.alreadyApplied
    }
  },
  beforeMount() {
    this.alreadyApplied()
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
  resize: vertical;
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

button {
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

#already-submitted p {
  font-family: 'Poppins Regular';
  font-size: 24px;
  color: #4f4f4f;
  margin: 10px;
}
</style>
