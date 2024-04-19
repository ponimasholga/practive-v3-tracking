<script setup>
import ActivityForm from '../components/ActivityForm.vue'
import ActivityItem from '../components/ActivityItem.vue'
import { validateActivities, isActivityValid } from '../validators'

defineProps({
  activities: {
    required: true,
    type: Array,
    validator: validateActivities
  }
})

const emit = defineEmits({
  createActivity: isActivityValid,
  deleteActivity: isActivityValid
})


</script>

<template>
  <div>
    <ul class="divide-y">
      <ActivityItem
        v-for="activity in activities"
        :key="activity"
        :activity="activity"
        @delete="emit('deleteActivity', activity)"
      /> 
    </ul>
    <ActivityForm @submit="emit('createActivity', $event)"/>
  </div>
</template>