<template>
 <div class="container" style="transform: scale(); margin-top: 200px">
   <carousel>
     <slide> <img src="../../src/assets/images/coffeehow.png" height="600px" width="600px">
     <p> Learn How Coffee is made </p>
     </slide>
       <slide> <img src="../../src/assets/images/perfectcoffee.jpg" height="600px" width="600px">
           <p> Learn how to make the perfect cup of coffee</p>
       </slide>
       <slide> <img src="../../src/assets/images/coffeejoin.jpg" height="600px" width="600px">
           <p> Join our newsletter</p>
       </slide>
   </carousel>
     <h1>Come explore our wide range of coffees</h1>
  </div>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel';

export default {
  components: {
    Carousel,
    Slide
  }
};
</script>

<style>

</style>
