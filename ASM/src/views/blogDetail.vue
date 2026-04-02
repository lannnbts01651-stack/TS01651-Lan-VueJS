<template>
  <div class="container mt-4">

    <!-- LOADING / NOT FOUND -->
    <div v-if="!blog" class="text-center text-muted">
      Không tìm thấy bài viết
    </div>

    <div v-else>
      <!-- BÀI VIẾT -->
      <div class="card mb-4">
        <img
          :src="blog.image || 'https://picsum.photos/900/400'"
          class="card-img-top"
          style="height:300px; object-fit:cover"
        />

        <div class="card-body">
          <h3 class="card-title">{{ blog.title }}</h3>

          <p class="text-muted">
            {{ blog.author }} | {{ blog.createdAt }}
          </p>

          <p class="card-text">
            {{ blog.description }}
          </p>

          <!-- CHỈ ADMIN ĐƯỢC XÓA -->
          <button
            v-if="isAdmin"
            class="btn btn-danger mt-3"
            @click="deletePost"
          >
            Xóa bài
          </button>
        </div>
      </div>

      <!-- BÌNH LUẬN -->
      <div class="card mb-3">
        <div class="card-body">
          <h5>Bình luận ({{ comments.length }})</h5>

          <div
            v-for="(cmt, index) in comments"
            :key="index"
            class="border rounded p-2 mb-2"
          >
            <strong>{{ cmt.user }}</strong>
            <p class="mb-0">{{ cmt.content }}</p>
          </div>

          <p v-if="comments.length === 0" class="text-muted">
            Chưa có bình luận nào
          </p>
        </div>
      </div>

      <!-- FORM BÌNH LUẬN (USER + ADMIN ĐỀU ĐƯỢC) -->
      <div class="card">
        <div class="card-body">
          <h6>Thêm bình luận</h6>

          <textarea
            v-model="newComment"
            class="form-control mb-2"
            rows="3"
            placeholder="Nhập bình luận..."
          ></textarea>

          <button
            class="btn btn-success"
            :disabled="!newComment"
            @click="addComment"
          >
            Gửi bình luận
          </button>
        </div>
      </div>
    </div>

  </div>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'

/* ===== ROUTER ===== */
const route = useRoute()
const router = useRouter()

/* ===== USER ===== */
const user = JSON.parse(sessionStorage.getItem('user'))
const isAdmin = computed(() => user?.role === 'admin')

/* ===== BLOG ===== */
const blog = ref(null)

/* ===== LOAD BLOG FROM JSON-SERVER ===== */
const loadBlog = async () => {
  try {
    const res = await axios.get(
      `http://localhost:3000/posts/${route.params.id}`
    )
    blog.value = res.data
  } catch (err) {
    alert('Không tìm thấy bài viết')
    router.push('/blogs')
  }
}

/* ===== DELETE (ADMIN ONLY) ===== */
const deletePost = async () => {
  if (!confirm('Bạn có chắc muốn xóa bài?')) return

  await axios.delete(
    `http://localhost:3000/posts/${route.params.id}`
  )

  alert('Đã xóa bài')
  router.push('/blogs')
}

/* ===== COMMENTS (DEMO) ===== */
const comments = ref([])
const newComment = ref('')

const addComment = () => {
  comments.value.push({
    user: user?.name || 'Guest',
    content: newComment.value
  })
  newComment.value = ''
}

/* ===== LIFECYCLE ===== */
onMounted(() => {
  loadBlog()
})
</script>
