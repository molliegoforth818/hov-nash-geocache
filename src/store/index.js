
import Vue from "vue";
import Vuex from "vuex";
import { latLng } from "leaflet";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    userCoords: null,
    welcomeMessage: null,
    nashvilleCenter: latLng(36.1627, -86.7816) 
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setUserCoords(state, payload) {
      state.userCoords = payload;
    },
    setWelcomeMessage(state, payload) {
      state.welcomeMessage = payload;
    }
  },
  actions: {
    showWelcomeMessage({ commit }, payload) {
      commit("setWelcomeMessage", payload);
      setTimeout(() => {
        commit("setWelcomeMessage", null);
      }, 1000);
    }
  },
  modules: {}
});