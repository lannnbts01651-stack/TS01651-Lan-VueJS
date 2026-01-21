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
                        <button class="btn btn-success w-100" @click="submitBlog">
                            Đăng bài
                        </button>

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

/* ===== FORM BINDING ===== */
const blog = reactive({
    title: "",
    description: "",
    content: "",
    image: ""
});

/* ===== EVENT HANDLING ===== */
const submitBlog = () => {
    if (!blog.title || !blog.content) {
        alert("Vui lòng nhập đầy đủ tiêu đề và nội dung!");
        return;
    }

    // LẤY BLOG CŨ
    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

    // THÊM BLOG MỚI
    blogs.push({
        id: Date.now(),
        title: blog.title,
        description: blog.description,
        content: blog.content,
        image: blog.image || "https://picsum.photos/600/300",
        author: "User",
        createdAt: new Date().toLocaleDateString()
    });

    // LƯU LẠI
    localStorage.setItem("blogs", JSON.stringify(blogs));

    alert("Đăng bài thành công!");

    // RESET FORM
    blog.title = "";
    blog.description = "";
    blog.content = "";
    blog.image = "";

    // CHUYỂN TRANG
    router.push("/blogs");
};
</script>
