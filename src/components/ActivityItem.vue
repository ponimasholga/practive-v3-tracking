<script setup>
import { ref } from 'vue'
import { PERIOD_SELECT_OPTIONS, BUTTON_TYPE_DANGER , BUTTON_TYPE_NEUTRAL } from '../constants'
import Button from '../components/Button.vue'
import Select from '../components/Select.vue'
import { TrashIcon } from '@heroicons/vue/24/outline'
import { isActivityValid } from '../validators'

defineProps({
  activity: {
    required: true,
    type: String,
    validator: isActivityValid
  }
})

const secondsToComplete = ref(null)
</script>

<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <Button :type="BUTTON_TYPE_DANGER">
        <TrashIcon class="h-8"/>
      </Button>
      <span class="truncate text-x1">{{activity}}</span>
    </div>
    <div>
      <Select 
        class="font-mono" 
        :selected="secondsToComplete" 
        placeholder="h:mm" 
        :options="PERIOD_SELECT_OPTIONS"
        @select="secondsToComplete = $event"
      />
    </div>
  </li>
</template>