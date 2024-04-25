<template>
  <div id="wrapper">
    <router-link to="/signin">
      <button id="sign-in-btn">Sign in</button>
    </router-link>
    <router-link to="/signup">
      <button id="sign-up-btn">Sign up</button>
    </router-link>
  </div>
</template>

<style scoped>
#wrapper {
  display: flex;
  align-items: center;
  gap: 20px;
}

button {
  -webkit-appearance: none;
  appearance: none;
  width: 120px;
  height: 55px;
  border-radius: 30px;
  font-size: 20px;
}

#sign-in-btn {
  background-color: #554dde;
  color: #fefefe;
  border: none;
}

#sign-up-btn {
  background-color: white;
  color: #554dde;
  border: #554dde solid 2px;
}
</style>
