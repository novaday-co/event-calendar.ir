<template>
  <div id="EnabledDays">
    <h1>
      Enabled Days
    </h1>

    <try-option
      :title="enabledDayTitle"
      :description="evabledDayDescription"
      :code="evabledDayCode"
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
      evabledDayDescription: 'Declares days that can be selected',
      enabledDayTitle: { name: 'enabled days', description: 'List <EventDateTime>' },
      evabledDayCode: `EventCalendar(
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
