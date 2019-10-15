<template>
  <section class="section">
    <div class="columns is-centered">
      <div class="column is-7 ">
        <h1 class="title has-text-centered">Edit User</h1>

        <div class="box">
          <div v-if="errorShow" class="message is-danger">
            <div class="message-body">
              {{ errorText }}
            </div>
          </div>
          <div class="field">
            <label class="label">User ID</label>
            <div class="control">
              <input
                class="input"
                type="text"
                :placeholder="this.UsrID"
                disabled="true"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">User Username</label>
            <div class="control">
              <input
                class="input"
                type="text"
                :placeholder="this.user.username"
                v-model="username"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">User Firstname</label>
            <div class="control">
              <input
                class="input"
                type="text"
                :placeholder="this.user.first_name"
                v-model="f_name"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">User Lastname</label>
            <div class="control">
              <input
                class="input"
                type="text"
                :placeholder="this.user.last_name"
                v-model="l_name"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">User Email Address</label>
            <div class="control">
              <input
                class="input"
                type="text"
                :placeholder="this.user.email"
                v-model="email"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">User Contact Number</label>
            <div class="control">
              <input
                class="input"
                type="text"
                :placeholder="this.user.contact_number"
                v-model="contactn"
              />
            </div>
          </div>
          <!--TODO Check the user ACtive Part-->
          <div class="field">
            <label class="label">User Active</label>
            <div class="control">
              <input
                class="input"
                type="text"
                :placeholder="this.user.isActive ? 'true' : 'false'"
                v-model="Active"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">User Is Admin</label>
            <div class="control">
              <input
                class="input"
                type="text"
                :placeholder="this.user.isAdmin ? 'true' : 'false'"
                v-model="Admin"
              />
            </div>
          </div>
          <!--TODO Check Deleted one as well-->
          <div class="field">
            <label class="label">User isDeleted</label>
            <div class="control">
              <input
                class="input"
                type="text"
                :placeholder="this.user.isDelted ? 'true' : 'false'"
                v-model="Deleted"
              />
            </div>
          </div>

          <button @click="updateUsers" class="button is-primary" style="margin: 25px">
            Update User
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "UsrManage",
  data() {
    return {
      user: [],
      username: "",
      f_name: "",
      l_name: "",
      email: "",
      contactn: "",
      Active: "",
      Deleted: "",
      Admin: "",
      UsrID: -1
    };
  },
  computed: {
    ...mapState("error", ["errorText", "errorShow"])
  },
  methods: {
    ...mapGetters("user", ["getUserDetails", "getUserType"]),
    updateUsers() {
      axios
        .post("http://localhost:5000/api/Users/Edit", null, {
          params: {
            Id: this.UsrID,
            username: this.username,
            email: this.email,
            f_name: this.f_name,
            l_name: this.l_name,
            c_number: this.c_number,
            is_active: this.is_active,
            is_deleted: this.is_deleted,
            is_admin: this.is_admin
          }
        })
        .then(function(response) {
          let respData = response.data;
          if (respData.Status === "error") {
            console.log("errooooor");
          } else if (respData.Status === "success") {
            //what you want to do if succesfull
            return true;
          }
        })
        .catch(function(error) {
          // eslint-disable-next-line no-console
          console.log(error);
          return false;
        });
    }
  },
  beforeCreate() {
    this.UsrID = this.$route.params.Id;
    // eslint-disable-next-line no-console
    console.log("this is the passed ID :" + this.UsrID);
  },
  async created() {
    this.UsrID = this.$route.params.Id;
    this.userType = this.$store.getters["user/getUserType"];
    if (this.userType === "ADMIN") {
      try {
        await axios
          .get("http://localhost:5000/api/Users/" + this.UsrID)
          .then(response => {
            this.user = response.data;
            // eslint-disable-next-line no-console
            console.log(response.data);
          })
          .catch(error => {});
      } catch (e) {
        console.error(e);
      }
    } else {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped></style>
