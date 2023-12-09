<template>
    <!-- 轮播下面的图标 -->
    <div>
      <Level>
        <ul class="list-none w-[190vw] flex flex-nowrap h-[16vw]">
          <li
            class="w-[19vw] scroll-item flex items-center justify-center flex-wrap mr-[6vw]"
            v-for="(item,index) in resource.creatives[0].resources"
            :key="item.id"
          >
            <div class=" relative block  h-[13vw] ">
              <p v-if="index==0" class=" absolute top-[6vw] left-[4.5vw] z-30 font-bold text-[#F1F1F1] text-[2.7vw]">{{ date }}</p>
              <img
                :src="item.uiElement.image.imageUrl"
                alt=""
                class="w-[20vw] h-[15vw] red-image"
              />
              
            </div>
  
            <p class=" dark:text-[#fcfcfd] text-[#666F7D] text-center text-[2.78vw] w-[100%] mt-[-1vw]">{{ item.uiElement.mainTitle.title}}</p>
          </li>
        </ul>
      </Level>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        date:''
      };
    },
    props: {
    resource: {
      type: Object,
      required: true,
    },
  },
  created(){
    // console.log(this.resource.creatives[0].resources);
    this.date = new Date().getDate()
  }
  };
  </script>
  
  <style scoped>
  .red-image {
    filter: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27><filter id=%27colorize%27><feColorMatrix type=%27matrix%27 values=%271 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0%27/></filter></svg>#colorize");
  }
  </style>
  