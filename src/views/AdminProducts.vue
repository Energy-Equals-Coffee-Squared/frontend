<template>
  <div class="section">
    <div class="title has-text-centered has-text-grey-lighter">
      Products
    </div>
    <div class="section">
      <b-field style="margin: 0 25px;">
        <b-input
          placeholder="Search..."
          expanded
          v-model="searchKeywords"
          type="search"
          icon="magnify"
        >
        </b-input>
        <p class="control">
          <button
            @click="search(searchKeywords)"
            style="background-color:#0290A3; border: none;"
            class="button is-primary"
          >
            Search
          </button>
        </p>
      </b-field>
    </div>
    <div class="columns" style="margin-left: 130px">
      <div class="column -align-center">
        <router-link
          class="button is-primary"
          :to="'/admin/AddProduct/'"
          style="background-color: #0290A3"
          >ADD PRODUCT</router-link
        >
      </div>
    </div>

    <b-table
      :data="Products"
      :bordered="true"
      :striped="true"
      :hoverable="true"
    >
      <template slot-scope="props">
        <b-table-column field="Id" label="ID">
          {{ props.row.Id }}
        </b-table-column>
        <b-table-column field="name" label="name">
          {{ props.row.name }}
        </b-table-column>

        <b-table-column field="altitude_max" label="altitude_max">
          {{ props.row.altitude_max }}
        </b-table-column>

        <b-table-column field="altitude_min" label="altitude_min">
          {{ props.row.altitude_min }}
        </b-table-column>
        <b-table-column field="bean_type" label="bean_type">
          {{ props.row.bean_type }}
        </b-table-column>
        <b-table-column field="region" label="region">
          {{ props.row.region }}
        </b-table-column>
        <b-table-column field="roast" label="roast">
          {{ props.row.roast }}
        </b-table-column>
        <b-table-column field="max_price" label="max_price">
          R{{ (props.row.max_price / 100).toFixed(2) }}
        </b-table-column>
        <b-table-column field="min_price" label="min_price">
          R{{ (props.row.min_price / 100).toFixed(2) }}
        </b-table-column>
        <b-table-column field="actions" label="actions">
          <router-link
            class="button is-primary"
            :to="'/admin/editproduct/' + props.row.Id"
            style="background-color: #0290A3"
            >EDIT</router-link
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
  name: "AdminProducts",
  data() {
    return {
      userType: "GUEST",
      Products: [],
      searchKeywords: "",
      orderType: "default"
    };
  },
  methods: {
    ...mapGetters("user", ["getUserDetails", "getUserType"]),
    getProds: function(ord, srch) {
      axios
        .get("http://localhost:5000/api/Products", {
          params: {
            order: ord,
            search: srch
          }
        })
        .then(response => {
          this.Products = response.data;
          // eslint-disable-next-line no-console
          console.log(response);
        });
    },
    search: function() {
      this.getProds(this.orderType, this.searchKeywords);
    }
  },
  async created() {
    this.userType = this.$store.getters["user/getUserType"];
    if (this.userType === "ADMIN") {
      try {
        await axios
          .get("http://localhost:5000/api/Products")
          .then(response => {
            this.Products = response.data;
            // eslint-disable-next-line no-console
            console.log(this.Products);
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
