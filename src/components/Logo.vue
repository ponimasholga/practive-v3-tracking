<script setup>
import { PAGE_TIMELINE } from '../constants'
import { navigate } from '../route'
</script>
<template>
  <a :href="`#${PAGE_TIMELINE}`" @click="navigate(PAGE_TIMELINE)">
    <img class="h-9" src="../assets/img/logo.png" alt="Logo">
  </a>
</template>