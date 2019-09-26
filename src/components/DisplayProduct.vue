<template>
<!--    I cant get it to make two columns-->
  <div class="row">
    <div v-for="product of Products" :key="product.id">
        <div class="columns">
      <div class="column">
        <!--    To display products -->
        <div class="tile is-ancestor">
          <div
            class="tile is-horizontal is-primary is-1"
            style="height: 600px; width: 550px"
          >
            <div class="tile">
              <div class="tile is-parent">
                <article
                  class="tile is-child notification is-info "
                  style="background-color: #222629;"
                >
                  <p class="title">
                    Name: <strong>{{ product.name }}</strong>
                  </p>
                  <p class="subtitle">Origin: {{ product.region }}</p>

                  <figure class="image is-128x128" style="margin: 55px">
                    <img
                      src="../assets/images/coffee1.png"
                      width="75"
                      height="75"
                    />
                  </figure>

                  <p class="title" style="margin: 20px">
                    <strong>Price</strong>
                  </p>
                  <p class="subtitle">Description: {{ product.desc }}</p>
                  <!--                            TODO Center Button-->
                  <div class="has-text-centered">
                    <button
                      align="center"
                      class="button is-primary"
                      style="margin: 10px"
                    >
                      <strong> Add To Cart ! </strong>
                    </button>
                    <!--                      </article>-->
                  </div>
                </article>
              </div>
            </div>
          </div>
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
      Products: []
    };
  },
  async created() {
    try {
      axios
        .get("http://localhost:5000/api/Products")
        .then(response => {
          this.Products = response.data;
          // eslint-disable-next-line no-console
          console.log(response);
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
/*HELP ME*/
.tile.is-child.notification.is-info:hover {
  background-color: #86c232;
}
.button.is-primary {
  background-color: #86c232;
}
.button.is-primary:hover {
  background-color: #86c232;
}
</style>
