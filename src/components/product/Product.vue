<script setup lang="ts">
import { getProductImageUrl } from "@/lib/utils";
defineProps<{
  order: number;
  name: string;
  description?: string;
  src: string;
  imgName: string;
}>();
</script>

<template>
  <!-- v-motion-slide-visible-once-bottom -->
  <div class="flex gap-10 p-5 rounded-xl hover:bg-slate-200 transition-[background-color] group duration-300">
    <div
      class="w-32 h-32 rounded-full overflow-hidden bg-blue-300 flex-shrink-0"
      v-motion
      :initial="{
        opacity: 0,
        x: -100,
      }"
      :enter="{
        opacity: 1,
        x: 0,
        transition: {
          type: 'spring',
          stiffness: '200',
          damping: 50,
          delay: order * 300,
          duration: 500,
        },
      }"
      :leave="{
        opacity: 0,
        x: -100,
        transition: {
          type: 'spring',
          stiffness: '200',
          damping: 50,
          delay: order * 300,
          duration: 500,
        },
      }"
    >
      <img :src="getProductImageUrl(src)" :alt="imgName" class="object-cover object-center w-full h-full group-hover:scale-105 duration-500" />
    </div>
    <div
      class="flex flex-col gap-5"
      v-motion
      :initial="{
        opacity: 0,
        y: 100,
      }"
      :enter="{
        opacity: 1,
        y: 0,
        transition: {
          type: 'spring',
          stiffness: '200',
          damping: 50,
          delay: order * 300 + 200,
          duration: 500,
        },
      }"
    >
      <h1 class="capitalize font-bold text-3xl">{{ imgName }}</h1>
      <p>
        {{ description }}
      </p>
    </div>
  </div>
</template>
