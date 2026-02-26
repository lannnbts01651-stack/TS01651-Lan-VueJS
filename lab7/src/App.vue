<template>
  <div>
    <nav class="navbar">
      <router-link to="/">Bài 1</router-link>
      <router-link to="/bai2">Bài 2</router-link>
      <router-link to="/bai3">Bài 3</router-link>
      <router-link to="/bai4">Bài 4</router-link>
    </nav>

    <router-view />
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.navbar {
  background: #222;
  padding: 15px;
  display: flex;
  gap: 20px;
}

.navbar a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.navbar a.router-link-active {
  color: #667eea;
}
</style>