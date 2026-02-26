<template>
  <div class="container mt-4">
    <h2>Chi tiết bài viết</h2>
    <p>ID bài viết: {{ id }}</p>

    <button class="btn btn-secondary" @click="goBack">
      Quay lại các bài viết
    </button>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const id = route.params.id;

function goBack() {
  router.push({ name: "BlogList" });
}
</script>