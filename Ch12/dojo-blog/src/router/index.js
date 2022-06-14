import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailsView from '../views/DetailsView.vue'
import CreateView from '../views/CreateView.vue'
import Tag from '../views/Tag.vue'
import RealTime from '../views/Realtime.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/posts/:id',
    name: 'details',
    component: DetailsView,
    props: true
  },

  {
    path: '/create',
    name: 'create',
    component: CreateView
  },
  {
    path: '/tags/:tag',
    name: 'Tag',
    component: Tag
  },
  {
    path: '/realtime',
    name: 'RealTime',
    component: RealTime

  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes
})

export default router
