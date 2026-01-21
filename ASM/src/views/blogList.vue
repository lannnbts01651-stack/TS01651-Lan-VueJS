<template>
  <div class="container mt-4">
    <h2 class="mb-4">Danh sách bài viết</h2>

    <!-- CHỐNG LỖI RENDER -->
    <div class="row" v-if="blogs && blogs.length">

      <div
        class="col-md-4 mb-4"
        v-for="(blog, index) in blogs"
        :key="index"
      >
        <div class="card h-100 shadow-sm">

          <!-- CLICK VÀO HÌNH RA CHI TIẾT -->
          <router-link :to="`/blogs/${blog.id}`">
            <img
              :src="blog.image"
              class="card-img-top"
              style="height:200px; object-fit:cover"
            />
          </router-link>

          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ blog.title }}</h5>
            <p class="card-text">{{ blog.description }}</p>
          </div>

        </div>
      </div>

    </div>

    <!-- TRƯỜNG HỢP KHÔNG CÓ BÀI -->
    <p v-else class="text-muted">Chưa có bài viết nào.</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

/* ===== DATA ===== */
const blogs = ref([
  {
    id: 1,
    title: "Vue.js cho người mới bắt đầu",
    description: "Học Vue.js từ cơ bản đến nâng cao.",
    image: "https://picsum.photos/400/200?1"
  },
  {
    id: 2,
    title: "Bootstrap 5 trong Vue",
    description: "Xây dựng giao diện nhanh với Bootstrap.",
    image: "https://picsum.photos/400/200?2"
  },
  {
    id: 3,
    title: "Vue Router cơ bản",
    description: "Quản lý điều hướng trang trong Vue.",
    image: "https://picsum.photos/400/200?3"
  }
]);
</script>
