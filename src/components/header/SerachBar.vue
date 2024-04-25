<template>
  <span id="search-wrapper">
    <input type="search" name="" id="" placeholder="Search" />
  </span>
</template>

<style scoped>
input[type='search'] {
  -webkit-appearance: none;
  appearance: none;
  width: 650px;
  height: 53px;
  padding: 14.5px 20px 14.5px 50px;
  border-radius: 20px;
  border: none;
  font-family: 'Poppins Regular';
}

input[type='search']::placeholder {
  color: #989ba5;
  font-family: 'Poppins Regular';
}

input[type='search']:focus {
  outline: none;
}

#search-wrapper::before {
  content: url('../../assets/icons/search-icon.svg');
  position: relative;
  left: 40px;
  top: 5px;
  pointer-events: none;
}
</style>
