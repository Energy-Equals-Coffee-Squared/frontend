<template>
    <div>
        <div class="col" align="center" style="margin-top: 25px">
        <h1 class="is-size-1 has-text-grey-lighter">  Need Beans ?  </h1>
        </div>
 <div class="container" style="transform: scale(); margin-top: 50px">
   <carousel>
     <slide class="slide"> <img src="../../src/assets/images/home/1.jpg" height="672" width="477.22">
     </slide>
       <slide class="slide"> <img src="../../src/assets/images/home/2.jpg" height="672" width="477.22">
       </slide>
       <slide class="slide"> <img src="../../src/assets/images/home/3.jpg" height="672" width="477.22">
       </slide>

           <slide class="slide"> <img src="../../src/assets/images/home/4.jpg" height="672" width="477.22">
           </slide>
   </carousel>
 </div>
        <div class="col" align="center">
        <h1 class="is-size-1 has-text-grey-lighter"> We Got You !  </h1>
        </div>
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
    .VueCarousel-wrapper{
        height: 500px;
    }
    .VueCarousel-slide{
        flex-basis:auto;
        /*margin-left: 10px;*/
        /*margin-right: 10px;*/
    }

</style>
