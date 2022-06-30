import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/ChatRoom.vue'
import { projectAuth } from '@/components/firebase/config'

// Auth Guard
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  console.log('Current User in Auth Guard: ', user)

  if(!user) {
    next({ name: 'welcome' })
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/chatroom',
    name: 'chatroom',
    component: Chatroom,
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
