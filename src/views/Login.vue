<template>
  <section>
    <div aria-role="menu-item" :focusable="false" custom paddingless>
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
    </div>
  </section>
</template>

<script>
export default {
<<<<<<< Updated upstream
  name: "Login"
=======
  name: "Login",
  mounted() {
    axios.get("http://localhost:5000/api/values").then(function(response) {
      // eslint-disable-next-line no-console
      console.log(response);
    });
  },
  methods: {
    formSubmit(e) {
      e.preventDefault();
      axios
        .post("http://localhost:5000/api/Login", {
          username: this.username,
          password: this.password
        })
        .then(function(response) {
          // eslint-disable-next-line no-console
         console.log(response);
        })
        .catch(function(error) {
          // eslint-disable-next-line no-console
          console.log(error);
        });
    }
  }
>>>>>>> Stashed changes
};
</script>

<style scoped></style>
