<template>
  <div class="box is-rounded is-paddingless" style="background-color: #696969">
    <b-dropdown hoverable aria-role="list" v-bind="UsrSum">
      <button class="button is-info" slot="trigger">
        <span>Report Filtering</span>
        <b-icon icon="menu-down"></b-icon>
      </button>

      <b-dropdown-item @click="CVDay() + NSignUps() + OrderSum()">{{
        this.UDay
      }}</b-dropdown-item>
      <b-dropdown-item @click="CVWeek() + NSignUps() + OrderSum()">{{
        this.UWeek
      }}</b-dropdown-item>
      <b-dropdown-item @click="CVMonth() + NSignUps() + OrderSum()">{{
        this.UMonth
      }}</b-dropdown-item>
    </b-dropdown>

    <div style="margin: 50px">
      <div class="columns">
        <div class="column">
          <div class="box is-rounded" style="background-color: #A8A8A8; ">
            <!--              <chart :options="chartOptionsBar" autoresize></chart>-->
            <GChart
              type="AreaChart"
              :data="chartData"
              :options="chartOptions"
            />
          </div>
        </div>
      </div>

      <div class="box is-rounded" style="background-color: #A8A8A8; ">

        <GChart
          type="AreaChart"
          :data="chartDataTotP"
          :options="chartDataTot"
        />
      </div>

      <div class="box is-rounded" style="background-color: #A8A8A8; position: relative ">
      <div class="columns is-multiline">

      <div class="column is-narrow" style="margin: 25px; margin-left: 110px  ;margin-top: 60px">
        <Strong><h1 class="is-size-3" style="position: center ; margin-left: 55px"> Number of Products </h1></Strong>
        <img src="../assets/images/CircleA.png" height="400px" width="400px" >
       <strong><h1 class="is-size-3" style="position: absolute; top: 290px; left: 240px; color: black"> Products: {{this.chartProd}}</h1></strong>
        <strong><h3 class="is-size-3" style="position: absolute; top: 330px; left: 240px; color: black"> Options: {{this.chartProdOpt}}</h3></strong>
      </div>

        <div class="column is-narrow" style="margin: 25px; margin-left: 110px; margin-top: 60px">
          <Strong><h1 class="is-size-3" style="position: center ; margin-left: 55px"> Most Sold Product</h1></Strong>
          <img src="../assets/images/CircleA.png" height="400px" width="400px" >
          <strong><h1 class="is-size-3" style="position: absolute; top: 290px; left: 725px; color: black"> {{this.MostS}}</h1></strong>

        </div>

        <div class="column is-narrow" style="margin: 25px; margin-left: 110px">
          <Strong><h1 class="is-size-3" style="position: center ; margin-left: 55px"> Average Amount Spent <br>
          Per Person  </h1></Strong>
          <img src="../assets/images/CircleA.png" height="400px" width="400px" >
          <strong><h1 class="is-size-3" style="position: absolute; top: 260px; left: 1380px; color: black">Average <br>
            Per Person: R <br>
            {{this.AvgP}}</h1></strong>
<!--          <strong><h3 class="is-size-3" style="position: absolute; top: 150px; left: 75px; color: black"> Options: {{this.chartProdOpt}}</h3></strong>-->
        </div>
      </div>
      </div>

      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Report",

  data() {
    return {
      UsrSum: "day",
      UDay: "day",
      UWeek: "week",
      UMonth: "month",
      MostS:"",
      AvgP:"",

      chartData: [
        // ['Year', 'Sales', 'Expenses', 'Profit'],
        // ['2014', 1000, 400, 200],
        // ['2015', 1170, 460, 250],
        // ['2016', 660, 1120, 300],
        // ['2017', 1030, 540, 350]
      ],
      chartOptions: {
          title: 'Total User Signups',
          subtitle: 'Total amount of users sign up during specified time '
      },
      chartDataTotP: [
        // ['Year', 'Sales', 'Expenses', 'Profit'],
        // ['2014', 1000, 400, 200],
        // ['2015', 1170, 460, 250],
        // ['2016', 660, 1120, 300],
        // ['2017', 1030, 540, 350]
      ],
      chartDataTot: {
        title: 'Total Profit',
        subtitle: 'Total amount of profits made during specified time '

      },
      chartProd :"",
      chartProdOpt: "",

      chartOptionsBar: {
        xAxis: {
          type: "category",
          data: []
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            type: "bar",
            data: []
          }
        ]
      },

      chartOptionsBarP: {
        xAxis: {
          type: "category",
          data: []
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            type: "bar",
            data: []
          }
        ]
      }
    };
  },
  methods: {
    CVDay() {
      this.UsrSum = this.UDay;
    },
    CVWeek() {
      this.UsrSum = this.UWeek;
    },
    CVMonth() {
      this.UsrSum = this.UMonth;
    },

    async NSignUps() {
      // let vm = this;
      await axios
        .get("http://localhost:5000/api/Users/getNumberOfSignups", {
          params: {
            options: this.UsrSum
          }
        })
        .then(response => {
          let repsNumSignUps = response.data.numSignups;
          this.chartOptionsBar.series[0].data = Object.entries(repsNumSignUps);
          this.chartOptionsBar.xAxis.data = Object.keys(repsNumSignUps);
          // eslint-disable-next-line no-console
          // console.log(this.chartOptionsBar.xAxis.data);
          // eslint-disable-next-line no-console
          // console.log(this.chartOptionsBar.xAxis.data);
        });

      function splitArray(arr, opt) {
        let temp = [["test", opt]];
        for (let i = 0; i < arr.length; i++) {
          temp.push(arr[i]);
        }
        return temp;
      }
      // console.log("test");
      // console.log(splitArray(this.chartOptionsBar.series[0].data));
      // console.log(this.chartData);
      //after Change
      this.chartData = splitArray(
        this.chartOptionsBar.series[0].data,
        this.UsrSum
      );

      // console.log(this.chartData);
    },

    async OrderSum() {

      await axios
        .get("http://localhost:5000/api/Invoices/getTotalMade", {
          params: {
            option: this.UsrSum
          }
        })
        .then(response => {
          let repsNumSignUps = response.data.totalMade;
          this.chartOptionsBarP.series[0].data = Object.entries(repsNumSignUps);
          this.chartOptionsBarP.xAxis.data = Object.keys(repsNumSignUps);
          // eslint-disable-next-line no-console
          console.log(this.chartOptionsBarP.xAxis.data);
          // eslint-disable-next-line no-console
          console.log(this.chartOptionsBarP.xAxis.data);
        });

      function splitArray(arr, opt) {
        let temp = [["test", opt]];
        for (let i = 0; i < arr.length; i++) {
          temp.push(arr[i]);
        }
        return temp;
      }

      console.log("test");
      console.log(splitArray(this.chartOptionsBarP.series[0].data));
      console.log(this.chartDataTotP);
      //after Change
      this.chartDataTotP = splitArray(
        this.chartOptionsBarP.series[0].data,
        this.UsrSum
      );
    },
    NumbProds(){
      axios
              .get("http://localhost:5000/api/Products/getNumberOfProducts")
              .then(response => {
                this.chartProd = response.data.numProducts;
                this.chartProdOpt = response.data.numProductOptions ;
                // eslint-disable-next-line no-console
                console.log(this.chartProd);
                // eslint-disable-next-line no-console
                console.log(this.chartProdOpt);
              });
    },
  },

  async created() {
    // let vm = this;
    await axios
      .get("http://localhost:5000/api/Users/getNumberOfSignups", {
        params: {
          options: this.UsrSum
        }
      })
      .then(response => {
        let repsNumSignUps = response.data.numSignups;
        this.chartOptionsBar.series[0].data = Object.entries(repsNumSignUps);
        this.chartOptionsBar.xAxis.data = Object.keys(repsNumSignUps);
        // eslint-disable-next-line no-console
        // console.log(this.chartOptionsBar.xAxis.data);
        // eslint-disable-next-line no-console
        // console.log(this.chartOptionsBar.xAxis.data);
      });

    function splitArray(arr) {
      let temp = [["test", "day"]];
      for (let i = 0; i < arr.length; i++) {
        temp.push(arr[i]);
      }
      return temp;
    }
    // console.log("test");
    // console.log(splitArray(this.chartOptionsBar.series[0].data));
    // console.log(this.chartData);
    //after Change
    this.chartData = splitArray(this.chartOptionsBar.series[0].data);

    // console.log(this.chartData);

    await axios
            .get("http://localhost:5000/api/Invoices/getTotalMade", {
              params: {
                option: this.UsrSum
              }
            })
            .then(response => {
              let repsNumSignUps = response.data.totalMade;
              this.chartOptionsBarP.series[0].data = Object.entries(repsNumSignUps);
              this.chartOptionsBarP.xAxis.data = Object.keys(repsNumSignUps);
              // eslint-disable-next-line no-console
              console.log(this.chartOptionsBarP.xAxis.data);
              // eslint-disable-next-line no-console
              console.log(this.chartOptionsBarP.xAxis.data);
            });

    function splitArray(arr, opt) {
      let temp = [["test", opt]];
      for (let i = 0; i < arr.length; i++) {
        temp.push(arr[i]);
      }
      return temp;
    }

    console.log("test");
    console.log(splitArray(this.chartOptionsBarP.series[0].data));
    console.log(this.chartDataTotP);
    //after Change
    this.chartDataTotP = splitArray(
            this.chartOptionsBarP.series[0].data,
            this.UsrSum,

      axios
              .get("http://localhost:5000/api/Products/getNumberOfProducts")
              .then(response => {
                this.chartProd = response.data.numProducts;
                this.chartProdOpt = response.data.numProductOptions ;
                // eslint-disable-next-line no-console
                console.log(this.chartProd);
                // eslint-disable-next-line no-console
                console.log(this.chartProdOpt);
              }),

      axios
              .get("http://localhost:5000/api/Products/getMostSoldProduct")
              .then(response => {
                this.MostS = response.data.prod;
                // eslint-disable-next-line no-console
                console.log(this.ResponseMS);
              }),

    axios
            .get("http://localhost:5000/api/Invoices/averageSpentPerPerson")
            .then(response => {
              this.AvgP = response.data.averageSpent;
              // eslint-disable-next-line no-console
              console.log(this.ResponsePP);
            })
    );
  },

};
</script>

<style scoped>
/*.echarts{*/
/*    width: 100%;*/
/*}*/
</style>
