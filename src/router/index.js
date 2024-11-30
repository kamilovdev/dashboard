import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout/layout.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/customers',
          name: 'Customers',
          component: () => import('../views/customers.vue'),
        },
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: () => import('../views/dashboard.vue'),
        },
      ]
    }
  
  ],
})

export default router
