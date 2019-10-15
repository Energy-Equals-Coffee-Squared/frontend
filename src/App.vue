<template>
  <!-- MasterPage -->
  <div
    id="app"
    style="background-color: #ebddc4 ; height:auto; min-height: 100vh"
  >
    <b-loading
      style="background-color: #ce9021"
      :is-full-page="true"
      :active.sync="isLoading"
      :can-cancel="false"
    ></b-loading>
    <div class="parent" v-if="!isLoading">
      <!--      Body tag -->
      <section>
        <section>
          <!-- Navigation Bar -->
          <b-navbar>
            <template slot="brand">
              <b-navbar-item class="itemHeight" href="/">
                <img src="../src/assets/images/Logo.png" rel="preload" alt="" />
              </b-navbar-item>
            </template>
            <template slot="start">
              <router-link to="/">
                <b-navbar-item style="height: 100%;">
                  <h1 style="font-size: 21px">Home</h1>
                </b-navbar-item>
              </router-link>

              <router-link to="/product">
                <b-navbar-item style="height: 100%;">
                  <h1 style="font-size: 21px">Products</h1>
                </b-navbar-item>
              </router-link>

              <router-link to="/about">
                <b-navbar-item style="height: 100%;">
                  <h1 style="font-size: 21px">About Us</h1>
                </b-navbar-item>
              </router-link>

              <router-link to="/coffeehelp">
                <b-navbar-item style="height: 100%;">
                  <h1 style="font-size: 21px">Help Finding The Perfect Bean</h1>
                </b-navbar-item>
              </router-link>
            </template>

            <template slot="end">
              <b-navbar-item tag="div">
                <div class="buttons">
                  <router-link class="button is-secondary" to="/cart">
                    <img
                      width="25"
                      src="../src/assets/images/shopping-cart.svg"
                      rel="preload"
                      alt="Cart"
                    />
                  </router-link>
                  <span v-if="userType === 'GUEST'">
                    <router-link
                      class="button is-light"
                      style="background-color: #ebddc4; "
                      to="/register"
                    >
                      <strong> Sign Up </strong>
                    </router-link>
                    <router-link class="button is-primary" to="/login">
                      Log in
                    </router-link>
                  </span>
                  <account-nav v-if="userType !== 'GUEST'"></account-nav>
                </div>
              </b-navbar-item>
            </template>
          </b-navbar>
        </section>
      </section>
    </div>
    <div>
      <!--     Used to load routes here   -->
      <router-view></router-view>
      <!--   <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <div aria-posinset="center"></div>
    </div>

    <footer></footer>
  </div>
</template>

<script>
//Import for Login
import LoginNav from "./components/LoginNav";
import Register from "./views/Register";
import Home from "./views/Home";
import Products from "./views/Products";
import Login from "./views/Login";
import About from "./views/About";
import CoffeeHelp from "./views/CoffeeHelp";
import EditProducts from "./views/EditProducts";
import AccountNav from "./components/AccountNav";

import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "app",
  components: {
    Register,
    LoginNav,
    Home,
    Products,
    Login,
    About,
    CoffeeHelp,
    EditProducts,
    AccountNav
    // Store Homepage as var Homepage --> Do not save as just Homepage
  },
  data: function() {
    return {
      userType: "GUEST",
      isLoading: true
    };
  },
  methods: {
    ...mapActions("error", ["deleteError"]),
    ...mapGetters("user", ["getUserDetails", "getUserType"])
  },
  watch: {
    $route(to, from) {
      this.isLoading = false;
      this.$store.commit("error/deleteError");
      this.userType = this.$store.getters["user/getUserType"];
      setTimeout(() => {
        this.isLoading = false;
      }, 100);
    }
  },
  created() {
    //remove errors on page reload
    this.$store.commit("error/deleteError");
    this.userType = this.$store.getters["user/getUserType"];
    setTimeout(() => {
      this.isLoading = false;
    }, 50);
  }
};
</script>

<style lang="scss" scoped>
/* Resize items of navbar */
.itemHeight {
  height: 100px;
}
/*Resize just the img element of Navbar */
.navbar {
  background-color: #222629;
  min-height: 100px;
  position: relative;
  z-index: 30;
}

.navbar-item img {
  max-height: 100px;
}
.navbar-item {
  color: white;
  margin-left: 50px;
}

a.button.is-primary:hover {
  background-color: #86c232;
}

.button.is-primary {
  background-color: #ce9021;
  border-color: transparent;
  color: white;
}
.button.is-secondary {
  background-color: #86c232;
  border-color: transparent;
  color: white;
}
.is-primary {
  background-color: #ce9021;
}

.box.is-primary {
  background-color: #a07855;
}

.hero.is-link {
  background-color: #181a1b;
}

.navbar-item.editProd {
  visibility: visible;
}

/*Footer*/
</style>
