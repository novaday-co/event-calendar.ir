<template>
  <div id="Day">
    <h1>
      this is Day content
    </h1>

    <try-option
      :title="weekDayTitle"
      :description="description4"
      :images="imageArray"
      :array="colorFields"
      type="radio"
      :scrollDest="scrollDest1"
    />

    <try-option
      :title="weekDayUnselectedTitle"
      :description="description4"
      :images="imageArray"
      :array="colorFields"
      type="radio"
      :scrollDest="scrollDest2"
      id="weekDaySelectedColor"
    />

    <try-option
      :title="backgroundTitle"
      :description="description4"
      :images="imageArray"
      :array="colorFields"
      type="radio"
      :scrollDest="scrollDest3"
      id="weekDayUnSelectedColor"
    />

    <try-option
      :title="selectedBackgroundTitle"
      :description="description4"
      :images="imageArray"
      :array="colorFields"
      type="radio"
      :scrollDest="scrollDest4"
      id="selectedBackgroundColor"
    />

    <try-option
      :title="textColorTitle"
      :description="description4"
      :images="imageArray"
      :array="colorFields"
      type="radio"
      :scrollDest="scrollDest5"
      id="unSelectedBackgroundColor"
    />

    <try-option
      :title="unselectedTextColorTitle"
      :description="description4"
      :images="imageArray"
      :array="colorFields"
      type="radio"
      :scrollDest="scrollDest6"
      id="selectedTextColor"
    />

    <try-option
      :title="eventCounterColorTitle"
      :description="description4"
      :images="imageArray"
      :array="colorFields"
      type="radio"
      :scrollDest="scrollDest7"
      id="unSelectedTextColor"
    />

    <try-option
      :title="eventCounterTextColorTitle"
      :description="description4"
      :images="imageArray"
      :array="colorFields"
      type="radio"
      :scrollDest="scrollDest8"
      id="eventCounterTextColor"
    />

    <try-option
      :title="dayEventCounterTitle"
      :description="description4"
      :images="imageArray"
      :array="labelcolorFields"
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
      colorFields: [{ name: 'Yellow' }, { name: 'Green' }],
      labelcolorFields: [{ name: 'Dot' }, { name: 'Label' }],
      imageArray: [
        'src/assets/images/screenshout1.jpg',
        'src/assets/images/screenshout2.jpg'
      ],
      weekDayTitle: { name: 'week day selected color', description: 'Color' },
      weekDayUnselectedTitle: { name: 'week day unselected color', description: 'Color' },
      backgroundTitle: { name: 'selected background color', description: 'Color' },
      selectedBackgroundTitle: { name: 'unselected background color', description: 'Color' },
      textColorTitle: { name: 'selected text color', description: 'Color' },
      unselectedTextColorTitle: { name: 'unselected text color', description: 'Color' },
      eventCounterColorTitle: { name: 'event counter color', description: 'Color' },
      eventCounterTextColorTitle: { name: 'event counter text color', description: 'Color' },
      dayEventCounterTitle: {
        name: 'day event counter view type',
        description: 'DayEventCounterViewType'
      }
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
