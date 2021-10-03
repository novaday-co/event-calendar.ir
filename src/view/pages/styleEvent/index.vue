<template>
  <div id="styleEvent">
    <h1>
      this is Event content
    </h1>

     <try-option
        :title="title1"
        :description="none"
        :images="images1"
        :array="fields1"
        :scrollDescription="scrollDescription1"
        type="radio"
        :scrollDest="scrollDest1"
        :code="code"
        :codeBox= true
        
      />

      <try-option
        :title="title2"
        :description="description2"
        :images="images1"
        :array="fields2"
        :scrollDescription="scrollDescription2"
        type="radio"
        :scrollDest="scrollDest2"
        :code="code1"
        :codeBox= true
        id="emptyTextColor"
      />

      <try-option
        :title="title3"
        :description="none"
        :images="images1"
        :array="fields3"
        :scrollDescription="scrollDescription3"
        type="radio"
        :scrollDest="scrollDest3"
        :code="code2"
        :codeBox= true
        id="emptyIcon"
      />

      <try-option
        :title="title4"
        :description="description4"
        :images="images1"
        :array="fields2"
        :scrollDescription="scrollDescription4"
        type="radio"
        :scrollDest="scrollDest4"
        :code="code3"
        :codeBox= true
        id="emptyIconColor"
      />

      <try-option
        :title="title5"
        :description="description5"
        :images="images1"
        :array="fields2"
        :scrollDescription="scrollDescription5"
        type="radio"
        :scrollDest="scrollDest5"
        :code="code4"
        :codeBox= true
        id="backgroundColor"
      />

      <try-option
        :title="title6"
        :description="description6"
        :images="images1"
        :array="fields2"
        :scrollDescription="scrollDescription6"
        type="radio"
        :scrollDest="scrollDest6"
        :code="code5"
        :codeBox= true
        id="titleColor"
      />

      <try-option
        :title="title7"
        :description="description7"
        :images="images1"
        :array="fields2"
        :scrollDescription="scrollDescription7"
        type="radio"
        :scrollDest="scrollDest7"
        :code="code6"
        :codeBox= true
        id="descriptionColor"
      />

      <try-option
        :title="title8"
        :description="description8"
        :images="images1"
        :array="fields2"
        :code="code7"
        :codeBox= true
        type="radio"
        id="dateTimeColor"
      />


  </div>
</template>

<script>
import TryOption from "../../../components/TryOptions.vue";
  export default {
    name: 'styleEvent',
    components : {
      TryOption
    },
    data() {
      return {
      fields1:[{ name: "Empty"} , {name:"Nothing"}],
      fields2:[{ name: "Yellow"} , {name:"Green"}],
      fields3:[{ name: "Trash"} , {name:"Add"}],
      description8:"Color of event's date time",
      description7:"Color of event's description",
      description6:"Color of event's title",
      description5:"Color of event's background",
      description4:"Color of event's empty icon",
      description2:"Color of event's empty text",
      images1: [
        "src/assets/images/screenshout1.jpg",
        "src/assets/images/screenshout2.jpg"
      ],
      title1 : {name:"empty text" , description :"String"},
      title2 : {name:"empty text color" , description :"Color"},
      title3 : {name:"empty icon" , description :"IconData"},
      title4 : {name:"empty icon color" , description :"Color"},
      title5 : {name:"background color" , description :"Color"},
      title6 : {name:"title color" , description :"Color"},
      title7 : {name:"description color" , description :"Color"},
      title8 : {name:"date time color" , description :"Color"},
      scrollDescription1: "Scroll to empty text color",
      scrollDescription2: "Scroll to empty icon",
      scrollDescription3: "Scroll to empty icon color",
      scrollDescription4: "Scroll to background color",
      scrollDescription5: "Scroll to title color",
      scrollDescription6: "Scroll to description color",
      scrollDescription7: "Scroll to date time color",
      scrollDest1:"emptyTextColor",
      scrollDest2:"emptyIcon",
      scrollDest3:"emptyIconColor",
      scrollDest4:"backgroundColor",
      scrollDest5:"titleColor",
      scrollDest6:"descriptionColor",
      scrollDest7:"dateTimeColor",
      code : `EventCalendar(
  calendarType: CalendarType.GREGORIAN,
  eventStyle: EventStyle(emptyText: ‘Oops! No event's here :(’),
)`,
      code1: `EventCalendar(
  calendarType: CalendarType.GREGORIAN,
  eventStyle: EventStyle(emptyTextColor: Colors.red),
)`,
      code2: `EventCalendar(
  calendarType: CalendarType.GREGORIAN,
  eventStyle: EventStyle(emptyIcon: Icons.reorder),
)`,
      code3: `EventCalendar(
  calendarType: CalendarType.GREGORIAN,
  eventStyle: EventStyle(emptyIconColor: Colors.red),
)`,
      code4: `EventCalendar(
  calendarType: CalendarType.GREGORIAN,
  eventStyle: EventStyle(backgroundColor: Colors.red),
)`,
      code5: `EventCalendar(
  calendarType: CalendarType.GREGORIAN,
  eventStyle: EventStyle(titleColor: Colors.red),
)`,
      code6: `EventCalendar(
  calendarType: CalendarType.GREGORIAN,
  eventStyle: EventStyle(descriptionColor: Colors.red),
)`,
      code7: `EventCalendar(
  calendarType: CalendarType.GREGORIAN,
  eventStyle: EventStyle(dateTimeColor: Colors.red),
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
