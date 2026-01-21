import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/home.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
import BlogList from '../views/blogList.vue'
import BlogDetail from '../views/blogDetail.vue'
import BlogCreate from '../views/blogCreate.vue'
import Profile from '../views/profile.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: BlogList
  },
  {
    path: '/blogs/:id',
    name: 'blog-detail',
    component: BlogDetail
  },
  {
    path: '/blogs/create',
    name: 'blog-create',
    component: BlogCreate,
    meta: { requiresAuth: true }
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

/* ===== AUTH GUARD ===== */
router.beforeEach((to, from, next) => {
const isLogin = sessionStorage.getItem('loggedIn')

  if (to.meta.requiresAuth && !isLogin) {
    next('/login')
  } else {
    next()
  }
})

export default router

