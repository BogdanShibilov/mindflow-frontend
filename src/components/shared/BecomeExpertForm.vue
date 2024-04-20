<template>
  <form v-if="!alreadySubmitted" @submit.prevent="submitForm">
    <div class="input-wrapper">
      <label for="yourhelp">С чем вы можете помочь?</label>
      <textarea
        name="yourhelp"
        id="yourhelp"
        rows="5"
        placeholder="Введите текст"
        v-model="yourhelp"
      ></textarea>
    </div>
    <div class="input-wrapper">
      <label for="price">Укажите стоимость своей консультации (₸/час)</label>
      <input type="number" placeholder="Введите текст" v-model="price" />
    </div>
    <button>Далее</button>
    <span id="agree"
      >Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и с правилами пользования
      платформой</span
    >
  </form>
  <div id="already-submitted" v-else>
    <p>Спасибо! В ближайшее время мы с вами свяжемся!</p>
    <button @click="$emit('closeWindow')">Закрыть</button>
  </div>
</template>

<script>
export default {
  emits: ['closeWindow'],
  data() {
    return {
      yourhelp: null,
      price: null,
      myToken: null,
      alreadySubmitted: false
    }
  },
  methods: {
    async submitForm() {
      const becomeExpertUrl = 'http://localhost:8080/api/v1/expert'

      if (!this.yourhelp || !this.price) {
        alert('Wrong form data')
        return
      }

      let becomeExpertRes = await fetch(becomeExpertUrl, {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + this.$store.getters.token
        },
        body: JSON.stringify({
          chargePerHour: this.price,
          expertiseAtDescription: this.yourhelp
        })
      }).catch(console.error)

      if (!becomeExpertRes.ok) {
        alert('failed')
      }
      this.alreadySubmitted = true
    }
  },
  async created() {
    let token = this.$store.getters.token
    let base64Url = token.split('.')[1]
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    let jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        })
        .join('')
    )
    this.myToken = JSON.parse(jsonPayload)
    let myid = this.myToken.UserUuid
    let expertInfoUrl = 'http://localhost:8080/api/v1/expert/' + myid
    let expertInfoRes = await fetch(expertInfoUrl).catch()
    if (expertInfoRes.ok) {
      this.alreadySubmitted = true
    }
  }
}
</script>

<style scoped>
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
* {
  font-family: 'Montserrat Regular';
}

textarea,
input {
  background-color: #00093c10;
  border-radius: 6px;
}

form,
#already-submitted {
  margin: 15px 10px 0px 10px;
}

form,
#already-submitted {
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

.input-wrapper > input,
.input-wrapper > textarea {
  width: 100%;
  padding: 12px 16px;
  color: #202430;
  font-size: 16px;
  outline: none;
  border: 1px solid #d6ddeb;
}

.input-wrapper > input {
  height: 50px;
}

.input-wrapper > input::placeholder,
.input-wrapper > textarea::placeholder {
  color: #a8adb7;
}

form > button,
#already-submitted > button {
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

#agree {
  display: inline-block;
  color: #4f4f4f;
  font-size: 14px;
  margin-top: 30px;
}
</style>
