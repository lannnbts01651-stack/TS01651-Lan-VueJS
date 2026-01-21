<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <div class="card p-4 shadow" style="width: 400px">
      <h3 class="text-center mb-3">Đăng nhập</h3>

      <input v-model="email" class="form-control mb-2" placeholder="Email" />

      <input v-model="password" type="password" class="form-control mb-3" placeholder="Mật khẩu" />

      <button class="btn btn-success w-100" @click="login">
        Đăng nhập
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()

const login = () => {
  const user = JSON.parse(localStorage.getItem('user'))

  if (user && user.email === email.value && user.password === password.value) {
    sessionStorage.setItem('loggedIn', 'true')
    router.push('/')
  } else {
    alert('Sai thông tin')
  }
}
</script>
