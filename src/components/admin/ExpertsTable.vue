<template>
  <table>
    <thead>
      <tr>
        <th>Full name</th>
        <th>Email</th>
        <th>Phone</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(expert, index) in experts" :key="expert.UserUuid">
        <td>{{ expert.Name }}</td>
        <td>{{ expert.Email }}</td>
        <td>{{ expert.Phone }}</td>
        <td class="btns">
          <button class="profile-btn">Profile</button>
          <button class="accept-btn" @click="changeExpertStatus(index, 1)">Accept</button>
          <button class="reject-btn" @click="changeExpertStatus(index, 2)">Reject</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      experts: null
    }
  },
  computed: {
    token() {
      return this.$store.getters.token
    }
  },
  methods: {
    async loadExpertsData() {
      let url = 'http://localhost:8080/api/v1/experts?status=0'
      let headers = new Headers()
      headers.append('Content-Type', 'application/json')
      headers.append('authorization', 'Bearer ' + this.token)
      const res = await fetch(url, {
        method: 'GET',
        headers
      })

      const data = await res.json()
      if (!res.ok) {
        const error = new Error(data.error || 'Failed to get users.')
        throw error
      }
      console.log(data)
      this.experts = data
    },
    async changeExpertStatus(index, status) {
      let expert = this.experts[index]
      let url = 'http://localhost:8080/api/v1/experts/status'
      let headers = new Headers()
      headers.append('Content-Type', 'application/json')
      headers.append('authorization', 'Bearer ' + this.token)
      const res = await fetch(url, {
        method: 'PUT',
        headers,
        body: JSON.stringify({
          expertId: expert.UserUuid,
          status: status
        })
      })

      if (!res.ok) {
        const data = await res.json()
        const error = new Error(data.error || 'Failed to get users.')
        throw error
      }

      this.loadExpertsData()
    }
  },
  created() {
    this.loadExpertsData()
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

.profile-btn,
.accept-btn,
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

.profile-btn {
  background-color: #4ba0b5;
}

.profile-btn::before {
  position: relative;
  top: 3px;
  right: 5px;
  content: url('../../assets/icons/person-icon.svg');
}

.accept-btn::before {
  position: relative;
  top: 3px;
  right: 5px;
  content: url('../../assets/icons/ok-icon.svg');
}

.accept-btn {
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
