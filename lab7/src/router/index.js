import { createRouter, createWebHistory } from "vue-router";

import Bai1 from "../views/Bai1.vue";
import Bai2 from "../views/Bai2.vue";
import Bai3 from "../views/Bai3.vue";
import Bai4 from "../views/Bai4.vue";

const routes = [
  { path: "/", component: Bai1 },
  { path: "/bai2", component: Bai2 },
  { path: "/bai3", component: Bai3 },
  { path: "/bai4", component: Bai4 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;