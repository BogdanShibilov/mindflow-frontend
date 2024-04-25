<template>
  <main>
    <div id="avatars-wrapper">
      <TheAvatars />
    </div>
    <div id="signout-area-wrapper">
      <div>
        <SignOutForm />
      </div>
    </div>
  </main>
</template>

<script>
import TheAvatars from '@/components/auth/TheAvatars.vue'
import SignOutForm from '@/components/auth/SignOutForm.vue'

export default {
  components: {
    TheAvatars,
    SignOutForm
  }
}
</script>

<style scoped>
main {
  display: flex;
}

#avatars-wrapper,
#signout-area-wrapper {
  height: 100vh;
}

#avatars-wrapper {
  width: 44%;
  background-color: #1e1bb3;
}

#signout-area-wrapper {
  width: 56%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#signout-area-wrapper > div {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 11px;
}
</style>
