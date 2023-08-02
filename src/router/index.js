import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DiscussView from "@/views/DiscussView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DiscussView
    },
    {
      path: '/discuss/:name',
      name: 'discuss',
      component: DiscussView
    }
  ]
})

export default router
