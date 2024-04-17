<script setup>
import TimeLIneItem from '../components/TimeLIneItem.vue'

defineProps({
  timelineItems: {
    required: true,
    type: Array
  }
})
</script>

<template>
  <div class="mt-7">
    <ul>
      <TimeLIneItem 
        v-for="timelineItem in timelineItems" 
        :key="timelineItem.hour" 
        :timeline-item="timelineItem"
      />
    </ul>
  </div>
</template>