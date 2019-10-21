<template>
  <b-dropdown position="is-bottom-left" aria-role="menu">
    <a class="navbar-item" slot="trigger" role="button">
      <span>Accounts</span>
      <b-icon icon="menu-down"></b-icon>
    </a>

    <b-dropdown-item
      aria-role="menu-item"
      :focusable="false"
      custom
      paddingless
    >
      <form action="">
        <div class="modal-card" style="width:300px;">
          <section class="modal-card-body">
            <b-field label="Email">
              <b-input type="email" placeholder="Your email" required>
              </b-input>
            </b-field>

            <b-field label="Password">
              <b-input
                type="password"
                password-reveal
                placeholder="Your password"
                required
              >
              </b-input>
            </b-field>

            <b-checkbox>Remember me</b-checkbox>
          </section>
          <footer class="modal-card-foot">
            <button class="button is-primary">Login</button>
          </footer>
        </div>
      </form>
      <footer>
<!--      Does not make fields required-->
<!--        TODO : Padding of Button, Resize And finish up the href -->
        <button class="button" href="/register">
          <router-link to="/register"> </router-link> Register</button>
      </footer>
    </b-dropdown-item>
  </b-dropdown>
</template>


<script>
  import Register from "../views/Register";
  export default ({
    component : {
      'register':Register
    },
    methods:{
      Navigate_Register: function(RegisterURL)
      {
        this.register = RegisterURL ;
      }
    }
  });
</script>