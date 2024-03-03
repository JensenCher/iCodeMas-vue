<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "./components/global/Header.vue";
import Footer from "./components/global/Footer.vue";
</script>

<template>
  <Header />
  <div class="min-h-screen">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <Component :is="Component" />
      </transition>
    </router-view>
  </div>
  <Footer />
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
