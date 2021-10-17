<template>
  <div id="styleEvent">
    <h1>
      this is Event content
    </h1>

    <try-option
      :title="emptyTitle"
      :description="none"
      :images="imageArray"
      :array="statusFields"
      type="radio"
      :code="emptyCode"
      :codeBox="true"
    />

    <try-option
      :title="emptyTextTitle"
      :description="emptyTextDescription"
      :images="imageArray"
      :array="colorFields"
      type="radio"
      :code="emptyTextCode"
      :codeBox="true"
      id="emptyTextColor"
    />

    <try-option
      :title="emptyIconTitle"
      :images="imageArray"
      :array="buttonFields"
      type="radio"
      :code="emptyIconCode"
      :codeBox="true"
      id="emptyIcon"
    />

    <try-option
      :title="emptyIconColorTitle"
      :description="emptyIconColorDescription"
      :images="imageArray"
      :array="colorFields"
      type="radio"
      :code="emptyIconColorCode"
      :codeBox="true"
      id="emptyIconColor"
    />

    <try-option
      :title="backgroundColorTitle"
      :description="backgroundColorDescription"
      :images="imageArray"
      :array="colorFields"
      type="radio"
      :code="backgroundColorCode"
      :codeBox="true"
      id="backgroundColor"
    />

    <try-option
      :title="colorTitle"
      :description="colorDescription"
      :images="imageArray"
      :array="colorFields"
      type="radio"
      :code="colorCode"
      :codeBox="true"
      id="titleColor"
    />

    <try-option
      :title="descriptionTitle"
      :description="descriptionDescription"
      :images="imageArray"
      :array="colorFields"
      type="radio"
      :code="descriptionCode"
      :codeBox="true"
      id="descriptionColor"
    />

    <try-option
      :title="dateTimeTitle"
      :description="dateTimeDescription"
      :images="imageArray"
      :array="colorFields"
      :code="dateTimeCode"
      :codeBox="true"
      type="radio"
      id="dateTimeColor"
    />
  </div>
</template>

<script>
import TryOption from '../../../components/TryOptions.vue'
export default {
  name: 'styleEvent',
  components: {
    TryOption
  },
  data () {
    return {
      statusFields: [{ name: 'Empty' }, { name: 'Nothing' }],
      colorFields: [{ name: 'Yellow' }, { name: 'Green' }],
      buttonFields: [{ name: 'Trash' }, { name: 'Add' }],
      dateTimeDescription: 'Color of events date time',
      descriptionDescription: 'Color of events description',
      colorDescription: 'Color of events title',
      backgroundColorDescription: 'Color of events background',
      emptyIconColorDescription: 'Color of events empty icon',
      emptyTextDescription: 'Color of events empty text',
      imageArray: [
        'src/assets/images/screenshout1.jpg',
        'src/assets/images/screenshout2.jpg'
      ],
      emptyTitle: { name: 'empty text', description: 'String' },
      emptyTextTitle: { name: 'empty text color', description: 'Color' },
      emptyIconTitle: { name: 'empty icon', description: 'IconData' },
      emptyIconColorTitle: { name: 'empty icon color', description: 'Color' },
      backgroundColorTitle: { name: 'background color', description: 'Color' },
      colorTitle: { name: 'title color', description: 'Color' },
      descriptionTitle: { name: 'description color', description: 'Color' },
      dateTimeTitle: { name: 'date time color', description: 'Color' },
      emptyCode: `EventCalendar(
  calendarType: CalendarType.GREGORIAN,
  eventStyle: EventStyle(emptyText: ‘Oops! No event's here :(’),
)`,
      emptyTextCode: `EventCalendar(
  calendarType: CalendarType.GREGORIAN,
  eventStyle: EventStyle(emptyTextColor: Colors.red),
)`,
      emptyIconCode: `EventCalendar(
  calendarType: CalendarType.GREGORIAN,
  eventStyle: EventStyle(emptyIcon: Icons.reorder),
)`,
      emptyIconColorCode: `EventCalendar(
  calendarType: CalendarType.GREGORIAN,
  eventStyle: EventStyle(emptyIconColor: Colors.red),
)`,
      backgroundColorCode: `EventCalendar(
  calendarType: CalendarType.GREGORIAN,
  eventStyle: EventStyle(backgroundColor: Colors.red),
)`,
      colorCode: `EventCalendar(
  calendarType: CalendarType.GREGORIAN,
  eventStyle: EventStyle(titleColor: Colors.red),
)`,
      descriptionCode: `EventCalendar(
  calendarType: CalendarType.GREGORIAN,
  eventStyle: EventStyle(descriptionColor: Colors.red),
)`,
      dateTimeCode: `EventCalendar(
  calendarType: CalendarType.GREGORIAN,
  eventStyle: EventStyle(dateTimeColor: Colors.red),
)`
    }
  }
}
</script>

<style scoped>
.Home {
  padding: 50px;
}
</style>
