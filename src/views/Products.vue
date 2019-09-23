<template>
  <div class="container" style="position: center">
    <div style="margin: 50px">
      <div class="rows">
        <div class="columns">
          <div class="column">
            <!--    To display products -->
            <div class="tile is-ancestor">
              <div class="tile is-horizontal is-primary is-6" style="height: 400px; width: 400px">
                <div class="tile" >
                  <div class="tile is-parent">
                    <article
                      class="tile is-child notification is-info "
                      style="background-color: #bcb8b9"
                    >
                      <p class="title">Product Name Here</p>
                      <p class="subtitle">Product Origin</p>
                      <figure class="image is-128x128">
                        <img
                          src="../assets/images/coffee1.png"
                          width="75"
                          height="75"
                        />
                      </figure>

<!--                      <article-->
<!--                        class="tile is-child notification is-primary"-->
<!--                        style="margin: 50px"-->
<!--                      >-->
                      <p class="title" style="margin: 20px"><strong>Price</strong></p>
                        <p class="subtitle">Other information here</p>
<!--                      </article>-->
                    </article>
                  </div>
                </div>
              </div>

              <div class="tile is-horizontal is-primary is-6" style="height: 400px; width: 400px">
                <div class="tile" >
                  <div class="tile is-parent">
                    <article
                      class="tile is-child notification is-info "
                      style="background-color: #bcb8b9"
                    >
                      <p class="title">Product Name Here</p>
                      <p class="subtitle">Product Origin</p>
                      <figure class="image is-128x128">
                        <img
                          src="../assets/images/coffee1.png"
                          width="1264"
                          height="1428"
                        />
                      </figure>

                      <p class="title" style="margin: 20px"><strong>Price</strong></p>
                      <p class="subtitle">Other information here</p>

                    </article>
                  </div>
                </div>
              </div>
            </div>

            <!--    TODO Create for each loop to loop through images and data in DB for above -->

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Products"
};
</script>

<style scoped></style>
