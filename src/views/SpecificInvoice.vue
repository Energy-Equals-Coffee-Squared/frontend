<template>
  <div class="section">
    <div class="title has-text-centered">
      Invoices
    </div>
    <div class="columns is-centered">
      <div class="column is-half">
        <b-table
          :data="Invoices"
          bordered="true"
          :striped="true"
          :hoverable="true"
        >
          <template slot-scope="props">
            <b-table-column field="Id" label="Invoice ID">
              {{ props.row.Id }}
            </b-table-column>
            <b-table-column field="created_at" label="created_at">
              {{ props.row.created_at }}
            </b-table-column>
            <b-table-column field="total" label="total">
              R{{ (props.row.total / 100).toFixed(2) }}
            </b-table-column>
            <b-table-column field="actions" label="actions">
              <router-link
                class="button is-primary"
                :to="'invoices/' + props.row.Id"
                >View</router-link
              >
            </b-table-column>
          </template>
        </b-table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "SpecificInvoice",
  data() {
    return {
      userType: "GUEST",
      userID: -1,
      Invoices: [],
        urlID: -1
    };
  },
  methods: {
    ...mapGetters("user", ["getUserDetails", "getUserType"])
  },
  async created() {
    this.userType = this.$store.getters["user/getUserType"];
    let userDetails = await this.$store.getters["user/getUserDetails"];
    this.userID = userDetails.Id;
      this.urlID = this.$route.params.Id;
    if (this.userType !== "GUEST" && this.userID > 0) {
      try {
        await axios
          .post("http://localhost:5000/api/Invoices/getSpecificInvoice", null, {
            params: {
              inUserID: this.userID,
                inInvoiceID: this.urlID
            }
          })
          .then(response => {
            let respData = response.data;
            // eslint-disable-next-line no-console
            console.log(respData);
            if (respData.Status === "error") {
              return false;
            } else if (respData.Status === "success") {
              this.Invoices = respData.Message;
            }
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
      await this.$router.push("login");
    }
  }
};
</script>

<style scoped></style>
