<template>
  <!-- MasterPage -->
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
              Products
            </b-navbar-item>

            <b-navbar-item>
              About Us
            </b-navbar-item>

            <b-navbar-item>
              Find The Perfect Bean Type
            </b-navbar-item>

          </template>

          <template slot="end">
            <b-navbar-item>
              <strong>Cart</strong>
            </b-navbar-item>


      <b-navbar-dropdown label="Account">
            <div class="navbar-menu">
              <div class="navbar-end">
                <b-dropdown position="is-bottom-left" aria-role="menu">
                  <a
                          class="navbar-item"
                          slot="trigger"
                          role="button">
                    <span>Login</span>
                    <b-icon icon="menu-down"></b-icon>
                  </a>

                  <b-dropdown-item
                          aria-role="menu-item"
                          :focusable="false"
                          custom
                          paddingless>
                    <form action="">
                      <div class="modal-card" style="width:300px;">
                        <section class="modal-card-body">
                          <b-field label="Email">
                            <b-input
                                    type="email"
                                    placeholder="Your email"
                                    required>
                            </b-input>
                          </b-field>

                          <b-field label="Password">
                            <b-input
                                    type="password"
                                    password-reveal
                                    placeholder="Your password"
                                    required>
                            </b-input>
                          </b-field>

                          <b-checkbox>Remember me</b-checkbox>
                        </section>
                        <footer class="modal-card-foot">
                          <button class="button is-primary">Login</button>
                        </footer>
                      </div>
                    </form>
                  </b-dropdown-item>

                </b-dropdown>
              </div>
            </div>
      </b-navbar-dropdown>





            <b-navbar-dropdown>
              <strong> Account </strong>
              <div>
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
              </div>
            </b-navbar-dropdown>


          </template>

        </b-navbar>

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

  }
  /*Resize just the img element of Navbar */
  .navbar-item img{
    max-height: 100px;
  }

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

  .hero.is-link {
    background-color : #181a1b  ;
  }


</style>
