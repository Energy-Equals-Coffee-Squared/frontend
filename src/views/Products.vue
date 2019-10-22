<template>
  <div>
  <div class="section">
    <h1 class="has-text-centered title is-1 has-text-grey-lighter">Products</h1>


    </div>

    <div class="container" align="center">
      <!--    <div style="margin: 50px; margin-left: 140px">-->
      <!--      <div class="rows" >-->
      <!--        <div class="row">-->
      <display-product> </display-product>
      <!--    TODO Create for each loop to loop through images and data in DB for above -->
    </div>
  </div>
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<script>
import DisplayProduct from "../components/DisplayProduct";
import axios from "axios";
export default {
  name: "Products",
  components: { DisplayProduct },
  disProd: DisplayProduct,
  data() {
    return {

      Products: [],
    };
  },
};
</script>

<style scoped>
.button.is-primary {
  background-color: #86c232;
}

.button.is-primary:hover {
  background-color: #86c232;
}
</style>
