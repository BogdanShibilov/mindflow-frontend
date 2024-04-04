<template>
  <div id="filter-wrapper">
    <TheDropdown header-name="Цена">
      <PriceRange></PriceRange>
    </TheDropdown>
    <hr />
    <TheDropdown header-name="Направление">
      <div id="speciality">
        <div class="checkbox-wrapper">
          <input type="checkbox" name="" id="" />
          <label for="">Product management</label>
        </div>
        <div class="checkbox-wrapper">
          <input type="checkbox" name="" id="" />
          <label for="">Product analytics</label>
        </div>
        <div class="checkbox-wrapper">
          <input type="checkbox" name="" id="" />
          <label for="">Product design</label>
        </div>
        <div class="checkbox-wrapper">
          <input type="checkbox" name="" id="" />
          <label for="">Data analytics</label>
        </div>
      </div>
    </TheDropdown>
  </div>
</template>

<script>
import TheDropdown from './TheDropdown.vue'
import PriceRange from './PriceRange.vue'

export default {
  components: {
    TheDropdown,
    PriceRange
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
}
</style>
