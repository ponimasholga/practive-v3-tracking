<script>
  import { BUTTON_TYPE_DANGER , BUTTON_TYPE_NEUTRAL, BUTTON_TYPE_PRIMARY, BUTTON_TYPE_WARNING, BUTTON_TYPE_SUCCESS } from '../constants'
  
  const typeClasses = {
    [BUTTON_TYPE_PRIMARY]: 'bg-purple-500 enabled:hover:bg-purple-600 text-white',
    [BUTTON_TYPE_NEUTRAL]: 'bg-gray-100 enabled:hover.bg-gray-200',
    [BUTTON_TYPE_DANGER]: 'bg-red-500 enabled:hover:bg-red-500 text-white',
    [BUTTON_TYPE_WARNING]: 'bg-yellow-300 enabled:hover.bg-gray-200',
    [BUTTON_TYPE_SUCCESS]: 'bg-green-500 enabled:hover:bg-red-500 text-white'
  }
</script>


<script setup>
import { isButtonTypeValid } from '../validators'

  defineProps({
    type: {
      default: BUTTON_TYPE_PRIMARY,
      type: String,
      validator: isButtonTypeValid
    }
  })


</script>

<template>
  <button :class="`${typeClasses[type]} rounded p-3 disabled:cursor-not-allowed disaled:opacity-50`">
    <slot />
  </button>
</template>