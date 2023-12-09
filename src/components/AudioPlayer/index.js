import Player from "./player";
import AudioPlayer from "./AudioPlayer.vue"; 
const player = new Player()
// import Vue from "vue";
export default {
    install(Vue){
        Vue.mixin({
          // 定义一个全局混入的player
          computed:{
            mixin_player(){
              return Vue.observable(player);
            }
          }
        })
        Vue.component(AudioPlayer.name,AudioPlayer)
      }
}
