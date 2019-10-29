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
                                    :value="ProdID"
                                    v-on:input="ProdID = $event.target.value"
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

                    <div class="columns">
                        <div class="column">
                            <button
                                    class="button is-info is-large"
                                    style="margin: 20px ;"
                                    @click="AddProd"

                            >
                                Add Product
                            </button>
                        </div>



                    </div>


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

                                                v-on:input ="OptAvailable = $event.target.value"
                                        />
                                    </div>
                                </div>


                                <div class="columns">
                                    <div class="column">
                                        <button class="button is-info is-large"
                                        @click="AddProdOpt">Add Option</button>
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
    export default {
        name: "AddProduct",
        data() {
            return {
                curProdID: 0,
                userType: "GUEST",
                products: [], //For populating item options from front page
                ProdOpt: "",
                ProdID : "",
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

                //Options
                OptPrice: "",
                OptTax: "",
                OptWeight :"",
                inQuantity: "",
                inAvailable:"",
                inDeleted: ""
            }
        },
        methods: {
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
                        inProductID : this.ProdID
                    }
                })
            },

            AddProdOpt: function () {
                axios.post("http://localhost:5000/api/ProductOptions/AddProdOpt", null, {
                    params: {
                        inPrice: this.OptPrice,
                        inTax : this.OptTax ,
                        inWeight: this.OptWeight,
                        inQuantity: this.OptQuantity,
                        inAvailable: this.OptAvailable,
                        inDeleted : this.OptDeleted,
                        inProductID : this.ProdID
                    }
                })
            },
        }
    }
</script>

<style scoped>

</style>
