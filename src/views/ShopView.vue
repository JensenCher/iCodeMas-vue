<script setup lang="ts">
import Product from "@/components/product/Product.vue";
import { getData } from "@/db/query";
import { ref } from "vue";

// declare an empty array variable to hold your data
const products = ref<ProductProps[]>([]);

// //create a function to fetch your data
// function getImages() {
//   fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
//     .then((response) => response.json())
//     .then((data) => {
//       products.value = data;
//       console.log(data);
//     });
// }

const getProducts = async () => {
  await getData().then((res) => {
    products.value = res;
    return res;
  });
};
getProducts();

interface ProductProps {
  id: number;
  name: string;
  description: string;
  imageSrc: string;
  imageName: string;
  createdAt: Date;
  updatedAt: Date;
}
</script>

<template>
  <main class="flex flex-col items-center gap-5 pb-20">
    <h1 class="font-bold text-xl">Shop</h1>
    <div class="">
      <transition-group>
        <Product
          v-for="(product, index) in products"
          :key="product.id"
          :order="index"
          :name="product.name"
          :src="product.imageSrc"
          :img-name="product.imageName"
          :description="product.description"
        />
      </transition-group>
    </div>
  </main>
</template>
