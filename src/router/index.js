import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Team from '../views/Team.vue'
import Contact from '../views/Contact.vue'
import Services from '../views/Services.vue'
import NotFound from '../views/NotFound.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/team',
      name: 'team',
      component:Team
    },
    {
      path: '/contacts',
      name: 'contacts',
      component:Contact
    },
    {
      path: '/services-and-tools',
      name: 'services',
      component:Services
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component:NotFound
    }
  ]
})

export default router
