<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<template>
  <header class="max-w-7xl flex flex-col items-center justify-center w-full mx-auto">
    <RouterLink to="/" class="text-xl font-bold p-3 rounded-xl">iCodeMas</RouterLink>
    <nav class="">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/faq">FAQ</RouterLink>
      <RouterLink to="/shop">Shop</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  display: flex;
  justify-content: center;
}

nav a.router-link-exact-active {
  color: var(--color);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    font-size: 1rem;
    padding: 0.5rem 0;
  }
}
</style>
