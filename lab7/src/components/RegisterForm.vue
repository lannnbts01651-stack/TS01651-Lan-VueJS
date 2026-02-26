<template>
  <div class="container mt-5">
    <div class="row">

      <!-- FORM ĐĂNG KÝ -->
      <div class="col-md-6">
        <h3>Form Đăng Ký</h3>

        <form @submit.prevent="register">

          <!-- Họ tên -->
          <div class="mb-3">
            <label>Họ tên:</label>
            <input type="text" class="form-control" v-model="fullName">
          </div>

          <!-- Email -->
          <div class="mb-3">
            <label>Email:</label>
            <input type="email" class="form-control" v-model="email">
          </div>

          <!-- Mật khẩu -->
          <div class="mb-3">
            <label>Mật khẩu:</label>
            <input type="password" class="form-control" v-model="password">
          </div>

          <!-- Ngày sinh -->
          <div class="mb-3">
            <label>Ngày sinh:</label>
            <input type="date" class="form-control" v-model="birthDate">
          </div>

          <!-- Giới tính -->
          <div class="mb-3">
            <label>Giới tính:</label><br>
            <input type="radio" value="Nam" v-model="gender"> Nam
            <input type="radio" value="Nữ" v-model="gender" class="ms-3"> Nữ
            <input type="radio" value="Khác" v-model="gender" class="ms-3"> Khác
          </div>

          <!-- Ngôn ngữ -->
          <div class="mb-3">
            <label>Ngôn ngữ:</label><br>
            <input type="checkbox" value="Tiếng Việt" v-model="languages"> Tiếng Việt
            <input type="checkbox" value="Tiếng Anh" v-model="languages" class="ms-3"> Tiếng Anh
            <input type="checkbox" value="Tiếng Nhật" v-model="languages" class="ms-3"> Tiếng Nhật
          </div>

          <button type="submit" class="btn btn-primary">
            Đăng ký
          </button>

        </form>
      </div>

      <!-- HIỂN THỊ THÔNG TIN -->
      <div class="col-md-6" v-if="submitted">
        <h3>Thông tin đã đăng ký:</h3>

        <p><strong>Họ tên:</strong> {{ fullName }}</p>
        <p><strong>Email:</strong> {{ email }}</p>
        <p><strong>Ngày sinh:</strong> {{ birthDate }}</p>
        <p><strong>Giới tính:</strong> {{ gender }}</p>
        <p><strong>Ngôn ngữ:</strong> {{ languages.join(', ') }}</p>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const fullName = ref('')
const email = ref('')
const password = ref('')
const birthDate = ref('')
const gender = ref('')
const languages = ref([])

const submitted = ref(false)

const register = () => {
  submitted.value = true
}
</script>