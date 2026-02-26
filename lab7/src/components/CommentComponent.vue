<template>
  <div class="col-sm-4 m-5">
    <h2>Bình luận bài viết</h2>

    <div class="card">
      <img :src="img1" class="card-img-top" alt="Hình ảnh" />

      <div class="card-body">
        <h5 class="card-title">8 loại rau củ quả giàu canxi</h5>
        <p class="card-text">
          Canxi là khoáng chất cần thiết đối với cơ thể người...
        </p>
      </div>
    </div>

    <form @submit.prevent="submitComment" class="mt-3">
      <textarea
        class="form-control"
        v-model="commentText"
        placeholder="Nhập bình luận của bạn"
      ></textarea>

      <button type="submit" class="btn btn-success mt-2">
        Gửi bình luận
      </button>
    </form>

    <div v-if="comments.length" class="mt-3">
      <h5>Danh sách các bình luận:</h5>
      <ul>
        <li v-for="(comment, index) in comments" :key="index">
          <strong>{{ comment.name }}</strong>: {{ comment.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import img1 from "../assets/img1.jpg"

// Nhận username từ component cha
const props = defineProps(["username"]);

const commentText = ref("");
const comments = ref([]);

// Hàm gửi bình luận
function submitComment() {
  if (commentText.value) {
    comments.value.push({
      name: props.username,
      text: commentText.value,
    });

    // Xóa nội dung sau khi gửi
    commentText.value = "";
  }
}
</script>