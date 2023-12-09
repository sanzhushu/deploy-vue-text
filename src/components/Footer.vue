<template>
  <div class="bg-[#F1F1F1] fixed left-0 bottom-0 h-[10vw]  text-[3vw] z-50">
    <ul class="flex items-center justify-between mt-2">
        <router-link to="/home" tag="li" class="text-center w-[20vw] ">
            <span class="flex items-center justify-center"><Icon icon="ri:netease-cloud-music-fill" /></span>
            <p>首页</p>
        </router-link >
        <router-link to="/ranking" tag="li" class="text-center w-[20vw] ">
            <span class="flex items-center justify-center"><Icon icon="icon-park-outline:ranking" /></span>
            <p>排行榜</p>
        </router-link >
        <router-link to="/my" tag="li"  class="text-center w-[20vw]">
            <span class="flex items-center justify-center" ><Icon icon="lucide:music" /></span>
            <p>我的</p>
        </router-link >
        <router-link to="/concern" tag="li" class="text-center w-[20vw]">
            <span class="flex items-center justify-center"><Icon icon="tabler:user-x" /></span>
            <p>关注</p>
        </router-link >
        <router-link to="/community" tag="li"  class="text-center w-[20vw]">
            <span class="flex items-center justify-center"><Icon icon="gridicons:chat" /></span>
            <p>社区</p>
        </router-link >
    </ul>
  </div>
</template>

<script>
export default {
    
}
</script>

<style> 
 .active{
color: brown;
 }
</style>