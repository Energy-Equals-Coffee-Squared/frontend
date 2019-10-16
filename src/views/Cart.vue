<template>
  <div class="columns is-centered">
    <div class="column is-9">
      <p class="title is-1 has-text-centered">Cart</p>
      <div v-if="errorShow" class="message is-danger">
        <div class="message-body">
          {{ errorText }}
        </div>
      </div>
      <div class="section">
        <div v-if="cartItems.length > 0">
          <div
            class="columns is-centered"
            style="margin-bottom: 20px;"
            v-for="(item, index) in cartItems"
          >
            <div class="column box is-9">
              <div class="columns">
                <div class="column is-1">
                  <div class="control">
                    <input
                      class="input is-hovered"
                      type="number"
                      min="1"
                      v-model="item.quantity"
                      @input="
                        updateQuantity(item.optionID, parseInt(item.quantity))
                      "
                      @change="verifyQuantity(index)"
                    />
                  </div>
                </div>

                <div class="column is-large has-text-centered">
                  <span class="has-text-weight-semibold is-size-4"
                    >{{ item.name }} {{ item.weight }}g</span
                  >
                </div>

                <div class="column is-narrow">
                  <span class="has-text-weight-semibold is-size-4"
                    >R{{
                      ((item.price * item.quantity) / 100).toFixed(2)
                    }}</span
                  >
                </div>

                <div class="column is-narrow">
                  <button
                    class="button is-primary"
                    @click="removeFromCart(item.optionID)"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="columns is-centered">
            <div class="column is-7"></div>

            <div class="column is-narrow">
              <span class="has-text-weight-semibold is-size-4"
                >Discount Code:</span
              >
            </div>

            <div class="column is-narrow">
              <div class="field">
                <div class="control">
                  <label>
                    <input
                      v-model="disCode"
                      class="input is-info"
                      type="text"
                    />
                  </label>
                </div>
              </div>
            </div>

            <div class="column is-narrow">
              <button class="button is-primary" @click="addDiscountCode">
                Add
              </button>
            </div>
            <div class="column is-2"></div>
          </div>
          <div v-if="discPerc > 0" class="columns is-centered">
            <div class="column is-narrow box">
              <p class="">Code: {{ disCode }}</p>
              <p class="">Discount: {{ discPerc }}%</p>
              <p class="">Saved: R{{ (disAmount / 100).toFixed(2) }}</p>
              <button
                @click="removeDiscount"
                class="button is-danger is-fullwidth"
              >
                remove
              </button>
            </div>
          </div>
          <div class="has-text-centered has-text-weight-bold is-size-2">
            Total R{{ ((cartTotal - disAmount) / 100).toFixed(2) }}
          </div>
          <br />
          <div class="has-text-centered has-text-weight-bold is-size-2">
            <button
              class="button is-primary is-large"
              v-if="userType !== 'GUEST'"
              @click="payNow"
            >
              Pay Now
            </button>
            <div v-else>
              <div class="columns is is-centered">
                <div class="column is-narrow has-text-weight-semibold">
                  Before you pay, you need to
                  <a href="login" class="button is-primary is-large">Login</a>
                  or
                  <a href="register" class="button is-primary is-large"
                    >Register</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="cartItems.length <= 0">
          <div class="columns is-centered has-text-centered">
            <div class="column">
              <p class="title">
                Nothing In Cart!
              </p>
              <a class="button is-primary is-large" href="../product"
                >Get Some Coffee!</a
              >
            </div>
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
      cartItems: [],
      cartTotal: 0,
      userType: "GUEST",
      disCode: "",
      discPerc: 0,
      disAmount: 0
    };
  },
  computed: {
    ...mapState("error", ["errorText", "errorShow"])
  },
  methods: {
    ...mapActions("cart", [
      "updateQuantity",
      "removeFromCart",
      "addToInvoice",
      "addDiscountCode",
      "removeDiscount"
    ]),
    ...mapGetters("cart", ["getCartItems"]),
    ...mapGetters("cart", ["cartTotalAmount"]),
    ...mapGetters("cart", ["getDiscount"]),
    ...mapGetters("user", ["getUserDetails", "getUserType"]),
    async removeDiscount(){
      await this.$store.dispatch("cart/removeDiscount");
      this.discPerc = 0;
      this.disCode = "";
      this.disAmount = 0;
    },
    changeDispPrice() {
      this.price = this.productOptions[this.optIndex].price;
      // eslint-disable-next-line no-console
      console.log(this.price);
    },
    verifyQuantity(index) {
      if (
        !this.cartItems[index].quantity ||
        this.cartItems[index].quantity <= 0
      ) {
        this.cartItems[index].quantity = 1;
      }
    },
    updateCart() {
      this.cartItems = this.$store.getters["cart/getCartItems"];
      if (!this.cartItems) {
        this.cartItems = [];
      }
      console.log("Items in cart");
      console.log(this.cartItems);
      this.cartTotal = this.$store.getters["cart/cartTotalAmount"];
      this.disAmount = this.cartTotal * (this.discPerc / 100)
      if (!this.cartTotal) {
        this.cartTotal = 0;
      }
    },
    updateQuantity(optID, qty) {
      if (qty >= 1) {
        this.$store.dispatch("cart/updateQuantity", [optID, qty]);
      }
      this.updateCart();
    },
    removeFromCart(optID) {
      this.$store.dispatch("cart/removeFromCart", optID);
      this.updateCart();
    },
    async payNow() {
      if(this.discPerc>0){
        await this.$store.dispatch("cart/addToInvoice", this.disCode);
      }else{
        await this.$store.dispatch("cart/addToInvoice", null);
      }
      this.updateCart();
      if (this.$store.state.error.errorShow === false) {
        await this.$router.push("invoices");
      }
    },
    async addDiscountCode() {
      if (this.disCode) {
        this.disCode = this.disCode.toUpperCase();
        await this.$store.dispatch("cart/addDiscountCode", this.disCode);
        let tempDisc = this.$store.getters["cart/getDiscount"];
        this.discPerc = tempDisc.percent;
        this.disAmount = this.cartTotal * (this.discPerc / 100);
      }
    }
  },
  async created() {
    this.updateCart();
    this.userType = this.$store.getters["user/getUserType"];
    await this.$store.dispatch("cart/removeDiscount");
  }
};
</script>
