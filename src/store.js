import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    backendUrl: 'http://178.22.122.251:3000',
    profileDetail: {
      username: null,
      email: null,
      phone: null,
      nationalID: null,
      studentID: null,
      avatar_url: null
    },
    problems: []
  },
  mutations: {
    updateProfile (state, profile) {
      state.profileDetail = profile
    },
    updateProblems (state, problems) {
      state.problems = problems
      return state.problems
    }
  },
  actions: {
    getProfile ({ commit }, jwt) {
      // if state is not already updated
      if (this.state.profileDetail.username === null) {
        axios
          .get(this.state.backendUrl + '/profile', {
            headers: {
              Authorization: jwt
            }
          })
          .then(response => {
            commit('updateProfile', response.data.body)
          })
          .catch(error => {
            // redirect home in case user is unathorized
            if (error.response.status === 401) {
              this.$router.push({ name: 'home' })
            }
            //  do nothing
          })
      }
    },
    updateProfile ({ commit }, profile) {
      commit('updateProfile', profile)
    },
    getProblems ({ commit }, type = 'all') {
      if (type === 'user') {
        var jwt = Vue.cookie.get('auth')
        return axios
          .get(this.state.backendUrl + '/problem', {
            headers: {
              Authorization: jwt
            }
          })
          .then(response => {
            var problems = response.data.body
            console.log(response)
            return commit('updateProblems', problems)
          })
          .catch(error => {
            // redirect home in case user is unathorized
            // if (error.response.status === 401) {
            //   this.$router.push({ name: 'home' })
            // }
            console.log(error.response)
          })
      } else {
        return axios
          .get(this.state.backendUrl + '/problem/all')
          .then(response => {
            var problems = response.data.body
            return commit('updateProblems', problems)
          })
          .catch(error => {
            // redirect home in case user is unathorized
            if (error.response.status === 401) {
              this.$router.push({ name: 'home' })
            }
            console.log(error.response)
          })
      }
    }
  }
})
