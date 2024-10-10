<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <i class="pi pi-exclamation-triangle text-9xl text-yellow-500 mb-4"></i>
    <h1 class="text-4xl font-bold mb-4">404 - Page Not Found</h1>
    <p class="text-lg mb-8">The page you are looking for does not exist.</p>
    <RouterLink
      to="/"
      class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-300"
      >Go Back</RouterLink
    >
  </div>
</template>
