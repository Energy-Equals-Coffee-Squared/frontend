<template>
  <div class="section">
    <div class="title has-text-centered">Invoice No. {{ Invoices.Id }}</div>
    <div class="columns is-centered">
      <div class="column is-one-third">
        <div class="box">
          <p>Invoice Number:  <b>{{ Invoices.Id }}</b></p>
          <div style="margin-left: 20px;" v-if="Invoices.discount_code">
            <p>Discount Code:  <b>{{ Invoices.discount_code }}</b></p>
            <p>Discount Percent:  <b>{{ Invoices.discount_percentage }}%</b></p>
          </div>
          <p>Express Shipping:  <b>{{ Invoices.isExpressShipping ? 'Yes' : 'No' }}</b></p>
          <p>Created At: <b>{{ Invoices.created_at }}</b></p>
          <p class="is-size-4">Tax:  <b>R{{ (Invoices.tax/100).toFixed(2) }}</b></p>
          <p class="is-size-4">Total:  <b>R{{ (Invoices.total/100).toFixed(2) }}</b></p>
        </div>
      </div>
    </div>

    <div class="columns is-centered">
      <div class="column is-half">
        <b-table
          :data="Items"
          :bordered="true"
          :striped="true"
          :hoverable="true"
        >
          <template slot-scope="props">
            <b-table-column field="prod_name" label="prod_name">
              {{ props.row.prod_name }}
            </b-table-column>
            <b-table-column field="quantity" label="quantity">
              {{ props.row.quantity }}
            </b-table-column>
            <b-table-column field="opt_price" label="Unit Price">
              R{{ (props.row.opt_price / 100).toFixed(2) }}
            </b-table-column>
            <b-table-column field="opt_weight" label="Weight">
              {{ props.row.opt_weight }}
            </b-table-column>
            <b-table-column field="opt_price" label="Price">
              R{{
                ((props.row.opt_price * props.row.quantity) / 100).toFixed(2)
              }}
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
      Items: [],
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
              this.Items = this.Invoices.invoiceItems;
              console.log(this.Invoices);
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
