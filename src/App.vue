<template>
  <!-- MasterPage -->
<<<<<<< Updated upstream
  <div id="app">
    <div class = "parent">
      <section>
        <!-- Navigation Bar -->
        <b-navbar>
          <template slot="brand">
            <b-navbar-item class = "itemHeight" href="/" >
              <img
                      src="../src/assets/images/Logo.png"
              >
            </b-navbar-item>
          </template>
          <template slot="start">
            <b-navbar-item href="#">
              Home
            </b-navbar-item>
            <b-navbar-item href="#">
              Documentation
            </b-navbar-item>
          </template>

          <template slot="end">
            <b-navbar-item tag="div">
              <div class="buttons">
                <a class="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a class="button is-light">
                  Log in
                </a>
              </div>
            </b-navbar-item>
          </template>
        </b-navbar>
=======
  <div
    id="app"
    style="background-color: #222629 ; height:auto; min-height: 100vh"
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
                  <router-link style="margin: 10px;" to="/cart">
                    <img
                      width="25"
                      src="../src/assets/images/shopping-cart.svg"
                      rel="preload"
                      alt="Cart"
                      style="color: #9E6C00"
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
                    <router-link style="background-color: #ce9021; border: 0;" class="button has-text-white" to="/login">
                      Log in
                    </router-link>
                  </span>
                  <account-nav v-if="userType !== 'GUEST'"></account-nav>
                </div>
              </b-navbar-item>
            </template>
          </b-navbar>
        </section>
>>>>>>> Stashed changes
      </section>
    </div>
    <!--   <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div>

    </div>
    <footer>

    </footer>
  </div>
</template>

<script>

  export default {
    name: 'app',
    components: {

      // Store Homepage as var Homepage --> Do not save as just Homepage

    }
  }
</script>

<style lang="scss" scoped>
<<<<<<< Updated upstream
  /*#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  } */
  /* Resize items of navbar */
  .itemHeight{
    height: 100px;
=======
/* Resize items of navbar */
.itemHeight {
  height: 100px;
}
/*Resize just the img element of Navbar */
.navbar {
  background-color: #0C0E10;
  min-height: 100px;
  position: relative;
  z-index: 30;
}
>>>>>>> Stashed changes

  }
  /*Resize just the img element of Navbar */
  .navbar-item img{
    max-height: 100px;
  }

<<<<<<< Updated upstream
  .navbar {
    background-color: #BCB8B9;
    min-height: 100px ;
    position: relative;
    z-index: 30;
  }

  .button.is-primary {
    background-color: #00ADDA;
    border-color: transparent;
    color: white;
  }

  .box.is-primary{
    background-color: #00ADDA;
  }
=======
/*a.button.is-primary:hover {*/
/*  background-color: #86c232;*/
/*}*/

.button.is-primary {
  background-color: #ce9021;
  border-color: transparent;
  color: white;
}
.button.is-secondary {
  background-color: #ce9021;
  border-color: transparent;
  color: white;
}
.is-primary {
  background-color: #ce9021;
}

.box.is-primary {
  background-color: #ce9021;
}
>>>>>>> Stashed changes

  .hero.is-link {
    background-color : #181a1b  ;
  }


</style>
