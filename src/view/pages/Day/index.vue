<template>
  <div id="Day">
    <h1>
      this is Day content
    </h1>

    <try-option
      :title="title1"
      :description="description4"
      :images="images2"
      :array="fields"
      :scrollDescription="scrollDescription1"
      type="radio"
      :scrollDest="scrollDest1"
    />

    <try-option
      :title="title2"
      :description="description4"
      :images="images2"
      :array="fields"
      :scrollDescription="scrollDescription2"
      type="radio"
      :scrollDest="scrollDest2"
      id="weekDaySelectedColor"
    />

    <try-option
      :title="title3"
      :description="description4"
      :images="images2"
      :array="fields"
      :scrollDescription="scrollDescription3"
      type="radio"
      :scrollDest="scrollDest3"
      id="weekDayUnSelectedColor"
    />

    <try-option
      :title="title4"
      :description="description4"
      :images="images2"
      :array="fields"
      :scrollDescription="scrollDescription4"
      type="radio"
      :scrollDest="scrollDest4"
      id="selectedBackgroundColor"
    />

    <try-option
      :title="title5"
      :description="description4"
      :images="images2"
      :array="fields"
      :scrollDescription="scrollDescription5"
      type="radio"
      :scrollDest="scrollDest5"
      id="unSelectedBackgroundColor"
    />

    <try-option
      :title="title6"
      :description="description4"
      :images="images2"
      :array="fields"
      :scrollDescription="scrollDescription6"
      type="radio"
      :scrollDest="scrollDest6"
      id="selectedTextColor"
    />

    <try-option
      :title="title7"
      :description="description4"
      :images="images2"
      :array="fields"
      :scrollDescription="scrollDescription7"
      type="radio"
      :scrollDest="scrollDest7"
      id="unSelectedTextColor"
    />

    <try-option
      :title="title8"
      :description="description4"
      :images="images2"
      :array="fields"
      :scrollDescription="scrollDescription8"
      type="radio"
      :scrollDest="scrollDest8"
      id="eventCounterTextColor"
    />

    <try-option
      :title="title9"
      :description="description4"
      :images="images2"
      :array="fields1"
      type="radio"
      id="dayEventViewType"
    />
  </div>
</template>

<script>
import TryOption from '../../../components/TryOptions.vue'
export default {
  name: 'Day',
  components: {
    TryOption
  },
  data () {
    return {
      fields: [{ name: 'Yellow' }, { name: 'Green' }],
      fields1: [{ name: 'Dot' }, { name: 'Label' }],
      description2: 'Will allow user to change view type directly in runtime:',
      images2: [
        'src/assets/images/screenshout1.jpg',
        'src/assets/images/screenshout2.jpg'
      ],
      title1: { name: 'week day selected color', description: 'Color' },
      title2: { name: 'week day unselected color', description: 'Color' },
      title3: { name: 'selected background color', description: 'Color' },
      title4: { name: 'unselected background color', description: 'Color' },
      title5: { name: 'selected text color', description: 'Color' },
      title6: { name: 'unselected text color', description: 'Color' },
      title7: { name: 'event counter color', description: 'Color' },
      title8: { name: 'event counter text color', description: 'Color' },
      title9: {
        name: 'day event counter view type',
        description: 'DayEventCounterViewType'
      },
      scrollDescription1: 'Scroll to weekday selected color',
      scrollDescription2: 'Scroll to weekday unselected color',
      scrollDescription3: 'Scroll to selected background color',
      scrollDescription4: 'Scroll to unselected background color',
      scrollDescription5: 'Scroll to selected text color',
      scrollDescription6: 'Scroll to unselected text color',
      scrollDescription7: 'Scroll to event counter text color',
      scrollDescription8: 'Scroll to day event view type',
      scrollDest1: 'weekDaySelectedColor',
      scrollDest2: 'weekDayUnSelectedColor',
      scrollDest3: 'selectedBackgroundColor',
      scrollDest4: 'unSelectedBackgroundColor',
      scrollDest5: 'selectedTextColor',
      scrollDest6: 'unSelectedTextColor',
      scrollDest7: 'eventCounterTextColor',
      scrollDest8: 'dayEventViewType'
    }
  }
}
</script>

<style scoped>
.Home {
  padding: 50px;
}
.row {
  margin: 10px;
}
</style>
