<template>
  <div id="item-wrapper">
    <div id="expert-info">
      <p id="price-tag">{{ expert.price }} тг</p>
      <div id="name-and-speciality">
        <h3>{{ expert.name }}</h3>
        <p>{{ expert.professionalField }}</p>
      </div>
      <div id="expert-experience">
        <h3>Experience:</h3>
        <p>{{ expert.experienceDescription }}</p>
      </div>
      <router-link :to="profileLink">Open profile</router-link>
    </div>
    <div id="img-wrapper" v-if="expert.name == 'Alex Johnson'">
      <img src="../../assets/images/1.jpg" />
    </div>
    <div id="img-wrapper" v-if="expert.name == 'Rinat Karimov'">
      <img src="../../assets/images/4.jpg" />
    </div>
    <div id="img-wrapper" v-if="expert.name == 'Saule Akhmetova'">
      <img src="../../assets/images/5.jpg" />
    </div>
    <!-- <div id="img-wrapper">
      <img src="../../assets/images/person-image-placeholder.png" />
    </div> -->
  </div>
</template>

<script>
export default {
  props: ['expert'],
  computed: {
    profileLink() {
      return this.$route.path + '/' + this.expert.userId
    }
  }
}
</script>

<style scoped>
#img-wrapper {
  max-width: 300px;
  max-height: 400px;
}

#img-wrapper img {
  border-radius: 50px;
  max-width: 300px;
  max-height: 400px;
}

#item-wrapper {
  display: flex;
  justify-content: space-between;
  background-color: #f8f8f6;
  padding: 40px;
  border-radius: 32px;
  column-gap: 100px;
}

#expert-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
}

#price-tag {
  display: inline-block;
  border: solid 2px #554dde;
  color: #554dde;
  border-radius: 8px;
  padding: 5px 13px;
  font-family: 'Poppins Semibold';
}

#name-and-speciality {
  font-family: 'Poppins Regular';
}
#name-and-speciality > h3 {
  font-size: 32px;
  line-height: 44px;
}
#name-and-speciality > p {
  font-size: 22px;
  line-height: 36px;
}

#expert-experience {
  font-family: 'Poppins Regular';
}
#expert-experience > h3 {
  color: #6f6d6d;
  line-height: 28px;
  font-size: 20px;
}
#expert-experience > p {
  line-height: 26px;
  font-size: 18px;
}

a {
  text-decoration: none;
  font-size: 20px;
  font-family: 'Poppins Semibold';
  color: white;
  background-color: #554dde;
  border-radius: 16px;
  padding: 10px 20px;
}
</style>
