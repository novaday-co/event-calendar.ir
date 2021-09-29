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
      />

      <try-option
        :title="title2"
        :description="description4"
        :images="images2"
        :array="fields"
        :scrollDescription="scrollDescription1"
        type="radio"
      />

      <try-option
        :title="title3"
        :description="description4"
        :images="images2"
        :array="fields"
        :scrollDescription="scrollDescription1"
        type="radio"
      />

      <try-option
        :title="title4"
        :description="description4"
        :images="images2"
        :array="fields"
        :scrollDescription="scrollDescription1"
        type="radio"
      />

      <try-option
        :title="title5"
        :description="description4"
        :images="images2"
        :array="fields"
        :scrollDescription="scrollDescription1"
        type="radio"
      />

      <try-option
        :title="title6"
        :description="description4"
        :images="images2"
        :array="fields"
        :scrollDescription="scrollDescription1"
        type="radio"
      />

      <try-option
        :title="title7"
        :description="description4"
        :images="images2"
        :array="fields"
        :scrollDescription="scrollDescription1"
        type="radio"
      />

      <try-option
        :title="title8"
        :description="description4"
        :images="images2"
        :array="fields"
        :scrollDescription="scrollDescription1"
        type="radio"
      />

      <try-option
        :title="title9"
        :description="description4"
        :images="images2"
        :array="fields1"
        :scrollDescription="scrollDescription1"
        type="radio"
      />
  </div>
</template>

<script>
import TryOption from "../../../components/TryOptions.vue";
export default {
    name: 'Day',
    components :{
      TryOption
  },
    data() {
      return {
      fields: [{ name: "Yellow" }, { name: "Green" }],
      fields1:[{ name: "Dot"} , {name:"Label"}],
      description2:
        "Will allow user to change view type directly in runtime:",
      images2: [
        "/../assets/images/screenshout1.jpg",
        "/../assets/images/screenshout2.jpg"
      ],
      scrollDescription1: "Scroll to next element",
      title1 : {name:"Week day selected color" , description :"Color"},
      title2 : {name:"Week day unselected color" , description :"Color"},
      title3 : {name:"Selected background color" , description :"Color"},
      title4 : {name:"Unselected background color" , description :"Color"},
      title5 : {name:"Selected text color" , description :"Color"},
      title6 : {name:"Unselected text color" , description :"Color"},
      title7 : {name:"Event counter color" , description :"Color"},
      title8 : {name:"Event counter text color" , description :"Color"},
      title9 : {name:"Day event counter view type" , description :"DayEventCounterViewType"},
      }
    },
  }
</script>

<style>
  .Home {
    padding: 50px;
  }


</style>
