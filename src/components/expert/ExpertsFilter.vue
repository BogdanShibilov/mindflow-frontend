<template>
  <div id="filter-wrapper">
    <TheDropdown header-name="Цена">
      <PriceRange v-model:minprice="minprice" v-model:maxprice="maxprice" />
    </TheDropdown>
    <hr />
    <button>Показать результаты</button>
  </div>
</template>

<script>
import TheDropdown from './TheDropdown.vue'
import PriceRange from './PriceRange.vue'

export default {
  components: {
    TheDropdown,
    PriceRange
  },
  data() {
    return {
      minprice: 0,
      maxprice: 0
    }
  },
  methods: {
    async loadFilterData() {
      let url = 'http://localhost:8080/api/v1/experts/filterdata'
      const res = await fetch(url, {
        method: 'GET'
      })
      const data = await res.json()
      console.log(data)
      this.minprice = data.minMaxPrice.minPrice
      this.maxprice = data.minMaxPrice.maxPrice
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

.checkbox-wrapper input[type='checkbox'] {
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
