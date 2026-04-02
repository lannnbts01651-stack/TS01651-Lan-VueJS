<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <div class="card p-4 shadow" style="width: 420px">

      <h3 class="text-center mb-3">Thông tin cá nhân</h3>

      <!-- AVATAR -->
      <div class="text-center mb-3">
        <img :src="user.avatar || 'https://i.pravatar.cc/150'" class="rounded-circle" width="120" height="120" />
      </div>

      <!-- XEM -->
      <div v-if="!isEdit">
        <p><strong>Tên:</strong> {{ user.name }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>

        <button class="btn btn-success w-100" @click="isEdit = true">
          Sửa thông tin
        </button>
      </div>

      <!-- FORM SỬA -->
      <div v-else>
        <div class="mb-2">
          <label class="form-label fw-bold">Tên</label>
          <input class="form-control" v-model="editUser.name" />
        </div>

        <div class="mb-2">
          <label class="form-label fw-bold">Email</label>
          <input class="form-control" v-model="editUser.email" />
        </div>

        <div class="mb-2">
          <label class="form-label fw-bold">Mật khẩu</label>
          <input type="password" class="form-control" v-model="editUser.password" />
        </div>

        <div class="mb-3">
          <label class="form-label fw-bold">Avatar (URL)</label>
          <input class="form-control" v-model="editUser.avatar" />
        </div>

        <button class="btn btn-success w-100 mb-2" @click="save">
          Lưu
        </button>
        <button class="btn btn-secondary w-100" @click="cancel">
          Hủy
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue"
import axios from "axios"

/* ===== USER ĐÃ LOGIN ===== */
const user = ref(JSON.parse(sessionStorage.getItem("user")))

/* ===== STATE ===== */
const isEdit = ref(false)

/* ===== FORM ===== */
const editUser = reactive({
  name: user.value.name,
  email: user.value.email,
  password: user.value.password,
  avatar: user.value.avatar
})

/* ===== SAVE JSON ===== */
const save = async () => {
  try {
    const res = await axios.put(
      `http://localhost:3000/users/${user.value.id}`,
      {
        ...user.value,
        ...editUser
      }
    )

    // cập nhật lại session
    user.value = res.data
    sessionStorage.setItem("user", JSON.stringify(res.data))

    isEdit.value = false
    alert("Cập nhật thành công")
  } catch (err) {
    alert("Lỗi khi lưu")
    console.error(err)
  }
}

/* ===== CANCEL ===== */
const cancel = () => {
  Object.assign(editUser, user.value)
  isEdit.value = false
}
</script>
