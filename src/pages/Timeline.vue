<script setup>
import { PAGE_TIMELINE } from '@/constants'
import { ref, onMounted, watchPostEffect, nextTick } from 'vue'
import TimeLIneItem from '../components/TimeLIneItem.vue'
import {
  validateTimelineItems,
  validateSelectOptions,
  validateActivities,
  isTimelineItemValid,
  isActivityValid,
  isPageValid
} from '../validators'

const props = defineProps({
  timelineItems: {
    required: true,
    type: Array,
    validator: validateTimelineItems
  },
  activities: {
    required: true,
    type: Array,
    validator: validateActivities
  },
  activitySelectOptions: {
    required: true,
    type: Array,
    validator: validateSelectOptions
  },
  currentPage: {
   required: true,
   type: String,
   validator: isPageValid
  }
})


defineExpose({
  scrollToHour
})
const timelineItemRefs = ref({})

const emit = defineEmits({
  setTimelineItemActivity(timelineItem, activity) {
    return [isTimelineItemValid(timelineItem), isActivityValid(activity)].every(Boolean)
  }
})

watchPostEffect(async () => {
  if (props.currentPage === PAGE_TIMELINE) {

    await nextTick()
    scrollToHour(null, false)
  }
});

function scrollToHour(hour = null, isSmooth = true) {
  hour ??= new Date().getHours()
  const optiopns = { behavior:  isSmooth ? 'smooth'  : 'instant'}
  if (hour === 0) {
    document.body.scrollIntoView(optiopns)
  } else {
    timelineItemRefs.value[hour - 1].$el.scrollIntoView(optiopns)
  }
}



</script>

<template>
  <div class="mt-7">
    <ul>
      <TimeLIneItem 
        v-for="timelineItem in timelineItems" 
        :key="timelineItem.hour" 
        :timeline-item="timelineItem"
        :activities="activities"
        :activity-select-options="activitySelectOptions"
        @scroll-to-hour="scrollToHour"
        ref="timelineItemRefs"
        @select-activity="emit('setTimelineItemActivity', timelineItem, $event)"
      />
    </ul>
  </div>
</template>