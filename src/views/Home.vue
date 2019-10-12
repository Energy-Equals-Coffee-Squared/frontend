<template>
  <div class="container" style="margin: 500px">
<!--    <carousel :data="data"> </carousel>-->
  </div>
</template>

<script>

export default {
  data() {
    return {
      data: [
        '<div class= "Product"><display-product> where </display-product></div>',
        '<div class="Product">Slide 2</div>',
        '<div class="Product">Slide 3</div>'
      ]
    };
  }
};
</script>

<style>
.Product {
  align-items: center;
  background-color: #666;
  color: #999;
  display: flex;
  font-size: 1.5rem;
  justify-content: center;
  min-height: 10rem;
}
</style>
