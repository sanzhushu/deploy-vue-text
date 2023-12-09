<template>
  <!-- 6 -->
  <div>
    <Card :title="resource.uiElement.subTitle.title">
      <Level>
        <div class="list-none w-[340vw] flex flex-nowrap pt-5 ">
          <ul class="w-[88vw] " v-for="(item,index) in resource.creatives" :key="index">
            <li v-for="(iten,index) in item.resources" :key="index" class="flex items-center h-[16vw]">
              <img :src="iten.uiElement.image.imageUrl" alt="" class="w-[14.5vw] h-[14.5vw] rounded-[3vw]">
              <div class="ml-[2vw]">
                <h2 class="text-[3.5vw] dark:text-white">{{ iten.uiElement.mainTitle.title }}</h2>
                <p v-if="iten.uiElement.subTitle!=undefined" class="text-[2vw] dark:text-[#a7a7a7]">{{ iten.uiElement.subTitle.title }}</p>
              </div>
            </li>
          </ul>
        </div>
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
    // console.log(this.resource);
  }
}
</script>

<style scoped>

</style>