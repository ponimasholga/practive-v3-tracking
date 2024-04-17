<script setup>
import { PAGE_TIMELINE, PAGE_PROGRESS } from '../constants'
import Logo from '../components/Logo.vue'
import HeaderProgress from '../components/HeaderProgress.vue'
import { isPageValid } from '../validators'

const emit = defineEmits({
  navigate: isPageValid
})
</script>

<template>
  <header class="sticky top-0 z-20 flex items-center justify-between border-b bg-white p-3">
    <Logo @click="emit('navigate', PAGE_TIMELINE)"/>
    <HeaderProgress  @click="emit('navigate', PAGE_PROGRESS)"/> 
  </header>
</template>