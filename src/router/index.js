import { createRouter, createWebHistory } from 'vue-router'
import SignUpView from '../views/SignUpView.vue'
import SignInView from '../views/SignInView.vue'
import SignOutView from '../views/SignOutView.vue'
import ExpertsView from '../views/ExpertsView.vue'
import ConcreteExpertView from '@/views/ConcreteExpertView.vue'
import MyProfileView from '../views/MyProfileView.vue'
import InternshipsView from '@/views/InternshipsView.vue'
import ApplyView from '@/views/ApplyView.vue'

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
      path: '/signin',
      name: 'signin',
      component: SignInView
    },
    {
      path: '/signout',
      name: 'signout',
      component: SignOutView
    },
    {
      path: '/experts',
      name: 'experts',
      component: ExpertsView
    },
    {
      path: '/experts/:id',
      name: 'expert',
      component: ConcreteExpertView
    },
    {
      path: '/profile',
      name: 'profile',
      component: MyProfileView
    },
    {
      path: '/internships',
      name: 'InternshipsView',
      component: InternshipsView
    },
    {
      path: '/apply',
      name: 'Apply',
      component: ApplyView
    }
  ]
})

export default router
