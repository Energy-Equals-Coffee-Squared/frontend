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
                                    :value="this.ProdID"
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
                                    :value="ProdName"
                                    v-on:input="ProdName = $event.target.value"

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
                                    :value="ProdDesc"
                                    v-on:input="ProdDesc = $event.target.value"
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
                                    :value="ProdRegion"
                                    v-on:input="ProdRegion = $event.target.value"
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
                                            :value="ProdMaxAlt"
                                            v-on:input="ProdMaxAlt = $event.target.value"

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
                                            :value="ProdMinAlt"
                                            v-on:input="ProdMinAlt = $event.target.value"
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
                                    :value="ProdRoast"
                                    v-on:input="ProdRoast = $event.target.value"
                            />
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Bean Type</label>
                        <div class="control">
                            <input
                                    class="input"
                                    type="text"
                                    :value="ProdBeanType"
                                    v-on:input="ProdBeanType = $event.target.value"
                            />
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Image URL</label>
                        <div class="control">
                            <input
                                    class="input"
                                    type="text"
                                    :value="ProdImgUrl"
                                    v-on:input="ProdImgUrl = $event.target.value"
                            />
                        </div>
                    </div>

<!--                    Buttons-->

                  <div class="columns" style="margin-left: 130px">
                    <div class="column">
                      <button
                              class="button is-info is-large"
                              style="margin: 20px ; margin-right: 50px"
                              @click="EdtProd"
                      >
                        Edit Product
                      </button>
                    </div>

<!--                    <div class="column">-->
<!--                      <button-->
<!--                              class="button  is-info is-large"-->
<!--                              style="margin: 20px ; margin-right: 50px"-->
<!--                      >-->
<!--                        Add Product-->
<!--                      </button>-->
<!--                    </div>-->

                    <div class="column">
                      <button
                              class="button is-danger is-large"
                              style="margin: 20px ; margin-right: 50px"
                              @click="DeleteProd"
                      >
                        Delete Product
                      </button>
                    </div>

                  </div>

                    <!--          <b-field grouped>-->

                  <!--                    <b-field label="Product Options">-->
<!--                        <b-select v-model="chosenProd" placeholder="Product Option ">-->
<!--                            <option-->
<!--                                    v-for="prod in products.productOptions"-->
<!--                                    :key="prod.Id"-->
<!--                                    @change="curProdID = $event.target.value"-->
<!--                            >{{ prod.Id }}-->
<!--                            </option-->
<!--                            >-->
<!--                            &lt;!&ndash;                                After Choosing an option , populate the rest &ndash;&gt;-->
<!--                        </b-select>-->
<!--                    </b-field>-->

                  <b-field label="Select Product Option">
                    <select class="select-css" v-on:change="ChangeProdOpt($event)"
                   >
                      <option
                              v-for="prod in products.productOptions"
                              :key="prod.Id"
                              >
                        {{prod.Id}}
                      </option>
                    </select>
                  </b-field>
                    <div class="columns">
                        <div
                                class="column align-center"
                        >
                            <div class="box">
                                <h1>Edit Product Options</h1>

                                <div class="field">
                                    <label class="label">Price</label>
                                    <div class="control">
                                        <input
                                                class="input"
                                                type="text"
                                                :value="(products.productOptions[curProdID].price/100).toFixed(2)"
                                                v-on:input="OptPrice = ($event.target.value)*100"
                                        />
                                    </div>
                                </div>

                                <div class="field">
                                    <label class="label">Weight</label>
                                    <div class="control">
                                        <input
                                                class="input"
                                                type="text"
                                                :value="products.productOptions[curProdID].weight"
                                                v-on:input="OptWeight = $event.target.value"
                                        />
                                    </div>
                                </div>

                                <div class="field">
                                    <label class="label">Quantity</label>
                                    <div class="control">
                                        <input
                                                class="input"
                                                type="text"
                                                :value="products.productOptions[curProdID].quantity"
                                                v-on:input="OptQuantity = $event.target.value"
                                        />
                                    </div>
                                </div>


                                <div class="field">
                                    <label class="label">Available</label>
                                    <div class="control">
                                        <input
                                                class="input"
                                                type="text"
                                                :value="products.productOptions[curProdID].isAvailable"
                                                v-on:input ="OptAvailable = $event.target.value"
                                        />
                                    </div>
                                </div>

                                  <!--                              Deleted-->

<!--                                <div class="field">-->
<!--                                    <label class="label">Deleted</label>-->
<!--                                    <div class="control">-->
<!--                                        <input-->
<!--                                                class="input"-->
<!--                                                type="text"-->
<!--                                                :placeholder="products.productOptions[curProdID].isDeleted"-->
<!--                                                v-on:input ="OptDeleted = $event.target.value"-->
<!--                                        />-->
<!--                                    </div>-->
<!--                                </div>-->

                                <div class="columns" style="margin-left: 130px">
                                    <div class="column">
                                        <button class="button is-info is-large">Edit Option</button>
                                    </div>

<!--                                    <div class="column has-text-centered">-->
<!--                                        <a class="button is-info">Add</a>-->
<!--                                    </div>-->

                                    <div class="column">
                                        <button class="button is-danger is-large">Delete Option</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </b-field>


                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import axios from "axios";
    import {mapState, mapGetters, mapActions, mapMutations} from "vuex";

    export default {
      data() {
            return {
                curProdID: 0,
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
                OptTax : "" ,
                OptWeight: "",
                OptQuantity: "",
                OptCreated: "",
                OptUpdated: "",
                OptAvailable: "",
                OptDeleted: "",

              OptionsArr :[128]

            };
        },
        methods: {
            ...mapGetters("user", ["getUserDetails", "getUserType"]),
          ChangeProdOpt: function(event) {
          this.curProdID =  event.target.value - 1 ;
          this.OptIndex = this.OptionsArr.indexOf(this.curProdID);

          },
            EdtProd: function () {
                axios.post("http://localhost:5000/api/Products/EditProduct", null, {
                    params: {
                        inId: this.ProdID,
                        inName: this.ProdName,
                        inDesc: this.ProdDesc,
                        inRegion: this.ProdRegion,
                        inRoast: this.ProdRoast,
                        inAltitude_max: this.ProdMaxAlt,
                        inAltitude_min: this.ProdMinAlt,
                        inBean_type: this.ProdBeanType,
                        inImage_url: this.ProdImgUrl,
                    }
                })
            },
            DeleteProd: function () {
                axios.post("http://localhost:5000/api/Products/DeleteProduct", null, {
                    params: {
                        inId: this.ProdID,
                        inName: this.ProdName,
                        inDesc: this.ProdDesc,
                        inRegion: this.ProdRegion,
                        inRoast: this.ProdRoast,
                        inAltitude_max: this.ProdMaxAlt,
                        inAltitude_min: this.ProdMinAlt,
                        inBean_type: this.ProdBeanType,
                        inImage_url: this.ProdImgUrl,
                    }
                }),
                    console.log(this.ProdID + " " + this.ProdName)
            },
            AddProd: function () {
                axios.post("http://localhost:5000/api/Products/addProduct", null, {
                    params: {
                        inName: this.ProdName,
                        inDesc: this.ProdDesc,
                        inRegion: this.ProdRegion,
                        inRoast: this.ProdRoast,
                        inAltitude_max: this.ProdMaxAlt,
                        inAltitude_min: this.ProdMinAlt,
                        inBean_type: this.ProdBeanType,
                        inImage_url: this.ProdImgUrl,
                    }
                })
            },
            EdtProdOpt: function () {
                axios.post("http://localhost:5000/api/ProductOptions/edtProdOpt", null, {
                    params: {
                        inId : this.curProdID,
                        inPrice: this.OptPrice,
                        inWeight: this.OptWeight,
                        inQuantity: this.OptQuantity,
                        inAvailable: this.OptAvailable,
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
                            //create Options Array
                            this.OptionsArr = this.products.productOptions ;
                            // eslint-disable-next-line no-console
                            console.log(this.products);
                            // eslint-disable-next-line no-console
                            console.log(this.OptionsArr);

                            //Assign values
                            this.ProdID = this.products.Id  ,
                                this.ProdName = this.products.name ,
                                this.ProdDesc = this.products.desc ,
                                this.ProdRegion = this.products.region ,
                                this.ProdRoast = this.products.roast,
                                this.ProdMaxAlt = this.products.altitude_max ,
                                this.ProdMinAlt = this.products.altitude_min ,
                                this.ProdBeanType = this.products.bean_type ,
                                this.ProdImgUrl = this.products.image_url

                            //Assign Product Options

                            // Assign Product Options
                            //       this.products.productOptions.Id = this.OptIndex,
                            //       this.products.productOptions.price = this.OptPrice,
                            //       this.products.productOptions.tax_amount = this.OptTax,
                            //       this.products.productOptions.weight = this.OptWeight,
                            //       this.products.productOptions.quantity = this.OptQuantity,
                            //       this.products.productOptions.isAvailable = this.OptAvailable,
                            //       this.products.productOptions.isDeleted = this.OptDeleted


                        })
                        .catch(error => {
                        });
                } catch (e) {
                    console.error(e);
                }
            } else {
                this.$router.go(-1);
            }
        },
        props: []
    };
</script>

<style>
.select-css {
display: block;
font-size: 18px;
font-family: sans-serif;
font-weight: 700;
color: #444;
line-height: 1.3;
padding: .6em 1.4em .5em .8em;
width: 7%;
max-width: 100%;
box-sizing: border-box;
margin: 0;
border: 1px solid #aaa;
box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
border-radius: .5em;
-moz-appearance: none;
-webkit-appearance: none;
appearance: none;
background-color: #fff;
background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
background-repeat: no-repeat, repeat;
background-position: right .7em top 50%, 0 0;
background-size: .65em auto, 100%;
}
.select-css::-ms-expand {
display: none;
}
.select-css:hover {
border-color: #888;
}
.select-css:focus {
border-color: #aaa;
box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
box-shadow: 0 0 0 3px -moz-mac-focusring;
color: #222;
outline: none;
}
.select-css option {
font-weight:normal;
}
</style>
