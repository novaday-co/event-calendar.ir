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
      <try-option
        :description="description2"
        :images="images2"
        :array="fields"
        :scrollDescription="scrollDescription1"
      />
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
      array: [{ name: 'Jalali' }, { name: 'Gregorian' }],
      description:
        'Type of the calendar can be changed between <b>Jalali</b> and<b> Gregorian </b>:',
      images: [
        'src/assets/images/screenshout1.jpg',
        'src/assets/images/screenshout2.jpg'
      ],
      scrollDescription: 'Scroll to View Type',
      fields: [{ name: 'Daily' }, { name: 'Monthly' }],
      description2:
        'View type of the calendar can be changed between <b>Daily</b> and<b> Monthly </b>',
      images2: [
        'src/assets/images/screenshout1.jpg',
        'src/assets/images/screenshout2.jpg'
      ],
      scrollDescription1: 'Scroll to next element'
    }
  }
}
</script>

<style scoped>
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
</style>
