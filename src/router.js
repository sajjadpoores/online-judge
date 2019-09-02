import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MainView from './views/Main-view.vue'
import NavRmenu from './views/Nav-rmenu.vue'
import Dashboard from './views/Dashboard.vue'
import Profile from './views/Profile.vue'
import Problems from './views/Problems.vue'
import Problem from './views/Problem.vue'
import SubmitHistory from './views/Submit-history.vue'
import Contests from './views/Contests.vue'
import Contest from './views/Contest.vue'
import Test from './views/Test.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/main',
      name: 'main',
      component: MainView,
      children: [
        {
          path: '/navRmenu',
          name: 'navRmenu',
          component: NavRmenu,
          children: [
            {
              path: '/dashboard',
              name: 'dashboard',
              component: Dashboard
            },
            {
              path: '/problems',
              name: 'problems',
              component: Problems
            },
            {
              path: '/problem/:pid',
              name: 'problem',
              component: Problem
            },
            {
              path: '/history',
              name: 'history',
              component: SubmitHistory
            },
            {
              path: '/contests',
              name: 'contests',
              component: Contests
            },
            {
              path: '/contest/:cid',
              name: 'contest',
              component: Contest
            }
          ]
        },
        {
          path: '/profile',
          name: 'profile',
          component: Profile
        }
      ]
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})
