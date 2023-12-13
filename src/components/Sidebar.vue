<template>
  <div class="dark:bg-black bg-[#F1F1F1]">
    <van-popup
      v-model="show"
      position="left"
      :style="{ height: '100%', width: '90%' }"
    >
      <Level
        :config="{ scrollY: true, click: true, bindToWrapper: true }"
        :withe="'w-[100%] h-[100vh]'"
      >
        <div class="dark:bg-black bg-[#F1F1F1] pb-3 h-[430vw]">
          <div
            class="h-[16vw] flex justify-between items-center dark:bg-black dark:text-[#fff]"
          >
            <div v-if="auth?.data?.account?.anonimousUser">
              <span @click="dengru">立即登入</span>
            </div>
            <div v-else class="flex items-center" @click="gomy">
              <img
                :src="auth?.data?.profile?.avatarUrl"
                alt=""
                class="w-[7vw] h-[7vw] rounded-[50%] ml-[2vw] mr-[2vw]"
              /><span>{{ auth?.data?.profile?.nickname }}</span
              ><span>
                <Icon icon="ri:arrow-right-s-line" />
              </span>
            </div>
            <div>
              <Icon
                icon="lucide:scan-line"
                class="text-[#8189A1] text-[6vw] mr-[3vw]"
              ></Icon>
            </div>
          </div>
          <div
            class="mx-auto w-[76vw] h-[27.66vw] bg-gradient-to-r from-[#3b3b3b] to-[#5f5050] px-[3.96vw] text-[#9e8f8f] rounded-[20px]"
          >
            <div class="flex justify-between items-center">
              <div class="mt-[2vw] mb-[5vw]">
                <h1 class="text-[4vw] text-[#fff]">开通黑胶vip</h1>
                <p class="text-[2.73vw]">点击恢复超212项专属特权</p>
              </div>
              <div
                class="w-[15.78vw] h-[6.56vw] leading-[6vw] text-center rounded-[100px] border-[1px] border-[#9e8f8f] text-[2.5vw] mt-[3vw]"
              >
                会员中心
              </div>
            </div>
            <div
              class="flex justify-between items-center h-[10vw] border-t-[1px] border-[#494443]"
            >
              <span class="text-[2.5vw]">受邀专享，黑胶VIP低至0.27元/天!</span>
              <div class="scale-50 w-[8vw] mr-[3vw]">
                <p
                  class="w-[22vw] rounded-[10px] bg-[#e54701] text-[#fff] pl-[3vw] text-[8vw] scale-50"
                >
                  受邀专享
                </p>
              </div>
            </div>
          </div>

          <div
            class="mx-auto w-[76vw] mt-[5vw] bg-white dark:bg-[#2C2C2C] dark:text-white rounded-[3vw]"
          >
            <ul>
              <li class="flex justify-between items-center h-[12vw] px-[3.6vw]">
                <div class="flex items-center justify-start">
                  <span
                    ><Icon
                      icon="fluent:mail-inbox-20-regular"
                      class="dark:text-white text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--solar" /></span
                  ><span
                    class="dark:text-white text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                    >我的消息</span
                  >
                </div>
                <div>
                  <Icon
                    icon="ri:arrow-right-s-line"
                    class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                    style="color: rgb(181, 181, 181)"
                  />
                </div>
              </li>
              <li class="flex justify-between items-center h-[12vw] px-[3.6vw]">
                <div class="flex items-center justify-start">
                  <span
                    ><Icon
                      icon="simple-icons:shell"
                      class="dark:text-white text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--solar"
                  /></span>
                  <span
                    class="dark:text-white text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                    >云贝中心</span
                  >
                </div>
                <div class="flex items-center">
                  <span class="text-[color:#a7a7a7] text-[3vw]">签到</span
                  ><Icon
                    icon="ri:arrow-right-s-line"
                    class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                    style="color: rgb(181, 181, 181)"
                  />
                </div>
              </li>
              <li class="flex justify-between items-center h-[12vw] px-[3.6vw]">
                <div class="flex items-center justify-start">
                  <span
                    ><Icon
                      icon="tabler:bulb-filled"
                      class="dark:text-white text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--solar"
                  /></span>
                  <span
                    class="dark:text-white text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                    >创作者中心</span
                  >
                </div>
                <div>
                  <Icon
                    icon="ri:arrow-right-s-line"
                    class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                    style="color: rgb(181, 181, 181)"
                  />
                </div>
              </li>
            </ul>
          </div>

          <div
            class="mx-auto w-[76vw] mt-[5vw] bg-white dark:bg-[#2C2C2C] rounded-[3vw]"
          >
            <div
              class="dark:border-b-[#333] text-[#969696] text-[3vw] px-[4vw] py-[3vw] border-b-[0.35vw] border-b-[#E8e8e8]"
            >
              音乐服务
            </div>
            <ul>
              <li class="flex justify-between items-center h-[12vw] px-[3.6vw]">
                <div class="flex items-center justify-start">
                  <span
                    ><Icon
                      icon="icon-park-outline:hexagonal"
                      class="dark:text-white text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--solar"
                  /></span>
                  <span
                    class="dark:text-white text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                    >趣测</span
                  >
                </div>
                <div class="flex items-center">
                  <span class="text-[color:#a7a7a7] text-[3vw]"
                    >点击查看今日运势</span
                  ><Icon
                    icon="ri:arrow-right-s-line"
                    class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                    style="color: rgb(181, 181, 181)"
                  />
                </div>
              </li>
              <li class="flex justify-between items-center h-[12vw] px-[3.6vw]">
                <div class="flex items-center justify-start">
                  <span
                    ><Icon
                      icon="twemoji:admission-tickets"
                      class="dark:text-white text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--solar" /></span
                  ><span
                    class="dark:text-white text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                    >云村有票</span
                  >
                </div>
                <div>
                  <Icon
                    icon="ri:arrow-right-s-line"
                    class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                    style="color: rgb(181, 181, 181)"
                  />
                </div>
              </li>
              <li class="flex justify-between items-center h-[12vw] px-[3.6vw]">
                <div class="flex items-center justify-start">
                  <span
                    ><Icon
                      icon="healthicons:question-negative"
                      class="dark:text-white text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--solar" /></span
                  ><span
                    class="dark:text-white text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                    >多多西西口袋</span
                  >
                </div>
                <div>
                  <Icon
                    icon="ri:arrow-right-s-line"
                    class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                    style="color: rgb(181, 181, 181)"
                  />
                </div>
              </li>
              <li class="flex justify-between items-center h-[12vw] px-[3.6vw]">
                <div class="flex items-center justify-start">
                  <span
                    ><Icon
                      icon="ri:shopping-bag-line"
                      class="dark:text-white text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--solar"
                  /></span>
                  <span
                    class="dark:text-white text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                    >商城</span
                  >
                </div>
                <div>
                  <Icon
                    icon="ri:arrow-right-s-line"
                    class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                    style="color: rgb(181, 181, 181)"
                  />
                </div>
              </li>
              <li class="flex justify-between items-center h-[12vw] px-[3.6vw]">
                <div class="flex items-center justify-start">
                  <span
                    ><Icon
                      icon="mingcute:heartbeat-fill"
                      class="dark:text-white text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--solar"
                  /></span>
                  <span
                    class="dark:text-white text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                    >Beat专区</span
                  >
                </div>
                <div class="flex items-center">
                  <span class="text-[color:#a7a7a7] text-[3vw]"
                    >顶尖制作邀你创造</span
                  ><Icon
                    icon="ri:arrow-right-s-line"
                    class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                    style="color: rgb(181, 181, 181)"
                  />
                </div>
              </li>
              <li class="flex justify-between items-center h-[12vw] px-[3.6vw]">
                <div class="flex items-center justify-start">
                  <span
                    ><Icon
                      icon="gridicons:bell"
                      class="dark:text-white text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--solar" /></span
                  ><span
                    class="dark:text-white text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                    >口袋铃声</span
                  >
                </div>
                <div>
                  <Icon
                    icon="ri:arrow-right-s-line"
                    class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                    style="color: rgb(181, 181, 181)"
                  />
                </div>
              </li>
              <li class="flex justify-between items-center h-[12vw] px-[3.6vw]">
                <div class="flex items-center justify-start">
                  <span
                    ><Icon
                      icon="icon-park-outline:game-three"
                      class="dark:text-white text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--solar"
                  /></span>
                  <span
                    class="dark:text-white text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                    >游戏专区</span
                  >
                </div>
                <div class="flex items-center">
                  <span class="text-[color:#a7a7a7] text-[3vw]"
                    >音乐浇灌治愈花园</span
                  ><Icon
                    icon="ri:arrow-right-s-line"
                    class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                    style="color: rgb(181, 181, 181)"
                  />
                </div>
              </li>
            </ul>
          </div>

          <div
            class="mx-auto w-[76vw] mt-[5vw] bg-white dark:bg-[#2C2C2C] rounded-[3vw]"
          >
            <div
              class="dark:border-b-[#333] text-[#969696] text-[3vw] px-[4vw] py-[3vw] border-b-[0.35vw] border-b-[#E8e8e8]"
            >
              其他
            </div>
            <ul>
              <li class="flex justify-between items-center h-[12vw] px-[3.6vw]">
                <div class="flex items-center justify-start">
                  <span
                    ><Icon
                      icon="ri:settings-line"
                      class="dark:text-white text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--solar" /></span
                  ><span
                    class="dark:text-white text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                    >设置</span
                  >
                </div>
                <div>
                  <Icon
                    icon="ri:arrow-right-s-line"
                    class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                    style="color: rgb(181, 181, 181)"
                  />
                </div>
              </li>
              <li class="flex justify-between items-center h-[12vw] px-[3.6vw]">
                <div class="flex items-center justify-start">
                  <span
                    ><Icon
                      icon="line-md:moon-filled"
                      class="dark:text-white text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--solar" /></span
                  ><span
                    class="dark:text-white text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                    >深色模式</span
                  >
                </div>
                <div class="">
                  <van-switch v-model="checked"/>
                </div>
              </li>
              <li class="flex justify-between items-center h-[12vw] px-[3.6vw]">
                <div class="flex items-center justify-start">
                  <span
                    ><Icon
                      icon="ri:alarm-fill"
                      class="dark:text-white text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--solar" /></span
                  ><span
                    class="dark:text-white text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                    >定时关闭</span
                  >
                </div>
                <div>
                  <Icon
                    icon="ri:arrow-right-s-line"
                    class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                    style="color: rgb(181, 181, 181)"
                  />
                </div>
              </li>
              <li class="flex justify-between items-center h-[12vw] px-[3.6vw]">
                <div class="flex items-center justify-start">
                  <span
                    ><Icon
                      icon="icon-park-outline:full-dress-longuette"
                      class="dark:text-white text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--solar"
                  /></span>
                  <span
                    class="dark:text-white text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                    >个性装扮</span
                  >
                </div>
                <div>
                  <Icon
                    icon="ri:arrow-right-s-line"
                    class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                    style="color: rgb(181, 181, 181)"
                  />
                </div>
              </li>
              <li class="flex justify-between items-center h-[12vw] px-[3.6vw]">
                <div class="flex items-center justify-start">
                  <span
                    ><Icon
                      icon="iconoir:headset-warning-solid"
                      class="dark:text-white text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--solar"
                  /></span>
                  <span
                    class="dark:text-white text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                    >边听边存</span
                  >
                </div>
                <div class="flex items-center">
                  <span class="text-[color:#a7a7a7] text-[3vw]">未开启</span
                  ><Icon
                    icon="ri:arrow-right-s-line"
                    class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                    style="color: rgb(181, 181, 181)"
                  />
                </div>
              </li>
              <li class="flex justify-between items-center h-[12vw] px-[3.6vw]">
                <div class="flex items-center justify-start">
                  <span
                    ><Icon
                      icon="iconoir:headset-warning-solid"
                      class="dark:text-white text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--solar" /></span
                  ><span
                    class="dark:text-white text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                    >在线听歌免流量</span
                  >
                </div>
                <div>
                  <Icon
                    icon="ri:arrow-right-s-line"
                    class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                    style="color: rgb(181, 181, 181)"
                  />
                </div>
              </li>
              <li class="flex justify-between items-center h-[12vw] px-[3.6vw]">
                <div class="flex items-center justify-start">
                  <span
                    ><Icon
                      icon="solar:card-broken"
                      class="dark:text-white text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--solar"
                  /></span>
                  <span
                    class="dark:text-white text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                    >音乐黑名单</span
                  >
                </div>
                <div class="flex items-center">
                  <span class="text-[color:#a7a7a7] text-[3vw]">未开启</span
                  ><Icon
                    icon="ri:arrow-right-s-line"
                    class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                    style="color: rgb(181, 181, 181)"
                  />
                </div>
              </li>
              <li class="flex justify-between items-center h-[12vw] px-[3.6vw]">
                <div class="flex items-center justify-start">
                  <span
                    ><Icon
                      icon="ph:prohibit-bold"
                      class="dark:text-white text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--solar"
                  /></span>
                  <span
                    class="dark:text-white text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                    >青少年模式</span
                  >
                </div>
                <div class="flex items-center">
                  <span class="text-[color:#a7a7a7] text-[3vw]">未开启</span
                  ><Icon
                    icon="ri:arrow-right-s-line"
                    class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                    style="color: rgb(181, 181, 181)"
                  />
                </div>
              </li>
              <li class="flex justify-between items-center h-[12vw] px-[3.6vw]">
                <div class="flex items-center justify-start">
                  <span
                    ><Icon
                      icon="ion:alarm-sharp"
                      class="dark:text-white text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--solar" /></span
                  ><span
                    class="dark:text-white text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                    >音乐闹钟</span
                  >
                </div>
                <div>
                  <Icon
                    icon="ri:arrow-right-s-line"
                    class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                    style="color: rgb(181, 181, 181)"
                  />
                </div>
              </li>
            </ul>
          </div>

          <div
            class="mx-auto w-[76vw] mt-[5vw] bg-white dark:bg-[#2C2C2C] rounded-[3vw]"
          >
            <ul>
              <li class="flex justify-between items-center h-[12vw] px-[3.6vw]">
                <div class="flex items-center justify-start">
                  <span
                    ><Icon
                      icon="basil:document-outline"
                      class="dark:text-white text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--solar" /></span
                  ><span
                    class="dark:text-white text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                    >我的订单</span
                  >
                </div>
                <div>
                  <Icon
                    icon="ri:arrow-right-s-line"
                    class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                    style="color: rgb(181, 181, 181)"
                  />
                </div>
              </li>
              <li class="flex justify-between items-center h-[12vw] px-[3.6vw]">
                <div class="flex items-center justify-start">
                  <span
                    ><Icon
                      icon="mingcute:coupon-line"
                      class="dark:text-white text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--solar"
                  /></span>
                  <span
                    class="dark:text-white text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                    >优惠卷</span
                  >
                </div>
                <div>
                  <Icon
                    icon="ri:arrow-right-s-line"
                    class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                    style="color: rgb(181, 181, 181)"
                  />
                </div>
              </li>
              <li class="flex justify-between items-center h-[12vw] px-[3.6vw]">
                <div class="flex items-center justify-start">
                  <span
                    ><Icon
                      icon="icon-park-twotone:headset-one"
                      class="dark:text-white text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--solar" /></span
                  ><span
                    class="dark:text-white text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                    >我的客服</span
                  >
                </div>
                <div>
                  <Icon
                    icon="ri:arrow-right-s-line"
                    class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                    style="color: rgb(181, 181, 181)"
                  />
                </div>
              </li>
              <li class="flex justify-between items-center h-[12vw] px-[3.6vw]">
                <div class="flex items-center justify-start">
                  <span
                    ><Icon
                      icon="ri:share-circle-line"
                      class="dark:text-white text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--solar"
                  /></span>
                  <span
                    class="dark:text-white text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                    >分享网易云音乐</span
                  >
                </div>
                <div>
                  <Icon
                    icon="ri:arrow-right-s-line"
                    class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                    style="color: rgb(181, 181, 181)"
                  />
                </div>
              </li>
              <li class="flex justify-between items-center h-[12vw] px-[3.6vw]">
                <div class="flex items-center justify-start">
                  <span
                    ><Icon
                      icon="heroicons:document"
                      class="dark:text-white text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--solar" /></span
                  ><span
                    class="dark:text-white text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                    >个人信息搜集与使用清单</span
                  >
                </div>
                <div>
                  <Icon
                    icon="ri:arrow-right-s-line"
                    class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                    style="color: rgb(181, 181, 181)"
                  />
                </div>
              </li>
              <li class="flex justify-between items-center h-[12vw] px-[3.6vw]">
                <div class="flex items-center justify-start">
                  <span
                    ><Icon
                      icon="arcticons:ffshare"
                      class="dark:text-white text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--solar"
                  /></span>
                  <span
                    class="dark:text-white text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                    >个人信息第三方共享清单</span
                  >
                </div>
                <div>
                  <Icon
                    icon="ri:arrow-right-s-line"
                    class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                    style="color: rgb(181, 181, 181)"
                  />
                </div>
              </li>
              <li class="flex justify-between items-center h-[12vw] px-[3.6vw]">
                <div class="flex items-center justify-start">
                  <span
                    ><Icon
                      icon="solar:share-circle-linear"
                      class="dark:text-white text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--solar" /></span
                  ><span
                    class="dark:text-white text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                    >个人信息与隐私保护</span
                  >
                </div>
                <div>
                  <Icon
                    icon="ri:arrow-right-s-line"
                    class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                    style="color: rgb(181, 181, 181)"
                  />
                </div>
              </li>
              <li class="flex justify-between items-center h-[12vw] px-[3.6vw]">
                <div class="flex items-center justify-start">
                  <span
                    ><Icon
                      icon="zondicons:exclamation-outline"
                      class="dark:text-white text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--solar"
                  /></span>
                  <span
                    class="dark:text-white text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                    >关于</span
                  >
                </div>
                <div>
                  <Icon
                    icon="ri:arrow-right-s-line"
                    class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                    style="color: rgb(181, 181, 181)"
                  />
                </div>
              </li>
            </ul>
          </div>

          <div
            class="mx-auto w-[76vw] mt-[5vw] dark:bg-[#2C2C2C] bg-white rounded-[3vw]"
            @click="quit"
          >
            <p
              class="dark:text-white text-black h-[12vw] px-[3.6vw] w-[76vw] mt-[4vw] rounded-[15px] mx-auto leading-[12vw] text-center text-[3.6vw]"
            >
              退出登入
            </p>
          </div>
        </div>
      </Level>
    </van-popup>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Dialog } from "vant";
export default {
  data() {
    return {
      color: "black",
    };
  },
  computed: {
    ...mapState(["blocks", "switch1", "auth", "checked"]),
    checked: {
      get() {
        return this.$store.state.checked;
      },
      set(val) {
        this.$store.commit("switch1", val);
      },
    },
    show: {
      get() {
        return this.$store.state.show;
      },
      set(val) {
        this.$store.commit("updatashow", val);
      },
    },
  },
  components: {
    [Dialog.Component.name]: Dialog.Component,
  },
  methods: {
    dengru() {
      this.$router.push("/login");
    },
    //退出登入
    quit() {
      Dialog.confirm({
        title: "",
        message: "确认退出当前账号码",
      })
        .then(() => {
          this.$store.dispatch("requestlogout");
          this.$router.push("/login");
          this.auth=[]
          // on confirm
        })
        .catch(() => {
          // on cancel
          console.log("取消了");
        });
    },
    gomy(){
      this.$router.push("/my");
    }
  },
};
</script>

<style>
.van-switch {
  font-size: 20px !important;
}
</style>
