<template>
  <header>
    <img src="../../assets/images/mindflow-logo.png" srcset="" />
    <span id="search-wrapper">
      <input type="search" name="" id="" placeholder="Search" />
    </span>
    <div id="logged-in" v-if="isLoggedIn">
      <button @click="switchBecomeExpertForm">Стать экспертом</button>
      <ModalWindowBase
        @closeWindow="switchBecomeExpertForm"
        name="Заявка"
        v-if="isBecomeExpertFormVisible"
      >
        <BecomeExpertForm></BecomeExpertForm>
      </ModalWindowBase>
      <img
        class="profilePic"
        src="../../assets/images/user-avatar-placeholder.png"
        @click="popUp"
      />
      <div v-if="isPopUpVisible" id="pop-up-menu">
        <span @click="logout">Log out</span>
      </div>
    </div>
    <div id="logged-out" v-else>
      <router-link to="/login"><button id="log-in-button">LOG IN</button></router-link>
      <router-link to="/signup"><button id="sign-up-button">SIGN UP</button></router-link>
    </div>
  </header>
</template>

<script>
import ModalWindowBase from '@/components/base/ModalWindowBase.vue'
import BecomeExpertForm from '@/components/shared/BecomeExpertForm.vue'

export default {
  components: {
    ModalWindowBase,
    BecomeExpertForm
  },
  data() {
    return {
      isPopUpVisible: false,
      isBecomeExpertFormVisible: false
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    },
    popUp() {
      this.isPopUpVisible = !this.isPopUpVisible
    },
    switchBecomeExpertForm() {
      this.isBecomeExpertFormVisible = !this.isBecomeExpertFormVisible
    }
  }
}
</script>

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

#logged-in,
#logged-out {
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

#log-in-button {
  -webkit-appearance: none;
  appearance: none;
  width: 150px;
  height: 55px;
  background-color: #554dde;
  color: #fefefe;
  border-radius: 30px;
  border: none;
  font-size: 20px;
}

#sign-up-button {
  -webkit-appearance: none;
  appearance: none;
  width: 150px;
  height: 55px;
  background-color: white;
  color: #554dde;
  border-radius: 30px;
  border: #554dde solid 2px;
  font-size: 20px;
}

#pop-up-menu {
  position: absolute;
  left: 88%;
  top: 12%;
  background-color: #e1e2ec;
  min-width: 100px;
  min-height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

#pop-up-menu > span {
  padding: 10px;
}

button,
#pop-up-menu > span,
.profilePic {
  cursor: pointer;
}
</style>
