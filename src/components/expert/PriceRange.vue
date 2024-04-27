<template>
  <div id="numbers-input">
    <span class="number-input-wrapper"
      ><input
        type="number"
        :value="minprice"
        @input="$emit('update:minprice', $event.target.value)"
    /></span>
    <span>-&nbsp;</span>
    <span class="number-input-wrapper"
      ><input
        type="number"
        :value="maxprice"
        @input="$emit('update:maxprice', $event.target.value)"
    /></span>
  </div>
</template>

<script>
export default {
  props: ['minprice', 'maxprice'],
  emits: ['update:minprice', 'update:maxprice']
}
</script>

<style scoped>
#numbers-input {
  display: flex;
  justify-content: center;
  align-items: center;
}

#numbers-input input[type='number'] {
  width: 100px;
  height: 42px;
  padding: 10px 5px 10px 12px;
  background-color: #f8f8f6;
  border: none;
  border-radius: 5px;
  font-size: 13px;
  font-family: 'Montserrat Semibold';
  color: #1c3554;
  line-height: 30px;
}

#numbers-input input[type='number']:focus {
  outline: none;
}

.number-input-wrapper::after {
  content: '₸';
  position: relative;
  left: -20px;
  color: #808080;
  font-size: 13px;
  font-family: 'Montserrat Semibold';
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
