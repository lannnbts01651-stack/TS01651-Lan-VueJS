<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">MyBlog</router-link>

      <ul class="navbar-nav ms-auto">

        <li class="nav-item">
          <router-link class="nav-link" to="/">Trang chủ</router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/blogs">Bài viết</router-link>
        </li>

        <!-- CHỈ HIỆN KHI ĐÃ LOGIN -->
        <li class="nav-item" v-if="isLogin">
          <router-link class="nav-link" to="/blogs/create">Đăng bài</router-link>
        </li>

        <li class="nav-item" v-if="isLogin">
          <router-link class="nav-link" to="/profile">Cá nhân</router-link>
        </li>

        <!-- TÀI KHOẢN (CHƯA LOGIN) -->
        <li class="nav-item dropdown" v-if="!isLogin">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
            Tài khoản
          </a>

          <ul class="dropdown-menu dropdown-menu-end">
            <li>
              <router-link class="dropdown-item" to="/login">
                Đăng nhập
              </router-link>
            </li>
            <li>
              <router-link class="dropdown-item" to="/register">
                Đăng ký
              </router-link>
            </li>
          </ul>
        </li>

        <!-- ĐĂNG XUẤT -->
        <li class="nav-item" v-if="isLogin">
          <a href="#" class="nav-link text-danger" @click.prevent="logout">
            Đăng xuất
          </a>
        </li>

      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const isLogin = ref(false)
const route = useRoute()
const router = useRouter()

const checkLogin = () => {
  isLogin.value = sessionStorage.getItem('loggedIn') === 'true'
}

checkLogin()

watch(route, () => {
  checkLogin()
})

const logout = () => {
  sessionStorage.removeItem('loggedIn')
  router.push('/login')
}
</script>
