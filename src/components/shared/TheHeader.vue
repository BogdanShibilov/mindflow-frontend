<template>
  <header>
    <img src="../../assets/images/mindflow-logo.png" srcset="" />
    <span id="search-wrapper">
      <input type="search" name="" id="" placeholder="Search" />
    </span>
    <div id="logged-in">
      <button>Стать экспертом</button>
      <img src="../../assets/images/user-avatar-placeholder.png" srcset="" />
    </div>
  </header>
</template>

<style scoped>
header {
  height: 12vh;
  background-color: #e1e2ec;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: 'Poppins Regular';
}

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

#logged-in {
  width: 346px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

#logged-in > button {
  -webkit-appearance: none;
  appearance: none;
  width: 239px;
  height: 55px;
  background-color: #554dde;
  color: #fefefe;
  border-radius: 30px;
  border: none;
  font-size: 20px;
}
</style>
