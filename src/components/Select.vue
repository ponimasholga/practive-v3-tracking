<script setup>
import { computed } from 'vue'
import Button from '../components/Button.vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { validateSelectOptions, isUndefinedOrNull, isNumberOrNull } from '../validators'
import { 
  BUTTON_TYPE_NEUTRAL
} from '../constants'

const props = defineProps({
	selected: Number,
  options: {
		required: true,
		type: Array,
    validator: validateSelectOptions
	},
	placeholder: {
		required: true,
		default: 'Rest',
	}
})

const emit = defineEmits({
  select: isNumberOrNull
})

const isNotSelected = computed(() => {
  return isUndefinedOrNull(props.selected)
})

</script>

<template>
	<div class="flex gap-2">

	<Button :type="BUTTON_TYPE_NEUTRAL" @click="emit('select' , null)">
      <XMarkIcon class="h-8"/>
	</Button>

    <select
      class="w-full truncate rounded bg-gray-100 py-1 px-2 text-2xl"
      @change="emit('select', +$event.target.value)" 
    >
			<option :selected="isNotSelected" disabled value="">{{ placeholder }}</option>
			<option :selected="value === selected" v-for="{value, label} in options" :key="value" :value="value">
				{{ label }}
			</option>
		</select>
	</div>
</template>