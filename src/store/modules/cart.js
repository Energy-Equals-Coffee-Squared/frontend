import axios from "axios";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  namespaced: true,
  data() {
    return {
      tempProd: []
    };
  },
  computed: {
    ...mapState("error", ["errorText", "errorShow"])
  },
  methods: {
    ...mapMutations("error", ["addErrorMessage", "showError"]),
    ...mapGetters("product", ["getProduct"])
  },

  state: {
    items: []
  },

  getters: {
    cartSize: state => {
      return state.items.length;
    },
    cartTotalAmount: state => {
      let total = 0;
      for (let i = 0; i < state.items.length; i++) {
        let price = state.items[i].price;
        let quantity = state.items[i].quantity;
        total += price * quantity;
      }
      return total;
    }
  },

  mutations: {
    addToCart: (state, [prodID, optID, name, weight, price, quantity]) => {
      let cartProduct = state.items.find((prodOpt) => prodOpt.optionID === optID);

      if (cartProduct) {
        cartProduct.quantity += quantity;
      } else {
        state.items.push({
          productID: prodID,
          optionID: optID,
          name: name,
          weight: weight,
          price: price,
          quantity: quantity
        });
      }
    }
  },

  actions: {
    addToCart: ({ commit }, [prodID, optID, name, weight, price, quantity]) => {
      commit("addToCart", [prodID, optID, name, weight, price, quantity]);
    }
  }
};
