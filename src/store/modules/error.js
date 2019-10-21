import axios from "axios";

export default {
  namespaced: true,

  state: {
    errorText: "",
    errorShow: false
  },

  getters: {},

  mutations: {
    addErrorMessage: (state, message) => {
      state.errorText = message;
    },
    showError: state => {
      state.errorShow = true;
    },
    deleteError: state => {
      state.errorShow = false;
      state.errorText = null;
    }
  },

  actions: {
    deleteError: ({ commit }) => {
      commit("deleteError");
    }
  }
};
