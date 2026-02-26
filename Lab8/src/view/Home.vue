<template>
  <div class="container mt-4">
    <h2 class="text-center mb-4">Chào Mừng Đến Với Blog Của Tôi!</h2>

    <div class="row g-4">
      <div
        class="col-4"
        v-for="post in posts"
        :key="post.id"
      >
        <div class="card h-100 shadow border">
          <img
            :src="post.image"
            class="card-img-top"
            alt="Blog image"
          />

          <div class="card-body d-flex flex-column">
            <h5 class="card-title">
              {{ post.title }}
            </h5>

            <p class="card-text flex-grow-1">
              {{ post.desc }}
            </p>

            <router-link
              :to="`/blog/${post.id}`"
              class="btn btn-success mt-auto"
            >
              Xem chi tiết
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const posts = [
  {
    id: 1,
    title: "Khám phá Vue Router",
    image: "https://picsum.photos/600/400?random=1",
    desc: "Hướng dẫn sử dụng Vue Router từ cơ bản đến nâng cao."
  },
  {
    id: 2,
    title: "Học Vue 3 Composition API",
    image: "https://picsum.photos/600/400?random=2",
    desc: "Làm chủ Composition API trong Vue 3."
  },
  {
    id: 3,
    title: "Xây dựng SPA với Vue",
    image: "https://picsum.photos/600/400?random=3",
    desc: "Tạo ứng dụng Single Page Application chuyên nghiệp."
  }
]
</script>

<style>
.card {
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-5px);
}
</style>