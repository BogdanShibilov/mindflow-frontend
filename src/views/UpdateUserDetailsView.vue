<template>
  <main>
    <div id="avatars-area">
      <TheAvatars></TheAvatars>
    </div>
    <div id="tell-about-yourself">
      <div>
        <h1>Расскажите о себе</h1>
        <TellAboutYourselfForm></TellAboutYourselfForm>
      </div>
    </div>
  </main>
</template>

<script>
import TheAvatars from '../components/auth/TheAvatars.vue'
import TellAboutYourselfForm from '../components/auth/TellAboutYourselfForm.vue'

export default {
  components: {
    TheAvatars,
    TellAboutYourselfForm
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

#tell-about-yourself {
  width: 56%;
  display: flex;
  justify-content: center;
}

#tell-about-yourself > div {
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#tell-about-yourself > div > h1 {
  align-self: flex-start;
}

#tell-about-yourself > div > * {
  margin: 11px 0px;
}

#tell-about-yourself > div > span {
  color: rgba(20, 24, 30, 0.7);
  align-self: flex-start;
}

#tell-about-yourself > div > span > a {
  color: #4640de;
  text-decoration: none;
  font-family: 'Manrope Semibold';
}

button {
  cursor: pointer;
}
</style>
