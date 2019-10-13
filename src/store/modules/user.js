import axios from "axios";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  namespaced: true,
  methods: {
    ...mapMutations("error", ["addErrorMessage", "showError"])
  },

  state: {
    isLoggedIn: false,
    isAdmin: false,
    userDetails: {
      Id: -1,
      username: "",
      contact_number: "",
      email: "",
      first_name: "",
      last_name: "",
      isAdmin: false
    }
  },

  getters: {
    getUserDetails: state => {
      return state.userDetails;
    },
    getUserType: state => {
      if (state.isLoggedIn) {
        if (state.isAdmin) {
          return "ADMIN";
        }
        return "USER";
      } else {
        return "GUEST";
      }
    }
  },

  mutations: {
    addUserDetails: (state, userPayload) => {
      console.log(userPayload);
      state.userDetails.Id = userPayload.Id;
      state.userDetails.contact_number = userPayload.contact_number;
      state.userDetails.username = userPayload.username;
      state.userDetails.email = userPayload.email;
      state.userDetails.first_name = userPayload.first_name;
      state.userDetails.last_name = userPayload.last_name;
      state.userDetails.isAdmin = userPayload.isAdmin;

      if (state.userDetails.Id) {
        state.isLoggedIn = true;
        if (state.userDetails.isAdmin) {
          state.isAdmin = true;
        }
      }
    },
    removeUser: state => {
      state.isAdmin = false;
      state.isLoggedIn = false;
      console.log("LOGGED OUT IN MUTATION");
      state.userDetails.Id = -1;
      state.userDetails.contact_number = "";
      state.userDetails.email = "";
      state.userDetails.first_name = "";
      state.userDetails.last_name = "";
      state.userDetails.isAdmin = false;
    }
  },

  actions: {
    //added by Minimac
    loginUser: async ({ commit }, [username, password]) => {
      commit("removeUser");
      await axios
        .post("http://localhost:5000/api/Users/Login", null, {
          params: {
            username: username,
            password: password
          }
        })
        .then(function(response) {
          let respData = response.data;
          console.log(respData);
          if (respData.Status === "error") {
            console.log("errooooor");
            commit("error/addErrorMessage", respData.Message, { root: true });
            commit("error/showError", null, { root: true });
          } else if (respData.Status === "success") {
            commit("addUserDetails", respData.Message);
            return true;
          }
        })
        .catch(function(error) {
          // eslint-disable-next-line no-console
          console.log(error);
          return false;
        });
    },
    registerUser: async ({ commit }, [username, email, firstname, lastname, password, contactNumber]) => {
      commit("removeUser");
      await axios
        .post("http://localhost:5000/api/Users/Register", null, {
          params: {
            inUsername: username,
            inEmail: email,
            inFirst_name: firstname,
            inLast_name: lastname,
            inPassword: password,
            inContact_number: contactNumber
          }
        })
        .then(function(response) {
          let respData = response.data;
          // eslint-disable-next-line no-console
          console.log(respData);
          if (respData.Status === "error") {
            commit("error/addErrorMessage", respData.Message, { root: true });
            commit("error/showError", null, { root: true });
          } else if (respData.Status === "success") {
            commit("addUserDetails", respData.Message);
            return true;
          }
        })
        .catch(function(error) {
          // eslint-disable-next-line no-console
          console.log(error);
          return false;
        });
    },
    logoutUser: ({ commit }) => {
      commit("removeUser");
    }
  }
};
