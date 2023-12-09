<template>
  <div>
    <Card :title="resource.uiElement.subTitle.title">
      <Level>
      <div class=" list-none w-[560vw] flex flex-nowrap pt-5">
        <div class="dark:bg-[#25272e] dark:bg-gradient-n dark:from-000 dark:via-000 dark:to-000 shadows scroll-item w-[84vw] bg-gradient-to from-ff8177 via-ff8c7f to-b12a5b   mr-3  bg-white p-4 rounded-[5vw]" v-for="(item,index) in resource.creatives" :key="index">
          <div class="flex justify-between items-center"><span class="text-[4vw]  font-bold dark:text-white">{{ item.uiElement.mainTitle.title }}</span><span class="text-[3vw] dark:text-[#F1F1FF1] text-[#9b9999]">{{ item.uiElement.mainTitle.titleDesc }}</span></div>
          <ul class="pt-2">
            <li v-for="(iten,index) in item.resources" :key="index" class=" w-[80vw] h-[16vw] flex  items-center" >
              <img :src="iten.uiElement.image.imageUrl" alt="" class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5">
              <div class="w-[8vw] text-center font-bold text-[3vw]" :style="{color: color16()}">{{ index+1 }}</div>
              <div class="w-[45vw]">
                <div class=" font-bold text-[3vw] dark:text-white">{{ iten.uiElement.mainTitle.title }}</div>
                <div >
                <!-- <span v-for="(itenone,index) in iten.resourceExtInfo.artists" :key="index">{{ itenone}}</span> -->
                </div>
              </div>
              <span class=" text-[2vw] font-bold text-red-500 mr-3">{{ iten.uiElement.labelText.text }}</span>
            </li>
          </ul>
        </div>
      </div>
    </Level>
    </Card>
  </div>
</template>

<script>
export default {
  data(){
    return {
      shows:true
    }
  },
  props: {
    resource: {
      type: Object,
      required: true,
    },
  },
  created(){
    // console.log(this.resource);
    // this.shows = true
  },
  mounted(){
    
  },
  methods:{
    color16() {
      //十六进制颜色随机
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      var color = "#" + r.toString(16) + g.toString(16) + b.toString(16);
      return color;
    },
  }
}
</script>

<style scoped>

</style>