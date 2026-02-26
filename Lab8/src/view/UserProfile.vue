<template>
  <div class="container mt-4">
    <h2>Trang cá nhân</h2>

    <router-link :to="{ name: 'UserProfileInfo' }" class="me-3">
      Thông tin
    </router-link>

    <router-link :to="{ name: 'UserProfileSettings' }">
      Cài đặt
    </router-link>

    <hr>

    <router-view></router-view>
  </div>
</template>