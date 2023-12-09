<template>
  <div class="bg-[#F1F1F1] dark:bg-[#0a0a0a] pb-[14vw]" v-if="user?.data?.profile">
    <div
      :style="{ backgroundImage: `url(${bg})`, backgroundSize: 100 + '%' }"
      class="pb-10 h-[80vw]"
    >
      <!-- 头部 -->
      <div class="flex justify-between items-center text-[#e4e0e0] h-[15vw]">
        <div class="text-[7vw] pl-[4vw]">
          <Icon icon="jam:align-justify" class="text-[7vw]" />
        </div>
        <!-- <div
        class="text-[3vw] send text-center flex justify-center items-center mt-2"
      >
        <Icon icon="ri:add-line" /><span>添加状态</span>
        <div class="arrow"></div>
      </div> -->
        <div class="text-[7vw] pr-[5vw]"><Icon icon="tabler:search" /></div>
      </div>
    </div>
    <div
      class="dark:bg-[#0a0a0a] dark:from-[#2D2C2C] dark:to-[#161616] bg-[#f1f1f1] m-auto w-[90vw] rounded-t-[5vw]"
    >
      <!-- 内容 -->
      <div
        class="dark:bg-[#2c2b2b] dark:from-[#2D2C2C] dark:to-[#000000] bg-gradient-to-b from-[#f1f1f1] to-[#f1f1f1] bg-white m-auto w-[90vw] rounded-[5vw] mt-[-5vw] pb-6"
      >
        <div class="w-[18vw] relative top-[-8vw] m-auto">
          <img
            :src="user?.data?.profile?.avatarUrl"
            alt=""
            class="rounded-[50%]"
          />
        </div>
        <div class="flex justify-center items-center mt-[-6vw]">
          <span class="text-[4vw] dark:text-white text-black font-bold">{{
            user?.data?.profile?.nickname
          }}</span>
          <span
            class="ml-[2vw] bg-red-300 flex items-center h-[5vw] rounded-[2.5vw] pl-[1vw] pr-[1vw] text-[2vw]"
            ><Icon icon="tabler:vip" class="text-[2vw]" /><span
              class="text-[2vw]"
              >续费</span
            ><Icon class="text-[2vw]" icon="ri:arrow-drop-right-line"
          /></span>
        </div>
        <div class="flex justify-center text-[3vw] text-[#9498a2] pt-2">
          <span class="mr-2">{{ user?.data?.profile?.newFollows }}关注</span>
          <span class="mr-2">{{ user?.data?.profile?.followeds }}粉丝</span>
          <span class="mr-2">Lv.{{ level?.data?.data?.level }}</span>
          <span class="mr-2"
            >时长{{ level?.data?.data?.progress.toFixed(2) }}</span
          >
        </div>
        <div
          class="wt-[3vw] text-[3vw] text-[#9396A2] mt-[2vw] flex justify-center"
        >
          <span
            class="bg-[#fff] w-[5vw] dark:bg-[#282828] dark:border-[#282828] dark:text-white text-center leading-[6vw] text-[#1b1b1b] text-[2vw] border-[1px] border-[#CCCCCD] rounded-[8px] ml-[1.5vw]"
            >IP:</span
          >
          <span
            class="bg-[#fff] pl-[1.5vw] dark:bg-[#282828] dark:border-[#282828] pr-[1.9vw] dark:text-white leading-[6vw] text-[#1b1b1b] text-[2vw] border-[1px] border-[#CCCCCD] rounded-[8px] ml-[1.5vw]"
            >00后 魔蝎座</span
          >
          <span
            class="bg-[#fff] pl-[1.5vw] dark:bg-[#282828] dark:border-[#282828] pr-[1.9vw] dark:text-white leading-[6vw] text-[#1b1b1b] text-[2vw] border-[1px] border-[#CCCCCD] rounded-[8px] ml-[1.5vw]"
            >村岭2年</span
          >
        </div>
        <div class="flex justify-center items-center mt-[3vw] mb-[3vw]">
          <p
            class="dark:bg-[#282828] dark:border-[#282828] dark:text-white px-[3vw] py-[1vw] text-[#41495E] text-[2.9vw] font-[800] flex items-center justify-center border-[1px] border-[#CCCCCD] rounded-[200px] ml-[1.5vw]"
          >
            编辑资料
          </p>
          <p class="text-[8vw] ml-[3vw] dark:text-white">
            <Icon icon="mynaui:chevron-down-circle" />
          </p>
        </div>
      </div>
      <div>
        <ul class="w-[90vw] flex justify-evenly">
          <li>
            <div class="dark:text-white text-black text-[3vw]">主页</div>
            <p class="bg-red-500 h-1 rounded-[1vw] w-[4vw] m-auto mt-[2vw]"></p>
          </li>
          <li>
            <div class="dark:text-white text-black text-[3vw]">动态</div>
            <p></p>
          </li>
          <li>
            <div class="dark:text-white text-black text-[3vw]">播客</div>
            <p></p>
          </li>
        </ul>
      </div>
      <div class="m-auto w-[90vw] dark:from-[#2D2C2C] dark:to-[#161616]">
        <div class="m-auto w-[90vw] text-white bg-black bg-opacity-0">
          <div
            class="w-[90vw] m-auto dark:bg-[#2C2C2C] bg-slate-50 rounded-lg mt-4"
          >
            <h2 class="text-black dark:text-white text-[4vw] pl-[3vw] h-[10vw] leading-[10vw]">
              音乐品味
            </h2>
            <ul class="flex justify-evenly items-center pb-4">
              <li
                class="relative w-[27vw] h-[28vw] dark:from-[#504f4f] dark:to-[#0e0d0d] from-[#FFE3D8] to-[#e0dede] rounded-[15px] bg-gradient-to-b"
              >
                <div>
                  <h3
                    class="dark:text-[#AFAFAF] text-[2.6vw] text-[#837C87] h-[7.4vw] leading-[7.4vw] pl-[1.7vw]"
                  >
                    我的喜欢
                  </h3>
                  <p
                    class="dark:text-[#232223] text-[3.5vw] text-[#232223] pl-[1.7vw] dark:text-[#DFDFDF]"
                  >
                    {{ music.data.playlist[0].trackCount }}首
                  </p>
                </div>
                <div
                  class="dark:text-[#7D7D7D] absolute bottom-[2.5vw] left-[1.7vw] text-[#B1B1AE] text-[2.4vw] flex items-center"
                >
                  <Icon icon="ic:round-favorite" /><span>喜欢的音乐</span>
                </div>
              </li>
              <li
                class="relative w-[27vw] h-[28vw] dark:from-[#504f4f] dark:to-[#0e0d0d] from-[#FAEED5] to-[#e0dede] rounded-[15px] bg-gradient-to-b"
              >
                <div>
                  <h3
                    class="dark:text-[#AFAFAF] text-[2.6vw] text-[#837C87] h-[7.4vw] leading-[7.4vw] pl-[1.7vw]"
                  >
                    累计听歌
                  </h3>
                  <p
                    class="dark:text-[#DFDFDF] text-[3.5vw] text-[#232223] pl-[1.7vw]"
                  >
                    {{ level.data.data.nowPlayCount }}首
                  </p>
                </div>
                <div
                  class="dark:text-[#7D7D7D] absolute bottom-[2.5vw] left-[1.7vw] text-[#B1B1AE] text-[2.4vw] flex items-center"
                >
                  <Icon icon="ic:round-favorite" /><span>喜欢的音乐</span>
                </div>
              </li>
              <li
                class="relative w-[27vw] h-[28vw] dark:from-[#504f4f] dark:to-[#0e0d0d] from-[#DFF1FA] to-[#e0dede] rounded-[15px] bg-gradient-to-b"
              >
                <div>
                  <h3
                    class="dark:text-[#AFAFAF] text-[2.6vw] text-[#837C87] h-[7.4vw] leading-[7.4vw] pl-[1.7vw]"
                  >
                    本周关键词
                  </h3>
                  <p
                    class="dark:text-[#DFDFDF] text-[3.5vw] text-[#232223] pl-[1.7vw]"
                  >
                    属于你的音乐档案
                  </p>
                </div>
                <div
                  class="dark:text-[#7D7D7D] absolute bottom-[2.5vw] left-[1.7vw] text-[#B1B1AE] text-[2.4vw] flex items-center"
                >
                  <Icon icon="ic:round-favorite" /><span>黑胶时光机</span>
                </div>
              </li>
            </ul>
          </div>
          <div
            class="w-[90vw] m-auto dark:bg-[#2C2C2C] bg-slate-50 rounded-lg mt-4"
          >
            <h2 class="text-black dark:text-white text-[4vw] pl-[3vw] h-[10vw] leading-[10vw] font-bold">
              <span>创建的歌单</span
              ><span
                class="dark:text-[#A1A1A1] text-[#9599a3] text-[2.7vw] ml-[1.6vw] font-[200]"
                >({{ num }}个)</span
              >
            </h2>
            <ul class="pb-4">
              <li
                class="w-[80vw] m-auto mt-2 bg-green flex"
                v-for="(item, index) in music.data.playlist"
                :key="index"
              >
                <div
                  v-if="(index > 0) & !item.subscribed"
                  class="w-[80vw] bg-green flex"
                >
                  <img
                    :src="item.coverImgUrl"
                    alt=""
                    class="w-[12vw] h-[12vw] rounded-[10px] bg-black z-[2] relative"
                  />
                  <div class="ml-[2vw]">
                    <h4
                      class="dark:text-[#DFDFDF]  w-[100%] text-[3.8vw] text-[#3f4659] line-clamp-1"
                    >
                      {{ item.name }}
                    </h4>
                    <p
                      class="dark:text-[#B7B7B7] w-[100%] text-[2.8vw] text-[#aaadb5] line-clamp-1"
                    >
                      {{ item.trackCount }}首，播放0次
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div
            class="w-[90vw] m-auto dark:bg-[#2C2C2C] bg-slate-50 rounded-lg mt-4"
          >
            <h2 class="text-black dark:text-white text-[4vw] pl-[3vw] h-[10vw] leading-[10vw] font-bold">
              <span>收藏的歌单</span
              ><span
                class="dark:text-[#A1A1A1] text-[#9599a3] text-[2.7vw] ml-[1.6vw] font-[200]"
                >({{ numone }}个)</span
              >
            </h2>
            <ul class="pb-4">
              <li
                class="w-[80vw] m-auto mt-2 bg-green flex"
                v-for="(item, index) in music?.data?.playlist"
                :key="index"
              >
                <div
                  v-if="(index > 0) & item?.subscribed"
                  class="w-[80vw] bg-green flex"
                >
                  <img
                    :src="item.coverImgUrl"
                    alt=""
                    class="w-[12vw] h-[12vw] rounded-[10px] bg-black z-[2] relative"
                  />
                  <div class="ml-[2vw]">
                    <h4
                      class="dark:text-[#DFDFDF]  w-[100%] text-[3.8vw] text-[#3f4659] line-clamp-1"
                    >
                      {{ item?.name }}
                    </h4>
                    <p
                      class="dark:text-[#B7B7B7] w-[100%] text-[2.8vw] text-[#aaadb5] line-clamp-1"
                    >
                      {{ item?.trackCount }}首，播放0次
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div
            class="w-[90vw] m-auto dark:bg-[#2C2C2C] bg-slate-50 rounded-lg mt-4"
          >
            <div class="flex justify-between items-center">
              <h2 class="text-black dark:text-white text-[4vw] pl-[3vw] h-[12vw] leading-[12vw]">
                基本信息
              </h2>
              <div
                class="mr-[2vw] dark:text-[#fff] dark:border-[#474747] text-[2.6vw] border-[1px] border-[#E7E7E7] rounded-[200px] px-[2.7vw] py-[1.5vw] text-[#333]"
              >
                领取村民证
              </div>
            </div>
            <ul class="w-[90vw] m-auto">
              <li
                class="dark:text-[#ADADAD] text-[3vw] h-[6vw] text-[#666] flex flex-wrap mx-[3.8vw]"
              >
                <span>村岭：</span><span class="dark:text-[#fff] ">两年</span>
              </li>
              <li
                class="dark:text-[#ADADAD] text-[3vw] h-[6vw] text-[#666] flex flex-wrap mx-[3.8vw]"
              >
                <span>性别：</span><span class="dark:text-[#fff]">男</span>
              </li>
              <li
                class="dark:text-[#ADADAD] text-[3vw] h-[6vw] text-[#666] flex flex-wrap mx-[3.8vw]"
              >
                <span>年龄：</span><span class="dark:text-[#fff]">00后 魔蝎座</span>
              </li>
            </ul>
            <div
              class="dark:border-[#434343] border-t-[1px] border-[#EAEAEA] text-[3vw] text-[#999] flex items-center justify-center h-[9vw]"
            >
              <p class="flex items-center">
                <span>查看全部</span
                ><Icon
                  class="text-[5vw] font-[800]"
                  icon="ri:arrow-drop-right-line"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      bg: "",
    };
  },
  computed: {
    ...mapState(["user", "level", "music"]),
    num() {
      return this.music.data.playlist.filter(
        (item, index) => (index > 0) & !item.subscribed
      ).length;
    },
    numone() {
      return this.music.data.playlist.filter(
        (item, index) => (index > 0) & item.subscribed
      ).length;
    },
  },
  created() {
    this.bg = this.user.data?.profile?.backgroundUrl;
    this.$store.dispatch("requestgetMy");
    this.$store.dispatch("reqeastgetUserLevel");
    this.$store.dispatch("requestgetLike");
    // console.log(this.level);
  },
};
</script>

<style scoped>
.send {
  position: relative;
  width: 24vw;
  height: 7vw;
  background: #bfbcb3;
  border-radius: 6vw; /* 圆角 */
  margin-top: 8px;
}

.send .arrow {
  position: absolute;
  top: 7vw;
  left: 10vw;
  width: 0;
  height: 0;
  border-right: 8px solid transparent;
  border-left: 8px solid transparent;
  border-top: 8px solid red;
}
</style>
