<template>
  <div id="ColorizedDays">
    <h1>
      Colorized days
    </h1>

    <try-option
      :title="title1"
      :description="description1"
      :code="code"
      :codeBox= true
      type="none"
    />


  </div>
</template>

<script>
import TryOption from "../../../components/TryOptions.vue";
  export default {
    name: 'ColorizedDays',
    components : {
      TryOption
    },
    data() {
      return {
        description1 :
          "Declares days that you want to show by different colors",
        title1 : {name:"colorized days" , description :"List <EventDateTime>"},
        code : `EventCalendar(
  calendarType: CalendarType.GREGORIAN,
  colorizedDays: [
    EventDateTime(year: 2021, month: 10, day: 12),
    EventDateTime(year: 2022, month: 7, day: 14),
  ],
)`
      }
    },
  }
</script>

<style>
  .Home {
    padding: 50px;
  }
</style>
