import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUser,
  faLock,
  faEnvelope,
  faCaretDown,
  faCaretUp,
  faEdit,
  faCheck,
  faTimes,
  faAngleLeft,
  faAngleRight,
  faUserPlus,
  faCode
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import VueCookie from 'vue-cookie'
Vue.use(VueCookie)

library.add(faUser)
library.add(faLock)
library.add(faEnvelope)
library.add(faCaretDown)
library.add(faCaretUp)
library.add(faEdit)
library.add(faCheck)
library.add(faTimes)
library.add(faAngleLeft)
library.add(faAngleRight)
library.add(faUserPlus)
library.add(faCode)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
