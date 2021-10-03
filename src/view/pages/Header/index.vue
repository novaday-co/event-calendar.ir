<template>
  <div id="Header">
    <h1>
      this is Header content
    </h1>

    <try-option
        :title="title1"
        :description="description1"
        :images="images1"
        :array="fields1"
        :scrollDescription="scrollDescription"
        type="radio"
        :scrollDest="scrollDest"
        :code="code"
        :codeBox= true
      />

      <try-option
        :title="title2"
        :description="description2"
        :images="images1"
        :array="fields1"
        :code="code1"
        :codeBox= true
        type="radio"
        id="monthStringTypes"
      />



  </div>
</template>

<script>
import TryOption from "../../../components/TryOptions.vue";
  export default {
    name: 'Header',
    components : {
      TryOption
    },
    data() {
      return {
        fields1:[{ name: "Full"} , {name:"Short"}],
        description1:"",
        description2:"Will allow user to change view type directly in runtime:",
        images1: [
        "src/assets/images/screenshout1.jpg",
        "src/assets/images/screenshout2.jpg"
        ],
        scrollDescription: "Scroll to month string types",
        scrollDest:"monthStringTypes",
        title1 : {name:"week day string types" , description :"WeekDayStringTypes"},
        title2 : {name:"month string types" , description :"MonthStringTypes"},
        code: "EventCalendar(calendarType: CalendarType.GREGORIAN,headersStyle: HeadersStyle(weekDayStringType: WeekDayStringTypes.FULL),)",
        code1: "EventCalendar(calendarType: CalendarType.GREGORIAN,headersStyle: HeadersStyle(monthStringType: MonthStringTypes.FULL),)"
      }
    },
  }
</script>

<style>
  .Home {
    padding: 50px;
  }
</style>
