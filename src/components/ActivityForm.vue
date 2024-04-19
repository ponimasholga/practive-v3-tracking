<script setup>
import { ref, nextTick } from 'vue'
import { PlusIcon } from '@heroicons/vue/24/solid'
import Button from '../components/Button.vue'
import { isActivityValid } from '../validators'

const emit = defineEmits({
  submit: isActivityValid
})

const activity = ref('')

async function submit() {
  emit('submit', activity.value);

  activity.value = ''

  await nextTick()

  window.scrollTo(0, document.body.scrollHeight)
}
</script>

<template>
  <form @submit.prevent="submit" class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4">
    <input 
      type="text"
      placeholder="Activity name"
      class="w-full rounded border px-4 text-x1" 
      :value="activity" 
      @input="activity = $event.target.value"
    >
    <Button :disabled="activity.trim() === ''">
      <PlusIcon class="h-8"/>
    </Button>
  </form>
</template>