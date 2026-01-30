<template>
    <div class="container-fluid mt-4">
        <div class="row border p-4 rounded">

            <!-- FORM -->
            <div class="col-md-4 text-start">
                <h4 class="mb-3">Thêm học sinh</h4>

                <form @submit.prevent="submitForm">
                    <div class="mb-3">
                        <label class="form-label">Họ tên:</label>
                        <input type="text" class="form-control" v-model="student.name" required />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Điểm:</label>
                        <input type="number" class="form-control" min="0" max="10" v-model="student.score" required />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Ngày sinh:</label>
                        <input type="date" class="form-control" v-model="student.dob" required />
                    </div>

                    <button class="btn btn-success">
                        {{ isEditing ? 'Cập nhật' : 'Thêm' }}
                    </button>
                </form>
            </div>

            <!-- TABLE -->
            <div class="col-md-8">
                <h4 class="mb-3 text-start">Danh sách học sinh</h4>

                <table class="table align-middle">
                    <thead>
                        <tr>
                            <th>Họ và tên</th>
                            <th>Điểm</th>
                            <th>Ngày sinh</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(stu, index) in students" :key="index">
                            <td>{{ stu.name }}</td>
                            <td>{{ stu.score }}</td>
                            <td>{{ stu.dob }}</td>
                            <td>
                                <button class="btn btn-warning btn-sm" @click="editStudent(index)">
                                    Sửa
                                </button>
                            </td>
                            <td>
                                <button class="btn btn-danger btn-sm" @click="deleteStudent(index)">
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
// mẫu ban đầu
const students = ref([
    { name: 'Lan Ninh', score: 9, dob: '2000-02-02' },
    { name: 'Ninh Lan', score: 7, dob: '2000-07-11' },
])

// biến qly trạng thái form
const student = ref({
    name: '',
    score: null,
    dob: ''
})

let isEditing = ref(false)
let editingIndex = ref(null)

function submitForm() {
    if (isEditing.value) {
        // Cập nhật thông tin học sinh
        // { ...student.value } sẽ tạo một bản sao mới của đối tượng student.value
        students.value[editingIndex.value] = { ...student.value }
        isEditing.value = false
        editingIndex.value = null
    } else {
        // Thêm học sinh mới
        students.value.push({ ...student.value })
    }
    resetForm()
}

function editStudent(index) {
    student.value = { ...students.value[index] }
    isEditing.value = true
    editingIndex.value = index
}

function deleteStudent(index) {
    students.value.splice(index, 1)
}

function resetForm() {
    student.value = {
        name: '',
        score: null,
        dob: ''
    }
}
</script>