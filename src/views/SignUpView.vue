<template>
  <main>
    <div id="avatars-area">
      <TheAvatars></TheAvatars>
    </div>
    <div id="signup-form-area">
      <div>
        <h1>Sign up</h1>
        <button id="google-signup">
          <img src="../assets/icons/icon_google.svg" />
          Sign Up with Google
        </button>
        <TextBetweenLines text="Or sign up with email"></TextBetweenLines>
        <SignUpForm></SignUpForm>
        <span>Already have an account? <a href="">Login</a></span>
        <span id="terms-text"
          >By clicking 'Continue' you acknowledge that you have read and accept the
          <a href="">Terms of Service</a> and <a href="">Privacy Policy</a></span
        >
      </div>
    </div>
  </main>
</template>

<script>
import SignUpForm from '../components/auth/SignUpForm.vue'
import TextBetweenLines from '../components/auth/TextBetweenLines.vue'
import TheAvatars from '../components/auth/TheAvatars.vue'

export default {
  components: {
    SignUpForm,
    TextBetweenLines,
    TheAvatars
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

#signup-form-area {
  width: 56%;
  display: flex;
  justify-content: center;
}

#signup-form-area > div {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#signup-form-area > div > * {
  margin: 11px 0px;
}

#signup-form-area > div > span {
  color: rgba(20, 24, 30, 0.7);
  align-self: flex-start;
}

#signup-form-area > div > span > a {
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
</style>
