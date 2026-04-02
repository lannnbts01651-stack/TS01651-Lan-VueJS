<template>
  <div class="container mt-4">
    <h2 class="mb-4">Danh sách bài viết</h2>

    <!-- CHỐNG LỖI RENDER -->
    <div class="row" v-if="posts && posts.length">

      <div class="col-md-4 mb-4" v-for="blog in posts" :key="blog.id">

        <div class="card h-100 shadow-sm">

          <!-- CLICK VÀO HÌNH RA CHI TIẾT -->
          <router-link :to="`/blogs/${blog.id}`">
            <img :src="blog.image || 'https://picsum.photos/400/200'" class="card-img-top"
              style="height:200px; object-fit:cover" />
          </router-link>

          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ blog.title }}</h5>
            <small class="text-muted mb-2">
              {{ blog.author }} • {{ blog.createdAt }}
            </small>
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
import { ref, onMounted } from 'vue'
import axios from 'axios'

/* ===== DATA ===== */
const posts = ref([])

/* ===== FETCH DATA FROM BACKEND ===== */
const loadPosts = async () => {
  try {
    const res = await axios.get('http://localhost:3000/posts')
    posts.value = res.data
  } catch (error) {
    console.log(error)
  }
}

/* ===== LIFECYCLE ===== */
onMounted(() => {
  loadPosts()
})
</script>
