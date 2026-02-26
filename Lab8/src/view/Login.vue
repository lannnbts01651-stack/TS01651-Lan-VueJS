<script setup>
import { useRouter } from "vue-router"
import { setAuth } from "../router"

const router = useRouter()

function login() {
  setAuth(true)
  router.push({ name: "Dashboard" })
}
</script>

<template>
  <div class="container mt-4">
    <h2>Trang đăng nhập</h2>
    <button class="btn btn-success" @click="login">
      Đăng nhập
    </button>
  </div>
</template>