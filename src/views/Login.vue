<template>
  <section class="section">
    <div class="columns is-centered">
      <div class="column is-3 ">
        <h1 class="title has-text-centered">Login</h1>

        <div class="box">
          <div v-if="errorShow" class="message is-danger">
            <div class="message-body">
              {{ errorText }}
            </div>
          </div>
          <form @submit="formSubmit">
            <!-- USERNAME -->
            <div class="field">
              <label class="label">Username</label>

              <div class="control">
                <input
                  :class="['input', errorUname.show ? 'is-danger' : '']"
                  v-model="username"
                  type="text"
                  placeholder="Enter username"
                />
              </div>
              <div v-if="errorUname.show">
                <p class="help is-danger">{{ errorUname.text }}</p>
              </div>
            </div>
            <!-- //USERNAME -->

            <!-- PASSWORD -->
            <div class="field">
              <label class="label">Password</label>

              <div v-if="!errorPword.show">
                <div class="control">
                  <input
                    class="input"
                    v-model="password"
                    type="password"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div v-if="errorPword.show">
                <div class="control">
                  <input
                    class="input is-danger"
                    v-model="password"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <p class="help is-danger">{{ errorPword.text }}</p>
              </div>
            </div>
            <!-- //PASSWORD -->

            <button class="button is-fullwidth is-primary">Login</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "Login",
  data: function() {
    return {
      username: "",
      password: "",
      errorUname: {
        show: false,
        text: null
      },
      errorPword: {
        show: false,
        text: null
      }
    };
  },
  beforeCreate() {
    //remove errors on page reload
    let userType = this.$store.getters["user/getUserType"];
    if(userType !== "GUEST"){
      this.$router.go(-1);
    }
  },
  computed: {
    ...mapState("error", ["errorText", "errorShow"]),
    ...mapState("user", ["user"])
  },
  methods: {
    ...mapMutations("error", ["deleteError"]),
    ...mapActions("user", ["loginUser"]),
    ...mapGetters("user", ["getUserDetails"]),
    showErrorUsername(text) {
      this.errorUname.show = true;
      this.errorUname.text = text;
    },
    removeErrorUsername() {
      this.errorUname.show = false;
      this.errorUname.text = null;
    },
    showErrorPassword(text) {
      this.errorPword.show = true;
      this.errorPword.text = text;
    },
    removeErrorPassword() {
      this.errorPword.show = false;
      this.errorPword.text = null;
    },
    formSubmit: function(e) {
      e.preventDefault();
      this.deleteError();

      let uname = this.username;
      let pword = this.password;

      if (!uname) {
        this.showErrorUsername("Username Required");
      } else {
        this.removeErrorUsername();
      }

      if (!pword) {
        this.showErrorPassword("Password Required");
      } else {
        this.removeErrorPassword();
      }

      if (uname && pword) {
        let vm = this;
        this.$store.dispatch("user/loginUser", [uname, pword]).then(function() {
          let tempUser = vm.$store.getters["user/getUserType"];
          console.log(tempUser);
          if (tempUser !== "GUEST") {
            vm.$router.go(-1);
          }
        });
      }
    }
  }
};
</script>

<style scoped></style>
