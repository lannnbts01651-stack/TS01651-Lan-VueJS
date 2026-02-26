import { createRouter, createWebHistory } from "vue-router"

import Home from "../view/Home.vue"
import BlogList from "../view/BlogList.vue"
import BlogPost from "../view/BlogPost.vue"
import UserProfile from "../view/UserProfile.vue"
import UserProfileInfo from "../view/UserProfileInfo.vue"
import UserProfileSettings from "../view/UserProfileSettings.vue"
import Login from "../view/Login.vue"
import Dashboard from "../view/Dashboard.vue"

let isAuthenticated = false

export const setAuth = (value) => {
  isAuthenticated = value
}

export const getAuth = () => isAuthenticated

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/blog", name: "BlogList", component: BlogList },
  {
    path: "/blog/:id",
    name: "BlogPost",
    component: BlogPost,
    props: true,
  },
  {
    path: "/profile",
    name: "UserProfile",
    component: UserProfile,
    alias: "/me",
    children: [
      {
        path: "info",
        name: "UserProfileInfo",
        component: UserProfileInfo,
      },
      {
        path: "settings",
        name: "UserProfileSettings",
        component: UserProfileSettings,
      },
    ],
  },
  { path: "/login", name: "Login", component: Login },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Route Guard
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: "Login" })
  } else {
    next()
  }
})

export default router