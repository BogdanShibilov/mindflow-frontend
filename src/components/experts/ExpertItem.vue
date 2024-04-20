<template>
  <div id="item-wrapper">
    <div id="expert-info">
      <p id="price-tag">{{ price }} тг</p>
      <div id="name-and-speciality">
        <h3>{{ name }}</h3>
        <p>{{ field }}</p>
      </div>
      <div id="expert-experience">
        <h3>Опыт:</h3>
        <p>
          {{ experience }}
        </p>
      </div>
      <router-link :to="profileLink">Открыть профиль</router-link>
    </div>
    <div id="img-wrapper">
      <img src="../../assets/images/person_image_placeholder.png" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['id', 'price', 'experience'],
  data() {
    return {
      name: '',
      field: ''
    }
  },
  computed: {
    profileLink() {
      return this.$route.path + '/' + this.id
    }
  },
  async created() {
    let userUrl = 'http://localhost:8080/api/v1/user/' + this.id
    let res = await fetch(userUrl).catch(console.error)
    const data = await res.json()
    this.name = data.name

    let userDetailsUrl = 'http://localhost:8080/api/v1/user/userdetails/' + this.id
    res = await fetch(userDetailsUrl).catch(console.error)
    const userDetailsData = await res.json()
    this.field = userDetailsData.ProfessionalField
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
}

#item-wrapper {
  display: flex;
  justify-content: space-between;
  background-color: #f8f8f6;
  padding: 40px;
  border-radius: 32px;
  column-gap: 100px;
  margin-top: 4vh;
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
