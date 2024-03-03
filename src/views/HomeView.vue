<script setup lang="ts">
import Banner from "@/components/home/Banner.vue";
</script>

<template>
  <main>
    <div class="flex flex-col items-center gap-5 overflow-hidden">
      <h1 class="text-xl md:text-3xl font-semibold mt-5">Welcome to iCodeMas {{ new Date().getFullYear() }}</h1>
      <div class="max-w-7xl overflow-hidden">
        <Banner />
      </div>
    </div>
  </main>
</template>
