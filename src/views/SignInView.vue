<template>
  <main>
    <div id="avatars-wrapper">
      <TheAvatars />
    </div>
    <div id="signin-area-wrapper">
      <div>
        <h1>Вход</h1>
        <button id="signin-with-google-btn" @click="Unimplemented">
          <img src="../assets/icons/icon_google.svg" />
          Войти через Gmail
        </button>
        <TextBetweenLines text="или войти через почту" />
        <SignInForm />
        <span>У вас ещё нет аккаунта? <router-link to="signup">Регистрация</router-link></span>
      </div>
    </div>
  </main>
</template>

<script>
import TheAvatars from '@/components/auth/TheAvatars.vue'
import SignInForm from '@/components/auth/SignInForm.vue'
import TextBetweenLines from '@/components/auth/TextBetweenLines.vue'

export default {
  components: {
    TheAvatars,
    SignInForm,
    TextBetweenLines
  },
  methods: {
    Unimplemented() {
      alert('Not implemented')
    }
  }
}
</script>

<style scoped>
main {
  display: flex;
}

#avatars-wrapper,
#signin-area-wrapper {
  height: 100vh;
}

#avatars-wrapper {
  width: 44%;
  background-color: #1e1bb3;
}

#signin-area-wrapper {
  width: 56%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#signin-area-wrapper > div {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 11px;
}

#signin-area-wrapper > div > span {
  color: rgba(20, 24, 30, 0.7);
  align-self: flex-start;
}

#signin-area-wrapper > div > span > a {
  color: #4640de;
  text-decoration: none;
  font-family: 'Manrope Semibold';
}

#terms-text {
  font-size: 14px;
}

#signin-with-google-btn {
  width: 100%;
  height: 50px;
  border: solid #ccccf5 1px;
  background-color: white;
  color: #4640de;
  font-family: 'Manrope Bold';
  font-size: 16px;
}

#signin-with-google-btn > img {
  margin-right: 13px;
}
</style>
