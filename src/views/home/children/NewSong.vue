<template>
  <!-- 6 -->
  <div>
    <Card :title="resource.uiElement.subTitle.title">
      <Level>
        <div class="list-none w-[640vw] flex flex-nowrap pt-3 pb-1">
          <ul class="w-[90vw] " v-for="(item,index) in resource.creatives" :key="index">
            <li v-for="(iten,index) in item.resources" :key="index" class="flex items-center h-[16vw]">
              <img :src="iten.uiElement.image.imageUrl" alt="" class="w-[14.5vw] h-[14.5vw] rounded-[3vw]">
              <div class="ml-[2vw]">
                <h2 class="text-[3.5vw] dark:text-[#e3e3e4]  text-[#3E465B]">{{ iten.uiElement.mainTitle.title }}</h2>
                <div v-if="iten.uiElement.subTitle!=undefined" class="text-[2vw] flex">
                  <div>
                    <span></span>
                  </div>
                  <span class="spills w-[7vw] block dark:text-[#939394] text-[2.36vw] text-[#79838F]">{{ iten.uiElement.subTitle.title }}</span>
                  <div v-if="iten.resourceExtInfo.artists.length>0" class="spills w-[7vw] ">
                    <span v-for=" item2,index in iten.resourceExtInfo.artists " :key="index" class="dark:text-[#565656] text-[2.36vw] text-[#79838F]">-{{item2.name }}</span>
                  </div>
                 
                </div>
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
.spills{
    width:100px;
    overflow: hidden;  /*超出部分隐藏*/
    white-space: nowrap;  /*禁止换行*/
    text-overflow: ellipsis; /*省略号*/
}
</style>