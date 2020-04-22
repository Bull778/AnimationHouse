import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Classification from '../views/Classification'
import History from '../views/History'
import Login from '../views/Login'
import My from '../views/My'
import Ranking from '../views/Ranking'
import Registered from '../views/Registered'
import Search from '../views/Search'
import SearchResults from '../views/SearchResults'
import Update from '../views/Update'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { path: '/classification', component: Classification },
    { path: '/history', component: History },
    { path: '/login', component: Login },
    { path: '/ranking', component: Ranking },
    { path: '/my', component: My },
    { path: '/registered', component: Registered },
    { path: '/search', component: Search },
    { path: '/searchResults', component: SearchResults },
    { path: '/update', component: Update },
    { path: '/', redirect: '/home' }
  ]
})

export default router
