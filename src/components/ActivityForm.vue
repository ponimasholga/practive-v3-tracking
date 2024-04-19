<script setup>
import { ref, nextTick } from 'vue'
import { PlusIcon } from '@heroicons/vue/24/solid'
import { id } from '../functions'
import Button from '../components/Button.vue'
import { isActivityValid } from '../validators'

const emit = defineEmits({
  submit: isActivityValid
})

const name = ref('')

async function submit() {
  emit('submit', {
    id: id(),
    name: name.value,
    secondsToComplete: 0
  })

  name.value = ''

  await nextTick()

  window.scrollTo(0, document.body.scrollHeight)
}
</script>

<template>
  <form @submit.prevent="submit" class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4">
    <input 
      type="text"
      v-model="name"
      placeholder="Activity name"
      class="w-full rounded border px-4 text-x1"
    >
    <Button :disabled="name.trim() === ''">
      <PlusIcon class="h-8"/>
    </Button>
  </form>
</template>