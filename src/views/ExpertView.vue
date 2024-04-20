<template>
  <TheHeader></TheHeader>
  <main>
    <div id="expert-info">
      <img src="../assets/images/person_image_placeholder.png" />
      <h1>{{ name }}</h1>
      <h2>{{ field }}</h2>
      <h3>Опыт:</h3>
      <p>{{ experience }}</p>
      <h3>В чем помогу:</h3>
      <p>{{ expertise }}</p>
    </div>
    <div id="consult-info">
      <ModalWindowBase
        name="Заявка"
        v-if="isEnrollmentFormVisible"
        @closeWindow="switchEnrollmentFormVisibility"
      >
        <EnrollmentForm
          @closeWindow="switchEnrollmentFormVisibility"
          :mentorId="id"
        ></EnrollmentForm>
      </ModalWindowBase>
      <h3>Консультация</h3>
      <div class="row">
        <span class="col1">Длительность</span>
        <span class="col2">час</span>
      </div>
      <div class="row">
        <span class="col1">Стоимость</span>
        <span class="col2">{{ price }} тг</span>
      </div>
      <button @click="switchEnrollmentFormVisibility">Записаться</button>
    </div>
  </main>
  <TheFooter></TheFooter>
</template>

<script>
import TheHeader from '../components/shared/TheHeader.vue'
import TheFooter from '../components/shared/TheFooter.vue'
import ModalWindowBase from '@/components/base/ModalWindowBase.vue'
import EnrollmentForm from '../components/expert/EnrollmentForm.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
    ModalWindowBase,
    EnrollmentForm
  },
  data() {
    return {
      name: null,
      field: null,
      experience: null,
      expertise: null,
      price: null,
      isEnrollmentFormVisible: false
    }
  },
  methods: {
    switchEnrollmentFormVisibility() {
      if (!this.isEnrollmentFormVisible && !this.isLoggedIn) {
        const redirectUrl = '/login'
        this.$router.replace(redirectUrl)
      }
      this.isEnrollmentFormVisible = !this.isEnrollmentFormVisible
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated
    },
    id() {
      return this.$route.params.id
    }
  },
  async created() {
    let userUrl = 'http://localhost:8080/api/v1/user/' + this.id
    let userRes = await fetch(userUrl).catch(console.error)
    const userData = await userRes.json()

    let userDetailsUrl = 'http://localhost:8080/api/v1/user/userdetails/' + this.id
    let userDetailsRes = await fetch(userDetailsUrl).catch(console.error)
    const userDetailsData = await userDetailsRes.json()

    let expertInfoUrl = 'http://localhost:8080/api/v1/expert/' + this.id
    let expertInfoRes = await fetch(expertInfoUrl).catch(console.error)
    const expertInfoData = await expertInfoRes.json()

    this.name = userData.name
    this.field = userDetailsData.ProfessionalField
    this.experience = userDetailsData.ExperienceDescription
    this.expertise = expertInfoData.ExpertiseAtDescription
    this.price = expertInfoData.ChargePerHour
  }
}
</script>

<style scoped>
main {
  margin-top: 5vh;
  margin-left: 13vw;
  margin-right: 13vw;
  min-height: 59.8vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin-top: 40px;
  margin-bottom: 40px;
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
