
import { createRouter as createVueRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Profile from '../views/Profile.vue'
import { useAuthStore } from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    iconClass: 'fas fa-home',
    mainMenu: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/explore',
    name: 'Explore',
    component: Home,
    iconClass: 'fas fa-search',
    mainMenu: true,
    meta: { requiresAuth: true },
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: Home,
    iconClass: 'fas fa-bell',
    mainMenu: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/messages',
    name: 'Messages',
    component: Home,
    iconClass: 'fas fa-envelope',
    mainMenu: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresNotAuth: true }
  },  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    meta: { requiresNotAuth: true }
  }
]


export const createRouter = () => {
  const authStore = useAuthStore()
  let router = createVueRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes: routes,
     
  })
  router.beforeEach(guard => {

      
      if (guard.meta.requiresAuth && !authStore.isAuth) {
     
          return {
              name: 'Login',
              // save the location we were at to come back later
              query: { redirect: guard.fullPath },
          }
      }
      console.log(guard.meta.requiresNotAuth,authStore.isAuth)
      if (guard.meta.requiresNotAuth && authStore.isAuth) {
        console.log(guard.meta.requiresNotAuth,authStore.isAuth)
          return {
              name: 'Home',
          }
      }
      
  })
  return router
}
