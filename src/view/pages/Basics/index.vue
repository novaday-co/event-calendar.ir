<template>
  <div id="Basics">
    <h1>
      Basics
    </h1>

    <try-option
      :title="basicTitle"
      :description="basicDescription"
      :images="images"
      :array="array"
      :code="code"
      :codeBox="true"
    />

    <try-option
      :title="eventTitle"
      :description="eventDescription"
      type="none"
      id="events"
    />

    <try-option
      :title="middleWidgetTitle"
      :description="middleWidgetDescription"
      type="none"
      id="middleWidget"
      :code="middleWidgetCode"
      :codeBox="true"
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
      basicTitle: { name: 'calendar type' },
      eventTitle: { name: 'events', description: 'List <Event>' },
      middleWidgetTitle: { name: 'middleWidget', description: 'Widget' },
      array: [{ name: 'Jalali' }, { name: 'Gregorian' }],
      basicDescription:
        'Type of the calendar can be changed between <b>Jalali</b> and<b> Gregorian </b>:',
      eventDescription: 'Declares days which can has events',
      middleWidgetDescription: 'Declares a widget between calendar & events',
      images: [
        'src/assets/images/screenshout1.jpg',
        'src/assets/images/screenshout2.jpg'
      ],
      code: `EventCalendar(calendarType: CalendarType.GREGORIAN,)`,
      middleWidgetCode: `EventCalendar(
        calendarType: CalendarType.GREGORIAN,
        middleWidget: (dateTime) => Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Expanded(
              child: Container(
                padding: EdgeInsets.all(8),
                child: Text(
                  "\${dateTime}",
                  textAlign: TextAlign.center,
                ),
                color: Colors.red,
              ),
            ),
          ],
        ),
      ),`
    }
  }
}
</script>

<style scoped>
.Home {
  padding: 50px;
}
</style>
