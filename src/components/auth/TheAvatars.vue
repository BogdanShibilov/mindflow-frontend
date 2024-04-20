<template>
  <div id="avatars-wrapper">
    <img id="avatar1" src="../../assets/images/avatars/avatar1.png" />
    <img id="avatar2" src="../../assets/images/avatars/avatar2.png" />
    <img id="avatar3" src="../../assets/images/avatars/avatar3.png" />
    <img id="avatar4" src="../../assets/images/avatars/avatar4.png" />
    <img id="avatar5" src="../../assets/images/avatars/avatar5.png" />
    <svg
      id="ellipse"
      width="19"
      height="20"
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="9.63463" cy="9.88659" rx="9.19127" ry="9.53209" fill="white" />
    </svg>
    <img id="avatar6" src="../../assets/images/avatars/avatar6.png" />
    <img id="avatar7" src="../../assets/images/avatars/avatar7.png" />
  </div>
  <div id="mindflow-wrapper">
    <router-link to="/"><img src="../../assets//images/mindflow-logo.png" /></router-link>
  </div>
</template>

<style scoped>
#avatars-wrapper {
  width: 498px;
  height: 513px;
  margin: auto;
  position: relative;
  top: 58px;
}

#mindflow-wrapper {
  background-color: white;
  width: 269px;
  margin: auto;
  position: relative;
  top: 200px;
  left: -50px;
  border-radius: 30px;
  padding: 10px 43px 3px 43px;
}

#ellipse {
  position: absolute;
  top: 348px;
  left: 134px;
}

#avatar1 {
  position: absolute;
}

#avatar2 {
  position: absolute;
  left: 212px;
  top: 26px;
}

#avatar3 {
  position: absolute;
  left: 354px;
  top: 67px;
}

#avatar4 {
  position: absolute;
  left: 107px;
  top: 152px;
}

#avatar5 {
  position: absolute;
  left: -38px;
  top: 308px;
}

#avatar6 {
  position: absolute;
  left: 145px;
  top: 409px;
}

#avatar7 {
  position: absolute;
  left: 292px;
  top: 310px;
}
</style>
