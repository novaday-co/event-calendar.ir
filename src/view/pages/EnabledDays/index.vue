<template>
  <div id="EnabledDays">
    <h1>
      Enabled Days 
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
    name: 'EnabledDays',
    components :{
      TryOption
    },
    data() {
      return {
        description1:
          "Declares days that can be selected",
        title1 : {name:"enabled days" , description :"List <EventDateTime>"}
      }
    },
  }
</script>

<style>
  .Home {
    padding: 50px;
  }
</style>
