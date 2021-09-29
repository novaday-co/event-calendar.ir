<template>
  <div id="Calendar">
    
    <h1>
      Calendar 
    </h1>
    <v-container>
      <try-option
        :title="title1"
        :description="description3"
        :images="images2"
        :array="fields"
        :scrollDescription="scrollDescription1"
        type="radio"
      />

      <try-option
        :title="title2"
        :description="description2"
        :images="images2"
        :array="fields"
        :scrollDescription="scrollDescription1"
        type="switch"
      />

      <try-option
        :title="title3"
        :description="description4"
        :images="images2"
        :array="fields"
        :scrollDescription="scrollDescription1"
        type="none"
      />
    </v-container>
  </div>
</template>

<script>
import TryOption from "../../../components/TryOptions.vue";
export default {
  name: "Contributing",
  components: {
    TryOption
  },
  data() {
    return {
      fields: [{ name: "Daily" }, { name: "Monthly" }],
      description2:
        "Will allow user to change view type directly in runtime:",
      images2: [
        "/../assets/images/screenshout1.jpg",
        "/../assets/images/screenshout2.jpg"
      ],
      scrollDescription1: "Scroll to next element",
      description3:"View type of the calendar can be changed between <b>Daily</b> and<b> Monthly </b>:",
      description4:"Font of the calendar can be customized",
      title1 : {name:"View type" , description :"ViewType"},
      title2: {name : "Toggle view type" , description:"Boolean"},
      title3: {name: "Font" , description:"String"}
      

    };
  }
};
</script>

<style>
.Home {
  padding: 50px;
}

.calendar_image-width {
  max-width: 100%;
}

.v-application p {
  margin-bottom: 10px !important;
}


</style>
