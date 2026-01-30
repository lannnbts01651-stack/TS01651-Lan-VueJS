<template>
    <div class="container mt-5">
        <div class="border p-2 score-box">

            <div class="fw-bold fs-5 mb-1">
                Nhập điểm của bạn:
            </div>

            <input type="number" class="form-control form-control-sm score-input" v-model.number="diem" step="0.1">

            <div class="mt-1 result">
                <span v-if="diem < 5">Yếu</span>
                <span v-else-if="diem >= 5 && diem < 6.5">Trung bình</span>
                <span v-else-if="diem >= 6.5 && diem < 8">Khá</span>
                <span v-else-if="diem >= 8 && diem < 9">Giỏi</span>
                <span v-else>Xuất sắc</span>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'Bai1Lab6',
    data() {
        return {
            diem: 9
        }
    }
}
</script>

<!-- <style scoped>
.score-box {
    width: 260px;
    /* ghìm chiều ngang */
}

.score-input {
    width: 70px;
    /* input nhỏ giống hình */
}

.result {
    font-size: 14px;
}
</style> -->
