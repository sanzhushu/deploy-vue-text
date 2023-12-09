<template>
    <div>
      <div class="flex items-center justify-between w-[94vw] m-auto text-[3.5vw]  font-bold mt-4">
        <div class="dark:text-[#f9f9fa] text-[#1b1b1b] text-[4vw] font-[800] flex items-center">{{ title }} <span class="text-[4vw]"><Icon icon="ri:arrow-right-s-line" /></span></div>
        <div @click="more" class="text-[4vw] dark:text-white"><Icon icon="ant-design:more-outlined" /></div>
      </div>
      <div>
        <slot></slot>
      </div>
    </div>
  </template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    }, 
  },
  methods:{
    more(){
      console.log(111);
        this.$store.commit('updatamore',this.title)
    }
  }
};
</script>

<style  scoped>

</style>
