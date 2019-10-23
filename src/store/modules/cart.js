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
    ...mapMutations("error", ["addErrorMessage", "showError", "deleteError"]),
    ...mapGetters("product", ["getProduct"]),
    ...mapGetters("user", ["getUserDetails"])
  },

  state: {
    items: [],
    discountCode: "",
    discountPercent: 0
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
    },
    getDiscount: state => {
      return { code: state.discountCode, percent: state.discountPercent };
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
    },
    emptyCart: state => {
      state.items = [];
    },
    removeDiscount: state => {
      state.discountCode = "";
      state.discountPercent = 0;
    },
    reset: state => {
      state.items = [];
      state.discountCode = "";
      state.discountPercent = 0;
    }
  },

  actions: {
    addCartToDB: async ({ commit, state, rootState }) => {
      let curUser = rootState.user.userDetails;

      for (let i = 0; i < state.items.length; i++) {
        let params = {
          inUserID: curUser.Id,
          inProductOptionID: state.items[i].optionID,
          inQuantity: state.items[i].quantity
        };
        await axios
          .post("http://localhost:5000/api/CartItems/getCart", null, {
            params
          })
          .then(function(response) {
            let respData = response.data;
            // eslint-disable-next-line no-console
            console.log(respData);
            if (respData.Status === "error") {
            } else if (respData.Status === "success") {
              console.log("Items Added To Cart In DB");
            }
          })
          .catch(function(error) {
            // eslint-disable-next-line no-console
            console.log(error);
          });
      }
    },
    getCartFromDB: async ({ commit, state, rootState }) => {
      let curUser = rootState.user.userDetails;
      let params = {
        inUserID: curUser.Id
      };
      await axios
        .post("http://localhost:5000/api/CartItems/getCart", null, {
          params
        })
        .then(function(response) {
          let respData = response.data;
          // eslint-disable-next-line no-console
          console.log(respData);
          console.log("test");
          if (respData.Status === "error") {
          } else if (respData.Status === "success") {
            let msg = respData.Message;
            console.log(msg);

            for (let i = 0; i < msg.options.length; i++) {
              console.log(msg.options[i]);
              commit("addToCart", [
                msg.options[i].ProductOption.ProductID,
                msg.options[i].ProductOption.Id,
                msg.options[i].ProductOption.Product.name,
                msg.options[i].ProductOption.weight,
                msg.options[i].ProductOption.price,
                msg.options[i].quantity
              ]);
            }
          }
        })
        .catch(function(error) {
          // eslint-disable-next-line no-console
          console.log(error);
        });
    },
    addDiscountCode: async ({ commit, state }, code) => {
      await axios
        .get("http://localhost:5000/api/DiscountCodes/" + code)
        .then(response => {
          let respData = response.data;
          // eslint-disable-next-line no-console
          console.log(respData);
          if (respData.Status === "error") {
            commit("error/addErrorMessage", respData.Message, { root: true });
            commit("error/showError", null, { root: true });
            state.discountCode = "";
            state.discountPercent = 0;
          } else if (respData.Status === "success") {
            state.discountCode = code.toUpperCase();
            state.discountPercent = respData.Message.percentage;
            commit("error/deleteError", null, { root: true });
          }
        })
        .catch(error => {});
    },
    removeDiscount: async ({ commit }) => {
      commit("removeDiscount");
    },
    addToCart: ({ commit }, [prodID, optID, name, weight, price, quantity]) => {
      commit("addToCart", [prodID, optID, name, weight, price, quantity]);
    },
    updateQuantity: ({ commit }, [optID, quantity]) => {
      commit("updateQuantity", [optID, quantity]);
    },
    removeFromCart: ({ commit }, optID) => {
      commit("removeFromCart", optID);
    },
    addToInvoice: async ({ commit, state, rootState }, code) => {
      let curUser = rootState.user.userDetails;
      console.log("UserDetails:");
      console.log(curUser);

      if (!curUser) {
        commit("error/addErrorMessage", "Invalid User ID", { root: true });
        commit("error/showError", null, { root: true });
      } else {
        let InvoiceID;
        let error = false;
        let tempParams = {};
        if (code) {
          tempParams = {
            inUserID: curUser.Id,
            discountCode: code
          };
        } else {
          tempParams = {
            inUserID: curUser.Id
          };
        }

        //create invoice
        await axios
          .post("http://localhost:5000/api/Invoices/addInvoice", null, {
            params: tempParams
          })
          .then(function(response) {
            let respData = response.data;
            // eslint-disable-next-line no-console
            console.log(respData);
            if (respData.Status === "error") {
              commit("error/addErrorMessage", respData.Message, { root: true });
              commit("error/showError", null, { root: true });
              error = true;
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
        if (error === false) {
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
                  // return false;
                } else if (respData.Status === "success") {
                  commit("emptyCart");
                }
              })
              .catch(function(error) {
                // eslint-disable-next-line no-console
                console.log(error);
                // return false;
              });
          }
          await axios
            .post(
              "http://localhost:5000/api/InvoiceItems/updateShipping",
              null,
              {
                params: {
                  inInvoiceID: InvoiceID
                }
              }
            )
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

              }
            })
            .catch(function(error) {
              // eslint-disable-next-line no-console
              console.log(error);
              return false;
            });
        }
      }
    },
    reset: ({ commit }) => {
      commit("reset");
    }
  }
};
