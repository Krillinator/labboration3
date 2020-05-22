import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
    changeNumber(state) {
      state.number += 1
    },
    setBoolean(state, tof) {
      state.Bool = tof
    }
  },
  actions: {
  },
  modules: {
  }
})
