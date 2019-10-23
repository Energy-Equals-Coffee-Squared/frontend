<template>
  <section class="section">
    <div class="columns is-centered">
      <div class="column is-7 ">
        <h1 class="title has-text-centered has-text-grey-lighter">Edit Product</h1>

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
                v-model="this.ProdName"
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
                v-model="this.ProdDesc"

              />
            </div>
          </div>

          <!-- //CONTACT NUMBER -->

          <!-- NAMES -->


          <!-- //NAMES -->

          <!-- CONTACT NUMBER -->
          <div class="field">
            <label class="label">Region</label>
            <div class="control">
              <input
                class="input"
                type="text"
                v-model="this.ProdRegion"

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
                    v-model="this.ProdMaxAlt"

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
                    v-model="this.ProdMinAlt"

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
                v-model="this.ProdRoast"

              />
            </div>
          </div>

          <div class="field">
            <label class="label">Bean Type</label>
            <div class="control">
              <input
                class="input"
                type="text"
                v-model="this.ProdBeanType"

              />
            </div>
          </div>

          <div class="field">
            <label class="label">Image URL</label>
            <div class="control">
              <input
                class="input"
                type="text"
                v-model="this.ProdImgUrl"
              />
            </div>
          </div>

<!--          <b-field grouped>-->
<!--            <b-field label="Product Options">-->
<!--              <b-select ="chosenProd" v-model="Product Option ">-->
<!--                <option-->
<!--                  v-for="prod in products.productOptions"-->
<!--                  :key="prod.Id"-->
<!--                  >{{ prod.Id }}</option-->
<!--                >-->
<!--                &lt;!&ndash;                                After Choosing an option , populate the rest &ndash;&gt;-->
<!--              </b-select>-->
<!--            </b-field>-->
            <div class="columns is-multiline">
              <div
                class="column is-one-third"
                v-for="prod in products.productOptions"
              >
                <div class="box">
                  <h1>Edit Product Options</h1>

                  <div class="field">
                    <label class="label">Price</label>
                    <div class="control">
                      <input
                        class="input"
                        type="text"
                        v-model="(prod.price/100).toFixed(2)"

                      />
                    </div>
                  </div>

                  <div class="field">
                    <label class="label">Weight</label>
                    <div class="control">
                      <input
                        class="input"
                        type="text"
                        v-model="prod.weight+'g'"

                      />
                    </div>
                  </div>

                  <div class="field">
                    <label class="label">Quantity</label>
                    <div class="control">
                      <input
                        class="input"
                        type="text"
                        v-model="prod.quantity"

                      />
                    </div>
                  </div>


                  <div class="field">
                    <label class="label">Available</label>
                    <div class="control">
                      <input
                        class="input"
                        type="text"
                        v-model="prod.isAvailable"

                      />
                    </div>
                  </div>

                  <div class="field">
                    <label class="label">Deleted</label>
                    <div class="control">
                      <input
                        class="input"
                        type="text"
                        v-model="prod.isDeleted"

                      />
                    </div>
                  </div>
                  <div class="columns">
                    <div class="column is-narrow">
                    <button class="button is-info" >Edit</button>
                    </div>

                    <div class="column has-text-centered">
                      <a class="button is-info">Add</a>
                    </div>

                    <div class="column is-narrow">
                      <button class="button is-danger">Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </b-field>

          <div class="columns">
            <div class="column">
          <button
            class="button is-info is-large"
            style="margin: 20px ; margin-right: 50px"
            @click="this.EdtProd"
          >
            Edit Product
          </button>
            </div>
            <div class="column">
          <button
            class="button  is-info is-large"
            style="margin: 20px ; margin-right: 50px"
          >
            Add Product
          </button>
            </div>

            <div class="column">
          <button
            class="button is-danger is-large"
            style="margin: 20px ; margin-right: 50px"
          >
            Delete Product
          </button>
            </div>

          </div>

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
    ...mapGetters("user", ["getUserDetails", "getUserType"]),
    EdtProd: function()
    {

      axios.post("http://localhost:5000/api/Products/EditProduct",null, {
        params: {
          inId : this.ProdID,
          inName : this.ProdName,
          inDesc : this.ProdDesc,
          inRegion  : this.ProdRegion,
          inRoast : this.ProdRoast,
          inAltitude_max : this.ProdMaxAlt,
          inAltitude_min : this.ProdMinAlt,
          inBean_type : this.ProdBeanType,
          inImage_url : this.ProdImgUrl,
        }
      })
    },
    DeleteProd: function()
    {
      axios.post("http://localhost:5000/api/Products/EditProduct",null, {
        params: {
          inId : this.ProdID,
          inName : this.ProdName,
          inDesc : this.ProdDesc,
          inRegion  : this.ProdRegion,
          inRoast : this.ProdRoast,
          inAltitude_max : this.ProdMaxAlt,
          inAltitude_min : this.ProdMinAlt,
          inBean_type : this.ProdBeanType,
          inImage_url : this.ProdImgUrl,
        }
      })
    },
    AddProd: function()
    {
      axios.post("http://localhost:5000/api/Products/addProduct",null, {
        params: {
          inName : this.ProdName,
          inDesc : this.ProdDesc,
          inRegion  : this.ProdRegion,
          inRoast : this.ProdRoast,
          inAltitude_max : this.ProdMaxAlt,
          inAltitude_min : this.ProdMinAlt,
          inBean_type : this.ProdBeanType,
          inImage_url : this.ProdImgUrl,
        }
      })
    },
    EdtProdOpt: function()
    {
      axios.post("http://localhost:5000/api/Products/addProduct",null, {
        params: {
          inName : this.ProdName,
          inDesc : this.ProdDesc,
          inRegion  : this.ProdRegion,
          inRoast : this.ProdRoast,
          inAltitude_max : this.ProdMaxAlt,
          inAltitude_min : this.ProdMinAlt,
          inBean_type : this.ProdBeanType,
          inImage_url : this.ProdImgUrl,
        }
      })
    },


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
            // eslint-disable-next-line no-console
            console.log(this.products.productOptions);
            this.ID = this.products.Id;
                    this.ProdName = this.products.name;
                    this.ProdDesc = this.products.desc;
                    this.ProdMaxP = this.products.max_price ;
                    this.ProdMinP =  this.products.min_price;
                    this.ProdMaxAlt = this.products.altitude_max;
                    this.ProdMinAlt =  this.products.altitude_min;
                    this.ProdRegion = this.products.region;
                    this.ProdRoast = this.products.roast;
                    this.ProdBeanType =  this.products.bean_type;
                    this.ProdImgUrl = this.products.image_url;
                    this.ProdCreated = this.products.created_at;
                    this.ProdUpdated = this.products.updated_at;
            // for(let i = 0 ; i < this.products.length ; i++)
            // {
            //
            //         }
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
