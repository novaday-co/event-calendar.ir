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
      />
      <try-option
        :title="title1"
        :description="description1"
        type="none"
      />

      
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
      title: {name : "Calendar type"},
      title1: {name : "Events" , description: "List <Event>"},
      array: [{ name: 'Jalali' }, { name: 'Gregorian' }],
      description:
        'Type of the calendar can be changed between <b>Jalali</b> and<b> Gregorian </b>:',
      images: [
        'src/assets/images/screenshout1.jpg',
        'src/assets/images/screenshout2.jpg'
      ],
      scrollDescription: 'Scroll to View Type',
      description1:
        'Declares days which can has events',
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
