import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios' // 👈 THÊM DÒNG NÀY

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

// 👇 FIX CỨNG API
axios.defaults.baseURL = 'http://localhost:3000'

createApp(App)
  .use(router)
  .mount('#app')
