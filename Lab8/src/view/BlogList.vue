<template>
  <div class="container mt-4">
    <h2>Danh sách bài viết</h2>

    <ul>
      <li v-for="blog in blogs" :key="blog.id">
        <router-link :to="{ name: 'BlogPost', params: { id: blog.id }}">
          {{ blog.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
const blogs = [
  { id: 1, title: "Vue Router là gì?" },
  { id: 2, title: "Tìm hiểu Route động" },
  { id: 3, title: "Route Guard trong Vue" }
];
</script>