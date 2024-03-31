<template>
  <form action="">
    <div class="input-wrapper">
      <label for="">Full name</label>
      <input type="text" placeholder="Full name" />
    </div>
    <div class="input-wrapper">
      <label for="">Email address</label>
      <input type="text" placeholder="Email address" />
    </div>
    <div class="input-wrapper">
      <label for="">Password</label>
      <input type="text" placeholder="Enter password" />
    </div>
    <button>Continue</button>
  </form>
</template>

<style scoped>
form {
  width: 100%;
}

form > button {
  margin: 11px 0px;
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

.input-wrapper > input {
  height: 50px;
  width: 100%;
  padding: 12px 16px;
  color: #202430;
  font-size: 16px;
  outline: none;
  border: 1px solid #d6ddeb;
}

.input-wrapper > input::placeholder {
  color: #a8adb7;
}

form > button {
  height: 50px;
  width: 100%;
  border: none;
  background-color: #4640de;
  color: white;
  font-size: 16px;
  font-family: 'Manrope Bold';
}
</style>
