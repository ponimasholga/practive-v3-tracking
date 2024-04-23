<script setup>
import { PERIOD_SELECT_OPTIONS, BUTTON_TYPE_DANGER , BUTTON_TYPE_NEUTRAL } from '../constants'
import Button from '../components/Button.vue'
import Select from '../components/Select.vue'
import { TrashIcon } from '@heroicons/vue/24/outline'
import { isActivityValid, isUndefined, isNumber, isNumberOrNull } from '../validators'

defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid
  }
})

const emit = defineEmits({
  setSecondsToComplete: isNumber,
  delete: isUndefined
})
</script>

<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <Button :type="BUTTON_TYPE_DANGER" @click="emit('delete')">
        <TrashIcon class="h-8"/>
      </Button>
      <span class="truncate text-x1">{{activity.name}}</span>
    </div>
    <div>
      <Select 
        class="font-mono" 
        :selected="activity.secondsToComplete || null" 
        placeholder="hh:mm" 
        :options="PERIOD_SELECT_OPTIONS"
        @select="emit('setSecondsToComplete' , $event || 0)" 
      />
    </div>
  </li>
</template>