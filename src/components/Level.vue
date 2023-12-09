<template>
  <div class=" mx-auto overflow-hidden scroll-wrapper" :class="withe" ref="scroll">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
  data() {
    return {};
  },
  props: {
    config: {
      type: Object,
      default: () => ({ scrollX: true,probeType: 1,click:true }),
    },
    withe: {
      type: String,
      default: 'w-[92vw]',
    }
  },
  mounted() {
    this.init();
  },
  updated() {
    this.init();
  },
  beforeDestroy() {
    this.bs.destroy();
  },
  methods: {
    init() {
      this.bs = new BScroll(this.$refs.scroll,this.config);
    },
  },
};
</script>

<style scoped lang="less"></style>
