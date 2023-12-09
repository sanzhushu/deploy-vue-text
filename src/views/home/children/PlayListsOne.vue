<template>
  <div v-if="playlist">
    <div v-if="see">
      <div :style="{ backgroundColor: color }" class="relative">
        <van-sticky>
          <div>
            <div
              :style="{ backgroundColor: color }"
              class="h-[12vw] flex justify-between items-center"
            >
              <div class="flex items-center">
                <span @click="goBack" class="text-[5vw]"
                  ><Icon icon="iconamoon:arrow-left-1-bold"
                /></span>
                <div class="h-[12vw] overflow-hidden">
                  <div
                    :class="{ tran: big1}"
                    class="shang h-[12vw] miao text-[4vw] font-bold leading-[12vw]"
                  >
                    歌单
                  </div>
                  <div
                    :class="{ tran1: !big1 }"
                    class="miao shang1 left-3 h-[12vw] text-[4vw] w-[30vw] leading-[12vw]"
                  >
                    <van-notice-bar
                      style="font-size: 4vw"
                      color="#fff"
                      :scrollable="!bigs"
                      :background="color"
                      :text="playlist.data.playlist.name"
                    />
                  </div>
                </div>
              </div>
              <div class="flex items-center">
                <div
                  v-show="proves"
                  class="px-[2vw] mr-[2vw] flex items-center justify-center h-[7vw] rounded-[20px] bg-[#dedede] bg-opacity-10 text-[#f8fefe] text-[3vw] ml-[5vw] font-semibold"
                >
                  <Icon icon="ri:add-box-fill" /><span
                    class="text-[2.4vw] w-[7vw]"
                    >收藏</span
                  >
                </div>
                <span class="text-[5vw] mr-[3vw]"
                  ><Icon icon="tabler:search" /></span
                ><span class="text-[5vw] mr-[3vw]"
                  ><Icon icon="mingcute:more-2-fill"
                /></span>
              </div>
            </div>
          </div>
        </van-sticky>

        <div class="pb-[12vw]">
          <div class="flex justify-between w-[98vw] h-[5vw] items-center pt-[3vw]">
            <span v-show="prove"></span>
            <span v-show="!prove" class="ml-[3vw]">
              喜欢这个歌单的用户也听了</span
            >
            <span v-show="!prove" @click="indication"
              ><Icon
                class="text-[5vw] text-white"
                icon="iconamoon:arrow-up-6-circle-duotone"
               
            /></span>
            <span
              v-show="prove"
              class="text-[5vw]  text-white"
              @click="indication"
              ><Icon icon="iconamoon:arrow-down-6-circle-duotone" 
            /></span>
          </div>
          <div v-show="prove">
            <div class="flex w-[98vw] m-auto mt-[-3vw]">
              <img
                :src="playlist.data.playlist.coverImgUrl"
                alt=""
                class="shade w-[26vw] h-[26vw] ml-[3vw]"
              />
              <div class="ml-3 w-[60vw]">
                <div class="font-bold text-[3.6vw] w-[60vw] overflow-hidden">
                  {{ playlist.data.playlist.name }}
                </div>
                <div class="flex items-center">
                  <img
                    :src="playlist.data.playlist.creator.avatarUrl"
                    alt=""
                    class="w-[6vw] h-[6vw] rounded-full ml-2"
                  />
                  <span class="ml-2 text-[2.73vw] opacity-50">{{
                    playlist.data.playlist.creator.nickname
                  }}</span>
                  <span
                    class="text-[#efecec] bg-slate-400 text-[2.2vw] flex justify-center items-center h-[5vw] ml-2 rounded-[2.5vw] w-[12vw] opacity-60"
                    ><Icon icon="ri:add-fill" />
                    <p>关注</p>
                  </span>
                </div>
                <div
                  v-if="playlist.data.playlist.tags.length > 0"
                  class="flex mt-2 text-[#fff]"
                >
                  <div
                    v-for="(item, index) in playlist.data.playlist.tags"
                    :key="index"
                    class="flex items-center justify-center pl-[2.5vw] pr-[1.5vw] py-[0.7vw] bg-opacity-20 bg-[#fff] text-[#fff] rounded-[4px] mr-[1.4vw]"
                  >
                    <span class="text-[2vw] ml-[0.5vw]">{{ item }}</span
                    ><Icon
                      class="text-[3vw] w-[3vw]"
                      icon="ri:arrow-drop-right-line"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="w-[90vw] m-auto mt-2 flex justify-between items-center">
              <p class="text-[2.8vw] text-[#4e4c4c] spills">
                {{ playlist.data.playlist?.description }}
              </p>
              <span class="text-[5vw]">
                <Icon icon="ri:arrow-drop-right-line" />
              </span>
            </div>
          </div>
          <div v-show="!prove">
            <div class="w-[98vw] pt-3">
              <Level>
                <div class="w-[210vw] flex flex-nowrap justify-between">
                  <div
                    v-for="(iten1, index) in relatedplaylist.data.playlists"
                    :key="index"
                    class="w-[31vw]"
                  >
                    <div class="relative w-[31vw] shade mt-2"  @click="song(iten1.id)" >
                      <img
                        :src="iten1.coverImgUrl"
                        alt=""
                        class="rounded-[2vw] h-[30vw] w-[30vw]"
                      />
                      <p
                        class="absolute top-1 right-1 flex justify-center items-center rounded-[5vw] font-bold text-white"
                      >
                        <Icon icon="iconamoon:arrow-right-2-fill" />
                        {{ formatNumber(iten1.id) }}
                      </p>
                    </div>
                    <p class="text-[3vw]"  @click="song(iten1.id)">{{ iten1.name }}</p>
                  </div>
                </div>
              </Level>
            </div>
          </div>
          <div class="flex justify-evenly mt-2 text-white">
            <div
              class="flex items-center justify-center bg-slate-600 bg-opacity-20 h-[10vw] rounded-[5vw] w-[29vw]"
            >
              <span class="text-[5vw] mr-[1.8vw] iconify iconify--ant-design"
                ><Icon icon="mdi:share" /></span
              ><span class="text-[3vw] text-white">{{
                playlist.data.playlist.shareCount
              }}</span>
            </div>
            <div
              class="flex items-center justify-center bg-slate-600 bg-opacity-20 h-[10vw] rounded-[5vw] w-[29vw]"
            >
              <span class="text-[5vw] mr-[1.8vw] iconify iconify--ant-design"
                ><Icon icon="basil:chat-solid" /></span
              ><span class="text-[3vw] text-[#fff]">{{
                playlist.data.playlist.commentCount
              }}</span>
            </div>
            <div
              class="flex items-center justify-center bg-red-600 h-[10vw] rounded-[5vw] w-[29vw]"
            >
              <span class="text-[5vw] mr-[1.8vw] iconify iconify--ant-design"
                ><Icon icon="ri:add-box-fill" /></span
              ><span class="text-[3vw]">{{
                playlist.data.playlist.subscribedCount
              }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-slate-50 relative top-[-5vw] rounded-t-[5vw]">
        <div
          class="bg-slate-50 text-[5vw] h-[12vw] rounded-t-[5vw] w-[100vw] flex justify-between items-center"
          ref="din"
        >
          <div class="flex pl-2 items-center" >
            <span class="text-[red] h-[6vw] w-[6vw]"
              ><Icon icon="gridicons:play"
            /></span>
            <span class="text-[4vw] font-bold" @click="full">播放全部</span>
            <span class="text-[3vw]"
              >({{ playlist.data.playlist?.tracks.length }})</span
            >
          </div>
          <div class="flex pr-2">
            <span class="mr-[3vw]"
              ><Icon icon="line-md:downloading-loop"
            /></span>
            <span class="mr-[3vw]"><Icon icon="prime:align-left" /></span>
          </div>
        </div>
        <div
          v-for="(item, index) in playlist.data.playlist.tracks"
          class="flex justify-between w-[100vw] overflow-hidden h-[16vw]"
          :key="index"
          @click="repeatedly(index)"
        >
          <div class="flex justify-start items-center">
            <span class="w-9 text-[#7f838f] text-center font-bold">{{
              index + 1
            }}</span>
            <div>
              <p class="text-[4vw]w-[60vw]">{{ item.name }}</p>
              <p class="text-[#7f838f] text-[3vw]">
                <span>{{ item.ar[0]?.name }}-</span
                ><span>{{ item.al?.name }}</span>
              </p>
            </div>
          </div>
          <div class="flex items-center pr-3">
            <span class="mr-4 text-[4vw]"
              ><Icon icon="bi:play-btn-fill"
            /></span>
            <span class="text-[4vw]"><Icon icon="mingcute:more-2-fill" /></span>
          </div>
        </div>
      </div>
    </div>
    <AudioPlayer v-if="see" ></AudioPlayer>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "PlayListsOne",
  data() {
    return {
      prove: true,
      big: true,
      big1:true,
      color: "#F1F1F1",
      proves: false,
      bigs: true,
      song1:'',
      music:[],
      tracks: [],
      see:false,
    };
  },
  computed: {
    ...mapState(["playlist", "relatedplaylist"]),
  },
  created() {
    this.color = this.color16();
    this.$store.dispatch("requestgetAllPlaylist");
    this.$store.dispatch("requestgetRelatedPlaylist", this.PlaylistID);
    console.log(this.mixin_player.replaceTracks);
    this.music = this.playlist.data.playlist.tracks;
    {
      this.tracks = [];
      for (let i = 0; i < this.music.length; i++) {
        this.tracks.push(this.music[i].id);
      }
    }
    this.mixin_player.replaceTracks(this.tracks);
    
  },
  mounted() {
    console.log(this.playlist);
    // console.log(this.relatedplaylist);
    window.addEventListener("scroll", this.handleScrollOne);
    window.addEventListener("scroll", this.handleScroll);
    this.see = true;
  },
  destroyed() {
    window.addEventListener("scroll", this.handleScrollOne);
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    indication() {
      this.prove = !this.prove;
    },
    formatNumber(num) {
      num = Number(num);
      if (num == 0 || (num > 10000 && num < 100000000)) {
        return (num / 10000).toFixed(0) + "万";
      } else {
        return (num / 100000000).toFixed(0) + "亿";
      }
    },
    handleScroll() {
      if (window.pageYOffset > this.$refs.din.offsetTop + 240) {
        this.$refs.din.style.position = "fixed";
        this.$refs.din.style.top = "12vw";
        this.big = false;
        this.proves = true;
      } else {
        this.$refs.din.style.position = "static";
        this.big = true;
        this.proves = false;
      }
    },
    handleScrollOne() {
      // console.log(window.pageYOffset,"2",this.$refs.din.offsetTop);
      // console.log(window.pageYOffset, "1");
      if (window.pageYOffset > 10) {
      
        this.big1 = false;
        let that = this;
        setTimeout(() => {
          that.bigs = false;
        }, 6000);
      } else {
        this.bigs = true;
        this.big1 = true;
      }
    },
    goBack() {
      console.log(111);
      this.$router.go(-1);
    },
    color16() {
      //十六进制颜色随机
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      var color = "#" + r.toString(16) + g.toString(16) + b.toString(16);
      return color;
    },
    song(a){
      console.log(this.song1);
      this.prove=true;
      this.$store.dispatch("requestgetAllPlaylist",{id:a});
      this.$store.dispatch("requestgetRelatedPlaylist",{id:a});
    },
    repeatedly(index){
      // this.mixin_player.index=index
      this.mixin_player.replaceTracks(this.tracks,this.tracks[index])
      this.mixin_player.shows = !this.mixin_player.shows
      this.see=true;
    },
    full(){
      this.mixin_player.replaceTracks(this.tracks);
      this.see=true;
    }
  },
  updated(){
    this.music = this.playlist.data.playlist.tracks;
    {
      this.tracks = [];
      for (let i = 0; i < this.music.length; i++) {
        this.tracks.push(this.music[i].id);
      }
    }
  }
};
</script>

<style scoped>
.shade {
  border-radius: 2vw;
  box-shadow: 1px -7px 2px 1px rgba(0, 0, 0, 0.2);
}
.spills {
  width: 80% !important;
  overflow: hidden; /*超出部分隐藏*/
  white-space: nowrap; /*禁止换行*/
  text-overflow: ellipsis; /*省略号*/
}
.miao {
  transition: all 3s;
}
.shang1 {
  transform: translateY(100%);
}
.shang {
  transform: translateY(-100%);
}
.tran {
  transform: translateY(0%);
}
.van-notice-bar__content {
  font-size: 4vw !important;
}
.tran1 {
  transform: translateY(0%);
  margin-top: -10vw;
}
</style>
