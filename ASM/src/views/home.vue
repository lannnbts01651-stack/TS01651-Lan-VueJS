<template>

  <!-- CAROUSEL ĐẦU TRANG -->
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">

    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></button>
    </div>

    <div class="carousel-inner">

      <div class="carousel-item active">
        <img src="/images/carou1.jpg" class="d-block w-100 carousel-img">
        <div class="carousel-caption d-none d-md-block">
          <h5>B&L Restaurant</h5>
          <p>Ẩm thực Nhật & Mỹ tinh tế</p>
        </div>
      </div>

      <div class="carousel-item">
        <img src="/images/carou2.jpg" class="d-block w-100 carousel-img">
        <div class="carousel-caption d-none d-md-block">
          <h5>B&L không gian</h5>
          <p>Không gian ấm cúng thoáng mát nhà hàng chúng tôi</p>
        </div>
      </div>

      <div class="carousel-item">
        <img src="/images/carou3.jpg" class="d-block w-100 carousel-img">
        <div class="carousel-caption d-none d-md-block">
          <h5>B&L Gian bếp</h5>
          <p>Bao quát cảnh làm tạo nên món ăn của chúng tôi</p>
        </div>
      </div>

    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </button>

    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon"></span>
    </button>

  </div>

<!--Bài viết-->
  <div class="container mt-4">

    <div class="row">
      <!-- LEFT -->
      <div class="col-md-7">
        <h5>Danh sách bài viết</h5>
        <!-- code danh sách bài viết ở đây -->

        <div class="row">
          <div class="col-md-6 mb-4" v-for="post in posts" :key="post.id">
            <div class="card h-100">
              <router-link :to="`/blogs/${post.id}`">
                <img :src="post.image" class="card-img-top blog-img">
              </router-link>

              <div class="card-body">
                <h5 class="card-title">{{ post.title }}</h5>
                <p class="card-text">{{ post.description }}</p>
                <small class="text-muted">
                  {{ post.author }} · {{ post.createdAt }}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>


      <!-- DIVIDER -->
      <div class="col-md-1 d-flex justify-content-center">
        <div class="divider"></div>
      </div>


      <!-- RIGHT -->
      <div class="col-md-4">
        <h5>Best Seller</h5>
        <!-- nội dung bên phải -->

        <div class="card mb-3" v-for="item in bestSellers" :key="item.id">
          <img :src="item.image" class="card-img-top best-img">
          <div class="card-body">
            <h6 class="mb-1">{{ item.title }}</h6>
            <small class="text-muted">{{ item.author }}</small>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const posts = ref([])
const bestSellers = ref([])

onMounted(async () => {
  const res = await axios.get('http://localhost:3000/posts')
  posts.value = res.data

  // 🔀 RANDOM 4 BEST SELLER
  bestSellers.value = [...res.data]
    .sort(() => Math.random() - 0.5)
    .slice(0, 4)
})
</script>

<style scoped>
.blog-img {
  height: 200px;
  object-fit: cover;
}

.best-img {
  height: 120px;
  object-fit: cover;
}

.divider {
  width: 1px;
  background: linear-gradient(to bottom,
      transparent,
      #000,
      transparent);
}

.carousel-img {
  height: 350px;      /* chỉnh số này nhỏ / lớn tùy bạn */
  object-fit: cover;  /* cắt ảnh cho đẹp, không méo */
}

</style>
