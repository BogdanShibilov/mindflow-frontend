<template>
  <div class="container">
    <TheHeader id="header" />
    <div id="selectors">
      <ProfileSelector :currentlySelected="currentTab" @tabChange="changeTab" />
      <AdminSelector v-if="isAdmin" :currentlySelected="currentTab" @tabChange="changeTab" />
    </div>
    <CardBase id="adminpanel">
      <MyProfile v-if="currentTab == 'profile'" />
      <ScheduleTable v-if="currentTab == 'schedule'" />
      <MySettings v-if="currentTab == 'settings'" />
      <h1 v-if="currentTab == 'users'">Users</h1>
      <UsersTable v-if="currentTab == 'users'" />
      <h1 v-if="currentTab == 'experts'">Experts</h1>
      <ExpertsTable v-if="currentTab == 'experts'" />
      <h1 v-if="currentTab == 'students'">Students</h1>
      <StudentsTable v-if="currentTab == 'students'" />
    </CardBase>
    <TheFooter id="footer" />
  </div>
</template>

<script>
import TheHeader from '../components/shared/TheHeader.vue'
import TheFooter from '../components/shared/TheFooter.vue'
import CardBase from '../components/base/CardBase.vue'
import UsersTable from '../components/admin/UsersTable.vue'
import ExpertsTable from '../components/admin/ExpertsTable.vue'
import StudentsTable from '../components/admin/StudentsTable.vue'
import AdminSelector from '../components/admin/AdminSelector.vue'
import ProfileSelector from '../components/profile/ProfileSelector.vue'
import ScheduleTable from '../components/profile/ScheduleTable.vue'
import MyProfile from '../components/profile/MyProfile.vue'
import MySettings from '../components/profile/MySettings.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
    CardBase,
    UsersTable,
    ExpertsTable,
    StudentsTable,
    AdminSelector,
    ProfileSelector,
    ScheduleTable,
    MyProfile,
    MySettings
  },
  data() {
    return {
      currentTab: 'profile'
    }
  },
  computed: {
    roles() {
      return this.$store.getters.roles
    },
    isAdmin() {
      return this.roles.indexOf('admin') > -1
    }
  },
  methods: {
    changeTab(tab) {
      this.currentTab = tab
    }
  }
}
</script>

<style scoped>
.container {
  display: grid;
  min-height: 100vh;
  grid-template-rows: 12vh auto 22vh;
  grid-template-columns: 1fr 2.5fr 1fr;
  row-gap: 4vh;
  background-color: #f8f8f6;
}

#concrete-expert {
  grid-row: 2;
  grid-column: 2;
}

#header {
  grid-row: 1;
  grid-column: 1 / 4;
}

#footer {
  grid-row: 3;
  grid-column: 1 / 4;
}

#adminpanel {
  grid-row: 2;
  grid-column: 2;
  padding: 15px 30px;
}

#selectors {
  display: flex;
  flex-direction: column;
  grid-row: 2;
  grid-column: 1;
  margin: 0 20%;
  gap: 40px;
}
</style>
