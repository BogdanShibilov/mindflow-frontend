<template>
  <div id="wrapper">
    <button @click="toggleFormVisible">Стать экспертом</button>
    <ModalWindowBase v-if="isFormVisible" name="Заявка" @closeWindow="toggleFormVisible">
      <BecomeExpertForm @closeWindow="toggleFormVisible" />
    </ModalWindowBase>
    <router-link to="/profile">
      <img src="../../assets/images/user-avatar-placeholder.png" />
    </router-link>
    <PopupMenu v-if="isPopupVisible" />
  </div>
</template>

<script>
import ModalWindowBase from '@/components/base/ModalWindowBase.vue'
import PopupMenu from '@/components/header/PopupMenu.vue'
import BecomeExpertForm from '@/components/expert/BecomeExpertForm.vue'

export default {
  components: {
    ModalWindowBase,
    PopupMenu,
    BecomeExpertForm
  },
  data() {
    return {
      isFormVisible: false,
      isPopupVisible: false
    }
  },
  methods: {
    toggleFormVisible() {
      this.isFormVisible = !this.isFormVisible
    },
    togglePopup() {
      this.isPopupVisible = !this.isPopupVisible
    }
  }
}
</script>

<style scoped>
#wrapper {
  display: flex;
  align-items: center;
  gap: 20px;
}

button {
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

img {
  cursor: pointer;
}
</style>
