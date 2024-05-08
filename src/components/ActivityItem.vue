<script setup>
import { inject } from 'vue'
import { TrashIcon } from '@heroicons/vue/24/outline'
import { BUTTON_TYPE_DANGER } from '../constants'
import { isActivityValid } from '../validators'
import Button from './Button.vue'
import Select from './Select.vue'
import { setActivitySecondsToCompleteKey, periodSelectOptionsKey, deleteActivityKey } from '../keys'

defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid
  }
})

const setActivitySecondsToComplete = inject(setActivitySecondsToCompleteKey)
const periodSelectOptions = inject(periodSelectOptionsKey)
const deleteActivity = inject(deleteActivityKey)
</script>

<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <Button :type="BUTTON_TYPE_DANGER" @click="deleteActivity(activity)">
        <TrashIcon class="h-8" />
      </Button>
      <span class="truncate text-xl">{{ activity.name }}</span>
    </div>
    <div class="flex gap-2">
      <Select
        class="grow font-mono"
        placeholder="hh:mm"
        :options="periodSelectOptions"
        :selected="activity.secondsToComplete || null"
        @select="setActivitySecondsToComplete(activity, $event || 0)"
      />
      <ActivitySecondsToComplete v-if="activity.secondsToComplete" :activity="activity" />
    </div>
  </li>
</template>