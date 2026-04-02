<script setup>
import Navbar from './components/navbar.vue'
import Footer from './components/AppFooter.vue'
</script>

<template>
  <Navbar></Navbar>
  <router-view ></router-view>
  <Footer></Footer>
</template>
