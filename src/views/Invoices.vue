<template>
  <div class="section">
    <div class="title has-text-centered">
      Invoices
    </div>
    <div class="columns is-centered">
      <div class="column is-narrow">
        <b-table
          :data="isEmpty ? [] : Invoices"
          :bordered="true"
          :striped="true"
          :hoverable="true"
        >
          <template slot-scope="props">
            <b-table-column field="Id" label="Invoice ID">
              {{ props.row.Id }}
            </b-table-column>
            <b-table-column field="created_at" label="Completed">
              {{ props.row.created_at }}
            </b-table-column>
            <b-table-column field="isFreeShipping" label="Express Shipping">
              {{ props.row.isFreeShipping ? "Yes" : "No" }}
            </b-table-column>
            <b-table-column field="discount_code" label="Discount Code">
              {{ props.row.discount_code ? props.row.discount_code : "N/A" }}
            </b-table-column>
            <b-table-column
              field="discount_percentage"
              label="Discount %"
            >
              {{ props.row.discount_percentage }}%
            </b-table-column>
            <b-table-column field="tax" label="Tax">
              R{{ (props.row.tax / 100).toFixed(2) }}
            </b-table-column>
            <b-table-column field="total" label="Total Paid">
              R{{(props.row.total / 100).toFixed(2)}}
            </b-table-column>
            <b-table-column field="actions" label="actions">
              <router-link
                class="button is-primary"
                :to="'invoices/' + props.row.Id"
                >View</router-link
              >
            </b-table-column>
          </template>
          <template slot="empty">
            <section class="section">
              <div class="content has-text-grey has-text-centered">
                <p>No Invoices To Show</p>
              </div>
            </section>
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
  name: "Invoices",
  data() {
    return {
      userType: "GUEST",
      userID: -1,
      Invoices: [],
      isEmpty: true
    };
  },
  methods: {
    ...mapGetters("user", ["getUserDetails", "getUserType"])
  },
  async created() {
    this.userType = this.$store.getters["user/getUserType"];
    let userDetails = await this.$store.getters["user/getUserDetails"];
    this.userID = userDetails.Id;
    if (this.userType !== "GUEST" && this.userID > 0) {
      try {
        await axios
          .post("http://localhost:5000/api/Invoices/getInvoice", null, {
            params: {
              inUserID: this.userID
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
              this.isEmpty = this.Invoices.length === 0;
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
