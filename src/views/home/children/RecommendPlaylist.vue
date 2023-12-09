<template>
  <div class="dark:text-white">
    <Card :title="resource.uiElement.subTitle.title">
      <Level>
        <div class="w-[210vw] flex flex-nowrap justify-between pt-1">
          <div
            class="w-[31vw] h-[41vw] overflow-hidden"
            v-for="(item, index) in resource.creatives"
            :key="index"
          >
            <div v-if="item.resources.length > 1">
              <div
               
                class=" overflow-hidden h-[31vw] relative mt-[3vw]"
              >
                <img
                  v-for="(iten, index) in item.resources"
                  :key="index"
                  :src="iten.uiElement.image.imageUrl"
                  alt="" 
                  class=" miaoall shade absolute w-[31vw] h-[31vw]"
                  :class="active[index]"
                />
              </div>
              <p
                v-for="(iten, index) in item.resources"
                :key="index"
                v-show="index == num"
                class="text-[2.5vw]"
              >
                {{ iten.uiElement.mainTitle.title }}
              </p>
            </div>
            <div v-else class="" @click="playlistclick(item)">
              <div class="relative w-[31vw] shade mt-2">
                <img
                  :src="item.resources[0].uiElement.image.imageUrl"
                  alt=""
                  class="rounded-[2vw] h-[31vw] w-[31vw]"
                />
                <p
                  class="absolute top-1 right-1 flex justify-center items-center rounded-[5vw] font-bold text-white"
                >
                  <Icon icon="iconamoon:arrow-right-2-fill" />
                  {{
                    formatNumber(item.resources[0].resourceExtInfo.playCount)
                  }}
                </p>
                <p class="absolute bottom-1.5 right-1 text-[5vw] text-white">
                  <Icon icon="iconamoon:arrow-right-2-fill" />
                </p>
              </div>
              <p
                class="dark:text-[#f9f9fa] text-[2.78vw] text-[#3E4759] scroll-item"
              >
                {{ item.uiElement.mainTitle.title }}
              </p>
            </div>
          </div>
        </div>
      </Level>
    </Card>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  data() {
    return {
      num: 0,
      active:["active1", "active2", "active0"],
    };
  },
  props: {
    resource: {
      type: Object,
      required: true,
    },
  },
  methods: {
    // start() {
    //   setInterval(this.valChange, 3000);
    // },
    // valChange() {
    //   this.num1++;
    //   if (this.num1 > 2) {
    //     this.num1 = 0;
    //   }

    //   // console.log(this.num1);
    // },
    formatNumber(num) {
      num = Number(num);
      if (num == 0 || (num > 0 && num < 10000)) {
        return num + "";
      } else {
        return (num / 10000).toFixed(0) + "万";
      }
    },
    playlistclick(id) {
      // console.log(1111);
      // console.log(id.creativeId);
      this.$store.commit("updataPlaylistID", id);
      this.$router.push("/playlist");
    },
  },
  created() {
    // console.log(this.resource);
    setInterval(() => {
      // console.log(this.num);
      if (this.num < 2) {
        this.num++;
      } else {
        this.num = 0;
      }
      if (this.num == 0) {
        this.active = ["active1", "active2", "active0"];
      } else if (this.num == 1) {
        this.active = ["active0", "active1", "active2"];
      } else {
        this.active = ["active2", "active0", "active1"];
      }
      // this.num = this.num==2?0:
    }, 3000);
  },
  mounted() {
    new Swiper(".swiper1", {
      loop: true,
      direction: "vertical",
      slidesPerView: 1,
      spaceBetween: 30,
      mousewheel: true,
      autoplay: {
        delay: 6000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      },
    });
  },
  // mounted() {
  //   this.start();
  // },
};
</script>

<style scoped>
.shade {
  border-radius: 2vw;
  box-shadow: 1px -7px 2px 1px rgba(0, 0, 0, 0.2);
}

.active0 {
  transform: scale(0.5);
  top: -100%;
  z-index: -1;
}
.active1 {
  top: 0;
  z-index: 10 !important;
}

.active2 {
  top: 100%;
  z-index: -1;
}

.miaoall{
  transition: all 3s;
}
</style>
