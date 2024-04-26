<script setup>
import { ref, computed, provide } from 'vue'
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './constants'
import {
  normalizePageHash,
  generateTimelineItems,
  generateActivities,
  generateActivitySelectOptions
} from './functions'
import Header from './components/Header.vue'
import Nav from './components/Nav.vue'
import Timeline from './pages/Timeline.vue'
import Activities from './pages/Activities.vue'
import Progress from './pages/Progress.vue'

const currentPage = ref(normalizePageHash())

const activities = ref(generateActivities())

const timelineItems = ref(generateTimelineItems(activities.value))

const timeline = ref()

const activitySelectOptions = computed(() => generateActivitySelectOptions(activities.value))

function goTo(page) {
  if (currentPage.value === PAGE_TIMELINE && page === PAGE_TIMELINE) {
    timeline.value.scrollToHour()
  }

  if (page !== PAGE_TIMELINE) {
    document.body.scrollIntoView()
  }

  currentPage.value = page
}

function createActivity(activity) {
  activities.value.push(activity)
}

function deleteActivity(activity) {
  timelineItems.value.forEach((timelineItem) => {
    if (timelineItem.activityId === activity.id) {
      timelineItem.activityId = null
      timelineItem.activitySeconds = 0
    }
  })

  activities.value.splice(activities.value.indexOf(activity), 1)
}

function setTimelineItemActivity(timelineItem, activity) {
  timelineItem.activityId = activity.id
}

function updateTimelineItemActivitySeconds(timelineItem, activitySeconds) {
  timelineItem.activitySeconds += activitySeconds
}

function setActivitySecondsToComplete(activity, secondsToComplete) {
  activity.secondsToComplete = secondsToComplete
}

provide('updateTimelineItemActivitySeconds', updateTimelineItemActivitySeconds)
provide('activitySelectOptions', activitySelectOptions.value)
provide('timelineItems', timelineItems.value)
provide('activities', activities.value)
</script>

<template>
  <Header @navigate="goTo($event)" />

  <main class="flex flex-grow flex-col">
    <Timeline
      v-show="currentPage === PAGE_TIMELINE"
      :timeline-items="timelineItems"
      :current-page="currentPage"
      ref="timeline"
      @set-timeline-item-activity="setTimelineItemActivity"
    />
    <Activities
      v-show="currentPage === PAGE_ACTIVITIES"
      :activities="activities"
      @create-activity="createActivity"
      @delete-activity="deleteActivity"
      @set-activity-seconds-to-complete="setActivitySecondsToComplete"
    />
    <Progress v-show="currentPage === PAGE_PROGRESS" />
  </main>

  <Nav :current-page="currentPage" @navigate="goTo($event)" />
</template>