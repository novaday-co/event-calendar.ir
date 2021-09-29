<template>
  <div id="styleEvent">
    <h1>
      this is Event content
    </h1>

     <try-option
        :title="title1"
        :description="none"
        :images="images1"
        :array="fields1"
        :scrollDescription="scrollDescription1"
        type="radio"
      />

      <try-option
        :title="title2"
        :description="description2"
        :images="images1"
        :array="fields2"
        :scrollDescription="scrollDescription1"
        type="radio"
      />

      <try-option
        :title="title3"
        :description="none"
        :images="images1"
        :array="fields3"
        :scrollDescription="scrollDescription1"
        type="radio"
      />

      <try-option
        :title="title4"
        :description="description4"
        :images="images1"
        :array="fields2"
        :scrollDescription="scrollDescription1"
        type="radio"
      />

      <try-option
        :title="title5"
        :description="description5"
        :images="images1"
        :array="fields2"
        :scrollDescription="scrollDescription1"
        type="radio"
      />

      <try-option
        :title="title6"
        :description="description6"
        :images="images1"
        :array="fields2"
        :scrollDescription="scrollDescription1"
        type="radio"
      />

      <try-option
        :title="title7"
        :description="description7"
        :images="images1"
        :array="fields2"
        :scrollDescription="scrollDescription1"
        type="radio"
      />

      <try-option
        :title="title8"
        :description="description8"
        :images="images1"
        :array="fields2"
        :scrollDescription="scrollDescription1"
        type="radio"
      />


  </div>
</template>

<script>
import TryOption from "../../../components/TryOptions.vue";
  export default {
    name: 'styleEvent',
    components : {
      TryOption
    },
    data() {
      return {
      fields1:[{ name: "Empty"} , {name:"Nothing"}],
      fields2:[{ name: "Yellow"} , {name:"Green"}],
      fields3:[{ name: "Trash"} , {name:"Add"}],
      description8:"Color of event's date time",
      description7:"Color of event's description",
      description6:"Color of event's title",
      description5:"Color of event's background",
      description4:"Color of event's empty icon",
      description2:"Color of event's empty text",
  


      images1: [
        "src/assets/images/screenshout1.jpg",
        "src/assets/images/screenshout2.jpg"
      ],
      scrollDescription1: "Scroll to next element",
      title1 : {name:"Empty text" , description :"String"},
      title2 : {name:"Empty text color" , description :"Color"},
      title3 : {name:"Empty icon" , description :"IconData"},
      title4 : {name:"Empty icon color" , description :"Color"},
      title5 : {name:"Background color" , description :"Color"},
      title6 : {name:"Title color" , description :"Color"},
      title7 : {name:"Description color" , description :"Color"},
      title8 : {name:"Date time color" , description :"Color"},
 

      }
    },
  }
</script>

<style>
  .Home {
    padding: 50px;
  }
</style>
