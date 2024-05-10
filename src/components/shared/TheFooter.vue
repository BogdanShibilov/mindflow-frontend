<template>
  <footer>
    <div id="project-whatever">
      <span id="project-name">Mindflow</span>
      <span class="slogan"></span>
      <span class="slogan"></span>
      <div>
        <img src="../../assets/icons/telegram-icon.svg" alt="" srcset="" />
        <img src="../../assets/icons/instagram-icon.svg" alt="" srcset="" />
      </div>
    </div>
    <div id="company-urls">
      <h1>Company</h1>
      <a href="">About</a>
      <a href="">Support</a>
    </div>
    <div id="legal-urls">
      <h1>Legal</h1>
      <a href="">Terms & conditions</a>
      <a href="">Privacy Policy</a>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #6a6d9e60;
  display: flex;
  justify-content: space-evenly;
  padding: 20px 80px;
}

#project-whatever,
#company-urls,
#legal-urls {
  display: flex;
  flex-direction: column;
}

#project-name {
  color: #0f3877;
  font-family: 'Montserrat Bold';
  font-size: 34px;
}

.slogan {
  font-family: 'Poppins Regular';
  font-size: 18px;
}

img {
  margin: 5px;
}

h1 {
  color: #ffffff;
  font-family: 'Poppins Medium';
  font-size: 18px;
}

a {
  text-decoration: none;
  color: #3a3a3a;
  font-family: 'Poppins Regular';
  font-size: 18px;
}
</style>
