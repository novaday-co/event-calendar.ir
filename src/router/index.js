import Vue from 'vue'
import Router from 'vue-router'

// Pages
import Home from '@/view/pages/Home/route'
import Architecture from '@/view/pages/Architecture/route'
import License from '@/view/pages/License/route'
import Support from '@/view/pages/Support/route'
import QuickStart from '@/view/pages/QuickStart/route'
import ChangeLog from '@/view/pages/ChangeLog/route'
import Basics from '@/view/pages/Basics/route'
import Calendar from '@/view/pages/Calendar/route'
import Month from '@/view/pages/Month/route'
import Day from '@/view/pages/day/route'
import Event from '@/view/pages/event/route'
import CalendarType from '@/view/pages/CalendarType/route'
import Language from '@/view/pages/Language/route'
import Header from '@/view/pages/Header/route'
import styleEvent from '@/view/pages/styleEvent/route'

Vue.use(Router)

const router = new Router({
  routes: [
    Home,
    CalendarType,
    Architecture,
    License,
    Support,
    QuickStart,
    ChangeLog,
    Basics,
    Calendar,
    Month,
    Day,
    Event,
    Language,
    Header,
    styleEvent
  ]
})

export default router
