<template>
  <!-- MasterPage -->
  <div id="app">
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
                Home
              </b-navbar-item>

              <b-navbar-item href="/product">
                <!--                <router-link to="Products"></router-link>-->

                Products
              </b-navbar-item>

              <b-navbar-item href = "/about">
                About Us
              </b-navbar-item>

              <b-navbar-item href="/coffeehelp">
                Find The Perfect Bean Type
              </b-navbar-item>
            </template>

            <template slot="end">
              <b-navbar-item tag="div">
                <div class="buttons">
                  <a class="button is-light" href="/register">
                    <strong> Sign Up </strong>
                  </a>
                  <a class="button is-primary" href="/login">
                    Log in
                  </a>
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

export default {
  name: "app",
  components: {
    Register,
    LoginNav,
    Home,
    Products,
    Login,
    About,
    CoffeeHelp
    // Store Homepage as var Homepage --> Do not save as just Homepage
  }
};
</script>

<style lang="scss" scoped>
/*#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  } */
/* Resize items of navbar */
.itemHeight {
  height: 100px;
}
/*Resize just the img element of Navbar */
.navbar-item img {
  max-height: 100px;
}

.navbar {
  background-color: #d4b996;
  min-height: 100px;
  position: relative;
  z-index: 30;
}

.button.is-primary {
  background-color: #a07855;
  border-color: transparent;
  color: white;
}
.button.is-secondary{
  background-color: #92623b;
  border-color: transparent;
  color: white;
}
.is-primary{
  background-color: #00adda;
}

.box.is-primary {
  background-color: #00adda;
}

.hero.is-link {
  background-color: #181a1b;
}
</style>
