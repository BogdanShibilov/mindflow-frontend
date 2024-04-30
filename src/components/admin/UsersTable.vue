<template>
  <table>
    <thead>
      <tr>
        <th>Full name</th>
        <th>Roles</th>
        <th>Email</th>
        <th>Phone</th>
        <th colspan="2"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(user, index) in users" :key="user.id">
        <td>{{ user.name }}</td>
        <td>{{ user.roles.join(' ') || '-' }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.phone }}</td>
        <td>
          <button class="edit-btn" @click="editUser(index)">Edit</button>
        </td>
        <td>
          <button class="delete-btn" @click="deleteUser(index)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
  <ModalWindowBase v-if="isEditWindowVisible" @closeWindow="toogleEditFormVisibility" name="Edit">
    <EditUserForm :user="currentlyEditedUser" @formSubmitted="userEditted" />
  </ModalWindowBase>
</template>

<script>
import ModalWindowBase from '../base/ModalWindowBase.vue'
import EditUserForm from './EditUserForm.vue'

export default {
  components: {
    ModalWindowBase,
    EditUserForm
  },
  data() {
    return {
      users: null,
      isEditWindowVisible: false,
      currentlyEditedUser: null
    }
  },
  computed: {
    token() {
      return this.$store.getters.token
    }
  },
  methods: {
    async deleteUser(index) {
      let user = this.users[index]
      let url = 'http://localhost:8080/api/v1/users'
      let headers = new Headers()
      headers.append('Content-Type', 'application/json')
      headers.append('authorization', 'Bearer ' + this.token)
      const res = await fetch(url, {
        method: 'DELETE',
        headers,
        body: JSON.stringify({
          id: user.id
        })
      })

      if (!res.ok) {
        const data = await res.json()
        const error = new Error(data.error || 'Failed to deelte user.')
        throw error
      }

      this.loadUsersData()
    },
    editUser(index) {
      this.isEditWindowVisible = true
      this.currentlyEditedUser = this.users[index]
    },
    toogleEditFormVisibility() {
      this.isEditWindowVisible = !this.isEditWindowVisible
    },
    userEditted() {
      this.isEditWindowVisible = false
      this.loadUsersData()
    },
    async loadUsersData() {
      let url = 'http://localhost:8080/api/v1/users'
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
      this.users = data
    }
  },
  created() {
    this.loadUsersData()
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

.edit-btn,
.delete-btn {
  border: none;
  border-radius: 8px;
  color: white;
  font-family: 'Poppins Medium';
  padding: 5px 15px;
  vertical-align: middle;
  height: 35px;
}

.edit-btn {
  background-color: #4ba0b5;
}

.edit-btn::before {
  position: relative;
  top: 3px;
  right: 5px;
  content: url('../../assets/icons/edit-icon.svg');
}

.delete-btn::before {
  position: relative;
  top: 3px;
  right: 5px;
  content: url('../../assets/icons/trashbin-icon.svg');
}

.delete-btn {
  background-color: #d11136;
}
</style>
