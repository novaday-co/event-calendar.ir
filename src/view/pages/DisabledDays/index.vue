<template>
  <div id="DisabledDays">
    <h1>
      Disabled days
    </h1>

    <try-option
      :title="disabledDayTitle"
      :description="disabledDayDescription"
      :code="disabledDayCode"
      :codeBox="true"
      type="none"
    />
  </div>
</template>

<script>
import TryOption from '../../../components/TryOptions.vue'
export default {
  name: 'DisabledDays',
  components: {
    TryOption
  },
  data () {
    return {
      disabledDayDescription: 'Declares days that cant be used',
      disabledDayTitle: { name: 'disabled days', description: 'List <EventDateTime>' },
      disabledDayCode: `EventCalendar(
  calendarType: CalendarType.GREGORIAN,
  disabledDays: [
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
  padding: 50px
}
</style>
