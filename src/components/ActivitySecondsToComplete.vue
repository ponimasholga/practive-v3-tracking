<script setup>
import {computed, inject} from 'vue'
import { formatSeconds, getTotalActivitySeconds } from '../functions'
import { isActivityValid } from '../validators'
import { timelineItemsKey } from '../keys'

const props = defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid
  }
})

const classes = computed(() => 
  `flex items-center rounded bg-purple-100 px-2 font-mono text-xl text-purple-600 ${colorClasses.value}`
)

const timelineItems = inject(timelineItemsKey)

const colorClasses = computed(() => 
  secondsDiff.value < 0 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-red-600'
)

const seconds = computed(() => `${sign.value}${formatSeconds(secondsDiff.value)}`)

const sign = computed(() => secondsDiff.value >= 0 ? '+': '-')

const secondsDiff = computed(() => 
  getTotalActivitySeconds(props.activity, timelineItems) - props.activity.secondsToComplete
);
</script>

<template>
  <div :class="classes">
    {{ (seconds)}}
  </div>
</template>