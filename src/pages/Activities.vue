<script setup>
import ActivityForm from '../components/ActivityForm.vue'
import ActivityItem from '../components/ActivityItem.vue'
import ActivitiesEmptyState from '../components/ActivitiesEmptyState.vue'
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
  <div class="flex flex-col grow">
    <ul v-if="activities.length" class="divide-y grow">
      <ActivityItem
        v-for="activity in activities"
        :key="activity"
        :activity="activity"
        @delete="emit('deleteActivity', activity)"
      /> 
    </ul>
    <ActivitiesEmptyState v-else/> 
    <ActivityForm @submit="emit('createActivity', $event)"/>
  </div>
</template>