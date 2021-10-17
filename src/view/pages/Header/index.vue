<template>
  <div id="Header">
    <h1>
      this is Header content
    </h1>

    <try-option
      :title="weekDayTitle"
      :description="weekDayDescription"
      :images="imageArray"
      :array="lendthFields"
      :scrollDescription="scrollDescription"
      type="radio"
      :scrollDest="scrollDest"
      :code="weekDayCode"
      :codeBox="true"
    />

    <try-option
      :title="monthStringTitle"
      :description="monthStringDescription"
      :images="imageArray"
      :array="lendthFields"
      :code="monthStringCode"
      :codeBox="true"
      type="radio"
      id="monthStringTypes"
    />
  </div>
</template>

<script>
import TryOption from '../../../components/TryOptions.vue'
export default {
  name: 'Header',
  components: {
    TryOption
  },
  data () {
    return {
      lendthFields: [{ name: 'Full' }, { name: 'Short' }],
      weekDayDescription: '',
      monthStringDescription: 'Will allow user to change view type directly in runtime:',
      imageArray: [
        'src/assets/images/screenshout1.jpg',
        'src/assets/images/screenshout2.jpg'
      ],
      weekDayTitle: {
        name: 'week day string types',
        description: 'WeekDayStringTypes'
      },
      monthStringTitle: { name: 'month string types', description: 'MonthStringTypes' },
      weekDayCode: `EventCalendar(
  calendarType: CalendarType.GREGORIAN,
  headersStyle: HeadersStyle(weekDayStringType: WeekDayStringTypes.FULL),
)`,
      monthStringCode: `EventCalendar(
  calendarType: CalendarType.GREGORIAN,
  headersStyle: HeadersStyle(monthStringType: MonthStringTypes.FULL),
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
