<template>
  <table>
    <thead>
      <tr>
        <th>Mentee id</th>
        <th>Mentee questions</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(consult, index) in applications" :key="consult.Uuid">
        <td>{{ consult.MenteeUuid }}</td>
        <td>{{ consult.MenteeQuestions }}</td>
        <td class="btns">
          <button class="schedule-btn" @click="scheduleConsult(index)">Schedule</button>
          <button class="reject-btn" @click="rejectConsult(index)">Reject</button>
        </td>
      </tr>
    </tbody>
  </table>
  <ModalWindowBase
    v-if="isScheduleVisible"
    @closeWindow="toogleScheduleFormVisibility"
    name="Schedule"
  >
    <ScheduleConsultMeeting :consult="currentlyScheduled" />
  </ModalWindowBase>
</template>

<script>
import ModalWindowBase from '../base/ModalWindowBase.vue'
import ScheduleConsultMeeting from './ScheduleConsultMeeting.vue'

export default {
  components: {
    ModalWindowBase,
    ScheduleConsultMeeting
  },
  data() {
    return {
      applications: null,
      isScheduleVisible: false,
      currentlyScheduled: null
    }
  },
  computed: {
    token() {
      return this.$store.getters.token
    }
  },
  methods: {
    async loadConsultApplications() {
      let url = import.meta.env.VITE_API_URL + '/consultation'
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
      this.applications = data
    },
    async rejectConsult(index) {
      let url =
        import.meta.env.VITE_API_URL + '/consultation/reject/' + this.applications[index].Uuid
      let headers = new Headers()
      headers.append('Content-Type', 'application/json')
      headers.append('authorization', 'Bearer ' + this.token)
      const res = await fetch(url, {
        method: 'POST',
        headers
      })

      if (!res.ok) {
        const data = await res.json()
        const error = new Error(data.error || 'Failed to get applications.')
        throw error
      }
      this.loadConsultApplications()
    },
    toogleScheduleFormVisibility() {
      this.isScheduleVisible = !this.isScheduleVisible
    },
    scheduleConsult(index) {
      this.isScheduleVisible = true
      this.currentlyScheduled = this.applications[index]
    },
    meetingScheduled() {
      this.isScheduleVisible = false
      this.loadConsultApplications()
    }
  },
  created() {
    this.loadConsultApplications()
  }
}
</script>

<style scoped>
table {
  border-collapse: collapse;
  letter-spacing: 1px;
}

th {
  font-family: 'Poppins Semibold';
}

td {
  font-family: 'Poppins Medium';
  color: #505050;
}

th,
td {
  border-bottom: 1px solid rgb(160 160 160);
  padding: 8px 10px;
  text-align: center;
  white-space: nowrap;
}

.schedule-btn,
.reject-btn {
  border: none;
  border-radius: 8px;
  color: white;
  font-family: 'Poppins Medium';
  padding: 5px 15px;
  vertical-align: middle;
  height: 35px;
  width: 100px;
}

.schedule-btn::before {
  position: relative;
  top: 3px;
  right: 5px;
  content: url('../../assets/icons/ok-icon.svg');
}

.schedule-btn {
  background-color: #22ab6a;
}

.reject-btn::before {
  position: relative;
  top: 3px;
  right: 5px;
  content: url('../../assets/icons/x-icon.svg');
}

.reject-btn {
  background-color: #d11136;
}

.btns {
  display: flex;
  gap: 10px;
}
</style>
