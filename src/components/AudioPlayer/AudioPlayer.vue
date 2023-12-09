<template>
  <div class="fixed bottom-0">
    <div
      class="h-[12.5vw] w-[100vw] flex items-center justify-between dark:bg-black bg-white"
    >
      <div class="flex items-center justify-center">
        <div
          class="flex items-center w-[12vw] h-[12vw] ml-[5vw]"
          @click="signal"
        >
          <div
            class="w-[10vw] h-[10vw] absolute "
          >
            <div class="absolute w-[10vw] h-[10vw]">
              <img
                src="https://admirable-jalebi-ce44af.netlify.app/static/d7e4e3a244701ee85fecb5d4f6b5bd57.png"
                alt=""
                class="absolute top-0 w-[10vw] h-[10vw]"
              />
              <img
                src="https://admirable-jalebi-ce44af.netlify.app/static/disc_light.png"
                alt=""
                class="w-[10vw] h-[10vw] absolute top-0"
              />
            </div>
            <img
              :src="mixin_player.currentSong.al?.picUrl"
              alt=""
              class="w-[10vw] h-[10vw] absolute  rounded-[50%] border-[5px] border-[#000]"
              :class="[{ rotateAnimation1: mixin_player.playing }]"
            />
          </div>
        </div>
        <div class="w-[60vw] text-[3vw]">
          {{ mixin_player.currentSong?.name }}
        </div>
      </div>
      <div class="flex items-center">
        <div
          class="relative w-[12vw] h-[12vw] flex items-center justify-center"
          @click="commence"
        >
          <van-circle
            :speed="100"
            :value="mixin_player.progress * 100"
            size="25px"
          />
          <span class="text-[2vw] absolute top-[] text-black">
            <Icon
              :icon="
                mixin_player.playing
                  ? 'game-icons:pause-button'
                  : 'fluent:triangle-right-12-filled'
              "
          /></span>
        </div>
        <div class="mr-[4vw]" is-link @click="showPopup">
          <Icon icon="foundation:indent-more" class="text-[6vw]" />
        </div>
      </div>
    </div>
    <van-popup
      v-model="show"
      position="bottom"
      :style="{ height: '60%' }"
      get-container="body"
      class="rounded-t-[5vw]"
    >
      <div class="playmusic py-[6vw] w-[90vw] m-auto">
        <h1 class="text-[4vw] font-extrabold">
          当前播放
          <span class="text-[2vw] text-[#929293]">({{ music.length }}) </span>
        </h1>
        <div class="flex justify-between mt-[6.6vw] items-center">
          <div class="flex items-center">
            <Icon icon="ic:round-link" />
            <h1 class="ml-[1.5vw] text-[3.4vw] font-medium">列表循环</h1>
          </div>
          <div class="flex w-[30vw] justify-between">
            <Icon icon="material-symbols:download" />
            <Icon icon="fluent:collections-16-filled" />
            <Icon icon="bi:trash-fill" />
          </div>
        </div>
      </div>
      <div class="w-[90vw] m-auto">
        <div
          class="flex justify-between items-center h-[14vw]"
          v-for="(item, index) in music"
          :key="index"
          @click="playMusic(index)"
        >
          <div class="flex items-center">
            <img
              src="https://admirable-jalebi-ce44af.netlify.app/static/wave.gif"
              alt=""
              class="red-image w-[2vw] h-[2vw]"
              v-show="index == mixin_player.index"
            />
            <div
              class="text-[4.1vw] ml-[2vw] w-[60vw] line-clamp-1"
              :class="[{ fontcolor: index == mixin_player.index }]"
            >
              {{ item.name }}
              <span class="text-[3vw] text-[#BCBCBC]"
                >-{{ item.ar[0].name }}</span
              >
            </div>
          </div>
          <div class="flex items-center">
            <p class="text-[3vw] mr-[6vw] text-[#BCBCBC]">播放来源</p>
            <span @click="del(index)">
              <Icon icon="icon-park-outline:error" />
            </span>
          </div>
        </div>
      </div>
    </van-popup>
    <van-popup
      v-model="mixin_player.shows"
      position="bottom"
      :style="{ height: '100%' }"
      get-container="body"
      class=""
      v-if="mixin_player.shows"
    >
      <div
        class="element fixed z-[1] top-0 left-0 right-0 bottom-0"
        :style="[
          {
            backgroundImage:
              'url(' + mixin_player.currentSong?.al?.picUrl + ')',
          },
        ]"
      >
        <div class="fixed z-[2] bgColor top-0 left-0 right-0 bottom-0"></div>
      </div>
      <div class="fixed z-50 top-0">
        <div class="flex justify-between w-[90vw] m-auto items-center h-[15vw]">
          <div
            class="text-[#fff] text-[6vw]"
            @click="mixin_player.shows = !mixin_player.shows"
          >
            <Icon icon="ri:arrow-down-s-line" />
          </div>
          <div>
            <div class="text-[4vw] text-[#fff]">
              {{ mixin_player.currentSong?.name }}
            </div>
            <div>
              <span class="text-[2.8vw] text-[#BCBFBF] mt-[2vw] font-[400]">{{
                mixin_player.currentSong?.ar[0].name
              }}</span>
              <span
                class="px-[1.6vw] py-[0.8vw] text-[#D8DBDB] text-[2vw] rounded-[8px] bg-[#84868B] ml-[1vw]"
                >关注</span
              >
            </div>
          </div>
          <div class="text-[#fff] text-[6vw]">
            <Icon icon="ic:outline-share" />
          </div>
        </div>
        <div class="relative top-[2%] w-[100vw] h-[120vw]">
          <div
            class="absolute top-[10%] left-[50%] translate-x-[-50%] z-[10] rotated w-[30vw] h-[40vw]"
            style="transform: rotate(-10deg)"
          >
            <img
              src="https://admirable-jalebi-ce44af.netlify.app/static/needle-ab.png"
              alt=""
              class="h-[40vw] absolute top-[-3.2vw] left-[-3.2vw]"
              style="transition: all 3s; transform: rotate(-45deg)"
              :style="[
                { 'transform-origin': 'left top' },
                {
                  transform: mixin_player.playing
                    ? 'rotate(-10deg)'
                    : ' rotate(-45deg)',
                },
              ]"
            />
          </div>
          <div
            class="w-[80vw] h-[80vw] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-45%]"
          >
            <div class="absolute w-[80vw] h-[80vw]">
              <img
                src="https://admirable-jalebi-ce44af.netlify.app/static/d7e4e3a244701ee85fecb5d4f6b5bd57.png"
                alt=""
                class="absolute top-0 w-[80vw] h-[80vw]"
              />
              <img
                src="https://admirable-jalebi-ce44af.netlify.app/static/disc_light.png"
                alt=""
                class="w-[80vw] h-[80vw] absolute top-0"
              />
            </div>
            <img
              :src="mixin_player.currentSong.al?.picUrl"
              alt=""
              class="w-[50vw] h-[50vw] absolute top-[15vw] left-[15vw] rounded-[50%] border-[5px] border-[#000]"
              :class="[{ rotateAnimation1: mixin_player.playing }]"
            />
          </div>
        </div>
        <div class="flex flex-wrap content-end">
          <div class="w-[100vw] mt-[5vw] flex justify-evenly items-center">
            <div>
              <Icon
                icon="wpf:like"
                class="text-[6vw] text-[#fff] iconify iconify--ant-design"
              />
            </div>
            <Icon
              icon="grommet-icons:download-option"
              class="text-[5vw] text-[#fff] iconify iconify--streamline"
            />
            <Icon
              icon="mdi:user-group"
              class="text-[5vw] text-[#fff] iconify iconify--carbon"
            />
            <Icon
              icon="fluent:chat-12-filled"
              class="text-[6vw] text-[#fff] iconify iconify--uil"
            />
            <Icon
              icon="mingcute:more-2-fill"
              class="text-[6vw] text-[#fff] iconify iconify--ri"
            />
          </div>
          <div class="h-[8vw] w-[100vw] flex items-center px-[5vw] mt-[3vw]">
            <div class="text-[#fff] text-[1.6vw] scale-[0.8] opacity-80">
              00:00
            </div>
            <div
              class="flex-1 mx-[2.5vw] vue-slider vue-slider-ltr"
              style="padding: 7px 0px; width: auto; height: 4px"
            >
              <div class="vue-slider-rail">
                <div
                  class="vue-slider-process"
                  style="
                    height: 100%;
                    top: 0px;
                    left: 0%;
                    width: 0.0636773%;
                    transition-property: width, left;
                    transition-duration: 0s;
                  "
                ></div>
                <div
                  aria-valuetext="0.217458"
                  class="vue-slider-dot"
                  role="slider"
                  aria-valuenow="0.217458"
                  aria-valuemin="0"
                  aria-valuemax="341.5"
                  aria-orientation="horizontal"
                  tabindex="0"
                  style="
                    width: 14px;
                    height: 14px;
                    transform: translate(-50%, -50%);
                    top: 50%;
                    left: 0.0636773%;
                    transition: left 0s ease 0s;
                  "
                >
                  <div class="vue-slider-dot-handle"></div>
                </div>
              </div>
            </div>
            <div class="text-[#fff] text-[1.6vw] scale-[0.8] opacity-50">
              05:41
            </div>
          </div>
          <div class="h-[12.3vw] flex w-[100vw] items-center justify-evenly">
            <Icon
              icon="mynaui:repeat"
              class="text-[#fff] text-[8vw] iconify iconify--fad"
            />
            <Icon
              icon="mynaui:skip-back"
              class="text-[#fff] iconify iconify--fluent"
            />
            <div
              class="w-[12vw] h-[12vw] rounded-[50%] bg-[#fff] flex items-center justify-center"
            >
              <span @click="commence"
                ><Icon
                  :icon="
                    mixin_player.playing
                      ? 'game-icons:pause-button'
                      : 'fluent:triangle-right-12-filled'
                  "
              /></span>
            </div>
            <Icon
              icon="mynaui:skip-forward"
              class="text-[#fff] iconify iconify--fluent"
            />
            <span @click="showPopup">
              <Icon
                icon="icon-park-outline:more-app"
                class="text-[6vw] text-[#fff] iconify iconify--iconamoon"
              />
            </span>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "AudioPlayer",
  data() {
    return {
      currentRate: 0,
      show: false,
      out: true,
      tracks: [],
      // backgroundImages: "",
    };
  },
  computed: {
    playlist: {
      get() {
        return this.$store.state.playlist;
      },
    },
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    commence() {
      this.mixin_player.togell();
    },
    del(id) {
      this.music.splice(id, 1);
      this.tracks.splice(id, 1);
      console.log(this.music, this.tracks);
    },
    playMusic(index) {
      this.mixin_player.index = index;
      this.mixin_player.replaceTracks(this.tracks);
      this.out = false;
    },
    signal() {
      this.mixin_player.shows = true;
      console.log(this.mixin_player.shows);
    },
  },
  created() {
    this.music = this.playlist.data.playlist.tracks;
    {
      this.tracks = [];
      for (let i = 0; i < this.music.length; i++) {
        this.tracks.push(this.music[i].id);
      }
    }

    console.log(this.mixin_player.currentSong);
  },
  mounted() {},
  updated() {
    // console.log(this.mixin_player.index);
    this.music = this.playlist.data.playlist.tracks;
    {
      this.tracks = [];
      for (let i = 0; i < this.music.length; i++) {
        this.tracks.push(this.music[i].id);
      }
    }
  },
};
</script>

<style>
.fontcolor {
  color: red;
}
.red-image {
  filter: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27><filter id=%27colorize%27><feColorMatrix type=%27matrix%27 values=%271 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0%27/></filter></svg>#colorize");
}
.element {
  background-size: 100% 100%;
  filter: blur(24px);
}
.bgColor {
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 122;
}
.rotateAnimation1 {
  animation: rotate 10s linear infinite;
  animation-delay: 2s;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }

  25% {
    transform: rotate(90deg);
  }

  50% {
    transform: rotate(180deg);
  }

  75% {
    transform: rotate(270deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
