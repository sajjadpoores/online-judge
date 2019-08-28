import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MainView from './views/Main-view.vue'
import Dashboard from './views/Dashboard.vue'
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
          path: '/dashboard',
          name: 'dashboard',
          component: Dashboard
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
