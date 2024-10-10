<script setup lang="ts">
import JobListing from '@/components/JobListing.vue'
import { RouterLink } from 'vue-router'
import { defineProps, onMounted, reactive } from 'vue'
// @ts-ignore
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import axios from 'axios'
import type { JobsType } from '@/interfaces/JobsType'
defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false
  }
})

// We use ref to create a reactive reference to the jobs data
// const jobs = ref<JobsType[]>([])

// But here we can use reactive to create a reactive reference to the jobs data
const state = reactive({
  jobs: [] as JobsType[],
  isLoading: true
})

onMounted(async () => {
  try {
    const response = await axios.get('/api/jobs')
    // And now here instead of using jobs.value we use state.jobs
    // jobs.value = response.data
    state.jobs = response.data
  } catch (error: any) {
    console.error('Error on fetching jobs:', error.message)
  } finally {
    state.isLoading = false
  }
})
</script>

<template>
  <section class="bg-green-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">Browse Jobs</h2>
      <div v-if="state.isLoading" class="flex justify-center items-center">
        <PulseLoader />
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobListing
          v-for="job in state.jobs.slice(0, limit || state.jobs.length)"
          :key="job.id"
          :job="job"
        />
      </div>
    </div>
  </section>
  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      to="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700 transition-all duration-300"
      >View All Jobs</RouterLink
    >
  </section>
</template>
