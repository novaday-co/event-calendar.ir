<template>
  <div id="Calendar">
    <h1>
      this is Calendar content
    </h1>
    <v-container>
      <v-radio-group v-model="radioGroup">
        <v-radio
          v-for="item in array"
          :key="item.name"
          :label="`Radio ${item.name}`"
        ></v-radio>
        <v-container>
          <img
            v-if="radioGroup === 0"
            src="../../../assets/images/screenshout1.jpg"
            alt="event_calendar_options"
            class="calendar_image-width"
          >
          <img
            v-if="radioGroup === 1"
            src="../../../assets/images/screenshout2.jpg"
            alt="event_calendar_options"
            class="calendar_image-width"
          >
          <img
            v-if="radioGroup === 2"
            src="../../../assets/images/screenshout1.jpg"
            alt="event_calendar_options"
            class="calendar_image-width"
          >
        </v-container>
      </v-radio-group>
      <v-switch
        v-model="switch1"
        :label="`Switch 1: ${switch1.toString()}`"
      ></v-switch>
      <img
        v-if="switch1"
        src="../../../assets/images/screenshout1.jpg"
        alt="event_calendar_options"
        class="calendar_image-width"
      >
      <img
        v-else
        src="../../../assets/images/screenshout2.jpg"
        alt="event_calendar_options"
        class="calendar_image-width"
      >
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'Contributing',
    data() {
      return {
        switch1: true,
        array: [
          {name: 'Issue 1'},
          {name: 'Issue 2'},
          {name: 'Issue 3'}
        ],
        radioGroup: 0
      }
    },
  }
</script>

<style>
  .Home {
    padding: 50px;
  }

  .calendar_image-width {
    max-width: 100%;
  }
</style>
