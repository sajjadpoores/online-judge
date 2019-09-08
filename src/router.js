import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import Home from './views/Home.vue'
import MainView from './views/Main-view.vue'
import NavRmenu from './views/Nav-rmenu.vue'
import Dashboard from './views/Dashboard.vue'
import Profile from './views/Profile.vue'
import Problems from './views/Problems.vue'
import Problem from './views/Problem.vue'
import CreateProblem from './views/Create-problem.vue'
import SubmitHistory from './views/Submit-history.vue'
import Contests from './views/Contests.vue'
import Contest from './views/Contest.vue'
import createContest from './views/Create-contest.vue'
import Test from './views/Test.vue'
import store from './store'

Vue.use(Router)
const router = new Router({
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
              path: '/problems/:type',
              name: 'problems',
              component: Problems,
              props: true
            },
            {
              path: '/problem/:pid',
              name: 'problem',
              component: Problem,
              props: true
            },
            {
              path: '/create/problem',
              name: 'createProblem',
              component: CreateProblem
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
            },
            {
              path: '/create/contest',
              name: 'CreateContest',
              component: createContest
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

function checkAuthentication (jwt) {
  axios
    .get(store.state.backendUrl + '/profile', {
      headers: {
        Authorization: jwt
      }
    })
    .then(response => {
      // do nothing
    })
    .catch(error => {
      if (error.response.status === 401) Vue.cookie.delete('auth')
      router.push({ name: 'home' })
    })
}

router.beforeEach((to, from, next) => {
  const jwt = Vue.cookie.get('auth')

  if (to.path === '/logout') {
    Vue.cookie.delete('auth')
    router.push({ name: 'home' })
    return
  }

  checkAuthentication(jwt)

  if (jwt || to.name === 'home') next()
  else router.push({ name: 'home' })
})

export default router
