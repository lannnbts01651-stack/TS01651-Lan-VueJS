<template>
  <div class="container mt-4">

    <!-- BÀI VIẾT -->
    <div class="card mb-4">
      <img
        :src="blog.image"
        class="card-img-top"
        style="height:300px; object-fit:cover"
      />

      <div class="card-body">
        <h3 class="card-title">{{ blog.title }}</h3>

        <p class="text-muted">
          {{ blog.author }} | {{ blog.createdAt }}
        </p>

        <p class="card-text">
          {{ blog.content }}
        </p>
      </div>
    </div>

    <!-- BÌNH LUẬN -->
    <div class="card mb-3">
      <div class="card-body">
        <h5>Bình luận ({{ comments.length }})</h5>

        <!-- LIST RENDERING -->
        <div
          v-for="(cmt, index) in comments"
          :key="index"
          class="border rounded p-2 mb-2"
        >
          <strong>{{ cmt.user }}</strong>
          <p class="mb-0">{{ cmt.content }}</p>
        </div>

        <!-- CONDITIONAL RENDERING -->
        <p v-if="comments.length === 0" class="text-muted">
          Chưa có bình luận nào
        </p>
      </div>
    </div>

    <!-- FORM BÌNH LUẬN -->
    <div class="card">
      <div class="card-body">
        <h6>Thêm bình luận</h6>

        <!-- FORM BINDING -->
        <textarea
          v-model="newComment"
          class="form-control mb-2"
          rows="3"
          placeholder="Nhập bình luận..."
        ></textarea>

        <!-- EVENT HANDLING -->
        <button
          class="btn btn-primary"
          :disabled="!newComment"
          @click="addComment"
        >
          Gửi bình luận
        </button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";

/* ===== DATA BINDING & REACTIVITY ===== */
const blog = ref({
  title: "Vue.js cơ bản cho người mới",
  content:
    "Vue.js là framework JavaScript giúp xây dựng giao diện người dùng một cách dễ dàng và hiệu quả.",
  image: "https://picsum.photos/900/400",
  author: "Admin",
  createdAt: "20/01/2026"
});

/* ===== LIST RENDERING ===== */
const comments = ref([
  { user: "Nguyễn Văn A", content: "Bài viết rất hay" },
  { user: "Trần Thị B", content: "Cảm ơn tác giả" }
]);

/* ===== FORM + EVENT ===== */
const newComment = ref("");

const addComment = () => {
  if (!newComment.value.trim()) return;

  comments.value.push({
    user: "User",
    content: newComment.value
  });

  newComment.value = "";
};
</script>
