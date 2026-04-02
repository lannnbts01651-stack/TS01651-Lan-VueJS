import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/home.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
import BlogList from '../views/blogList.vue'
import BlogDetail from '../views/blogDetail.vue'
import BlogCreate from '../views/blogCreate.vue'
import Profile from '../views/profile.vue'
import BlogEdit from '../views/blogEdit.vue'

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
    meta: {
      requiresAuth: true,
      requiresAdmin: true
    }
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
  const user = JSON.parse(sessionStorage.getItem('user'))

  // Chưa login
  if (to.meta.requiresAuth && !isLogin) {
    next('/login')
    return
  }

  // Không phải admin
  if (to.meta.requiresAdmin && user?.role !== 'admin') {
    alert('Bạn không có quyền')
    next('/')
    return
  }

  next()
})

export default router
