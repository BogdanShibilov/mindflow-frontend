<template>
  <div class="container">
    <TheHeader id="header" />
    <main class="main-wrapper">
      <section class="section">
        <h2 class="section-title">Recommended Internships</h2>
        <p class="section-description">
          Based on your profile, company preferences, and recent activity
        </p>
        <div class="cards">
          <article class="card">
            <div class="card-header">
              <img
                loading="lazy"
                src="data:image/jpeg;base64,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"
                class="card-image"
                alt="Nomad logo"
              />
              <span class="card-jobs">3 internships</span>
            </div>
            <h3 class="card-title">Astana hub internship</h3>
            <p class="card-description">
              - internship from July 1 to August 29 -training and development in the Astana Hub team
              - individual mentor - the opportunity to receive an offer after the internship - paid
              internship
            </p>
            <button class="card-category" @click="goToApply">Apply</button>
            <button class="card-category-crypto">Contact</button>
          </article>
          <article class="card">
            <div class="card-header">
              <img
                loading="lazy"
                src="data:image/jpeg;base64,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"
                class="card-image"
                alt="Discord logo"
              />
              <span class="card-jobs">2 internships</span>
            </div>
            <h3 class="card-title">Kcell</h3>
            <p class="card-description">
              - You are a final year student (3-4) of a university with a technical specialty; - You
              live and study in the city of Almaty; - You have a personal laptop. The opportunity to
              receive an offer after the internship
            </p>
            <button class="card-category">Apply</button>
            <button class="card-category-crypto">Contact</button>
          </article>
          <article class="card">
            <div class="card-header">
              <img
                loading="lazy"
                src="data:image/jpeg;base64,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"
                class="card-image"
                alt="Maze logo"
              />
              <span class="card-jobs">5 internships</span>
            </div>
            <h3 class="card-title">Epam internship</h3>
            <p class="card-description">
              Mentors support. You will get regular feedback and guidance on practical tasks,
              Intensive learning. Depending on your weekly engagement, the program will last ~3-4
              months,
            </p>
            <button class="card-category">Apply</button>
            <button class="card-category-crypto">Contact</button>
          </article>
        </div>
        <div class="cards">
          <article class="card">
            <div class="card-header">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e744303552c2492f6540668f7f3569210047b180fea1994644d30f788757616c?apiKey=8b9f90d42439413c81a5cac414c4f26b&"
                class="card-image"
                alt="Udacity logo"
              />
              <span class="card-jobs">1 internship</span>
            </div>
            <h3 class="card-title">Udacity</h3>
            <p class="card-description">
              Udacity is a new type of online university that teaches the actual programming skills.
              an understanding of relational databases Oracle, MySQL, Intensive learning.Depending
              on your weekly engagement,
            </p>
            <button class="card-category">Apply</button>
            <button class="card-category-crypto">Contact</button>
          </article>
          <article class="card">
            <div class="card-header">
              <img
                loading="lazy"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmB6N8tbfyByLMpmyN8NC2oukb0eg0T-Y9zA&s"
                class="card-image"
                alt="Webflow logo"
              />
              <span class="card-jobs">1 internship</span>
            </div>
            <h3 class="card-title">Andersen</h3>
            <p class="card-description">
              understanding of OOP principles, understanding of algorithms and data structures,
              knowledge of Java Core; an understanding of relational databases (Oracle, MySQL,
              PostgreSQL, etc.);
            </p>
            <div class="card-categories">
              <button class="card-category">Apply</button>
              <button class="card-category-crypto">Contact</button>
            </div>
          </article>
          <article class="card">
            <div class="card-header">
              <img
                loading="lazy"
                src="data:image/jpeg;base64,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"
                class="card-image"
                alt="Foundation logo"
              />
              <span class="card-jobs">1 internship</span>
            </div>
            <h3 class="card-title">Aviata</h3>
            <p class="card-description">
              Format: offline, Almaty - you must have your own equipment during the internship -
              internship period: 2 months - payment: 100K tenge per month - each trainee will be
              assigned to a mentor
            </p>
            <div class="card-categories">
              <button class="card-category">Apply</button>
              <button class="card-category-crypto">Contact</button>
            </div>
          </article>
        </div>
      </section>
    </main>

    <TheFooter id="footer" />
  </div>
</template>

<style scoped>
button {
  border: none;
}

.main-wrapper {
  display: flex;
  justify-content: center;
  padding: 72px 60px 0;
  background-color: var(--Neutrals-0, #fff);
}
@media (max-width: 991px) {
  .main-wrapper {
    padding: 0 20px;
  }
}
.section {
  width: 100%;
  max-width: 1192px;
  display: flex;
  flex-direction: column;
}
@media (max-width: 991px) {
  .section {
    max-width: 100%;
  }
}
.section-title {
  align-self: flex-start;
  font:
    600 32px/120% 'Clash Display Variable',
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  color: var(--Neutrals-100, #25324b);
}
@media (max-width: 991px) {
  .section-title {
    max-width: 100%;
  }
}
.section-description {
  margin-top: 8px;
  align-self: flex-start;
  font:
    400 16px/160% Epilogue,
    sans-serif;
  color: var(--Neutrals-60, #7c8493);
}
@media (max-width: 991px) {
  .section-description {
    max-width: 100%;
  }
}
.cards {
  display: flex;
  gap: 20px;
  margin-top: 32px;
}
@media (max-width: 991px) {
  .cards {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
}
.card {
  width: 33%;
  display: flex;
  flex-direction: column;
  background-color: var(--Neutrals-0, #fff);
  border: 1px solid rgba(214, 221, 235, 1);
  padding: 24px;
}
@media (max-width: 991px) {
  .card {
    width: 100%;
    margin-top: 32px;
    padding: 0 20px;
  }
}
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  font-size: 16px;
  color: var(--Brands-Primary, #4640de);
}
.card-image {
  width: 88px;
  aspect-ratio: 1;
}
.card-jobs {
  align-self: flex-start;
  background-color: var(--Neutrals-10i, #f8f8fd);
  padding: 4px 12px;
}
.card-title {
  margin-top: 16px;
  font:
    600 24px/120% 'Clash Display Variable',
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  color: var(--Neutrals-100, #25324b);
}
.card-description {
  margin-top: 16px;
  font:
    18px/29px Epilogue,
    sans-serif;
  color: var(--Neutrals-80, #515b6f);
}
.card-category,
.card-category-technology,
.card-category-crypto {
  display: inline-block;
  margin-top: 16px;
  padding: 6px 10px;
  border-radius: 80px;
  font:
    600 14px Epilogue,
    sans-serif;
  text-align: center;
}
.card-category {
  color: var(--Accents-Yellow, #ffb836);
  border: 1px solid rgba(255, 184, 54, 1);
}
.card-category-technology {
  background-color: rgba(255, 101, 80, 0.1);
  color: var(--Accents-Red, #ff6550);
}
.card-category-crypto {
  background-color: rgba(70, 64, 222, 0.1);
  color: var(--Brands-Primary, #4640de);
}
.card-categories {
  display: flex;
  gap: 16px;
  margin-top: 16px;
}
@media (max-width: 991px) {
  .card-category-technology,
  .card-category-crypto {
    white-space: initial;
  }
}
.main-content {
  display: flex;
  flex-direction: column;
  max-width: 924px;
}

.company-section {
  display: flex;
  gap: 20px;
  margin-top: 32px;
  justify-content: center;
}

@media (max-width: 991px) {
  .company-section {
    flex-direction: column;
    gap: 0;
    justify-content: center;
  }
}

.company-card {
  border: 1px solid rgba(214, 221, 235, 1);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 50%;
}

@media (max-width: 991px) {
  .company-card {
    width: 100%;
    margin-top: 32px;
    padding: 0 20px;
  }
}

.image-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.company-logo {
  width: 88px;
  aspect-ratio: 1;
}

.job-count {
  align-self: start;
  padding: 4px 12px;
  background-color: #f8f8fd;
  font-family: Epilogue, sans-serif;
}

.company-name {
  margin-top: 16px;
  color: #25324b;
  font:
    600 24px/120% Clash Display Variable,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
}

.company-description {
  margin-top: 16px;
  color: #515b6f;
  font:
    18px/29px Epilogue,
    sans-serif;
}

.tags-container {
  display: flex;
  gap: 16px;
  margin-top: 16px;
  font-size: 14px;
  font-weight: 600;
}

.business-tag,
.category-tag {
  display: flex;
  justify-content: center;
  padding: 6px 10px;
  border-radius: 80px;
  font-family: Epilogue, sans-serif;
  white-space: nowrap;
}

.business-tag {
  border: 1px solid rgba(86, 205, 173, 1);
  color: #56cdad;
}

.category-tag {
  border: 1px solid rgba(255, 184, 54, 1);
  color: #ffb836;
}
.app-container {
  align-items: center;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #222;
  font-weight: 700;
  padding: 0 52px;
}

@media (max-width: 991px) {
  .header {
    padding: 0 20px;
  }
}

.title-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 25px;
  line-height: 110%;
  padding: 21px 60px 7px;
}

@media (max-width: 100px) {
  .title-container {
    font-size: 3px;
    padding: 0 10px;
  }
}

.title,
.subtitle {
  font-family: 'Inter', sans-serif;
}

.subtitle {
  margin-top: 16px;
}

@media (max-width: 991px) {
  .subtitle {
    margin-top: 40px;
  }
}

.description {
  margin-top: 45px;
  font:
    400 20px/157% Inter,
    sans-serif;
}

@media (max-width: 991px) {
  .description {
    margin-top: 40px;
  }
}

.job-count {
  margin-top: 72px;
  font:
    15px/32px Inter,
    sans-serif;
}

@media (max-width: 991px) {
  .job-count {
    margin-top: 40px;
  }
}

.job-count-label {
  font-weight: 300;
  font-size: 14px;
  color: rgba(34, 34, 34, 1);
}

.jobs-section {
  margin-top: 43px;
  width: 100%;
  max-width: 1336px;
  padding: 0 20px;
}

@media (max-width: 991px) {
  .jobs-section {
    margin-top: 40px;
  }
}

.job-card {
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
  border-radius: 16px;
  background-color: #fff;
  color: #222;
  margin-bottom: 20px;
}

.job-header {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e9e9e9;
  gap: 20px;
  padding: 31px 30px;
}

@media (max-width: 991px) {
  .job-header {
    flex-wrap: wrap;
    padding: 0 20px;
  }
}

.job-company {
  font-size: 20px;
  font-weight: 700;
  line-height: 109%;
}

.job-logo {
  width: 32px;
}

.job-type {
  border-radius: 4px;
  border: 1px solid rgba(34, 34, 34, 0.3);
  padding: 7px 6px;
  font:
    500 11px/206% Inter,
    sans-serif;
}

@media (max-width: 991px) {
  .job-type {
    white-space: initial;
  }
}

.job-details {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 300;
  line-height: 167%;
  padding: 0 36px;
}

@media (max-width: 991px) {
  .job-details {
    padding: 0 20px;
  }
}

.job-title {
  font:
    50 12px/100% Inter,
    sans-serif;
}

.job-description {
  margin-top: 35px;
}

.job-meta {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-top: 1px solid rgba(233, 233, 233, 1);
  margin-top: 35px;
  padding: 17px 30px;
}

@media (max-width: 991px) {
  .job-meta {
    padding: 0 20px;
  }
}

.job-location,
.job-website {
  font:
    700 15px/129% Inter,
    sans-serif;
}

.job-posted {
  font:
    300 14px/133% Inter,
    sans-serif;
}
</style>

<script>
import TheHeader from '../components/shared/TheHeader.vue'
import TheFooter from '../components/shared/TheFooter.vue'

export default {
  name: 'InternshipsView',
  components: {
    TheHeader,
    TheFooter
  },
  methods: {
    goToApply() {
      this.$router.push({ name: 'Apply' })
    }
  }
}
</script>
