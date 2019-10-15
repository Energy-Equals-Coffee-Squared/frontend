<template>
  <div class="container" align="center">
    <div class="columns is-centered">
      <div class="column is-8">
        <div class="tile">
          <div class="tile is-parent">
            <article
              class="tile is-child notification is-info "
              style="background-color: #222629;"
            >
              <p class="title">
                <strong>{{ product.name }}</strong>
              </p>
              <p class="subtitle"></p>

              <figure class="image is-128x128" style="margin: 55px">
                <img
                  src="../assets/images/coffee1.png"
                  width="75"
                  height="75"
                />
              </figure>

              <p class="subtitle">{{ product.desc }}</p>
              <h1 class="subtitle">More Details</h1>
              <ul class="">
                <li>Region: {{ product.region }}</li>
                <li>Roast: {{ product.roast }}</li>
                <li>Bean Type: {{ product.bean_type }}</li>
                <li>Max Altitude: {{ product.altitude_max }}km</li>
                <li>Min Altitude: {{ product.altitude_min }}km</li>
              </ul>
              <br />
              <div class="has-text-centered">
                <div class="block">
                  <p class="subtitle">
                    Pick an option:
                  </p>
                  <div v-for="(opt, index) in product.productOptions">
                    <b-radio
                      v-model="optIndex"
                      name="options"
                      :native-value="index"
                      @input="changeDispPrice"
                    >
                      {{ opt.weight }}g
                    </b-radio>
                  </div>
                </div>
                <div class="">
                  <p class="is-size-4">Quantity</p>

                  <div class="field has-addons has-addons-centered">
                    <p class="control">
                      <button
                        class="button is-primary"
                        @click="decreaseQuantity"
                      >
                        -
                      </button>
                    </p>
                    <p class="control">
                      <input
                        class="input"
                        disabled
                        :value="quantity"
                        placeholder="Enter the quantity"
                        required
                        type="number"
                      />
                    </p>
                    <p class="control">
                      <button
                        class="button is-primary"
                        @click="increaseQuantity"
                      >
                        +
                      </button>
                    </p>
                  </div>
                </div>
                <br />
                <p class="title">
                  <b>Price:</b>
                  R{{ (price * quantity) / 100 }}
                </p>
                <button
                  align="center"
                  class="button is-primary is-large"
                  style="margin: 10px"
                  @click="addToCart"
                >
                  <strong> Add To Cart ! </strong>
                </button>

                <button
                  align="center"
                  class="button is-primary is is-large"
                  style="margin: 10px"
                >
                  <a :href="'../edtProd/' + this.product.Id"
                    ><strong>Edit Product</strong></a
                  >
                </button>
                <!--                      </article>-->
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "SpecProd",
  data() {
    return {
      urlID: -1,
      product: [],
      optIndex: 0,
      price: 0,
      quantity: 1
    };
  },
  computed: {
    ...mapState("error", ["errorText", "errorShow"]),
    ...mapState("product", [
      "Id",
      "name",
      "desc",
      "max_price",
      "min_price",
      "region",
      "roast",
      "altitude_max",
      "altitude_min",
      "bean_type",
      "image_url",
      "productOptions"
    ])
  },
  methods: {
    ...mapMutations("error", ["deleteError"]),
    ...mapActions("product", ["getProduct"]),
    ...mapActions("cart", ["addToCart"]),
    changeDispPrice() {
      this.price = this.productOptions[this.optIndex].price;
      // eslint-disable-next-line no-console
      console.log(this.price);
    },
    increaseQuantity() {
      this.quantity++;
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    addToCart() {
      //prodID, optID, name, weight, price, quantity
      let prodID = this.product.Id;
      let optID = this.product.productOptions[this.optIndex].Id;
      let name = this.product.name;
      let weight = this.product.productOptions[this.optIndex].weight;
      let price = this.product.productOptions[this.optIndex].price;
      let qty = this.quantity;

      let promise = this.$store.dispatch("cart/addToCart", [
        prodID,
        optID,
        name,
        weight,
        price,
        qty
      ]);
      if (promise) {
        this.$router.push("../cart");
      }
    }
  },
  async beforeCreate() {
    this.urlID = this.$route.params.Id;
    // eslint-disable-next-line no-console
    console.log("this is the passed ID :" + this.urlID);
    // Create and populate array
    let vm = this;
    await this.$store
      .dispatch("product/getProduct", this.urlID)
      .then(function() {
        vm.product = vm.$store.getters["product/getProduct"];
        vm.price = vm.product.productOptions[vm.optIndex].price;
      });
  }
};
</script>

<style scoped></style>
