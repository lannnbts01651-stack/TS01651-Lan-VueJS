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
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()

const user = ref({
  name: '',
  email: '',
  password: ''
})

const register = async () => {
  if (!user.value.email || !user.value.password) {
    alert('Nhập đầy đủ thông tin')
    return
  }

  try {
    const res = await axios.get('http://localhost:3000/users')
    const users = res.data

    const exist = users.find(
      u => u.email.toLowerCase() === user.value.email.toLowerCase()
    )

    if (exist) {
      alert('Email đã tồn tại')
      return
    }

    await axios.post('http://localhost:3000/users', user.value)

    alert('Đăng ký thành công')
    router.push('/login')

  } catch (err) {
    alert('Lỗi server')
    console.error(err)
  }
}
</script>