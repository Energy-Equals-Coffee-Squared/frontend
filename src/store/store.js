import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import error from "./modules/error";

import VuexPersist from "vuex-persist";

const vuexPersist = new VuexPersist({
  key: "my-app",
  storage: window.localStorage
});

Vue.use(Vuex);

export const store = new Vuex.Store({
  namespaced: true,
  modules: {
    user,
    error
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  plugins: [vuexPersist.plugin]
});
