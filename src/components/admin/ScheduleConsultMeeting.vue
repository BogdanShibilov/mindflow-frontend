<template>
  <form @submit.prevent="submitForm">
    <div class="input-wrapper">
      <label for="menteename">Имя студента</label>
      <input id="menteename" type="text" v-model="menteeName" />
    </div>
    <div class="input-wrapper">
      <label for="menteequestions">Вопросы студента</label>
      <input id="menteequestions" type="text" v-model="questions" />
    </div>
    <div class="input-wrapper">
      <label for="expertname">Имя эксперта</label>
      <input id="expertname" type="text" v-model="expertName" />
    </div>
    <div id="datetime">
      <div class="input-wrapper">
        <label for="consultime">Дата консультации</label>
        <input id="consultime" type="datetime-local" v-model="datetime" />
      </div>
    </div>
    <div class="input-wrapper">
      <label for="meetingurl">Ссылка на консультацию</label>
      <input id="meetingurl" type="text" v-model="link" />
    </div>
    <button>Сохранить</button>
  </form>
</template>

<script>
export default {
  emits: ['formSubmitted'],
  props: ['consult'],
  data() {
    return {
      menteeName: '',
      expertName: '',
      questions: '',
      datetime: null,
      link: ''
    }
  },
  computed: {
    token() {
      return this.$store.getters.token
    }
  },
  methods: {
    async loadData() {
      let url = import.meta.env.VITE_API_URL + '/consultation/' + this.consult.Uuid
      let headers = new Headers()
      headers.append('Content-Type', 'application/json')
      headers.append('authorization', 'Bearer ' + this.token)

      const conultRes = await fetch(url, {
        method: 'GET',
        headers
      })
      const consultData = await conultRes.json()
      console.log(consultData)

      url = import.meta.env.VITE_API_URL + '/users/' + consultData.MenteeUuid
      const menteeRes = await fetch(url, {
        method: 'GET',
        headers
      })
      const menteeData = await menteeRes.json()
      console.log(menteeData)
      this.menteeName = menteeData.name

      url = import.meta.env.VITE_API_URL + '/users/' + consultData.ExpertUuid
      const expertRes = await fetch(url, {
        method: 'GET',
        headers
      })
      const expertData = await expertRes.json()
      this.expertName = expertData.name
      console.log(expertData)
    },
    async submitForm() {
      let url = import.meta.env.VITE_API_URL + '/consultation/meeting'
      let headers = new Headers()
      headers.append('Content-Type', 'application/json')
      headers.append('authorization', 'Bearer ' + this.token)
      const startTime = new Date(this.datetime)
      const isoDate = startTime.toISOString()
      const res = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          consultationId: this.consult.Uuid,
          startTime: isoDate,
          link: this.link
        })
      })

      if (!res.ok) {
        const data = await res.json()
        const error = new Error(data.error || 'Failed to get users.')
        throw error
      }

      this.$emit('formSubmitted')
    }
  },
  beforeMount() {
    this.questions = this.consult.MenteeQuestions
    this.loadData()
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

.input-wrapper > input {
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
}

#datetime {
  display: flex;
  gap: 30px;
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
