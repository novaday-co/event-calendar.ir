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
    }
  }
</script>
