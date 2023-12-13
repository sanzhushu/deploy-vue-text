<template>
  <div class="bg-black h-[100vh]">
    <div
      class="flex justify-between items-center text-[6vw] p-[5vw] text-white"
    >
      <span @click="tuigo"><Icon icon="akar-icons:chevron-left" /></span>
      <div class="flex items-center">
        <span class="mr-[3vw]"><Icon icon="ic:twotone-fit-screen" /></span>
        <span><Icon icon="mingcute:more-2-fill" /></span>
      </div>
    </div>
    <div class="mt-[18vw]">
      <video id="player" ref="player">
        <source :src="url" type="video/mp4" />
      </video>
    </div>
    <div class="fixed bottom-20 text-white flex justify-between w-[100vw]">
      <div class="flex flex-col justify-end">
        <div class="w-[80vw] flex flex-col justify-end" style="">
          <div style="transition: all 5s">
            <div class="flex items-center h-[10vw] mb-[-2vw] z-50">
              <img
                :src="detail.cover"
                alt="111"
                class="w-[8vw] h-[8vw] rounded-[50%]"
              />
              <span class="mx-[2vw] text-[#ffffff] text-[4vw]">{{
                detail.artistName
              }}</span>
              <span
                class="bg-[#eb4d44] h-[5vw] w-[7vw] flex items-center justify-center rounded-[2vw]"
                >+</span
              >
            </div>
            <div>
              <div class="flex justify-between p-2">
                <h1 class="text-[3.2vw]">
                  <span
                    class="w-[7.3vw] mr-[2vw] leading-[5.2vw] text-center inline-block bg-[#333333] text-[#ACACAC]"
                    >MV</span
                  >{{ detail.name }}
                </h1>
                <div class="flex items-center">
                  <span @click="hide = !hide" v-show="!hide"
                    ><Icon icon="fe:arrow-down"
                  /></span>
                  <span @click="hide = !hide" v-show="hide">
                    <Icon icon="fe:arrow-up"
                  /></span>
                </div>
              </div>
            </div>
            <div
              class="p-4 text-[2.8vw]"
              v-show="hide"
              style="
                word-wrap: break-word;
                word-break: break-all;
                overflow: hidden;
                transition: all 5s;
              "
            >
              {{ detail.desc }}
            </div>
          </div>

          <div class="flex justify-between items-center w-[30vw]">
            <span><Icon icon="basil:music-solid" /></span
            ><van-notice-bar
              class="w-[30vw]"
              scrollable
              :text="detail.desc"
              background="black"
              color="#fff"
            /><span><Icon icon="icon-park-outline:like" /></span>
          </div>
        </div>
      </div>
      <ul class="w-[20vw] ml-5">
        <li class="flex items-end mb-[4vw]">
          <span class="text-[6vw]"
            ><Icon icon="icon-park-twotone:good-one" class="text-white" /></span
          ><span class="text-[2.5vw]">{{ detail.commentCount }}</span>
        </li>
        <li class="flex items-end mb-[4vw]">
          <span class="text-[6vw]"
            ><Icon icon="uiw:message" class="text-white" /></span
          ><span class="text-[2.5vw]">{{ comment.likedCount }}</span>
        </li>
        <li class="flex items-end mb-[4vw]">
          <span class="text-[6vw]"
            ><Icon icon="majesticons:share" class="text-white" /></span
          ><span class="text-[2.5vw]">{{ comment.shareCount }}</span>
        </li>
        <li class="mb-[4vw] flex flex-col">
          <span class="text-[6vw]"
            ><Icon icon="fluent:collections-24-regular" /></span
          ><span class="text-[3vw] mt-[2vw]">收藏</span>
        </li>
        <li class="flex items-end mb-[4vw]">
          <span>
            <img
              :src="detail.cover"
              alt="111"
              class="w-[8vw] h-[8vw] rounded-[50%]"
            />
          </span>
        </li>
      </ul>
    </div>

    <!-- <input type="range" class="w-[100vw] h-1 absolute bottom-16" /> -->
    <div class="absolute bottom-1 flex justify-between items-center w-[100vw]">
      <span
        class="flex items-center justify-between text-[#4d4d4d] px-[4vw] py-[4vw] text-[4vw]"
        >发条评论结识有趣的人</span
      >
      <span
        class="flex items-center justify-between text-[#4d4d4d] px-[4vw] py-[4vw] text-[4vw]"
        ><Icon icon="ic:twotone-fit-screen"
      /></span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getMvVideo, getComment, getMvDetail } from "@/service";
import Plyr from "plyr";
import "/node_modules/plyr/dist/plyr.css";
export default {
  data() {
    return {
      url: "",
      hide: false,
      activeNames: ["1"],
      comment: [],
      detail: [],
      shu: false,
      playervideo: null,
      suspend: false,
    };
  },
  computed: {
    ...mapState(["mvvideo"]),
  },
  async created() {
    //获取动态路由参数
    {
      const [error, res] = await getMvVideo({ id: this.$route.query.id });
      if (error) return;
      this.url = res.data.data.url;
    }
    {
      const [error, res] = await getComment({ mvid: this.$route.query.id });
      if (error) return;
      console.log(res, "1");
      this.comment = res.data;
    }
    {
      const [error, res] = await getMvDetail({ mvid: this.$route.query.id });
      if (error) return;
      console.log(res, "2");
      this.detail = res.data.data;
    }
    {
      this.playervideo = new Plyr(this.$refs.player, {
        controls: ["progress", "play-large"],
        muted: "false",
        autoplay: true,
        hideControls: false,
      });
    }
  },
  mounted() {},
  updated() {
    this.shu = true;
  },
  methods: {
    tuigo() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
.plyr__control--overlaid {
  --plyr-color-main: rgb(205, 206, 209);
}
.plyr__progress {
  --plyr-color-main: red !important;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 5px;
  width: 5px;

  background: #ffffff;
  border-radius: 50%; /*外观设置为圆形*/
  border: solid 0.125em rgba(205, 224, 230, 0.5); /*设置边框*/
  box-shadow: 0 0.125em 0.125em #3b4547; /*添加底部阴影*/
}

.hides {
  transition: all 3s;
  transform: translateY(0%);
}
.hides1 {
  transition: all 3s;
  transform: translateY(100%);
}
.hides2 {
  transition: all 3s;
  transform: translateY(150%);
}
.van-collapse-item__content {
  background-color: black;
  border-color: black !important;
  padding: 0 5vw;
}
.van-cell__title,
.van-cell,
.van-cell--clickable,
.van-collapse-item__title {
  background-color: black !important;
  border-color: black !important;
  color: aliceblue !important;
}

.van-cell {
  position: static !important;
}
.plyr__controls {
  position: fixed !important;
  bottom: 14vw !important;
}
</style>
