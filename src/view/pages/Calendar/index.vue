<template>
  <div id="Calendar">
    <h1>
      Calendar
    </h1>

    <try-option
      :title="viewTypeTitle"
      :description="viewTypeDescription"
      :images="imageArray"
      :array="fields"
      :code="viewTypeCode"
      :codeBox="true"
      type="radio"
    />

    <try-option
      :title="toggleViewTypeTitle"
      :description="toggleViewTypeDescription"
      :images="imageArray"
      :array="fields"
      :code="toggleViewTypeCode"
      :codeBox="true"
      type="switch"
      id="toggleViewType"
    />

    <try-option
      :title="fontTitle"
      :description="fontDescription"
      :images="imageArray"
      :array="fields"
      :code="fontCode"
      :codeBox="true"
      type="none"
      id="font"
    />
  </div>
</template>

<script>
import TryOption from '../../../components/TryOptions.vue'
import { component as VueCodeHighlight } from 'vue-code-highlight'
import 'vue-code-highlight/themes/prism-okaidia.css'
import 'prism-es6/components/prism-markup-templating'
import 'prism-es6/components/prism-dart'
export default {
  name: 'Contributing',
  components: {
    TryOption,
    VueCodeHighlight
  },
  data () {
    return {
      fields: [{ name: 'Daily' }, { name: 'Monthly' }],
      imageArray: [
        'src/assets/images/screenshout1.jpg',
        'src/assets/images/screenshout2.jpg'
      ],
      toggleViewTypeDescription: 'Will allow user to change view type directly in runtime:',
      viewTypeDescription:
        'View type of the calendar can be changed between <b>Daily</b> and<b> Monthly </b>:',
      fontDescription: 'Font of the calendar can be customized',
      viewTypeTitle: { name: 'view type', description: 'ViewType' },
      toggleViewTypeTitle: { name: 'toggle view type', description: 'Boolean' },
      fontTitle: { name: 'font', description: 'String' },
      viewTypeCode: `EventCalendar(
  calendarType: CalendarType.GREGORIAN,
  calendarOptions: CalendarOptions(
    viewType: ViewType.MONTHLY
  ),
)`,
      toggleViewTypeCode: `EventCalendar(
  calendarType: CalendarType.GREGORIAN,
  calendarOptions: CalendarOptions(
    toggleViewType: true
  ),
);`,
      fontCode: ` EventCalendar(
  calendarType: CalendarType.GREGORIAN,
  calendarOptions: CalendarOptions(
    font: 'DanaFamily'
  ),
)`
    }
  }
}
</script>

<style scoped>
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
