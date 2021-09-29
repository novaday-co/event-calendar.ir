<template>
  <div id="Basics">
    <h1>
      Basics
    </h1>
    <h2 class="subtitle">
      Calendar Type
      <v-divider></v-divider>
    </h2>
    <v-container>
      <try-option
        :description="description"
        :images="images"
        :array="array"
        :scrollDescription="scrollDescription"
      />
      <!-- <v-row class="justify-space-around">
        <v-col cols="12" md="8">
          <button v-scroll-to="'#viewtype'">
            Scroll to view type
          </button>
          <p class="paragraph">
            Type of the calendar can be changed between <b>Jalali</b> and
            <b> Gregorian </b>:
          </p>
            <v-row class="align-items-center">
              <v-col cols="4">
                <p>Try it now:</p>
              </v-col>
              <v-col cols="8">
                <v-radio-group v-model="radioGroup" class="radioButton mt-0" row>
                  <v-radio
                    v-for="item in array"
                    :key="item.name"
                    :label="item.name"
                  ></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
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
      <try-option
        :description="description2"
        :images="images2"
        :array="fields"
        :scrollDescription="scrollDescription1"
      />
      <!-- <v-row class="justify-space-around" id="viewtype">
        <v-col cols="12" md="8">
          <h2>
            View Type
            <v-divider></v-divider>
          </h2>
          <p class="paragraph">
            View type of the calendar can be changed between <b>Daily</b> and
            <b> Monthly </b>:
          </p>
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
      </v-row> -->

      <!-- <v-row class="justify-space-around" id="element1">
        <v-col cols="12" md="8">
          <h2>
            calendar Type
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
import TryOption from "../../../components/TryOptions.vue";
export default {
  name: "Basics",
  components: {
    TryOption
  },
  data() {
    return {
      array: [{ name: "Jalali" }, { name: "Gregorian" }],
      description:
        "Type of the calendar can be changed between <b>Jalali</b> and<b> Gregorian </b>:",
      images: [
        "/../assets/images/screenshout1.jpg",
        "/../assets/images/screenshout2.jpg"
      ],
      scrollDescription: "Scroll to View Type",
      // switch1: true,
      fields: [{ name: "Daily" }, { name: "Monthly" }],
      description2:
        "View type of the calendar can be changed between <b>Daily</b> and<b> Monthly </b>",
      images2: [
        "/../assets/images/screenshout1.jpg",
        "/../assets/images/screenshout2.jpg"
      ],
      scrollDescription1: "Scroll to next element"
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
}

h1 {
  padding-left: 30px;
}

.colContainer {
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
}

button {
  float: right;
  padding: 20px;
}
</style>
