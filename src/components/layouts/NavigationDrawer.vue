<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <v-sheet color="grey lighten-4" class="pa-4">
        <div>Event Calendar</div>
      </v-sheet>
      <v-divider></v-divider>
      <v-treeview
        v-model="tree"
        :open="initiallyOpen"
        :items="items"
        activatable
        item-key="name"
        open-on-click
      >
        <template v-slot:prepend="{ item, open }">
          <router-link :to="item.to">
            <v-icon v-if="!item.file">
              {{ open ? "mdi-folder-open" : "mdi-folder" }}
            </v-icon>
            <v-icon v-else>
              {{ files[item.file] }}
            </v-icon>
          </router-link>
        </template>
      </v-treeview>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      initiallyOpen: ['public'],
      drawer: true,
      files: {
        html: 'mdi-language-html5',
        js: 'mdi-nodejs',
        json: 'mdi-code-json',
        md: 'mdi-language-markdown',
        pdf: 'mdi-file-pdf',
        png: 'mdi-file-image',
        txt: 'mdi-file-document-outline',
        xls: 'mdi-file-excel'
      },
      tree: [],
      items: [
        {
          name: 'Getting started',
          children: [
            {
              name: 'Introduction',
              file: '',
              to: '/'
            },
            {
              name: 'License',
              file:'',
              to :'/license',
            },
            {
              name: 'Quick start',
              file:'',
              to :'/quickStart',
            },
            {
              name: 'Change log',
              file:'',
              to :'/changeLog',
            },
            {
              name: 'Support',
              file:'',
              to :'/support',
            }
          ]
        },
        {
          name: 'Options',
          children: [
            {
              name: 'Basics',
              file: '',
              to: '/basics'
            },
            {
              name: 'Calendar',
              file: '',
              to:'/calendar',
            },
            {
              name: 'Month',
              file: '',
              to:'/month',
            },
            {
              name: 'Day',
              file: '',
              to:'/day',
            },
            {
              name: 'Event',
              file: '',
              to:'/event',
            },
            {
              name: 'Disabled days',
              file: '',
              to:'/disabledDays',
            },
            {
              name: 'Enabled days',
              file: '',
              to:'/enabledDays',
            },
            {
              name: 'Colorized days',
              file: '',
              to:'/colorizedDays',
            },
          ]
        },
        {
          name: 'Contributing',
          children: [
            {
              name: 'Architecture',
              file: '',
              to: '/architecture'
            },
            {
              name: 'Calendar type',
              file: '',
              to: '/calendarType'
            },
            {
              name: 'Language',
              file: '',
              to: '/language'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
  a {
    text-decoration: none;
  }
</style>
