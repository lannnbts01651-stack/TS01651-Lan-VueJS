<template>
  <LoginComponent
    v-if="!isLoggedIn"
    @loggedIn="handleLoginSuccess"
  />

  <CommentComponent
    v-else
    :username="loggedUser"
  />
</template>

<script setup>
import { ref } from "vue";
import LoginComponent from "../components/LoginComponent.vue";
import CommentComponent from "../components/CommentComponent.vue";

const isLoggedIn = ref(false);
const loggedUser = ref("");

function handleLoginSuccess(username) {
  loggedUser.value = username;
  isLoggedIn.value = true;
}
</script>