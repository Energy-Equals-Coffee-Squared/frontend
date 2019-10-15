<template>
  <section class="section">
    <div class="columns is-centered">
      <div class="column is-7 ">
        <h1 class="title has-text-centered">Edit Product</h1>

        <div class="box">
          <!-- USERNAME -->
          <div class="field">
            <label class="label">ID</label>
            <div class="control">
              <input
                class="input"
                type="text"
                :placeholder="this.ProdID"
                disabled="true"
              />
            </div>
          </div>
          <!-- //USERNAME -->

          <!-- EMAIL -->
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input
                class="input"
                type="text"
                :placeholder="products.name"
                v-model="ProdName"
              />
            </div>
          </div>
          <!-- //EMAIL -->

          <div class="field">
            <label class="label">Description</label>
            <div class="control">
              <input
                class="input"
                type="text"
                :placeholder="products.desc"
                v-model="ProdDesc"
              />
            </div>
          </div>

          <!-- //CONTACT NUMBER -->

          <!-- NAMES -->
          <label class="label">Price</label>
          <div class="field is-horizontal">
            <div class="field-body">
              <!-- FIRSTNAME -->
              <div class="field is-grouped">
                <p class="control is-expanded">
                  <input
                    class="input"
                    type="text"
                    :placeholder="products.max_price"
                    v-model="ProdMaxP"
                  />
                </p>
              </div>
              <!-- //FIRSTNAME -->

              <!-- LASTNAME -->
              <div class="field">
                <p class="control is-expanded has-icon has-icon-right">
                  <input
                    class="input"
                    type="email"
                    :placeholder="products.min_price"
                    v-model="ProdMinP"
                  />
                </p>
              </div>
              <!-- //LASTNAME -->
            </div>
          </div>

          <!-- //NAMES -->

          <!-- CONTACT NUMBER -->
          <div class="field">
            <label class="label">Region</label>
            <div class="control">
              <input
                class="input"
                type="text"
                :placeholder="products.region"
                v-model="ProdRegion"
              />
            </div>
          </div>

          <!-- NAMES -->
          <label class="label">Altitude</label>
          <div class="field is-horizontal">
            <div class="field-body">
              <!-- FIRSTNAME -->
              <div class="field is-grouped">
                <p class="control is-expanded">
                  <input
                    class="input"
                    type="text"
                    :placeholder="products.altitude_max"
                    v-model="ProdMaxAlt"
                  />
                </p>
              </div>
              <!-- //FIRSTNAME -->

              <!-- LASTNAME -->
              <div class="field">
                <p class="control is-expanded has-icon has-icon-right">
                  <input
                    class="input"
                    type="email"
                    :placeholder="products.altitude_min"
                    v-model="ProdMinAlt"
                  />
                </p>
              </div>
              <!-- //LASTNAME -->
            </div>
          </div>

          <div class="field">
            <label class="label">Roast</label>
            <div class="control">
              <input
                class="input"
                type="text"
                :placeholder="products.roast"
                v-model="ProdRoast"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Bean Type</label>
            <div class="control">
              <input
                class="input"
                type="text"
                :placeholder="products.bean_type"
                v-model="ProdBeanType"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Image URL</label>
            <div class="control">
              <input
                class="input"
                type="text"
                :placeholder="products.image_url"
                v-model="ProdImgUrl"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Date Created</label>
            <div class="control">
              <input
                class="input"
                type="text"
                :placeholder="products.created_at"
                v-model="ProdCreated"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Date Updated</label>
            <div class="control">
              <input
                class="input"
                type="text"
                :placeholder="products.updated_at"
                v-model="ProdUpdated"
              />
            </div>
          </div>

          <b-field grouped>
            <b-field label="Product Options">
              <b-select v-model="chosenProd" placeholder="Product Option ">
                <option
                  v-for="prod in products.productOptions"
                  :key="prod.Id"
                  >{{ prod.Id }}</option
                >
                <!--                                After Choosing an option , populate the rest -->
              </b-select>
            </b-field>

            <div class="box">
              <h1>Edit Product Options</h1>

              <div class="field">
                <label class="label">Price</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    :placeholder="
                      'Current :' +
                        products.productOptions[this.chosenProd].price
                    "
                    v-model="ProdOpt"
                  />
                </div>
              </div>

              <div class="field">
                <label class="label">Weight</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    :placeholder="
                      'Current :' +
                        products.productOptions[this.chosenProd].weight
                    "
                    v-model="OptWeight"
                  />
                </div>
              </div>

              <div class="field">
                <label class="label">Quantity</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    :placeholder="
                      'Current :' +
                        products.productOptions[this.chosenProd].quantity
                    "
                    v-model="OptQuantity"
                  />
                </div>
              </div>

              <div class="field">
                <label class="label">Created-At</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    :placeholder="
                      'Current :' +
                        products.productOptions[this.chosenProd].created_at
                    "
                    v-model="OptCreated"
                  />
                </div>
              </div>

              <div class="field">
                <label class="label">Updated-At</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    :placeholder="
                      'Current :' +
                        products.productOptions[this.chosenProd].updated_at
                    "
                    v-model="OptUpdated"
                  />
                </div>
              </div>

              <div class="field">
                <label class="label">Available</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    :placeholder="
                      'Current :' +
                        products.productOptions[this.chosenProd].isAvailable
                    "
                    v-model="OptAvailable"
                  />
                </div>
              </div>

              <div class="field">
                <label class="label">Deleted</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    :placeholder="
                      'Current :' +
                        products.productOptions[this.chosenProd].isDeleted
                    "
                    v-model="OptDeleted"
                  />
                </div>
              </div>
            </div>
          </b-field>

          <button
            class="button is-3 is-info"
            style="margin: 20px ; margin-right: 50px"
          >
            Edit Product
          </button>
          <button
            class="button is-3 is-info "
            style="margin: 20px ; margin-right: 50px"
          >
            Add Product
          </button>
          <button
            class="button is-3 is-info"
            style="margin: 20px ; margin-right: 50px"
          >
            Delete Product
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
  name: "EditProducts",
  data() {
    return {
      userType: "GUEST",

      products: [], //For populating item options from front page
      ProdOpt: "",
      chosenProd: 1, //selecting which product option
      isPublic: true,
      ProdName: "",
      ProdDesc: "",
      ProdMaxP: "",
      ProdMinP: "",
      ProdMaxAlt: "",
      ProdMinAlt: "",
      ProdRegion: "",
      ProdRoast: "",
      ProdBeanType: "",
      ProdImgUrl: "",
      ProdCreated: "",
      ProdUpdated: "",
      OptIndex: 0,
      OptPrice: "",
      OptWeight: "",
      OptQuantity: "",
      OptCreated: "",
      OptUpdated: "",
      OptAvailable: "",
      OptDeleted: ""
    };
  },
  methods: {
    ...mapGetters("user", ["getUserDetails", "getUserType"])
  },
  beforeCreate() {
    this.ProdID = this.$route.params.Id;
    // eslint-disable-next-line no-console
    console.log("this is the passed ID :" + this.ProdID);
  },

  async created() {
    this.userType = this.$store.getters["user/getUserType"];
    if (this.userType === "ADMIN") {
      try {
        await axios
          .get("http://localhost:5000/api/Products/" + this.ProdID)
          .then(response => {
            this.products = response.data;
            // eslint-disable-next-line no-console
            console.log(this.products);
            console.log(this.products.productOptions);
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
