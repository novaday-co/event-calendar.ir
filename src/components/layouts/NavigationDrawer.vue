<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <v-sheet color="grey lighten-4" class="pa-4">
        <div>Event Calendar</div>
      </v-sheet>
      <v-divider></v-divider>
      <v-treeview
        v-model="tree"
        :active.sync="active"
        :open="initiallyOpen"
        :items="items"
        activatable
        item-key="name"
        open-on-click
      >
        <template slot="label" slot-scope="props">
          <router-link
            :to="{ path: props.item.to }"
            class="routerLink"
            @change="changePage(props.item.name)"
          >
            <v-icon v-if="!props.item.file">
              {{ "mdi-folder" }}
            </v-icon>
            <v-icon v-else>
              {{ files[props.item.file] }}
            </v-icon>
            {{ props.item.name }}
          </router-link>
        </template>
      </v-treeview>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      initiallyOpen: ["Getting started"],
      active: [],
      drawer: true,
      files: {
        html: "mdi-language-html5",
        js: "mdi-nodejs",
        json: "mdi-code-json",
        md: "mdi-language-markdown",
        pdf: "mdi-file-pdf",
        png: "mdi-file-image",
        txt: "mdi-file-document-outline",
        xls: "mdi-file-excel"
      },
      tree: [],
      items: [
        {
          name: "Getting started",
          children: [
            {
              name: "Introduction",
              file: "",
              to: "/"
            },
            {
              name: "License",
              file: "",
              to: "/license"
            },
            {
              name: "Quick start",
              file: "",
              to: "/quickStart"
            },
            {
              name: "Change log",
              file: "",
              to: "/changeLog"
            },
            {
              name: "Support",
              file: "",
              to: "/support"
            }
          ]
        },
        {
          name: "Options",
          children: [
            {
              name: "Basics",
              file: "",
              to: "/basics"
            },
            {
              name: "Calendar",
              file: "",
              to: "/calendar"
            },
            {
              name: "Month",
              file: "",
              to: "/month"
            },
            
            {
              name: "Event",
              file: "",
              to: "/event"
            },
            {
              name: "Disabled days",
              file: "",
              to: "/disabledDays"
            },
            {
              name: "Enabled days",
              file: "",
              to: "/enabledDays"
            },
            {
              name: "Colorized days",
              file: "",
              to: "/colorizedDays"
            }
          ]
        },
        {
          name: "Style",
          children:[
          {
            name:"Day",
            file :"",
            to:"/day"
            },
            {
            name:"Event",
            file :"",
            to:"/styleEvent"
            },
            {
            name:"Header",
            file :"",
            to:"/header"
            },

          ]
        },
        {
          name: "Contributing",
          children: [
            {
              name: "Architecture",
              file: "",
              to: "/architecture"
            },
            {
              name: "Calendar type",
              file: "",
              to: "/calendarType"
            },
            {
              name: "Language",
              file: "",
              to: "/language"
            }
          ]
        }
      ]
    };
  },
  methods: {
    changePage(title) {
      this.initiallyOpen = [title];
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.routerLink {
  color: rgba(0,0,0,.54);
  font-weight: 500;
}
</style>
