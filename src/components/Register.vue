<template id="register">
  <form>
    <h1>Register</h1>
    <div>
      <!--            Register Fields -->
      <label aria-label="Username: ">
        <b-input aria-placeholder="Username"></b-input>
      </label>
      <!--            start on new line -->
      <br />
      <label aria-label="Password: ">
        <b-input aria-placeholder="Password"></b-input>
      </label>

      <br />
      <label aria-label="Retype Password: ">
        <b-input aria-placeholder="Retype Password"> </b-input>
      </label>
    </div>
  </form>
</template>

<script>
export default {
  name: "Register"
};
</script>

<style scoped></style>

