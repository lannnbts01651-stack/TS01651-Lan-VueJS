<template>
  <!-- FORM LOGIN -->
  <div v-if="!isLoggedIn" class="container mt-5 col-sm-4">
    <h3 class="text-center mb-4">Form Đăng nhập</h3>

    <form @submit.prevent="login">
      
      <!-- EMAIL -->
      <div class="mb-3">
        <label>Email:</label>
        <input
          type="email"
          class="form-control"
          v-model="email"
          placeholder="Nhập email"
        />
        <p v-if="emailError" class="text-danger">
          {{ emailError }}
        </p>
      </div>

      <!-- PASSWORD -->
      <div class="mb-3">
        <label>Mật khẩu:</label>
        <input
          type="password"
          class="form-control"
          v-model="password"
          placeholder="Nhập mật khẩu"
        />
        <p v-if="passwordError" class="text-danger">
          {{ passwordError }}
        </p>
      </div>

      <button type="submit" class="btn btn-primary w-100">
        Đăng nhập
      </button>

    </form>
  </div>

  <!-- GIAO DIỆN SAU KHI LOGIN -->
  <div v-else class="container mt-5 col-sm-5 text-center">
    <h3>Chào mừng, {{ email }}!</h3>
    <button @click="logout" class="btn btn-primary mt-3">
      Đăng xuất
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isLoggedIn = ref(false)
const email = ref('')
const password = ref('')

const emailError = ref('')
const passwordError = ref('')

// Regex kiểm tra email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const login = () => {

  // Reset lỗi
  emailError.value = ''
  passwordError.value = ''

  // Validate email
  if (!email.value) {
    emailError.value = 'Email là bắt buộc'
  } else if (!emailRegex.test(email.value)) {
    emailError.value = 'Email không đúng định dạng'
  }

  // Validate password
  if (!password.value) {
    passwordError.value = 'Mật khẩu là bắt buộc'
  } else if (password.value.length < 6) {
    passwordError.value = 'Mật khẩu phải ít nhất 6 ký tự'
  }

  // Nếu không có lỗi → đăng nhập thành công
  if (!emailError.value && !passwordError.value) {
    isLoggedIn.value = true
  }
}

const logout = () => {
  isLoggedIn.value = false
  email.value = ''
  password.value = ''
  emailError.value = ''
  passwordError.value = ''
}
</script>