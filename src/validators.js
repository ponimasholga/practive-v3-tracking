import { NAV_ITEMS, HOURS_IN_DAY } from './constants'

export function isPageValid(page) {
  return Object.keys(NAV_ITEMS).includes(page)
}

export function isTimelineValid({hour}) {
  return typeof hour === 'number' && hour >= 0 && hour < HOURS_IN_DAY
}

export function validateSelectOptions(options) {
  return options.every(isSelectOptionValid)
}

function isSelectOptionValid({ value, label }) {
  return typeof value === 'number' && typeof label === 'string'
}

export function validateTimelineItems(timelineItems) {
  return timelineItems.every(isTimelineValid)
}