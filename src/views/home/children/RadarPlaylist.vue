<template>
  <div>
    <Card :title="resource.uiElement.subTitle.title">
    <Level>
      <ul class=" list-none w-[190vw] flex flex-nowrap pt-2">
        <li class="w-[35vw] h-[36vw] ml-3" v-for="(item,index) in resource.creatives" :key="index" @click="song(item.creativeId)" >
          <div class="h-[27vw] relative">
            <img :src="item.resources[0].uiElement.image.imageUrl" alt="" class="h-[27vw] w-[35vw] rounded-[3vw]">
            <p class=" absolute top-1 right-1 flex justify-center items-center text-[3vw] font-bold text-[#fff]">
              <Icon icon="iconamoon:arrow-right-2-fill" />
              {{formatNumber(item.resources[0].resourceExtInfo.playCount)  }}
            </p>
            <Icon icon="iconamoon:arrow-right-2-fill" class=" absolute right-2 bottom-2 text-[#fff] font-bold text-[8vw]"/>
          </div>
          <p class="line-clamp2 text-[2.5vw]">{{ item.resources[0].uiElement.mainTitle.title }}</p>
        </li>
      </ul>
    </Level>
    </Card>
  </div>
</template>

<script>
export default {
  props: {
    resource: {
      type: Object,
      required: true,
    },
  },
  created(){
    console.log(this.resource.uiElement.subTitle.title);
  },
  methods: {
    formatNumber(num) {
      num = Number(num);
      if (num == 0 || (num > 0 && num < 100000000)) {
        return num + "";
      } else {
        return (num / 100000000).toFixed(0) + "亿";
      }
    },
    song(id){
      console.log(id);
      // this.$store.commit("updataPlaylistID", id);
      // this.$router.push("/playlist");
    }
  },
}
</script>

<style scoped>
line-clamp2 {
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
}
</style>