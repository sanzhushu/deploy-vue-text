<template>
  <div
    class="flex  to-[#f1f1f1] opacity-0.2 w-[100vw] h-[20vw] p-[3vw] pl-[1vw]  justify-between items-center"
  >
    <span class="text-[8vw] dark:text-white" is-link @click="showPopups()">
      <Icon icon="prime:align-justify" class="" />
    </span>
    <div class="relative">
      <Icon
        icon="mingcute:search-line"
        class="absolute left-[3vw] top-[3vw] w-[4.47vw] h-[4.47vw] leading-[4.47vw] text-[#e2e3e5] iconify iconify--tabler"
      ></Icon>
      <input
        type="text"
        name=""
        id=""
        placeholder="Love Ls Gone (Acoustic)"
        class="outline-none dark:from-[#D9DDFC] dark:to-[#F2D9EF] dark:border-0 text-[4.47vw] pl-[10vw] bg-gradient-to-r from-[#d9ddfd] text-[#8189A1] to-[#f3d9ef] opacity-0.2 w-[75vw] h-[10vw] border-2 border-[#CCCEF7] rounded-[5vw]"
      />
      <Icon
        icon="lucide:scan-line"
        class="absolute right-[3.68vw] top-[3vw] w-[4.47vw] h-[4.47vw] leading-[4.47vw] text-[#8189A1]"
      ></Icon>
    </div>
    <span class="text-[8vw] dark:text-white">
      <Icon icon="ph:microphone-duotone" />
    </span>
  </div>
</template>

<script>
export default {
  props: {
    // showPopups: {
    //   type: Function,
    //   default: null,
    // },
  },
  methods: {
    showPopups(){
      this.$store.state.show = true;
    }
  },
};
</script>

<style></style>
