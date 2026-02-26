<template>
  <div class="container mt-4">
    <h4 class="mb-3">Cài đặt tài khoản</h4>

    <button 
      type="button"
      class="btn btn-success"
      @click="changePassword"
    >
      Đổi mật khẩu
    </button>
  </div>
</template>

<script setup>
function changePassword() {
  alert("Đổi mật khẩu thành công!")
}
</script>