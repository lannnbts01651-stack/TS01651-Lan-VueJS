<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <div class="card p-4 shadow" style="width: 400px">
      <h3 class="text-center mb-3">Thông tin cá nhân</h3>

      <!-- XEM THÔNG TIN -->
      <div v-if="!isEdit">
        <p><strong>Tên:</strong> {{ user.name }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>

        <button class="btn btn-success w-100" @click="isEdit = true">
          Sửa thông tin
        </button>
      </div>

      <!-- FORM SỬA -->
      <div v-else>
        <div class="mb-3">
          <label class="form-label">Tên</label>
          <input type="text" class="form-control" v-model="editUser.name" />
        </div>

        <div class="mb-3">
          <label class="form-label">Email</label>
          <input type="email" class="form-control" v-model="editUser.email" />
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
import { ref, reactive } from "vue";

/* ===== LẤY USER ===== */
const user = ref(
  JSON.parse(localStorage.getItem("user")) || {
    name: "Chưa có tên",
    email: "Chưa có email",
  }
);

/* ===== TRẠNG THÁI ===== */
const isEdit = ref(false);

/* ===== FORM BINDING ===== */
const editUser = reactive({
  name: user.value.name,
  email: user.value.email,
});

/* ===== EVENT ===== */
const save = () => {
  user.value = { ...editUser };
  localStorage.setItem("user", JSON.stringify(user.value));
  isEdit.value = false;
};

const cancel = () => {
  editUser.name = user.value.name;
  editUser.email = user.value.email;
  isEdit.value = false;
};
</script>
