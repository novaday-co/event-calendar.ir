<template>
  <div id="Basics">
    <h1>
      this is Basics content
    </h1>
    <v-container>
      <v-radio-goup v-model="radioGroup">
        <v-radio 
          v-for= "item in array"
          :key="item.name"
          :label="`Radio ${item.name}`"
        >
        </v-radio>
        <v-container>
          <img 
            v-if="RadioGroup===0"
            :src="img1" 
            alt=""
          >
          <img 
            v-if="RadioGroup===1"
            :src="img2"
            alt="">
          <img 
            v-if="RadioGroup===2"
            :src="img1"
            alt="">
        </v-container>
      </v-radio-goup>
      <v-switch
        v-model="switch1"
        :lablel="`Switch 1: ${switch1.toString()}`"
        ></v-switch>

      <img 
      v-if="switch1"
      :src="img1" 
      alt="">
      <img 
      v-else
      :src="img2" 
      alt="">

    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'Basics',
    data() {
      return {
        array: [
          {name: 'item1'},
          {name: 'item2'},
          {name: 'item3'},
        ],
        img1: "../../../assets/images/screenshout1.jpg",
        img2: "../../../assets/images/screenshout2.jpg",
        RadioGroup :0,
        switch1: true
      }
    },
  }
</script>

<style>
  .Home {
    padding: 50px;
  }
</style>
