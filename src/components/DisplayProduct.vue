<template>
  <!--    I cant get it to make two columns-->

  <div>
    <div class="columns is-multiline is-centered">
      <div class="column is-5" v-for="product of Products" :key="product.Id">
        <!--    To display products -->
        <article
          class="tile is-child notification is-info "
          style="background-color: #222629;"
        >
          <p class="title">
            <strong>{{ product.name }}</strong>
          </p>
          <p class="subtitle">Origin: {{ product.region }}</p>

          <figure class="image is-128x128" style="margin: 55px">
            <img src="../assets/images/coffee1.png" width="75" height="75" />
          </figure>

          <p class="title" style="margin: 20px">
            <strong
              >Price R{{ product.min_price / 100 }} - R{{
                product.max_price / 100
              }}
            </strong>
          </p>
<!--          <p class="subtitle">Description: {{ product.desc }}</p>-->
          <div class="has-text-centered">
            <a
              class="button is-large is-primary is-fullwidth"
              :href="'product/' + product.Id"
              ><b> More Info </b>
            </a>
            <!--                      </article>-->
          </div>
        </article>
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
      await axios
        .get("http://localhost:5000/api/Products")
        .then(response => {
          this.Products = response.data;
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
};
</script>

<style scoped>
/*HELP ME*/
.tile.is-primary:hover {
  background-color: #86c232;
}

.button.is-primary {
  background-color: #86c232;
}
.button.is-primary:hover {
  background-color: #86c232;
}
</style>
