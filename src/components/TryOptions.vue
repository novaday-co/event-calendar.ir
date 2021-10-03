<template>
  <div>
    <v-row class="header">
      <v-container class="headerContainer">
      <h2 class="title">{{ title.name }}</h2>
      <p v-if="title.description" class="notes">: {{ title.description }}</p>

      <button v-scroll-to="`#${scrollDest}`" class="scrollButton">
        {{ scrollDescription }}
      </button>
      </v-container>
    </v-row>
    <v-divider></v-divider>
    <v-row class="justify-space-around">
      <v-col cols="12" md="8">


        <p class="paragraph" v-html="description" />
        <vue-code-highlight v-if="codeBox===true" language="dart">

          <pre class="mb-0 py-2" v-html="code">
          </pre>
        </vue-code-highlight>

        <v-row class="align-items-center">
          <v-col cols="2" v-if="type !== 'none'">
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

          <v-col  v-else-if="type === 'switch'">
            <v-container class="px-0 switch"  fluid>
              <v-switch v-model="switchButton"></v-switch>
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
import { component as VueCodeHighlight } from 'vue-code-highlight'
import 'vue-code-highlight/themes/prism-okaidia.css'
import 'prism-es6/components/prism-markup-templating'
import 'prism-es6/components/prism-dart'
export default {
  components:{
    VueCodeHighlight
  },
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
    title: {
      type: Object,
      default: () => {
        return {};
      }
    },
    scrollDest:{
      type: String,
      default: () =>{
        return{};
      }
    },

    code:{
      type : String,
      default:()=>{
        return{};
      }
    },
    codeBox:{
      type : Boolean,
      default:()=>{
        return{};
      }
    }
  },
  data() {
    return {
      radioGroup: 0,
      switchButton: true
    };
  },
};
</script>

<style scoped>
h1 {
  padding-left: 30px;
}

/* .container{
  margin-left: 30px !important;
} */

.header{
  align-items: center;
}

.headerContainer{
  position: relative;
  display: contents;
}

.scrollButton{
  position: absolute;
  right: 60px;

}

.colContainer {
  display: flex;
  flex-direction: column;
}

.language-dart {
  border-radius: 5px; 
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
  margin-bottom: 7px !important;
}
.paragraph[data-v-36123513] {
  margin: 0px !important;
}
.paragraph {
  margin: 30px;
}

.row{
  margin: 12px;
}

.notes {
  margin: 13px 0px 0px 9px;
  font-size: 15px;
}

.switch{
  margin-top: 3px;
}

.title {
  margin: 7px 2px 0px;
}
</style>
