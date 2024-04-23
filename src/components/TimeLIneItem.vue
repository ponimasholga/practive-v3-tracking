<script setup>
import { NULLABLE_ACTIVITY, BUTTON_TYPE_DANGER, BUTTON_TYPE_WARNING, BUTTON_TYPE_SUCCESS } from '../constants'

import {
  isTimelineItemValid,
  isActivityValid,
  validateSelectOptions,
  validateActivities,
  isHourValid
} from '../validators'

import TimelineStopWatch from '../components/TimelineStopWatch.vue'
import Select from '../components/Select.vue'
import TimelineHour from '../components/TimelineHour.vue'

const props = defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid
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
  }
})

const emit = defineEmits({
  selectActivity: isActivityValid,
  scrollToHour: isHourValid
})



function selectActivity(id) {
  emit('selectActivity', findActivityById(id))
}

function findActivityById(id) {
  return props.activities.find((activity) => activity.id === id) || NULLABLE_ACTIVITY
}

</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
    <TimelineHour :hour="timelineItem.hour" @click.prevent="emit('scrollToHour', timelineItem.hour)"/>
    <Select
      placeholder="Rest"
      :selected="timelineItem.activityId"
      :options="activitySelectOptions"
      @select="selectActivity"
    />

    <TimelineStopWatch :seconds="timelineItem.activitySeconds" :hour="timelineItem.hour" />
  </li>
</template>