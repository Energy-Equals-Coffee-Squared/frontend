<template>
  <!-- MasterPage -->
  <div
    id="app"
    style="background-color: #ebddc4 ; height:auto; min-height: 100vh"
  >
    <div class="parent">
      <!--      Body tag -->
      <section>
        <section>
          <!-- Navigation Bar -->
          <b-navbar>
            <template slot="brand">
              <b-navbar-item class="itemHeight" href="/">
                <img src="../src/assets/images/Logo.png" />
              </b-navbar-item>
            </template>
            <template slot="start">
              <b-navbar-item href="/">
                <h1 style="font-size: 21px">Home</h1>
              </b-navbar-item>

              <b-navbar-item href="/product">
                <!--                <router-link to="Products"></router-link>-->

                <h1 style="font-size: 21px">Products</h1>
              </b-navbar-item>

              <b-navbar-item href="/about">
                <h1 style="font-size: 21px">About Us</h1>
              </b-navbar-item>

              <b-navbar-item href="/coffeehelp">
                <h1 style="font-size: 21px">Help Finding The Perfect Bean</h1>
              </b-navbar-item>

              <b-navbar-item
                class="editProd"
                id="editProd"
                href="/editproducts"
              >
                <h1 style="font-size: 21px">Edit Products</h1>
              </b-navbar-item>
            </template>

            <template slot="end">
              <b-navbar-item tag="div">
                <div class="buttons">
                  <a
                    v-if="userType === 'GUEST'"
                    class="button is-light"
                    href="/register"
                    style="background-color: #ebddc4; "
                  >
                    <strong> Sign Up </strong>
                  </a>
                  <a
                    v-if="userType === 'GUEST'"
                    class="button is-primary"
                    href="/login"
                  >
                    Log in
                  </a>
                  <button v-if="userType !== 'GUEST'" @click="logout()" class="button is-primary">
                    Log out
                  </button>
                  <a class="button is-secondary" href="/cart">
                    Cart
                  </a>
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
    EditProducts
    // Store Homepage as var Homepage --> Do not save as just Homepage
  },
  data: function() {
    return {
      userType: "GUEST"
    };
  },
  methods: {
    ...mapActions("error", ["deleteError"]),
    ...mapActions("user", ["logoutUser"]),
    ...mapGetters("user", ["getUserDetails", "getUserType"]),
    logout() {
      this.$store.dispatch("user/logoutUser");
      location.reload();
    }
  },
  created() {
    //remove errors on page reload
    this.$store.commit("error/deleteError");
    this.userType = this.$store.getters["user/getUserType"];
    console.log(this.userType);
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
