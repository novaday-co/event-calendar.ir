<template>
  <div>
    <v-row class="justify-space-around">
      <v-col cols="12" md="8">
        <button v-scroll-to="'#viewtype'" >
            {{scrollDescription}}
        </button>
        <p class="paragraph" v-html="description" />
        <v-row class="align-items-center">
          <v-col cols="4">
            <p>Try it now:</p>
          </v-col>
          <v-col cols="8">
            <v-radio-group v-model="radioGroup" class="radioButton mt-0" row>
              <v-radio
                v-for="item in array"
                :key="item.name"
                :label="item.name"
              ></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="4">
        <v-container>
            <template
                v-for="(img, index) in images"
            >
                <img
                    :key="index"
                    v-if="radioGroup === index"
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
        return []
      }
    },
    description: {
      type: String,
      default: () => {
        return ''
      }
    },
    images: {
        type: Array,
        default: () => {
            return []
        }
    },
    scrollDescription :{
        type : String,
        default:() =>{
            return ''
        }
    }
  },
  data() {
    return {
      radioGroup: 0
    };
  }
};
</script>

<style scoped>
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
  margin: 30px 
}
</style>
