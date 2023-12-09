<template>
  <div>
    <h2
      class="flex items-center justify-center w-[100%] px-[4vw] py-[3vw] bg-[#fff] text-[#010101] text-[4.2vw] font-[600]"
    >
      MV排行榜
    </h2>
    <div>
      <van-tabs v-model="reat" animated @click="areaClick">
        <van-tab v-for="(items, index) in arr" :key="index" :title="items" >
          <ul class="w-[89vw] m-auto">
            <li
              v-for="(item, index) in mv?.data?.data"
              :key="index"
              class="mt-[3vw]"
              @click="toMv(item.id)"
            >
              <div>
                <img
                  :src="item.cover"
                  alt=""
                  class="w-[100%] h-[52vw] bg-black rounded-[3vw] mb-[2.7vw]"
                />
              </div>
              <p
                class="flex-1 line-clamp-1 text-[#000] text-[4vw] font-semibold h-[5vw]"
              >
                <span class="mr-[3vw]" :style="{ color: color16() }">{{
                  index + 1
                }}</span
                >{{ item.name }}
              </p>
              <p class="text-[2vw] mt-[3vw]">
                <span>-</span><span>{{ item.artistName }}</span>
              </p>
            </li>
          </ul>
        </van-tab>
      </van-tabs>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// -1:全部
// 7华语
// 96欧美
// 8:日本
// 16韩国
// 0:其他
import { mapState } from "vuex";
export default {
  data() {
    return {
      reat: 0,
      arr: ["内地", "港台", "欧美", "韩国", "日本"],
    };
  },
  computed: {
    ...mapState(["mv"]),
  },
  created() {
    console.log(this.reat);
    this.$store.dispatch("requestgetMv", { area: this.arr[this.reat] });
    console.log(this.mv, "mv");
   },
  methods: {
    color16() {
      //十六进制颜色随机
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      var color = "#" + r.toString(16) + g.toString(16) + b.toString(16);
      return color;
    },
    areaClick() {
      console.log(this.mv);
      console.log(this.reat);
      console.log(this.arr[this.reat]);
      this.$store.dispatch("requestgetMv", { area: this.arr[this.reat] });
    },
    toMv(id){
      console.log(id);
      this.$router.push({path:'/mvvideo',query:{id:id}},)
    }
  },
  
};
</script>
:

<style></style>
