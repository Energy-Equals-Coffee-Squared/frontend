import axios from "axios";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  namespaced: true,

  state: {
    Id: -1,
    name: "",
    desc: "",
    max_price: -1,
    min_price: -1,
    region: "",
    roast: "",
    altitude_max: -1,
    altitude_min: -1,
    bean_type: "",
    image_url: "",
    productOptions: []
  },

  getters: {
    getProduct: state => {
      return state;
    }
  },

  mutations: {
    addProduct: (state, payload) => {
      state.Id = payload.Id;
      state.name = payload.name;
      state.desc = payload.desc;
      state.max_price = payload.max_price;
      state.min_price = payload.min_price;
      state.region = payload.region;
      state.roast = payload.roast;
      state.altitude_max = payload.altitude_max;
      state.altitude_min = payload.altitude_min;
      state.bean_type = payload.bean_type;
      state.image_url = payload.image_url;
      state.productOptions = payload.productOptions;
    },
    reset: state => {
      state.Id = -1;
      state.name = "";
      state.desc = "";
      state.max_price = -1;
      state.min_price = -1;
      state.region = "";
      state.roast = "";
      state.altitude_max = -1;
      state.altitude_min = -1;
      state.bean_type = "";
      state.image_url = "";
      state.productOptions = [];
    }
  },

  actions: {
    getProduct: async ({ commit }, prodID) => {
      try {
        await axios
          .get("http://localhost:5000/api/Products/" + prodID)
          .then(response => {
            commit("addProduct", response.data);
            // eslint-disable-next-line no-console
            console.log(response.data);
          });
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
      }
    },
    reset: ({ commit }) => {
      commit("reset");
    }
  }
};
