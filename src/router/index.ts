import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Landing from '@/views/Landing.vue';
import Books from '@/views/Books.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/Books',
    name: 'Books',
    component: Books
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
