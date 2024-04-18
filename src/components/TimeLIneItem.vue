<script setup>
import { ref } from 'vue'
import Select from '../components/Select.vue'
import TimelineHour from '../components/TimelineHour.vue'

import { isTimelineItemValid, validateSelectOptions} from '../validators'

const options = [
  { value: 1, label: 'Coding'},
  { value: 2, label: 'Reading'},
  { value: 3, label: 'Trainig'}
]

const selectedActivityId = ref(1)

defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid
  },
  activitySelectOptions: {
    required: true,
    type: Array,
    validator: validateSelectOptions
  }
})


</script>

<template>
  <li 
    class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
    <TimelineHour :hour="timelineItem.hour"/>
    <Select 
    :selected="selectedActivityId" 
    :options="activitySelectOptions" 
    placeholder="Rest"
    @select="selectedActivityId = $event"
    />
  </li>
</template>