import Vue from 'vue'
import Router from 'vue-router'

// Pages
import Home from '@/view/pages/Home/route'
import About from '@/view/pages/About/route'

Vue.use(Router)

const router = new Router({
  routes: [
    Home,
    About
  ]
})

export default router
