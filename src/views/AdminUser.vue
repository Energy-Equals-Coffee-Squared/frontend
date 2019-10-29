<template>

  <div class="section">
    <div class="title has-text-centered has-text-grey-lighter">
      User

    </div>
    <div class="section">
      <b-field style="margin: 0 25px;" >
        <b-input placeholder="Search..."
                 expanded
                 v-model="searchKeywords"
                 type="search"
                 icon="magnify">
        </b-input>
        <p class="control">
          <button @click="search(searchKeywords)"
                  style="background-color:#0290A3; border: none;"
                  class="button is-primary" >Search</button>
        </p>
      </b-field>
    </div>

    <b-table :data="Users" :bordered="true" :striped="true" :hoverable="true">
      <template slot-scope="props">
        <b-table-column field="Id" label="ID">
          {{ props.row.Id }}
        </b-table-column>
        <b-table-column field="username" label="username">
          {{ props.row.username }}
        </b-table-column>

        <b-table-column field="first_name" label="first_name">
          {{ props.row.first_name }}
        </b-table-column>
        <b-table-column field="last_name" label="last_name">
          {{ props.row.last_name }}
        </b-table-column>
        <b-table-column field="contact_number" label="contact_number">
          {{ props.row.contact_number }}
        </b-table-column>
        <b-table-column field="email" label="email">
          {{ props.row.email }}
        </b-table-column>
        <b-table-column field="isAdmin" label="isAdmin">
          {{ props.row.isAdmin ? "true" : "false" }}
        </b-table-column>
        <b-table-column field="isDeleted" label="isDeleted">
          <!--                    {{ (props.row.isDeleted }}-->
          {{ props.row.isDelted ? "true" : "false" }}
        </b-table-column>

        <b-table-column field="isActve" label="isActve">
          <!--                    {{ (props.row.isActive}}-->
          {{ props.row.isActive ? "true" : "false" }}
        </b-table-column>

        <b-table-column field="actions" label="actions">
          <router-link
            class="button is-primary"
            :to="'/admin/UsrEdit/' + props.row.Id"
            style="margin : 5px; background-color: #0290A3"
            >EDIT</router-link
          >
          <router-link
            class="button is-primary"
            :to="'/admin/UsrDelete/' + props.row.Id"
            style="margin : 5px; background-color: #ff3860"
            >DELETE</router-link
          >
        </b-table-column>
      </template>
    </b-table>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "AdminUser",
  data() {
    return {
      userType: "GUEST",
      Users: [],
      searchKeywords: "",
    };
  },
  methods: {
    ...mapGetters("user", ["getUserDetails", "getUserType"]),
    search: function(srch){
      console.log(srch)
      axios
        .get("http://localhost:5000/api/Users", {
          params: {
            search: srch
          }
        })
        .then(response => {
          this.Users = response.data;
          // eslint-disable-next-line no-console
          console.log(response);
        });
    },
  },
  async created() {
    this.userType = this.$store.getters["user/getUserType"];
    if (this.userType === "ADMIN") {
      try {
        await axios
          .get("http://localhost:5000/api/Users")
          .then(response => {
            this.Users = response.data;
            // eslint-disable-next-line no-console
            console.log(this.Users);
          })
          .catch(error => {
            // eslint-disable-next-line no-console
            console.error(error);
          });
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    } else {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped></style>
