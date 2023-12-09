<template>
  <div>
    <component
      :is="blocksTypeComponentMap[resource.blockCode]"
      :resource="resource"
    ></component>
  </div>
</template>

<script>
// 轮播图、推荐歌单、相似推荐、排行榜、你的雷达歌单、新歌新碟
import Banner from "./Banner";
import RecommendPlaylist from "./RecommendPlaylist";
import StylePlaylist from "./StylePlaylist";
import Toplist from "./Toplist";
import RadarPlaylist from "./RadarPlaylist";
import NewSong from "./NewSong";
import DragonBall from "./DragonBall.vue";

const blocksTypeComponentMap = {
  HOMEPAGE_BANNER: Banner,
  HOMEPAGE_BLOCK_PLAYLIST_RCMD: RecommendPlaylist,
  HOMEPAGE_BLOCK_STYLE_RCMD: StylePlaylist,
  HOMEPAGE_BLOCK_TOPLIST: Toplist, //空的
  HOMEPAGE_BLOCK_MGC_PLAYLIST: RadarPlaylist,
  HOMEPAGE_BLOCK_NEW_ALBUM_NEW_SONG: NewSong, //空的
  HOMEPAGE_BLOCK_OLD_DRAGON_BALL: DragonBall,
};
// HOMEPAGE_BANNER
// HOMEPAGE_BLOCK_OLD_DRAGON_BALL
// HOMEPAGE_BLOCK_PLAYLIST_RCMD
// HOMEPAGE_MUSICIAN_REVISIT
// HOMEPAGE_BLOCK_STYLE_RCMD
// HOMEPAGE_BLOCK_MGC_PLAYLIST
export default {
  data() {
    return {
      blocksTypeComponentMap
    };
  },
  props: {
    resource: {
      type: Object,
      required: true,
    },
  },
  created(){
    // console.log(this.resource.blockCode)
  }
};
</script>

<style scoped></style>
