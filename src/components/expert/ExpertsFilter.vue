<template>
  <div id="filter-wrapper">
    <TheDropdown header-name="Price">
      <PriceRange v-model:minprice="minprice" v-model:maxprice="maxprice" />
    </TheDropdown>
    <hr />
    <TheDropdown header-name="Professional Field">
      <div id="speciality">
        <div class="checkbox-wrapper" v-for="field in fieldsData" :key="field.professionalField">
          <input
            type="radio"
            name="field"
            :id="field.professionalField"
            v-model="selectedField"
            :value="field.professionalField"
          />
          <label :for="field.professionalField"
            >{{ field.professionalField }}
            <span class="field-count">{{ '(' + field.count + ')' }}</span></label
          >
        </div>
      </div>
    </TheDropdown>
    <hr />
    <button @click="loadFilteredExperts">Show</button>
  </div>
</template>

<script>
import TheDropdown from './TheDropdown.vue'
import PriceRange from './PriceRange.vue'

export default {
  emits: ['filteredExperts'],
  components: {
    TheDropdown,
    PriceRange
  },
  data() {
    return {
      minprice: 0,
      maxprice: 0,
      fieldsData: null,
      selectedField: null
    }
  },
  methods: {
    async loadFilterData() {
      let url = import.meta.env.VITE_API_URL + '/experts/filterdata'
      const res = await fetch(url, {
        method: 'GET'
      })
      const data = await res.json()
      this.minprice = data.minMaxPrice.minPrice
      this.maxprice = data.minMaxPrice.maxPrice
      this.fieldsData = data.proffFieldData
    },
    async loadFilteredExperts() {
      let url =
        import.meta.env.VITE_API_URL +
        '/experts/approved' +
        '?minprice=' +
        this.minprice +
        '&maxprice=' +
        this.maxprice
      if (this.selectedField) {
        url = url + '&field=' + this.selectedField
      }
      const res = await fetch(url, {
        method: 'GET'
      })
      const data = await res.json()
      this.$emit('filteredExperts', data)
    }
  },
  created() {
    this.loadFilterData()
  }
}
</script>

<style scoped>
#filter-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 15px;
}

#speciality {
  display: flex;
  flex-direction: column;
  row-gap: 15px;
}

.checkbox-wrapper input[type='radio'] {
  width: 18px;
  height: 18px;
  border-color: #ababb5;
  outline-color: #ababb5;
  margin-right: 10px;
}

.checkbox-wrapper label {
  color: #1c3554;
  font-family: 'Montserrat Semibold';
  font-size: 16px;
}

.field-count {
  color: #808080;
}

hr {
  color: #ababb5;
  margin: 20px 0px;
}

button {
  align-self: center;
  height: 50px;
  width: 100%;
  border: none;
  background-color: #4640de;
  color: white;
  font-size: 16px;
  font-family: 'Manrope Bold';
}
</style>
