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
    ...mapGetters("product", ["getProduct"]),
    ...mapGetters("user", ["getUserDetails"])
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
    },
    getCartItems: state => {
      return state.items;
    }
  },

  mutations: {
    addToCart: (state, [prodID, optID, name, weight, price, quantity]) => {
      let cartProduct = state.items.find(prodOpt => prodOpt.optionID === optID);

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
    },
    updateQuantity: (state, [optID, quantity]) => {
      let cartProduct = state.items.find(prodOpt => prodOpt.optionID === optID);

      if (cartProduct) {
        if (quantity > 1) {
          cartProduct.quantity = quantity;
        }
      }
    },
    removeFromCart: (state, optID) => {
      let index = state.items.findIndex(prodOpt => prodOpt.optionID === optID);
      // let index = state.items.indexOf()
      if (index > -1) {
        state.items.splice(index, 1);
      }
    }
  },

  actions: {
    addToCart: ({ commit }, [prodID, optID, name, weight, price, quantity]) => {
      commit("addToCart", [prodID, optID, name, weight, price, quantity]);
    },
    updateQuantity: ({ commit }, [optID, quantity]) => {
      commit("updateQuantity", [optID, quantity]);
    },
    removeFromCart: ({ commit }, optID) => {
      commit("removeFromCart", optID);
    },
    addToInvoice: async ({ commit, state, rootState }) => {
      let curUser = rootState.user.userDetails;
      console.log("UserDetails:");
      console.log(curUser);

      if (!curUser) {
        commit("error/addErrorMessage", "Invalid User ID", { root: true });
        commit("error/showError", null, { root: true });
      } else {
        let InvoiceID;
        //create invoice
        await axios
          .post("http://localhost:5000/api/Invoices/addInvoice", null, {
            params: {
              inUserID: curUser.Id
            }
          })
          .then(function(response) {
            let respData = response.data;
            // eslint-disable-next-line no-console
            console.log(respData);
            if (respData.Status === "error") {
              commit("error/addErrorMessage", respData.Message, { root: true });
              commit("error/showError", null, { root: true });
              return false;
            } else if (respData.Status === "success") {
              InvoiceID = respData.Message.Id;
            }
          })
          .catch(function(error) {
            // eslint-disable-next-line no-console
            console.log(error);
            return false;
          });

        let itemsInCart = state.items;
        for (let i = 0; i < itemsInCart.length; i++) {
          await axios
            .post("http://localhost:5000/api/InvoiceItems/addItem", null, {
              params: {
                inInvoiceID: InvoiceID,
                inProductOptionID: itemsInCart[i].optionID,
                inQuantity: itemsInCart[i].quantity
              }
            })
            .then(function(response) {
              let respData = response.data;
              // eslint-disable-next-line no-console
              console.log(respData);
              if (respData.Status === "error") {
                commit("error/addErrorMessage", respData.Message, {
                  root: true
                });
                commit("error/showError", null, { root: true });
                return false;
              } else if (respData.Status === "success") {
                InvoiceID = respData.Message.Id;
              }
            })
            .catch(function(error) {
              // eslint-disable-next-line no-console
              console.log(error);
              return false;
            });
        }
      }
    }
  }
};
