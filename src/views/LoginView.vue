<template>
  <main>
    <div id="avatars-area">
      <TheAvatars></TheAvatars>
    </div>
    <div id="login-form-area">
      <div>
        <h1>Login</h1>
        <button id="google-signup">
          <img src="../assets/icons/icon_google.svg" />
          Login with Google
        </button>
        <TextBetweenLines text="Or login with email"></TextBetweenLines>
        <LoginForm></LoginForm>
        <span>Don't have an account? <router-link to="signup">Sign up</router-link></span>
      </div>
    </div>
  </main>
</template>

<script>
import LoginForm from '../components/auth/LoginForm.vue'
import TheAvatars from '../components/auth/TheAvatars.vue'
import TextBetweenLines from '../components/auth/TextBetweenLines.vue'

export default {
  components: {
    LoginForm,
    TheAvatars,
    TextBetweenLines
  }
}
</script>

<style scoped>
main {
  display: flex;
}

main {
  font-family: 'Manrope Regular';
  color: #202430;
}

main > * {
  height: 100vh;
}

#avatars-area {
  width: 44%;
  background-color: #1e1bb3;
}

#login-form-area {
  width: 56%;
  display: flex;
  justify-content: center;
}

#login-form-area > div {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#login-form-area > div > * {
  margin: 11px 0px;
}

#login-form-area > div > span {
  color: rgba(20, 24, 30, 0.7);
  align-self: flex-start;
}

#login-form-area > div > span > a {
  color: #4640de;
  text-decoration: none;
  font-family: 'Manrope Semibold';
}

#terms-text {
  font-size: 14px;
}

#google-signup {
  width: 100%;
  height: 50px;
  border: solid #ccccf5 1px;
  background-color: white;
  color: #4640de;
  font-family: 'Manrope Bold';
  font-size: 16px;
}

#google-signup > img {
  margin-right: 13px;
}

button {
  cursor: pointer;
}
</style>
