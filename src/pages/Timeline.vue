<script setup>
import TimeLIneItem from '../components/TimeLIneItem.vue'
import { HOURS_IN_DAY } from '../constants'

defineProps({
  timelineItems: {
    required: true,
    type: Array,
    validator(timelineItems) {
      return timelineItems.every(
        ({ hour }) => typeof hour === 'number' && hour >= 0 && hour < HOURS_IN_DAY
      )
    }
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