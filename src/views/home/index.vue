<template>
  <div :class="{dark:checked}" class="home mb-[10vw] dark:from-[#2c1a2b] dark:to-[#1a1c23] bg-gradient-to-b from-[#E6E6FB] to-[#f1f1f1] opacity-0.2">
    <Blocks v-for="block in blocks" :resource="block" :key="block.id"></Blocks>
    <Footer></Footer>
    <Masks v-show="switch1"></Masks>
    <MoreCategories v-show="switch1"></MoreCategories>
    <Sidebar></Sidebar>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Blocks from "./children/Blocks.vue";
import Masks from "./children/Masks.vue";
import MoreCategories from "./children/MoreCategories.vue";
import Sidebar from "@/components/Sidebar.vue";
// import { Dialog } from "vant";
export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapState(["blocks", "switch1",'checked']),
  },
  components: {
    Blocks,
    Masks,
    MoreCategories,
    Sidebar,
  },
  methods: {
  },
  created() {
  },
  
};
</script>

<style scoped>

</style>
