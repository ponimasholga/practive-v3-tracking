<script setup>
import Button from '../components/Button.vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { validateSelectOptions } from '../validators'
//defineProps(['selected', 'options', 'placeholder'])

defineProps({
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
  select(value) {
    return typeof value === 'number'
  }
})

</script>

<template>
	<div class="flex gap-2">

		<Button @click="emit('select' , null)">
      <XMarkIcon class="h-8"/>
	  </Button>
		<!-- Спросить про преобразования в число через + -->
    <select
      class="w-full truncate rounded bg-gray-100 py-1 px-2 text-2xl"
      @change="emit('select', +$event.target.value)" 
    >
			<option selected disabled value="">{{ placeholder }}</option>
			<option :selected="value === selected" v-for="{value, label} in options" :key="value" :value="value">
				{{ label }}
			</option>
		</select>
	</div>
</template>