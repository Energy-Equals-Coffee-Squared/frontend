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
                            <input class="input" type="text" :placeholder= this.ProdID disabled="true">
                        </div>
                    </div>
                    <!-- //USERNAME -->

                    <!-- EMAIL -->
                    <div class="field">
                        <label class="label">Name</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Enter Product Name">
                        </div>
                    </div>
                    <!-- //EMAIL -->

                    <div class="field">
                        <label class="label">Description</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Enter Product Description">
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
                                    <input class="input" type="text" placeholder="Max Price">
                                </p>
                            </div>
                            <!-- //FIRSTNAME -->

                            <!-- LASTNAME -->
                            <div class="field">
                                <p class="control is-expanded has-icon has-icon-right">
                                    <input class="input" type="email" placeholder="Min Price">
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
                            <input class="input" type="text" placeholder="Product Region">
                        </div>
                    </div>

                    <!-- NAMES -->
                    <label class="label">Altitude</label>
                    <div class="field is-horizontal">
                        <div class="field-body">

                            <!-- FIRSTNAME -->
                            <div class="field is-grouped">
                                <p class="control is-expanded">
                                    <input class="input" type="text" placeholder="Max Altitude">
                                </p>
                            </div>
                            <!-- //FIRSTNAME -->

                            <!-- LASTNAME -->
                            <div class="field">
                                <p class="control is-expanded has-icon has-icon-right">
                                    <input class="input" type="email" placeholder="Min Altitude">
                                </p>
                            </div>
                            <!-- //LASTNAME -->

                        </div>
                    </div>


                    <div class="field">
                        <label class="label">Roast</label>
                        <div class="control">
                            <input class="input" type="text" placeholder=" Product Roast">
                        </div>
                    </div>


                <div class="field">
                    <label class="label">Bean Type</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Product Bean Type">
                    </div>
                </div>

                <div class="field">
                    <label class="label">Image URL</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Enter Image URL">
                    </div>
                </div>


                <div class="field">
                    <label class="label">Date Created</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Product Date Created">
                    </div>
                </div>

                <div class="field">
                    <label class="label">Date Updated</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Product Date Updated">
                    </div>
                </div>


                    <div class="field">
                        <label class="label">Product Options</label>
                        <div class="control">
                            <b-dropdown v-model="isPublic" aria-role="list">
                                <button class="button is-primary" type="button" slot="trigger">
                                    <template v-if="isPublic">
                                        <b-icon icon="earth"></b-icon>
                                        <span>Product Options</span>
                                    </template>
                                    <template v-else>
                                        <b-icon icon="account-multiple"></b-icon>
                                        <span>Friends</span>
                                    </template>
                                    <b-icon icon="menu-down"></b-icon>
                                </button>

                                <b-dropdown-item :value="true" aria-role="listitem">
                                    <div class="media">
                                        <b-icon class="media-left" icon="earth"></b-icon>
                                        <div class="media-content" v-for="prod in ProdOptions" :key="prod.Id">
                                            <h3>Product Options</h3>
                                            <small>Select Appropriate option</small>
                                        </div>
                                    </div>
                                </b-dropdown-item>
                            </b-dropdown>
                        </div>
                    </div>


                    <button class="button is-fullwidth is-info">Register</button>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
    import axios from "axios";
        export default {
            name: "EditProducts",
            data() {
                return {
                    prodArr: [], //For populating item options from front page
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
                    ProdOptions: []
                        // "ID",
                        // "Price",
                        // "Weight",
                        // "Quantity",
                        // "created_at",
                        // "updated_at",
                        // "ProductID",
                        // "isAvailable",
                        // "isDeleted"
                    // ],
                }
            },
            beforeCreate() {
                this.urlID = this.$route.params.Id ;
                this.ProdID = this.urlID;
                // eslint-disable-next-line no-console
                console.log("this is the passed ID :" + this.urlID);

            },

            async created() {
                try {
                    axios
                        .get("http://localhost:5000/api/Products/" + this.ProdID)
                        .then(response => {
                            this.ProdOptions = response.data;
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
        }
</script>





