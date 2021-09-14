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
          name: 'Introduction',
          file: 'txt',
          to: '/'
        },
        {
          name: 'Getting started',
          file: 'txt',
          to: '/'
        },
        {
          name: 'Options',
          children: [
            {
              name: 'static',
              children: [
                {
                  name: 'logo.png',
                  file: 'png',
                  to: '/'
                }
              ]
            },
            {
              name: 'index.html',
              file: 'html',
              to: '/'
            }
          ]
        },
        {
          name: 'About',
          file: 'txt',
          to: '/about'
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
