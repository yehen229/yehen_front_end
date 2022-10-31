import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/HomeView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
