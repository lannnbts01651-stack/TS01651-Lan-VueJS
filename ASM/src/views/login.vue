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
import axios from 'axios'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()

const login = async () => {
  try {
    const res = await axios.get('/users')
    const users = res.data

    const user = users.find(
      u =>
        u.email.toLowerCase() === email.value.toLowerCase().trim() &&
        u.password === password.value
    )

    if (!user) {
      alert('Sai email hoặc mật khẩu')
      return
    }

    // LƯU ĐĂNG NHẬP + USER
    sessionStorage.setItem('loggedIn', 'true')
    sessionStorage.setItem('user', JSON.stringify(user))

    router.push('/')
  } catch (err) {
    alert('Không kết nối được json-server')
    console.error(err)
  }
}
</script>
