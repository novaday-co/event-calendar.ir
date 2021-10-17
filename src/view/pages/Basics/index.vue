<template>
  <div id="Basics">
    <h1>
      Basics
    </h1>

    <try-option
      :title="title"
      :description="description"
      :images="images"
      :array="array"
      :scrollDescription="scrollDescription"
      :scrollDest="scrollDest"
      :code="code"
      :codeBox="true"
    />

    <try-option
      :title="title1"
      :description="description1"
      :scrollDescription="scrollDescription1"
      :scrollDest="scrollDest1"
      type="none"
      id="events"
    />

    <try-option
      :title="title2"
      :description="description2"
      type="none"
      id="middleWidget"
    />
  </div>
</template>

<script>
import TryOption from '../../../components/TryOptions.vue'
export default {
  name: 'Basics',
  components: {
    TryOption
  },
  data () {
    return {
      title: { name: 'calendar type' },
      title1: { name: 'events', description: 'List <Event>' },
      title2: { name: 'middleWidget', description: 'Widget' },
      array: [{ name: 'Jalali' }, { name: 'Gregorian' }],
      description:
        'Type of the calendar can be changed between <b>Jalali</b> and<b> Gregorian </b>:',
      description1: 'Declares days which can has events',
      description2: 'Declares a widget between calendar & events',
      images: [
        'src/assets/images/screenshout1.jpg',
        'src/assets/images/screenshout2.jpg'
      ],
      scrollDescription: 'Scroll to events',
      scrollDescription1: 'Scroll to middleWidget',
      scrollDest: 'events',
      scrollDest1: 'middleWidget',
      code: `EventCalendar(calendarType: CalendarType.GREGORIAN,)`
    }
  }
}
</script>

<style scoped>
.Home {
  padding: 50px;
}
/* .calendar_image-width {
  float: right;
} */

/* h1 {
  padding-left: 30px;
} */

/* .colContainer {
  display: flex;
  flex-direction: column;
}

img {
  height: auto;
  width: 280px;
  object-fit: scale-down;
}

.radioButton {
  display: inline-block;
}

.v-application p {
  margin-bottom: 30px !important;
}

.paragraph {
  margin: 30px 0px 40px 10px;
} */
</style>
