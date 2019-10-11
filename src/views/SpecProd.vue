<template>
<div class="container" align="center">
        <div class="tile is-ancestor">
                <div
                        class="tile is-primary is-8"
                        style="height: 650px; width: 650px"
                >
                        <div class="tile">
                                <div class="tile is-parent">
                                        <article
                                                class="tile is-child notification is-info "
                                                style="background-color: #222629;"
                                        >
                                                <p class="title">
                                                        Name: <strong>{{ Products[Id].name }}</strong>
                                                </p>
                                                <p class="subtitle">Origin: {{ Products[Id].name  }}</p>

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
                                                <p class="subtitle">Description: {{ Products[Id].name  }}</p>
                                                <!--                            TODO Center Button-->
                                                <div class="has-text-centered">
                                                        <button
                                                                align="center"
                                                                class="button is-primary is-horizontal"
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
</template>

<script>
        import axios from "axios";
    import DisplayProduct from "../components/DisplayProduct";
    export default {
            name: "SpecProd",
            components: {DisplayProduct},
            data() {
                    let Id;
                    return {
                            Id,
                            Products: []
                    };
            },
            created() {

                    {
                            this.Id = this.$route.params.Id -1 ;
                            console.log("this is the passed ID :" + this.Id);

                            // Create and populate array
                            try {
                                    axios
                                            .get("http://localhost:5000/api/Products/"+Id)
                                            .then(response => {
                                                    this.Products = response.data;
                                                    // eslint-disable-next-line no-console
                                                    console.log(this.Products);
                                            })

                            } catch (e) {
                                    console.log(e);
                            }
                    }
            }
    }


</script>

<style scoped>

</style>
