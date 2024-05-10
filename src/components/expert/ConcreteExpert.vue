<template>
  <main>
    <div id="expert-info">
      <img src="../../assets/images/person-image-placeholder.png" />
      <h1>{{ name }}</h1>
      <h2>{{ field }}</h2>
      <h3>Experience:</h3>
      <p>{{ experience }}</p>
      <h3>How can I help:</h3>
      <p>{{ help }}</p>
    </div>
    <div id="consult-info">
      <ModalWindowBase
        name="Заявка"
        v-if="isConsultApplicationFormVisible"
        @closeWindow="toggleConsultApplicationVisibility"
      >
        <ConsultationApplicationForm
          @closeWindow="toggleConsultApplicationVisibility"
          :mentorId="this.mentorId"
        />
      </ModalWindowBase>
      <h3>Consultation</h3>
      <div class="row">
        <span class="col1">Duration</span>
        <span class="col2">hour</span>
      </div>
      <div class="row">
        <span class="col1">Price</span>
        <span class="col2">{{ price }} тг</span>
      </div>
      <button @click="toggleConsultApplicationVisibility">Apply</button>
    </div>
  </main>
</template>

<script>
import ModalWindowBase from '../base/ModalWindowBase.vue'
import ConsultationApplicationForm from './ConsultationApplicationForm.vue'

export default {
  components: {
    ModalWindowBase,
    ConsultationApplicationForm
  },
  data() {
    return {
      mentorId: null,
      name: null,
      field: null,
      experience: null,
      help: null,
      price: null,
      isConsultApplicationFormVisible: false
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    isAuthenticated() {
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    toggleConsultApplicationVisibility() {
      if (!this.isAuthenticated) {
        this.$router.replace('/signin')
      }
      this.isConsultApplicationFormVisible = !this.isConsultApplicationFormVisible
    },
    async loadExpertData() {
      let url = import.meta.env.VITE_API_URL + '/experts/' + this.id
      let headers = new Headers()
      headers.append('Accept', 'application/json')
      const res = await fetch(url, {
        method: 'GET',
        headers
      })

      const responseData = await res.json()

      if (!res.ok) {
        const error = new Error(responseData.message || 'Failed to load expert.')
        throw error
      }

      this.mentorId = responseData.userId
      this.name = responseData.name
      this.field = responseData.professionalField
      this.experience = responseData.experienceDescription
      this.help = responseData.helpDescription
      this.price = responseData.price
    }
  },
  created() {
    this.loadExpertData()
  }
}
</script>

<style scoped>
main {
  min-height: 59.8vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4vh;
}

img {
  float: left;
  margin: 30px;
  max-width: 300px;
  max-height: 400px;
  border-radius: 50px;
}

#expert-info {
  background-color: #f8f8f6;
  min-width: 1200px;
  border-radius: 32px;
  padding: 50px;
  overflow: auto;
}

#consult-info {
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #f8f8f6;
  border-radius: 32px;
  min-width: 500px;
  padding: 40px;
}

* {
  font-family: 'Poppins Regular';
}

h1 {
  font-size: 27px;
}

h2 {
  font-size: 20px;
}

h3 {
  font-size: 18px;
  color: #6f6d6d;
}

#expert-info > h3 {
  margin-top: 20px;
}

p {
  font-size: 14px;
}

#consult-info .col1 {
  font-size: 20px;
}

#consult-info .col2 {
  font-size: 20px;
  color: #545454;
}

#consult-info .row {
  display: flex;
  justify-content: space-between;
}

#consult-info button {
  width: 100%;
  padding: 10px 0px;
  border: none;
  border-radius: 16px;
  background-color: #554dde;
  color: white;
  font-size: 20px;
  font-family: 'Poppins Semibold';
  cursor: pointer;
}
</style>
