<script setup>
import TimeLIneItem from '../components/TimeLIneItem.vue'
import { validateTimelineItems } from '../validators'
defineProps({
  timelineItems: {
    required: true,
    type: Array,
    validator: validateTimelineItems
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