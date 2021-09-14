<template>
  <v-app id="inspire">

    <div>
    <v-system-bar app>
      <v-spacer></v-spacer>


    </v-system-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-sheet
        color="grey lighten-4"
        class="pa-4"
      >
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
      <v-icon v-if="!item.file">
        {{ open ? 'mdi-folder-open' : 'mdi-folder' }}
      </v-icon>
      <v-icon v-else>
        {{ files[item.file] }}
      </v-icon>
    </template>
  </v-treeview>

    </v-navigation-drawer>

    <v-main>
      <v-container
        class="py-8 px-6"
        fluid
      >
        <router-view/>
      </v-container>
    </v-main>
    </div>

  </v-app>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'App',
    components: {
      //
    },
    computed: {
      ...mapGetters('i18n', [
        'langDefault'
      ])
    },
    mounted () {
      const payload = {
        lang: this.langDefault,
        app: this
      }
      this.$store.commit('i18n/LANG_CHANGE', payload, { root: true })
    },
    data: () => ({
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
          file: 'txt'
        },
        {
          name: 'Getting started',
          file: 'txt'
        },
        {
          name: 'Options',
          children: [
            {
              name: 'static',
              children: [{
                name: 'logo.png',
                file: 'png'
              }]
            },
            {
              name: 'index.html',
              file: 'html'
            }
          ]
        },
        {
          name: 'About',
          file: 'txt'
        }
      ]
    })
  }
</script>
