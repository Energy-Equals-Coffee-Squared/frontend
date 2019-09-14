<template id="register">
  <section class="section">
    

    <div class="columns is-centered">

      <div class="column is-3 ">
        
        <h1 class="title has-text-centered">Register</h1>

        <div class="box">
          <!-- USERNAME -->
          <div class="field">
            <label class="label">Username</label>
            <div class="control">
              <input class="input" type="text" placeholder="Enter username">
            </div>
          </div>
          <!-- //USERNAME -->

          <!-- EMAIL -->
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input class="input" type="text" placeholder="Enter email">
            </div>
          </div>
          <!-- //EMAIL -->

          <!-- NAMES -->
          <label class="label">Name</label>
          <div class="field is-horizontal">
            <div class="field-body">

              <!-- FIRSTNAME -->
              <div class="field is-grouped">
                <p class="control is-expanded">
                  <input class="input" type="text" placeholder="First Name">
                </p>
              </div>
              <!-- //FIRSTNAME -->

              <!-- LASTNAME -->
              <div class="field">
                <p class="control is-expanded has-icon has-icon-right">
                  <input class="input" type="email" placeholder="Last Name">
                </p>
              </div>
              <!-- //LASTNAME -->

            </div>
          </div>
          <!-- //NAMES -->

          <!-- CONTACT NUMBER -->
          <div class="field">
            <label class="label">Contact Number</label>
            <div class="control">
              <input class="input" type="text" placeholder="Contact Number">
            </div>
          </div>
          <!-- //CONTACT NUMBER -->

          <button class="button is-fullwidth is-info">Register</button>
        </div>


      </div>

    </div>

  </section>

</template>

<style scoped>
  .is-primary {
    background-color: #00adda;
  }
</style>
