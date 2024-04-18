<script setup>
import TimeLIneItem from '../components/TimeLIneItem.vue'
import { isTimelineItemValid, validateSelectOptions } from '../validators'
defineProps({
  timelineItems: {
    required: true,
    type: Array,
  },
  activitySelectOptions: {
    required: true,
    type: Array,
    validator: validateSelectOptions
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