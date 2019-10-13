import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import error from "./modules/error";
import cart from "./modules/cart";
import product from "./modules/product";

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
    error,
    cart,
    product
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  plugins: [vuexPersist.plugin]
});
