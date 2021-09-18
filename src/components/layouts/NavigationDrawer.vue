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
              file:'',
              to :'/',
            },
            {
              name: 'License',
              file:'',
              to :'/',
            },
            {
              name: 'Quick start',
              file:'',
              to :'/',
            },
            {
              name: 'Change log',
              file:'',
              to :'/',
            },
            {
              name: 'Support',
              file:'',
              to :'/',
            }
          ]
        },
        {
          name: 'Options',
          children: [
            {
              name: 'Basics',
              file: '',
              to:'/',
            },
            {
              name: 'Calendar',
              file: '',
              to:'/',
            },
            {
              name: 'Month',
              file: '',
              to:'/',
            },
            {
              name: 'Day',
              file: '',
              to:'/',
            },
            {
              name: 'Event',
              file: '',
              to:'/',
            },
            {
              name: 'Disabled days',
              file: '',
              to:'/',
            },
            {
              name: 'Enabled days',
              file: '',
              to:'/',
            },
            {
              name: 'Colorized days',
              file: '',
              to:'/',
            },
          ]
        }, 
        {
          name: 'Contributing',
          children : [
            {
              name: 'Architecture',
              file: '',
              to: '/about'
            },
            {
              name: 'Calendar type',
              file: '',
              to: '/about'
            },
            {
              name: 'Language',
              file: '',
              to: '/about'
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
