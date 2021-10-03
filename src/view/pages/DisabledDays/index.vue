<template>
  <div id="DisabledDays">
    <h1>
      Disabled days 
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
    name: 'DisabledDays',
    components: {
      TryOption
    },
    data() {
      return {
        description1:
          "Declares days that can't be used",
        title1 : {name:"disabled days" , description :"List <EventDateTime>"}
      }
    },
  }
</script>

<style>
  .Home {
    padding: 50px;
  }
</style>
