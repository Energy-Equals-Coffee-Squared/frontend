<template id="register">
  <section class="section">
    <div class="columns is-centered">
      <div class="column is-3 ">
        <h1 class="title has-text-centered">Register</h1>

        <div class="box">
          <form @submit="formSubmit">
            <!-- USERNAME -->
            <div class="field">
              <label class="label">Username</label>
              <div class="control">
                <input
                  :class="['input', errorUsername.show ? 'is-danger' : '']"
                  @input="checkUsername"
                  v-model="username"
                  type="text"
                  placeholder="Enter username"
                />
              </div>
              <div v-if="errorUsername.show">
                <p class="help is-danger">{{ errorUsername.text }}</p>
              </div>
            </div>
            <!-- //USERNAME -->

            <!-- EMAIL -->
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  :class="['input', errorEmail.show ? 'is-danger' : '']"
                  @input="checkEmail"
                  v-model="email"
                  type="text"
                  placeholder="Enter email"
                />
              </div>
              <div v-if="errorEmail.show">
                <p class="help is-danger">{{ errorEmail.text }}</p>
              </div>
            </div>
            <!-- //EMAIL -->

            <!-- NAMES -->
            <label class="label">Name</label>
            <div class="field is-horizontal">
              <div class="field-body">
                <!-- FIRSTNAME -->
                <div class="field is-grouped">
                  <p class="control is-expanded">
                    <input
                      :class="['input', errorFirstName.show ? 'is-danger' : '']"
                      @input="checkFirstName"
                      v-model="firstName"
                      type="text"
                      placeholder="First Name"
                    />
                  </p>
                </div>
                <!-- //FIRSTNAME -->

                <!-- LASTNAME -->
                <div class="field">
                  <p class="control is-expanded has-icon has-icon-right">
                    <input
                      :class="['input', errorLastName.show ? 'is-danger' : '']"
                      @input="checkLastName"
                      v-model="lastName"
                      type="text"
                      placeholder="Last Name"
                    />
                  </p>
                </div>
                <!-- //LASTNAME -->
              </div>
            </div>
            <div
              class="columns"
              v-if="errorLastName.show || errorFirstName.show"
            >
              <div class="column">
                <p v-if="errorFirstName.show" class="help is-danger">
                  <span>
                    {{ errorFirstName.text }}
                  </span>
                </p>
              </div>
              <div class="column">
                <p v-if="errorLastName.show" class="help is-danger">
                  <span>
                    {{ errorLastName.text }}
                  </span>
                </p>
              </div>
            </div>
            <!-- //NAMES -->

            <!-- CONTACT NUMBER -->
            <div class="field">
              <label class="label">Contact Number</label>
              <div class="control">
                <input
                  :class="['input', errorContactNum.show ? 'is-danger' : '']"
                  @input="checkContactNumber"
                  v-model="contactNumber"
                  type="text"
                  placeholder="Contact Number"
                />
              </div>
              <div v-if="errorContactNum.show">
                <p class="help is-danger">{{ errorContactNum.text }}</p>
              </div>
            </div>
            <!-- //CONTACT NUMBER -->

            <!-- PASSWORD -->
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input
                  :class="['input', errorPassword.show ? 'is-danger' : '']"
                  @input="checkPassword"
                  v-model="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div v-if="errorPassword.show">
                <p class="help is-danger">{{ errorPassword.text }}</p>
              </div>
            </div>
            <!-- //PASSWORD -->

            <!-- REPEAT PASSWORD -->
            <div class="field">
              <label class="label">Repeat Password</label>
              <div class="control">
                <input
                  :class="[
                    'input',
                    errorRepeatPassword.show ? 'is-danger' : ''
                  ]"
                  @input="checkRepeatPassword"
                  v-model="repeatPassword"
                  type="password"
                  placeholder="Repeat Password"
                />
              </div>
              <div v-if="errorRepeatPassword.show">
                <p class="help is-danger">{{ errorRepeatPassword.text }}</p>
              </div>
            </div>
            <!-- //REPEAT PASSWORD -->

            <button class="button is-fullwidth is-info">Register</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "Register",
  data: function() {
    return {
      username: "",
      email: "",
      firstName: "",
      lastName: "",
      contactNumber: "",
      password: "",
      repeatPassword: "",
      errorUsername: {
        show: false,
        text: null
      },
      errorEmail: {
        show: false,
        text: null
      },
      errorFirstName: {
        show: false,
        text: null
      },
      errorLastName: {
        show: false,
        text: null
      },
      errorContactNum: {
        show: false,
        text: null
      },
      errorPassword: {
        show: false,
        text: null
      },
      errorRepeatPassword: {
        show: false,
        text: null
      }
    };
  },
  beforeCreate() {
    //remove errors on page reload
    let userType = this.$store.getters["user/getUserType"];
    if (userType !== "GUEST") {
      this.$router.go(-1);
    }
  },
  computed: {
    ...mapState("error", ["errorText", "errorShow"]),
    ...mapState("user", ["user"])
  },
  methods: {
    ...mapMutations("error", ["deleteError"]),
    ...mapActions("user", ["registerUser"]),
    ...mapGetters("user", ["getUserDetails"]),
    checkUsername() {
      if (!this.username) {
        this.errorUsername.show = true;
        this.errorUsername.text = "Username is required";
        return 0;
      } else {
        this.errorUsername.show = false;
        this.errorUsername.text = "";
        return 0;
      }
    },
    checkEmail() {
      if (!this.email) {
        this.errorEmail.show = true;
        this.errorEmail.text = "Email is required";
        return 0;
      } else {
        //regex to check that an email is valid
        let emailValidation = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!this.email.match(emailValidation)) {
          this.errorEmail.show = true;
          this.errorEmail.text = "Email is not valid";
        } else {
          this.errorEmail.show = false;
          this.errorEmail.text = "";
        }
        return 0;
      }
    },
    checkFirstName() {
      if (!this.firstName) {
        this.errorFirstName.show = true;
        this.errorFirstName.text = "First Name is required";
        return 0;
      } else {
        this.errorFirstName.show = false;
        this.errorFirstName.text = "";
        return 0;
      }
    },
    checkLastName() {
      if (!this.lastName) {
        this.errorLastName.show = true;
        this.errorLastName.text = "Last Name is required";
        return 0;
      } else {
        this.errorLastName.show = false;
        this.errorLastName.text = "";
        return 0;
      }
    },
    checkContactNumber() {
      if (!this.contactNumber) {
        this.errorContactNum.show = true;
        this.errorContactNum.text = "Contact Number is required";
        return 0;
      } else {
        //regex for phone number verification
        let phoneValid = /^\d{10}$/;
        if (!this.contactNumber.match(phoneValid)) {
          this.errorContactNum.show = true;
          this.errorContactNum.text = "Contact Number is not valid";
        } else {
          this.errorContactNum.show = false;
          this.errorContactNum.text = "";
        }
        return 0;
      }
    },
    checkPassword() {
      if (!this.password) {
        this.errorPassword.show = true;
        this.errorPassword.text = "Password is required";
        return 0;
      } else {
        //regex for password that is between 7 and 15 chars with atleast on number and a special char
        let paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!#$%&'*+,-./:<=>?@[\]^_`{|}~]{7,15}$/;
        if (!this.password.match(paswd)) {
          this.errorPassword.show = true;
          this.errorPassword.text =
            "Password must be between 7 and 20 characters long, contain at least 1 number and 1 special character";
        } else {
          this.errorPassword.show = false;
          this.errorPassword.text = "";
        }
        return 0;
      }
    },
    checkRepeatPassword() {
      if (!this.repeatPassword) {
        this.errorRepeatPassword.show = true;
        this.errorRepeatPassword.text = "Repeat Password is required";
        return 0;
      } else {
        if (this.password !== this.repeatPassword) {
          this.errorRepeatPassword.show = true;
          this.errorRepeatPassword.text = "Doesnt Match Password";
        } else {
          this.errorRepeatPassword.show = false;
          this.errorRepeatPassword.text = "";
        }
        return 0;
      }
    },
    formSubmit: function(e) {
      e.preventDefault();
      if (
        !this.errorUsername.show &&
        !this.errorEmail.show &&
        !this.errorFirstName.show &&
        !this.errorLastName.show &&
        !this.errorContactNum.show &&
        !this.errorPassword.show &&
        !this.errorRepeatPassword.show
      ) {
        let vm = this;
        this.$store
          .dispatch("user/registerUser", [
            this.username,
            this.email,
            this.firstName,
            this.lastName,
            this.password,
            this.contactNumber
          ])
          .then(function() {
            let tempUser = vm.$store.getters["user/getUserType"];
            console.log(tempUser);
            if (tempUser !== "GUEST") {
              console.log("redirect to home");
              window.location.href = "/home";
            }
          });
      }
    }
  }
};
</script>

<style scoped>
.is-primary {
  background-color: #00adda;
}
</style>
