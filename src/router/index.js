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
          path: '/dashboard',
          name: 'Dashboard',
          component: () => import('../views/dashboard.vue'),
        },
        {
          path: '/product',
          name: 'Product',
          component: () => import('../views/product.vue'),
        },
        {
          path: '/customers',
          name: 'Customers',
          component: () => import('../views/customers.vue'),
        },
        {
          path: '/income',
          name: 'Income',
          component: () => import('../views/income.vue'),
        },
        {
          path: '/na',
          name: 'Na',
          component: () => import('../views/na.vue'),
        },
        {
          path: '/message',
          name: 'message',
          component: () => import('../views/message.vue'),
        },
      ]
    }
  
  ],
})

export default router
