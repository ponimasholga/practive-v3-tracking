<script setup>
import Button from '../components/Button.vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

//defineProps(['selected', 'options', 'placeholder'])

defineProps({
	selected: Number,
  options: {
		required: true,
		type: Array,
    validator(options) {
      return options.every(({ value, label }) => typeof value === 'number' && typeof label === 'string')
    }
	},
	placeholder: {
		required: true,
		default: 'Rest',
	}
})
</script>

<template>
	<div class="flex gap-2">

		<Button>
      <XMarkIcon class="h-8"/>
	  </Button>
		
		<select class="w-full truncate rounded bg-gray-100 py-1 px-2 text-2xl" name="" id="">
			<option selected disabled value="">{{ placeholder }}</option>
			<option :selected="value === selected" v-for="{value, label} in options" :key="value" :value="value">
				{{ label }}
			</option>
		</select>
	</div>
</template>