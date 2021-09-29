<template>
  <div>
      <v-row>
      <h2 class="title">{{title.name}}</h2>
      <p v-if="title.description" class="notes">: {{title.description}} </p>
      </v-row>
      <v-divider></v-divider>
    <v-row class="justify-space-around">
      <v-col cols="12" md="8">
        <button v-scroll-to="'#viewtype'">
          {{ scrollDescription }}
        </button>
        <p class="paragraph" v-html="description" />
        <v-row class="align-items-center">
          <v-col cols="4" v-if="type !== 'none'">
            <p>Try it now:</p>
          </v-col>

          <v-col cols="8" v-if="type === 'radio'">
            <v-radio-group v-model="radioGroup" class="radioButton mt-0" row>
              <v-radio
                v-for="item in array"
                :key="item.name"
                :label="item.name"
              ></v-radio>
            </v-radio-group>
          </v-col>

          <v-col v-else-if="type === 'switch'">
            <v-container class="px-0" fluid>
              <v-switch
                v-model="switchButton"
              ></v-switch>
            </v-container>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="4">
        <v-container>
          <template v-for="(img, index) in images">
            <img
              :key="index"
              v-if="radioGroup === index && type === 'radio'"
              :src="img"
              alt="event_calendar_options"
              class="calendar_image-width"
            />
            <img
              :key="index"
              v-if="Number(switchButton) === index && type === 'switch'"
              :src="img"
              alt="event_calendar_options"
              class="calendar_image-width"
            />
          </template>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    array: {
      type: Array,
      default: () => {
        return [];
      }
    },
    description: {
      type: String,
      default: () => {
        return "";
      }
    },
    images: {
      type: Array,
      default: () => {
        return [];
      }
    },
    scrollDescription: {
      type: String,
      default: () => {
        return "";
      }
    },
    type: {
      type: String,
      default: () => {
        return "radio";
      }
    },
    title:{
        type: Object,
        default: () =>{
            return {}
        }
    }
  },
  data() {
    return {
      radioGroup: 0,
      switchButton: true
    };
  }
};
</script>

<style>
h1 {
  padding-left: 30px;
}

.colContainer {
  display: flex;
  flex-direction: column;
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

.notes{
    margin: 13px 0px 0px 9px;
    font-size: 15px;
}

.title{
    margin: 7px 2px;
}

/* .application .title {
    line-height: 2.5rem !important;
} */
</style>
