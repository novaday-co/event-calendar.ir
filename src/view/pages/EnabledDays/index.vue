<template>
  <div id="EnabledDays">
    <h1>
      Enabled Days
    </h1>

    <try-option
      :title="title1"
      :description="description1"
      :code="code"
      :codeBox="true"
      type="none"
    />
  </div>
</template>

<script>
import TryOption from '../../../components/TryOptions.vue'
export default {
  name: 'EnabledDays',
  components: {
    TryOption
  },
  data () {
    return {
      description1: 'Declares days that can be selected',
      title1: { name: 'enabled days', description: 'List <EventDateTime>' },
      code: `EventCalendar(
  calendarType: CalendarType.GREGORIAN,
  enabledDays: [
    EventDateTime(year: 2021, month: 10, day: 12),
    EventDateTime(year: 2022, month: 7, day: 14),
  ],
)`
    }
  }
}
</script>

<style>
.Home {
  padding: 50px;
}
</style>
