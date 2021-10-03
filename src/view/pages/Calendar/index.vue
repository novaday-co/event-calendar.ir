<template>
  <div id="Calendar">
    <h1>
      Calendar
    </h1>

    <try-option
      :title="title1"
      :description="description2"
      :images="images2"
      :array="fields"
      :scrollDescription="scrollDescription"
      :scrollDest="scrollDest"
      :code="code"
      :codeBox= true
      type="radio"
    />

    <try-option
      :title="title2"
      :description="description1"
      :images="images2"
      :array="fields"
      :scrollDescription="scrollDescription1"
      :scrollDest="scrollDest1"
      :code="code1"
      :codeBox= true
      type="switch"
      id="toggleViewType"
    />

    <try-option
      :title="title3"
      :description="description3"
      :images="images2"
      :array="fields"
      :code="code2"
      :codeBox= true
      type="none"
      id="font"
    />
  </div>
</template>

<script>
import TryOption from "../../../components/TryOptions.vue";
import { component as VueCodeHighlight } from 'vue-code-highlight'
import 'vue-code-highlight/themes/prism-okaidia.css'
import 'prism-es6/components/prism-markup-templating'
import 'prism-es6/components/prism-dart'
export default {
  name: "Contributing",
  components: {
    TryOption,
    VueCodeHighlight
  },
  data() {
    return {
      fields: [{ name: "Daily" }, { name: "Monthly" }],
      description1: "Will allow user to change view type directly in runtime:",
      images2: [
        "src/assets/images/screenshout1.jpg",
        "src/assets/images/screenshout2.jpg"
      ],
      scrollDescription: "Scroll to toggle view type",
      scrollDescription1: "Scroll to font",
      description2:
        "View type of the calendar can be changed between <b>Daily</b> and<b> Monthly </b>:",
      description3: "Font of the calendar can be customized",
      title1: { name: "view type", description: "ViewType" },
      title2: { name: "toggle view type", description: "Boolean" },
      title3: { name: "font", description: "String" },
      scrollDest: "toggleViewType",
      scrollDest1: "font",
      code : `EventCalendar(
  calendarType: CalendarType.GREGORIAN,
  calendarOptions: CalendarOptions(
    viewType: ViewType.MONTHLY
  ),
)`,
      code1 : `EventCalendar(
  calendarType: CalendarType.GREGORIAN,
  calendarOptions: CalendarOptions(
    toggleViewType: true
  ),
);`,
      code2 : ` EventCalendar(
  calendarType: CalendarType.GREGORIAN,
  calendarOptions: CalendarOptions(
    font: 'DanaFamily'
  ),
)`
      
    };
  }
};
</script>

<style>
.Home {
  padding: 50px;
}

.calendar_image-width {
  max-width: 100%;
}

.v-application p {
  margin-bottom: 10px !important;
}
</style>
