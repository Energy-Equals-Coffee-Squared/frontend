<template>
  <section class="section">
    <div class="columns is-centered">
      <div class="column is-7 ">
        <h1 class="title has-text-centered">Delete User</h1>

        <div class="box">
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
                :placeholder="this.user.name"
                disabled="true"
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
                disabled="true"
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
                disabled="true"
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
                disabled="true"
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
                disabled="true"
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
                :placeholder="this.UsrID"
                disabled="true"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">User Is Admin</label>
            <div class="control">
              <input
                class="input"
                type="text"
                :placeholder="this.user.isAdmin"
                disabled="true"
              />
            </div>
          </div>

          <button class="button is-primary" style="margin: 25px">
            Delete User
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
      UsrID: ""
    };
  },
  methods: {
    ...mapGetters("user", ["getUserDetails", "getUserType"])
  },
  beforeCreate() {
    this.UsrID = this.$route.params.Id;
    // eslint-disable-next-line no-console
    console.log("USer ID" + this.UsrID);
    // console.log("this is the passed ID :" + this.UsrID);
  },
  async created() {
    this.userType = this.$store.getters["user/getUserType"];
    if (this.userType === "ADMIN") {
      try {
        await axios
          .get("http://localhost:5000/api/Users/Delete/" + this.UsrID)
          .then(response => {
            this.user = response.data;
            // eslint-disable-next-line no-console
            console.log(this.user);
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
