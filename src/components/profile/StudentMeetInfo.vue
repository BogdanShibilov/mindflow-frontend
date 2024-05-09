<template>
  <div id="container">
    <div class="input-wrapper">
      <label for="expertname">ФИО эксперта</label>
      <input id="expertname" type="text" v-model="name" disabled />
    </div>
    <div class="input-wrapper">
      <label for="field">Сфера деятельности эксперта</label>
      <input id="field" type="text" v-model="field" disabled />
    </div>
    <div class="input-wrapper">
      <label for="exp">Опыт эксперта</label>
      <textarea id="exp" type="text" v-model="exp" disabled></textarea>
    </div>
    <div class="input-wrapper">
      <label for="help">Чем может помочь эксперт</label>
      <textarea id="help" type="text" v-model="help" disabled></textarea>
    </div>
    <div class="input-wrapper">
      <label for="questions">Мои вопросы эксперту</label>
      <textarea id="questions" type="text" v-model="questions" disabled></textarea>
    </div>
  </div>
</template>

<script>
export default {
  props: ['meet'],
  data() {
    return {
      name: '',
      field: '',
      exp: '',
      help: '',
      questions: ''
    }
  },
  computed: {
    token() {
      return this.$store.getters.token
    }
  },
  methods: {
    async loadMeetInfo() {
      let url = import.meta.env.VITE_API_URL + '/consultation/' + this.meet.ConsultationUuid
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
      this.questions = data.MenteeQuestions

      url = import.meta.env.VITE_API_URL + '/users/' + data.ExpertUuid
      headers = new Headers()
      headers.append('Content-Type', 'application/json')
      headers.append('authorization', 'Bearer ' + this.token)
      res = await fetch(url, {
        method: 'GET',
        headers
      })

      data = await res.json()
      if (!res.ok) {
        const error = new Error(data.error || 'Failed to get consultation.')
        throw error
      }
      this.field = data.professionalField
      this.exp = data.experienceDescription
      this.name = data.name

      url = import.meta.env.VITE_API_URL + '/experts/' + data.id
      headers = new Headers()
      headers.append('Content-Type', 'application/json')
      headers.append('authorization', 'Bearer ' + this.token)
      res = await fetch(url, {
        method: 'GET',
        headers
      })

      data = await res.json()
      if (!res.ok) {
        const error = new Error(data.error || 'Failed to get consultation.')
        throw error
      }

      this.help = data.helpDescription
    }
  },
  created() {
    this.loadMeetInfo()
  }
}
</script>

<style scoped>
#container,
.input-wrapper {
  display: flex;
  flex-direction: column;
}

#container {
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
