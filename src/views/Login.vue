<template>
  <section class="section">
    <div class="columns is-centered">
      <div class="column is-3 ">
        <h1 class="title has-text-centered">Login</h1>

        <div class="box">
          <form @submit="formSubmit">
            <!-- USERNAME -->
            <div class="field">
              <label class="label">Username</label>
              <div class="control">
                <input class="input" type="text" placeholder="Enter username" />
              </div>
            </div>
            <!-- //USERNAME -->

            <!-- PASSWORD -->
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input class="input" type="password" placeholder="Password" />
              </div>
            </div>
            <!-- //PASSWORD -->

            <button class="button is-fullwidth is-info">Login</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import axios from "axios";
export default {
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
};
</script>

<style scoped></style>
