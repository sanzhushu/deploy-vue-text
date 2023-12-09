<template>
  <!-- 首页轮播 -->
  <div class="opacity-0.2 ">
    <Header ></Header>
  <!-- <Header :showPopups="showPopup"></Header> -->
  <div class="swiper-demo pb-3 ">
    <div v-if="banner.length" class="swiper-container w-[90vw] my-[5px] mx-auto h-[30vw] rounded-[5vw]">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in banner" :key="index">
          <img :src="item.pic" alt="" class="w-[100%] h-[100%]" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</div>
</template>
<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
// import { mapState } from "vuex";
export default {
  data() {
    return {
      banner: [],
    };
  },
  // computed:{
  //   ...mapState(["banners"]),
  // },
  props:{
    resource:{
      type:Object,
      required:true
    }
  },
  created(){
    
  //  this.banner= this.banners.data.banners
  this.banner= this.resource.extInfo.banners
  // console.log(this.banner);
  },
  mounted() {
    new Swiper(".swiper-container", {
      loop: true,
      autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
            },
      pagination: {
        el: ".swiper-pagination",
      },
    });
  },
  methods: {
   
  }
};
</script>

<style scoped>

</style>
