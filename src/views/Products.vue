<template>
  <div class="section">
    <h1 class="has-text-centered title is-1">Products</h1>

    <div class="has-text-right">
      <!--    <p class="content"><b>selected</b>: {{ selectedFilters }}</p>-->
      <b-dropdown
        style="background-color: #00adda; margin: 10px;"
        v-model="selectedFilters"
        multiple
        aria-role="list"
        class="is-horizontal"
      >
        <button class="button is-primary" type="button" slot="trigger">
          <span>Search Filters<!--({{ selectedFilters.length }})--></span>
          <b-icon icon="menu-down"></b-icon>
        </button>

        <b-dropdown-item value="option1" aria-role="listitem">
          <span>Origin</span>
        </b-dropdown-item>

        <b-dropdown-item value="option2" aria-role="listitem">
          <span>Bean Type</span>
        </b-dropdown-item>

        <b-dropdown-item value="option3" aria-role="listitem">
          <span>Price</span>
        </b-dropdown-item>
      </b-dropdown>
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
export default {
  name: "Products",
  components: { DisplayProduct },
  disProd: DisplayProduct,
  data() {
    return {
      selectedFilters: [],
      Products: []
    };
  }
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
