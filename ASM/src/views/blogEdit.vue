<template>
  <div class="container mt-4">
    <h3>Sửa bài viết</h3>

    <input v-model="post.title" class="form-control mb-2" />
    <textarea v-model="post.description" class="form-control mb-2"></textarea>

    <button class="btn btn-success" @click="updatePost">
      Lưu thay đổi
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const router = useRouter()
const post = ref({})

onMounted(async () => {
  const res = await axios.get(`http://localhost:3000/posts/${route.params.id}`)
  post.value = res.data
})

const updatePost = async () => {
  await axios.put(
    `http://localhost:3000/posts/${route.params.id}`,
    post.value
  )
  alert('Cập nhật thành công')
  router.push(`/blogs/${route.params.id}`)
}
</script>
