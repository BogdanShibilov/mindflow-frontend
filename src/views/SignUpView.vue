<template>
  <main>
    <div id="avatars-wrapper">
      <TheAvatars />
    </div>
    <div id="signup-area-wrapper">
      <div>
        <h1>Регистрация</h1>
        <!-- <button id="signup-with-google-btn" @click="Unimplemented">
          <img src="../assets/icons/icon_google.svg" />
          Войти через Gmail
        </button> -->
        <TextBetweenLines text="Зарегистрируйтесь через почту" />
        <SignUpForm />
        <span>Уже есть аккаунт? <router-link to="signin">Войти</router-link></span>
        <span id="terms-text"
          >Нажимая на кнопку, вы соглашаетесь на
          <router-link to="">обработку персональных данных</router-link> и с
          <router-link to="">правилами пользования платформой</router-link></span
        >
      </div>
    </div>
  </main>
</template>

<script>
import TheAvatars from '@/components/auth/TheAvatars.vue'
import SignUpForm from '@/components/auth/SignUpForm.vue'
import TextBetweenLines from '@/components/auth/TextBetweenLines.vue'

export default {
  components: {
    TheAvatars,
    SignUpForm,
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
#signup-area-wrapper {
  height: 100vh;
}

#avatars-wrapper {
  width: 44%;
  background-color: #1e1bb3;
}

#signup-area-wrapper {
  width: 56%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#signup-area-wrapper > div {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 11px;
}

#signup-area-wrapper > div > span {
  color: rgba(20, 24, 30, 0.7);
  align-self: flex-start;
}

#signup-area-wrapper > div > span > a {
  color: #4640de;
  text-decoration: none;
  font-family: 'Manrope Semibold';
}

#terms-text {
  font-size: 14px;
}

#signup-with-google-btn {
  width: 100%;
  height: 50px;
  border: solid #ccccf5 1px;
  background-color: white;
  color: #4640de;
  font-family: 'Manrope Bold';
  font-size: 16px;
}

#signup-with-google-btn > img {
  margin-right: 13px;
}
</style>
