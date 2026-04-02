<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">

                <!-- CARD FORM -->
                <div class="card shadow">
                    <div class="card-body">

                        <h3 class="text-center mb-4">Đăng bài viết mới</h3>

                        <!-- TIÊU ĐỀ -->
                        <div class="mb-3">
                            <label class="form-label">Tiêu đề</label>
                            <input type="text" class="form-control" v-model="blog.title"
                                placeholder="Nhập tiêu đề bài viết" />
                        </div>

                        <!-- MÔ TẢ NGẮN -->
                        <div class="mb-3">
                            <label class="form-label">Mô tả ngắn</label>
                            <input type="text" class="form-control" v-model="blog.description"
                                placeholder="Nhập mô tả ngắn" />
                        </div>

                        <!-- NỘI DUNG -->
                        <div class="mb-3">
                            <label class="form-label">Nội dung</label>
                            <textarea class="form-control" rows="5" v-model="blog.content"
                                placeholder="Nhập nội dung bài viết"></textarea>
                        </div>

                        <!-- HÌNH ẢNH -->
                        <div class="mb-3">
                            <label class="form-label">Link hình ảnh</label>
                            <input type="text" class="form-control" v-model="blog.image" placeholder="https://..." />
                        </div>

                        <!-- SUBMIT -->
                        <button v-if="user && user.role === 'admin'" class="btn btn-success w-100" @click="submitBlog">
                            Đăng bài
                        </button>

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()

const user = JSON.parse(sessionStorage.getItem('user'))

const blog = reactive({
    title: '',
    description: '',
    content: '',
    image: ''
})

const submitBlog = async () => {
    if (!blog.title || !blog.content) {
        alert('Vui lòng nhập tiêu đề và nội dung')
        return
    }

    try {
        const res = await axios.post('http://localhost:3000/posts', {
            title: blog.title,
            description: blog.description,
            content: blog.content,
            image: blog.image || 'https://picsum.photos/600/300',
            createdAt: new Date().toISOString().slice(0, 10)
        })

        alert('Đăng bài thành công')

        // 👉 CHUYỂN SANG TRANG CHI TIẾT
        router.push(`/blogs/${res.data.id}`)

    } catch (err) {
        alert('Lỗi khi đăng bài')
        console.error(err)
    }
}
</script>
