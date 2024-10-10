<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  bg: {
    type: String,
    default: 'bg-gray-100'
  }
})
</script>

<template>
  <div :class="`p-6 rounded-lg shadow-md ${bg}`">
    <!-- Slot is the content that is passed to the component like children prop in React -->
    <slot></slot>
  </div>
</template>
