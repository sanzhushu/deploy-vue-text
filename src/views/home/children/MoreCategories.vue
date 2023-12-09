<template>
  <div
    class="w-[100vw] rounded-t-[5vw] h-[40vw] bg-white z-30 fixed bottom-0 left-0"
    :style="{ transform: switch1 ? ` translateY(0%)` : `translateY(100%)` }"
  >
    <h2 class="flex justify-between items-center border-b-4 h-[10vw]">
      <span class="ml-3 text-[3.5vw] text-[#474646]">{{ title }}</span>
      <span @click="shutdown" class="text-[6vw] mr-3"
        ><Icon icon="iconamoon:close-circle-1-bold"
      /></span>
    </h2>
    <ul class="list-none flex justify-between flex-col h-[30vw]">
      <li class="ml-3 flex justify-start items-center text-[4vw]">
        <Icon icon="icon-park-outline:good-two" />优先推荐
      </li>
      <li class="ml-3 flex justify-start items-center text-[4vw]">
        <Icon icon="tabler:forbid-2-filled" />减少推荐
      </li>
      <li class="ml-3 flex justify-start items-center text-[4vw]">
        <Icon icon="iconamoon:menu-kebab-vertical-circle" />更多内容
      </li>
    </ul>
  </div>
</template>

<script>
// import { isShallow } from 'vue';
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["switch1", "title"]),
  },
  methods: {
    shutdown() {
      this.$store.commit("updataShutdown");
    },
  },
};
</script>

<style scoped></style>
