<template>
  <div class="section" align="center">
    <div class="box">
      <h1 class="is-size-1"><strong> Reports </strong></h1>

      <div class="columns is-multiline">
        <div class="column is-4">

          <div class="box" style="height: 250px; width: 600px">
            <h1 style="font-size: x-large">Users Summary</h1>
            <label>Number of Users per {{ this.UsrSum }}</label>
            <input
              class="input"
              type="text"
              v-model="UsrSum"
              placeholder="day/week/month"
            />
            <button class="button is-info" style="margin: 3px" @click="NSignUps">Filter</button>
            <h1 style="font-size: large">
              Signups : {{ this.ResponseU.numSignups }}
            </h1>
          </div>
        </div>

        <div class="column is-4">
            <div class="box" style="height: 250px; width: 600px">
            <h1 style="font-size: x-large">Orders Summary</h1>
                <br>
              <h1 style="font-size: large">Order Summary for the day : {{ResponseO.numOrders}}</h1>
          </div>
        </div>

        <div class="column is-4">
            <div class="box" style="height: 250px; width: 600px">
            <h1 style="font-size: x-large">Number Products</h1>
                <br>
              <h1 style="font-size: large">Number Of Products : {{ResponseP.numProducts}}</h1>
              <h1 style="font-size: large">Number Of Product Options : {{ResponseP.numProductOptions}}</h1>
          </div>
        </div>

        <div class="column is-4">
            <div class="box" style="height: 250px; width: 600px">
            <h1 style="font-size: x-large ">Number Products Sold</h1>
                <br>
              <h1 style="font-size: large">Total Number Products Sold : {{ResponsePS.numProductsSold}}</h1>
          </div>
        </div>

        <div class="column is-4">
            <div class="box" style="height: 250px; width: 600px">
            <h1 style="font-size: x-large">Most Sold Product</h1>
                <br>
                <h1 style="font-size: large">Most Sold Product : {{ResponseMS.prod}}</h1>
          </div>
        </div>

        <div class="column is-4">
           <div class="box" style="height: 250px; width: 600px">
               <br>
            <h1 style="font-size: x-large">Total Amount Made : R{{((ResponseT.totalMade)/100).toFixed(2)}}</h1>
          </div>
        </div>

        <div class="column is-4">
            <div class="box" style="height: 250px; width: 600px">
                <br>
            <h1 style="font-size: x-large">Average Spent Per Person : R{{((ResponsePP.averageSpent)/100).toFixed(2)}}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Reports",
  data() {
    return {
      UsrSum: "day", // input field filter
      Orders: "",
      NumProds: "",
      NumProdsSold: "",
      MostSoldProd: "",
      TotalMade: "",
      AvgPP: "",
      ResponseU: [],
        ResponseO :[],
        ResponseP :[],
        ResponsePS :[],
        ResponseMS :[],
        ResponseT :[],
        ResponsePP :[]
    };
  },
  methods: {
    NSignUps() {
      axios
        .get("http://localhost:5000/api/Users/getNumberOfSignups", {
          params: {
            options: this.UsrSum
          }
        })
        .then(response => {
          this.ResponseU = response.data;
          // eslint-disable-next-line no-console
          console.log(this.ResponseU);
        });
    },


    OrderSum: function() {
      axios
        .get("http://localhost:5000/api/Invoices/getOrderSummary")
        .then(response => {
          this.ResponseO = response.data;
          // eslint-disable-next-line no-console
          console.log(this.ResponseO);
        });
    },

      NumbProds: function() {
          axios
              .get("http://localhost:5000/api/Products/getNumberOfProducts")
              .then(response => {
                  this.ResponseP = response.data;
                  // eslint-disable-next-line no-console
                  console.log(this.ResponseP);
              });
      },

      NumbProdSold: function() {
          axios
              .get("http://localhost:5000/api/Products/getNumberOfProductsSold")
              .then(response => {
                  this.ResponsePS = response.data;
                  // eslint-disable-next-line no-console
                  console.log(this.ResponsePS);
              });
      },

      MostSold: function() {
          axios
              .get("http://localhost:5000/api/Products/getMostSoldProduct")
              .then(response => {
                  this.ResponseMS = response.data;
                  // eslint-disable-next-line no-console
                  console.log(this.ResponseMS);
              });
      },

      TotalAmount: function() {
          axios
              .get("http://localhost:5000/api/Invoices/getTotalMade")
              .then(response => {
                  this.ResponseT = response.data;
                  // eslint-disable-next-line no-console
                  console.log(this.ResponseT);
              });
      },
      PerPers: function() {
          axios
              .get("http://localhost:5000/api/Invoices/averageSpentPerPerson")
              .then(response => {
                  this.ResponsePP = response.data;
                  // eslint-disable-next-line no-console
                  console.log(this.ResponsePP);
              });
      },

  },
    created()
    {
        this.NSignUps();
        this.OrderSum() ;
        this.NumbProds() ;
        this.NumbProdSold();
        this.TotalAmount() ;
        this.PerPers();
        this.MostSold();
    }


};
</script>

<style scoped></style>
