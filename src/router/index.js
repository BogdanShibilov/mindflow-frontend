import { createRouter, createWebHistory } from 'vue-router'
import SignUpView from '@/views/SignUpView.vue'
import LoginView from '@/views/LoginView.vue'
import ExpertsView from '@/views/ExpertsView.vue'
import UpdateUserDetailsView from '@/views/UpdateUserDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/experts'
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/experts',
      name: 'experts',
      component: ExpertsView
    },
    {
      path: '/updateuserdetails',
      name: 'updateuserdetails',
      component: UpdateUserDetailsView
    }
  ]
})

export default router
