<template>
  <h1>Моё расписание</h1>
  <h2>Консультации с экспертом</h2>
  <table>
    <thead>
      <tr>
        <th>Дата и время</th>
        <th>Ссылка на консультацию</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(meeting, index) in meetsAsStudent" :key="meeting.ConsultationUuid">
        <td>{{ formatDatetime(meeting.StartTime) }}</td>
        <td>{{ meeting.Link }}</td>
        <td><button @click="openMeetInfo(index, 'student')">Открыть запись</button></td>
      </tr>
    </tbody>
  </table>
  <h2>Консультации с студентом</h2>
  <table>
    <thead>
      <tr>
        <th>Дата и время</th>
        <th>Ссылка на консультацию</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(meeting, index) in meetsAsExpert" :key="meeting.ConsultationUuid">
        <td>{{ formatDatetime(meeting.StartTime) }}</td>
        <td>{{ meeting.Link }}</td>
        <td><button @click="openMeetInfo(index, 'expert')">Открыть запись</button></td>
      </tr>
    </tbody>
  </table>
  <ModalWindowBase
    v-if="isCurrentMeetVisible"
    @closeWindow="toggleMeetInfoVisibility"
    name="Информация встречи"
  >
    <StudentMeetInfo :meet="currentMeet" v-if="whoseMeet == 'student'" />
    <ExpertMeetInfo :meet="currentMeet" v-if="whoseMeet == 'expert'" />
  </ModalWindowBase>
</template>

<script>
import ModalWindowBase from '../base/ModalWindowBase.vue'
import StudentMeetInfo from './StudentMeetInfo.vue'
import ExpertMeetInfo from './ExpertMeetInfo.vue'
import moment from 'moment'

export default {
  components: {
    ModalWindowBase,
    StudentMeetInfo,
    ExpertMeetInfo
  },
  data() {
    return {
      meetsAsStudent: null,
      meetsAsExpert: null,
      isCurrentMeetVisible: false,
      currentMeet: null,
      whoseMeet: ''
    }
  },
  computed: {
    token() {
      return this.$store.getters.token
    }
  },
  methods: {
    async loadMeetsAs(who) {
      let url = import.meta.env.VITE_API_URL + '/consultation/meetas' + who
      let headers = new Headers()
      headers.append('Content-Type', 'application/json')
      headers.append('authorization', 'Bearer ' + this.token)
      const res = await fetch(url, {
        method: 'GET',
        headers
      })

      const data = await res.json()
      if (!res.ok) {
        const error = new Error(data.error || 'Failed to get applications.')
        throw error
      }
      if (who === 'student') {
        this.meetsAsStudent = data
      } else if (who === 'expert') {
        this.meetsAsExpert = data
      }
    },
    toggleMeetInfoVisibility() {
      this.isCurrentMeetVisible = !this.isCurrentMeetVisible
    },
    formatDatetime(datetime) {
      return moment(datetime).format('hh:mm DD MMM YYYY')
    },
    openMeetInfo(index, who) {
      this.isCurrentMeetVisible = true
      if (who == 'student') {
        this.currentMeet = this.meetsAsStudent[index]
        this.whoseMeet = who
      }
      if (who == 'expert') {
        this.currentMeet = this.meetsAsExpert[index]
        this.whoseMeet = who
      }
    }
  },
  created() {
    this.loadMeetsAs('student')
    this.loadMeetsAs('expert')
  }
}
</script>

<style scoped>
table {
  border-collapse: collapse;
  letter-spacing: 1px;
  width: 100%;
  table-layout: fixed;
}

th {
  font-family: 'Poppins Semibold';
}

td {
  font-family: 'Poppins Medium';
  color: #505050;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

th,
td {
  border-bottom: 1px solid rgb(160 160 160);
  padding: 8px 10px;
  text-align: center;
  /* white-space: nowrap; */
}

button {
  border: none;
  border-radius: 8px;
  color: white;
  font-family: 'Poppins Medium';
  padding: 5px 15px;
  vertical-align: middle;
  height: 35px;
  background-color: #554dde;
}

h2 {
  margin-top: 20px;
}
</style>
