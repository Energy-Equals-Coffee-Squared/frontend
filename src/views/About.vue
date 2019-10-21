<template>
  <div>
    <div class="container">
      <h1>{{ message }}</h1>
      <br />
      <div class="row">
        <!--      For out images as a team -->
        <div class="columns">

          <div class="column is-rounded">
            <img src="../assets/images/Avatars.png" />
            <p class="tile" style="position:center">Grey Hat #1</p>
            <p class="subtitle" style=" position: center">Thomas McAlpine</p>
          </div>

          <div class="column is-rounded">
            <img src="../assets/images/Avatars.png" />
            <p class="tile" style="position:center">Grey Hat #2</p>
            <p class="subtitle" style=" position: center">Anton Röscher</p>
          </div>

          <div class="column is-rounded">
            <img src="../assets/images/Avatars.png" />
            <p class="tile" style="position:center">Grey Hat #3</p>
            <p class="subtitle" style=" position: center">Andrew Walls</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data: function() {
    return {
      message: "This is our about page "
    };
  }
};
</script>

<style scoped></style>
