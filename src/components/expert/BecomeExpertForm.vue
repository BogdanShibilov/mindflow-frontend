<template>
  <form @submit.prevent="submitForm" v-if="!didSubmit">
    <div class="page">
      <div class="input-wrapper">
        <label for="help-description">С чем вы можете помочь</label>
        <textarea
          id="help-description"
          placeholder="Введите текст"
          v-model="help"
          rows="5"
          cols="70"
        ></textarea>
      </div>
      <div class="input-wrapper">
        <label for="price">Укажите стоимость своей консультации (Т/час)</label>
        <input type="number" id="price" placeholder="Введите цену" v-model="price" />
      </div>
      <button>Далее</button>
    </div>
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
      help: '',
      price: '',
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
      let url = import.meta.env.VITE_API_URL + '/experts'
      let headers = new Headers()
      headers.append('Content-Type', 'application/json')
      headers.append('authorization', 'Bearer ' + this.token)
      const res = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          helpDescription: this.help,
          price: this.price
        })
      })

      if (!res.ok) {
        let data = await res.json()
        const error = new Error(data.error || 'Failed to apply for expert.')
        throw error
      }
      this.didSubmit = true
      this.$emit('closeWindow')
    },
    async didIAlreadyApply() {
      let url = import.meta.env.VITE_API_URL + '/experts/alreadyapplied'
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
    this.didIAlreadyApply()
  }
}
</script>

<style scoped>
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.page {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
}

input {
  height: 50px;
}

textarea {
  resize: vertical;
}

textarea,
input {
  padding: 12px 16px;
  background-color: #00093c10;
  border-radius: 6px;
  color: #202430;
  font-size: 16px;
  outline: none;
  border: 1px solid #d6ddeb;
}

label {
  font-family: 'Manrope Semibold';
  color: #515b6f;
}

*::placeholder {
  color: #a8adb7;
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
