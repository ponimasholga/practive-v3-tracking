<script setup>
import { ref } from 'vue'
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './constants'
import {
  normalizePageHash,
  generateTimelineItems,
  generateActivitySelectOptions
} from './functions'
import Header from './components/Header.vue'
import Nav from './components/Nav.vue'
import Timeline from './pages/Timeline.vue'
import Activities from './pages/Activities.vue'
import Progress from './pages/Progress.vue'

const currentPage = ref(normalizePageHash())

const timelineItems = generateTimelineItems()

const activities = ref(['Coding', 'Reading', 'Training'])

const activitySelectOptions = generateActivitySelectOptions(activities.value)

function goTo(page) {
  currentPage.value = page
}

function createActivity(activity) {
  activities.value.push(activity)
}

function deleteActivity(activity) {
  activities.value.splice(activities.value.indexOf(activity), 1)
}
</script>

<template>
  <div>
    <Header 
      @navigate="goTo($event)"
    />

    <main class="flex flex-grow flex-col">
      <Timeline 
      v-show="currentPage === PAGE_TIMELINE"
      :timeline-items="timelineItems"
      :activity-select-options="activitySelectOptions"
    />
      <Activities 
      v-show="currentPage === PAGE_ACTIVITIES"
      :activities="activities"
      @delete-activity="deleteActivity"
      @create-activity="createActivity"
      />
      <Progress v-show="currentPage === PAGE_PROGRESS"/>
    </main>

    <Nav :current-page="currentPage" @navigate="goTo($event)"/>
    
  </div>
</template>
