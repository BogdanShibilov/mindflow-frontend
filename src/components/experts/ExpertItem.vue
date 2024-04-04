<template>
  <div id="item-wrapper">
    <div id="expert-info">
      <p id="price-tag">5000 тг</p>
      <div id="name-and-speciality">
        <h3>Vivienne Sung</h3>
        <p>Product Designer</p>
      </div>
      <div id="expert-experience">
        <h3>Опыт:</h3>
        <p>
          Sam worked across a mix of Senior and Staff product manager roles, bringing in extremely
          high quality candidates across the board, several of which we hired. Sam was an absolute
        </p>
      </div>
      <a href="">Открыть профиль</a>
    </div>
    <div id="img-wrapper">
      <img src="../../assets/images/expert_image_example.png" alt="" srcset="" />
    </div>
  </div>
</template>

<style scoped>
#item-wrapper {
  display: flex;
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
