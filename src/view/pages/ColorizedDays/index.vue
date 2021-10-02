<template>
  <div id="ColorizedDays">
    <h1>
      Colorized days
    </h1>

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
    name: 'ColorizedDays',
    components : {
      TryOption
    },
    data() {
      return {
        description1 :
          "Make your calendar colorful ! \n\r Declare days that you want to show them by different colors",
        title1 : {name:"colorized days" , description :"List <EventDateTime>"}
      }
    },
  }
</script>

<style>
  .Home {
    padding: 50px;
  }
</style>
