<template id="register">
  <section>
    <section style="display:flex ;justify-content: center; ">
      <!--    This sectino tag is to make it a vertical change -->
      <section>
        <div class="columns" style="margin: 50px ">
          <div>
            <!--      Username Column-->
            <div class="column">
              <label>Username</label>
            </div>
            <br />
          </div>
          <div class="column">
            <b-input Placeholder="Enter Username" style="width: 100%"
              >Input Username</b-input
            >
          </div>
        </div>

        <div class="columns" style="margin: 50px ">
          <div>
            <!--      Username Column-->
            <div class="column">
              <label>Password</label>
            </div>
            <br />
          </div>
          <div class="column">
            <b-input Placeholder="Enter Password" style="width: 100%"
              >Input Username</b-input
            >
          </div>
        </div>

        <div class="columns" style="margin: 50px ">
          <div>
            <!--      Username Column-->
            <div class="column">
              <label>Confirm Password</label>
            </div>
            <br />
          </div>
          <div class="column">
            <b-input Placeholder="Retype Password" style="width: 100%"
              >Input Username</b-input
            >
          </div>
        </div>
      </section>
      <div></div>
    </section>
    <section style="display: flex; justify-content: center">
      <div class="button is-primary" style="width: 65px;height: 48px ">
        <strong style="text-align: center">Submit</strong>
      </div>
    </section>
  </section>
</template>

<style scoped>
.is-primary {
  background-color: #00adda;
}
</style>
