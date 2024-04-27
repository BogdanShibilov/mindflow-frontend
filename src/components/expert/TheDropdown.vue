<template>
  <div id="dropdown-wrapper">
    <div id="dropdown-name" @click="switchContentVisibility">
      <span>{{ headerName }}</span>
      <img src="../../assets/icons/chevron-up.svg" v-if="isContentVisible" />
      <img src="../../assets/icons/chevron-down.svg" v-else />
    </div>
    <div id="dropdown-content" v-show="isContentVisible">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isContentVisible: false
    }
  },

  props: {
    headerName: String
  },

  methods: {
    switchContentVisibility() {
      this.isContentVisible = !this.isContentVisible
    }
  }
}
</script>

<style scoped>
#dropdown-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 15px;
}

#dropdown-name {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

#dropdown-name:hover {
  cursor: pointer;
}

#dropdown-name span {
  color: #1c3554;
  font-family: 'Montserrat Bold';
  font-size: 24px;
}
</style>
