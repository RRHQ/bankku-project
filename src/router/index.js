import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import Loans from '../views/Loans.vue'
import Settings from '../views/Settings.vue'
import Blank from '../views/Blank.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },

    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },

    {
      path: '/transactions',
      name: 'transactions',
      component: Blank,
    },

    {
      path: '/accounts',
      name: 'accounts',
      component: Blank,
    },

    {
      path: '/investments',
      name: 'investments',
      component: Blank,
    },

    {
      path: '/credit-cards',
      name: 'credit-cards',
      component: Blank,
    },

    {
      path: '/loans',
      name: 'loans',
      component: Loans,
    },

    {
      path: '/services',
      name: 'services',
      component: Blank,
    },

    {
      path: '/my-previleges',
      name: 'my-previleges',
      component: Blank,
    },

    {
      path: '/settings',
      name: 'settings',
      component: Settings,
    },

    {
      path: '/notifications',
      name: 'notifications',
      component: Blank,
    },

    {
      path: '/profile',
      name: 'profile',
      component: Blank,
    },
  ],
})

export default router
