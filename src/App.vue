<template>
  <v-app id="inspire">
    <div>
      <!-- Header navigation bar -->
      <system-bar />
      <!-- Navigation bar: where menu show -->
      <navigation-drawer />
      <!-- Main: where view show -->
      <v-main>
        <v-container class="py-8 px-6" fluid>
          <router-view />
        </v-container>
      </v-main>
    </div>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import navigationDrawer from './components/layouts/NavigationDrawer.vue'
import systemBar from './components/layouts/SystemBar.vue'
export default {
  name: 'App',
  components: {
    navigationDrawer,
    systemBar
  },
  computed: {
    ...mapGetters('i18n', ['langDefault'])
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
