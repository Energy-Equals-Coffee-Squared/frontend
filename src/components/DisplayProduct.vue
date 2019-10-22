<template>
  <!--    I cant get it to make two columns-->

  <div>

    <div class="has-text-center">
      <!--    <p class="content"><b>selected</b>: {{ selectedFilters }}</p>-->
      <b-dropdown
              style="background-color: #0290A3; margin: 35px;"
              v-model="selectedFilters"
              aria-role="list"
              class="is-horizontal"
      >
        <button class="button is-primary" type="button" slot="trigger" style="background-color:#0290A3 ">
          <span>Search Filters</span>
          <b-icon icon="menu-down"></b-icon>
        </button>

        <b-dropdown-item value="option1" aria-role="listitem">
          <p @click="SortAsc">Name Ascending</p>
        </b-dropdown-item>

        <b-dropdown-item value="option2" aria-role="listitem">
          <p @click="SortDesc">Name Descending</p>
        </b-dropdown-item>

        <b-dropdown-item value="option3" aria-role="listitem">
          <p @click="PriceAsc">Price Ascending-Minimum</p>
        </b-dropdown-item>


      <b-dropdown-item value="option4" aria-role="listitem">
        <p @click="PriceDesc">Price Descending-Maximum</p>
      </b-dropdown-item>
      </b-dropdown>



      <div class="container" align="center">
    <div class="columns is-multiline is-centered">
      <div class="column is-5" v-for="product of Products" :key="product.Id">
        <!--    To display products -->
        <article
          class="tile is-child notification is-info "
          style="background-color: #222629;"
        >
          <p class="title">
            {{ product.name }}
          </p>
          <p class="subtitle">Origin: {{ product.region }}</p>

          <figure class="image is-128x128" style="margin: 55px">
            <img src="../assets/images/coffee1.png" width="75" height="75" />
          </figure>

          <p class="title" style="margin: 20px">
            <strong
              >Price From R{{ product.min_price / 100 }}
            </strong>
          </p>
<!--          <p class="subtitle">Description: {{ product.desc }}</p>-->
          <div class="has-text-centered">
            <a
              class="button is-large is-primary is-fullwidth" style="background-color: #0290A3"
              :href="'product/' + product.Id"
              ><b> More Info </b>
            </a>
            <!--                      </article>-->
          </div>
        </article>
      </div>
    </div>
  </div>
    </div>
  </div>


  <!--      </div>-->
</template>

<script>
import axios from "axios";
export default {
  name: "DisplayProduct",
  data() {
    return {
      Products: [],
      selectedFilters: [],
    };
  },

  methods: {
    SortAsc: function () {
      axios
              .get("http://localhost:5000/api/Products", {
                params: {
                  order: "name_asc"
                }

              })
              .then(response => {
                this.Products = response.data;
                // eslint-disable-next-line no-console
                console.log(response);
              });
    },
    SortDesc: function () {
      axios
              .get("http://localhost:5000/api/Products", {
                params: {
                  order: "name_desc"
                }

              })
              .then(response => {
                this.Products = response.data;
                // eslint-disable-next-line no-console
                console.log(response);
              });
    },
    PriceDesc: function () {
      axios
              .get("http://localhost:5000/api/Products", {
                params: {
                  order: "price_desc"
                }

              })
              .then(response => {
                this.Products = response.data;
                // eslint-disable-next-line no-console
                console.log(response);
              });
    },
    PriceAsc: function () {
      axios
              .get("http://localhost:5000/api/Products", {
                params: {
                  order: "name_asc"
                }

              })
              .then(response => {
                this.Products = response.data;
                // eslint-disable-next-line no-console
                console.log(response);
              });
    }
  },
  async created() {
    try {
      await axios
        .get("http://localhost:5000/api/Products")
        .then(response => {
          this.Products = response.data;
          // eslint-disable-next-line no-console
          console.log(this.Products);
        })
        .catch(error => {
          //fok all
        });
    } catch (e) {
      console.error(e);
    }
  }
};

</script>



<style scoped>
  .title{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .title:hover{
    overflow: visible;
    white-space: normal;
    height: auto;
  }



</style>
