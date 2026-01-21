<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <div class="card p-4 shadow" style="width: 400px">
      <h3 class="text-center mb-3">Đăng ký</h3>

      <input v-model="user.name" class="form-control mb-2" placeholder="Tên" />

      <input v-model="user.email" class="form-control mb-2" placeholder="Email" />

      <input v-model="user.password" type="password" class="form-control mb-3" placeholder="Mật khẩu" />

      <button class="btn btn-success w-100" @click="register">
        Đăng ký
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const user = ref({
  name: '',
  email: '',
  password: ''
})

const register = () => {
  localStorage.setItem('user', JSON.stringify(user.value))
  alert('Đăng ký thành công')
}
</script>
