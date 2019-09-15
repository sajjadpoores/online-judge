import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Multiselect from 'vue-multiselect'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUser,
  faUserPlus,
  faUserMinus,
  faLock,
  faEnvelope,
  faCaretDown,
  faCaretUp,
  faEdit,
  faCheck,
  faTimes,
  faAngleLeft,
  faAngleRight,
  faCode
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import VueCookie from 'vue-cookie'

import VuePersianDatetimePicker from 'vue-persian-datetime-picker'

Vue.use(VuePersianDatetimePicker, {
  name: 'custom-date-picker',
  props: {
    inputFormat: 'YYYY-MM-DD HH:mm',
    format: 'jYYYY-jMM-jDD HH:mm',
    editable: false,
    inputClass: 'form-control my-custom-class-name',
    placeholder: 'Please select a date',
    altFormat: 'YYYY-MM-DD HH:mm',
    color: '#00acc1',
    autoSubmit: false
    // ...
    // ... And whatever you want to set as default
    // ...
  }
})

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
library.add(faUserMinus)
library.add(faCode)

Vue.component('font-awesome-icon', FontAwesomeIcon)
// register multiselect
Vue.component('multiselect', Multiselect)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
