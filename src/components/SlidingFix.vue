<template>
  <!-- 首页轮播 -->
  <div>
    <div class="swiper-demo">
      <div
        class="swiper-container w-[100vw] over my-[5px] mx-auto h-[30vw] "
      >
        <div class="swiper-wrapper">
          <div class="swiper-slide wid bg-red-300" >Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
          <div class="swiper-slide">Slide 4</div>
          <div class="swiper-slide">Slide 5</div>
          <div class="swiper-slide">Slide 6</div>
          <div class="swiper-slide">Slide 7</div>
          <div class="swiper-slide">Slide 8</div>
          <div class="swiper-slide">Slide 9</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  mounted() {
    new Swiper(".swiper-container", {});
  },
};
</script>

<style scoped>
.wid {
    width: 85vw !important;
}
.over{
    /* overflow: visible !important; */
}
</style>
