<template>

</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      isFullPage: true
    };
  },
  methods: {
    openLoading() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 10 * 1000);
    }
  }
};
</script>
