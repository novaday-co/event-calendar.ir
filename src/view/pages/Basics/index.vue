<template>
  <div id="Basics">

    <h1>
      Basics
    </h1>
    <v-container>
      <button v-scroll-to="'#element'">
         Scroll to #element
      </button>
      <v-row class="justify-space-around">
        <v-col cols="12" md="8">
          <h2>
            Calender Type
            <v-divider></v-divider>
          </h2>
          <v-radio-group v-model="radioGroup" class="radioButton" row>
            <v-radio
              v-for="item in array"
              :key="item.name"
              :label="item.name"
            ></v-radio>
          </v-radio-group>
        </v-col>
        <v-col cols="12" md="4">
          <v-container>
            <img
              v-if="radioGroup === 0"
              src="../../../assets/images/screenshout1.jpg"
              alt="event_calendar_options"
              class="calendar_image-width"
            />
            <img
              v-if="radioGroup === 1"
              src="../../../assets/images/screenshout2.jpg"
              alt="event_calendar_options"
              class="calendar_image-width"
            />
            <img
              v-if="radioGroup === 2"
              src="../../../assets/images/screenshout1.jpg"
              alt="event_calendar_options"
              class="calendar_image-width"
            />
          </v-container>
        </v-col>
      </v-row>

      <v-row class="justify-space-around" id="element">
        
        <v-col cols="12" md="8">
          <h2>
            View Type 
            <v-divider></v-divider>
          </h2>
          <button v-scroll-to="'#element1'">
            Scroll to #element1
          </button>
          <v-radio-group v-model="radioGroup" class="radioButton" row>
            <v-radio
              v-for="item in field"
              :key="item.name"
              :label="item.name"
            ></v-radio>
          </v-radio-group>
        </v-col>
        <v-col cols="12" md="4">
          <v-container>
            <img
              v-if="radioGroup === 0"
              src="../../../assets/images/screenshout1.jpg"
              alt="event_calendar_options"
              class="calendar_image-width"
            />
            <img
              v-if="radioGroup === 1"
              src="../../../assets/images/screenshout2.jpg"
              alt="event_calendar_options"
              class="calendar_image-width"
            />
            <img
              v-if="radioGroup === 2"
              src="../../../assets/images/screenshout1.jpg"
              alt="event_calendar_options"
              class="calendar_image-width"
            />
          </v-container>
        </v-col>
      </v-row>

      <!-- <v-row class="justify-space-around" id="element1">
        <v-col cols="12" md="8">
          <h2>
            Calender Type
            <v-divider></v-divider>
          </h2>
          <v-radio-group v-model="radioGroup" class="radioButton" row>
            <v-radio
              v-for="item in array"
              :key="item.name"
              :label="item.name"
            ></v-radio>
          </v-radio-group>
        </v-col>
        <v-col cols="12" md="4">
          <v-container>
            <img
              v-if="radioGroup === 0"
              src="../../../assets/images/screenshout1.jpg"
              alt="event_calendar_options"
              class="calendar_image-width"
            />
            <img
              v-if="radioGroup === 1"
              src="../../../assets/images/screenshout2.jpg"
              alt="event_calendar_options"
              class="calendar_image-width"
            />
            <img
              v-if="radioGroup === 2"
              src="../../../assets/images/screenshout1.jpg"
              alt="event_calendar_options"
              class="calendar_image-width"
            />
          </v-container>
        </v-col>
      </v-row> -->
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Basics",

  data() {
    return {
      array: [{ name: "Jalali" }, { name: "Gregorian" }],
      field:[{ name: "daily" }, { name: "monthly"}],
      
      radioGroup: 0,
      switch1: true
    };
  }
};
</script>

<style>
.Home {
  padding: 50px;
}
.calendar_image-width {
  float: right;
  /* max-width: 100%; */
}

h1 {
  padding-left: 30px;
}

.colContainer {
  display: flex;
  flex-direction: column;
}

p {
  width: 500px;
}

img {
  height: auto;
  width: 280px;
  object-fit: scale-down;
}

.radioButton {
  display: inline-block;
}
</style>
