<template>
  <div class="container mt-5 col-sm-4">
    <h3 class="text-center mb-4">Quản lý công việc</h3>

    <!-- FORM THÊM CÔNG VIỆC -->
    <form @submit.prevent="addJob">
      <div class="mb-3">
        <label class="form-label">Tên công việc:</label>
        <input
          type="text"
          class="form-control"
          v-model="newJob"
          placeholder="Nhập tên công việc"
        />
      </div>

      <button type="submit" class="btn btn-primary w-100">
        Thêm công việc
      </button>
    </form>

    <!-- DANH SÁCH CÔNG VIỆC -->
    <ul class="list-group mt-4">
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
        v-for="(job, index) in jobs"
        :key="index"
      >
        {{ job }}

        <button
          class="btn btn-danger btn-sm"
          @click="removeJob(index)"
        >
          Xóa
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Biến lưu dữ liệu input
const newJob = ref('')

// Danh sách công việc ban đầu
const jobs = ref([
  'Ăn sáng',
  'Đi học',
  'Chơi bóng rổ'
])

// Hàm thêm công việc
const addJob = () => {
  if (newJob.value.trim()) {
    jobs.value.push(newJob.value.trim())
    newJob.value = '' // reset input
  }
}

// Hàm xóa công việc
const removeJob = (index) => {
  jobs.value.splice(index, 1)
}
</script>