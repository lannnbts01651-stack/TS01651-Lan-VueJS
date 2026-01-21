<template>
  <div class="container mt-4">
    <h3 class="mb-4">Danh sách bài viết</h3>

    <div class="card mb-3" v-for="post in posts" :key="post.id">
      <div class="row g-0">

        <!-- CLICK VÀO HÌNH -->
        <div class="col-md-4">
          <router-link :to="`/blogs/${post.id}`">
            <img :src="post.image" class="img-fluid rounded-start blog-img" alt="Ảnh bài viết" />
          </router-link>
        </div>

        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.content }}</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const posts = ref([
  {
    id: 1,
    title: 'Vue.js cơ bản',
    content: 'Vue.js là framework JavaScript dùng để xây dựng giao diện.',
    image: 'https://picsum.photos/400/250?1'
  },
  {
    id: 2,
    title: 'Bootstrap trong Vue',
    content: 'Bootstrap giúp xây dựng giao diện nhanh và đẹp.',
    image: 'https://picsum.photos/400/250?2'
  }
])
</script>

<style scoped>
.blog-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  /* canh hình bằng nhau */
  cursor: pointer;
}
</style>
