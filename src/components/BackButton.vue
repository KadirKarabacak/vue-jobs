<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <section>
    <div class="container m-auto py-6 px-6">
      <RouterLink
        :to="`/jobs`"
        class="text-green-500 hover:text-green-600 flex items-center gap-2 text-lg"
      >
        <i class="pi pi-arrow-circle-left text-lg"></i> Back to Jobs
      </RouterLink>
    </div>
  </section>
</template>
