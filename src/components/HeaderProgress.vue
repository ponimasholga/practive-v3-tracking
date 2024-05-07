<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
import { navigate } from '../route'
import { PAGE_PROGRESS } from '../constants'
</script>
<template>
  <a :href="`#${PAGE_PROGRESS}`"  @click="navigate(PAGE_PROGRESS)" class="text-sm">
    <span v-if="false" class="flex items-center gap-1">
      <span>Day complete</span>
      <CheckCircleIcon class="h-7 text-green-500"/>
    </span>
    <span v-else class="flex items-center gap-1">
      <span>Progress: <span class="font-mono">20%</span></span>
      <span class="h-3 w-3 rounded-full bg-red-500"></span>
    </span>
  </a>
</template>