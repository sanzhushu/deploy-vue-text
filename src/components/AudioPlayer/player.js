import { Howl, Howler } from "howler";
import { getTrackUrl, getSongDetail } from "@/service";
// import Vue from "vue";
// Howl 加载音乐 播放 暂停
// Howler 全局设置声音大小
// 播放器的功能
// 定义一个属性保存播放歌单
// 定义一个方法更新播放列表
let timer = null;
export default class {
  constructor() {
    this.playing = false;
    this.duration = 0;
    this.progress = 0;
    this.index = 0;
    this.tracks = [];
    this.howl = null;
    // 0代表列表循环 1代表单曲循环
    this.loopMode = 1;
    this.currentSong = {};
    this.shows= false;
  }
  // 进度条
  interval(){
    clearInterval(timer)
    setInterval(()=>{
      this.progress = this.howl.seek()/this.howl.duration()
    }, 1000)
  }
  //替换播放歌单
  replaceTracks(tracks, autoplayTrack) {
    this.tracks = tracks;
    // 指定从autoplayTrack开始播放
    // if (autoplayTrack) return this.playTrack(autoplayTrack);
    if (autoplayTrack) {
      this.index = this.tracks.indexOf(autoplayTrack);
    }
    // this.getTrackInfo(this.tracks[this.index])
    this.playTrack(this.tracks[this.index]);
    // console.log('replaceTracks');
    // 2
  }
  // 获取
  async playTrack(track) {
    // console.log(track);
    // console.log("playTrack");
    const [error, response] = await getTrackUrl(track);
    const [errorSong, resSong] = await getSongDetail(track);
    if (error) return alert("获取音乐失败");
    if (errorSong) return alert("获取详情失败");
    // console.log(resSong);
    this.currentSong = resSong.data.songs[0];
    const mpsurl = response.data.data[0].url;
    if (mpsurl) return this.mountAudioSource(mpsurl, true);
    this.playNextTrack();
  }

  mountAudioSource(url, autoplay = false) {
    Howler.unload();
    this.howl = new Howl({
      src: [url],
      html5: true,
      format: ["mp3"],
    });
    // console.log("mountAudioSource");
    
    if (autoplay) this.play();
    
    this.howl.on("end", () => this.playNextTrack());
  }
  play() {
    // console.log("play");
    this.duration= this.howl.duration();
    this.playing = true;
    this.howl.play();
    this.interval()
  }
  // 获取需要的trackid
  playNextTrack() {
    // console.log("playNextTrack");
    const nextTrack = this.getNextTrack();
    this.playTrack(nextTrack);
    console.log("playNextTrack:", nextTrack);
  }
  // 下一曲
  getNextTrack() {
    if (this.loopMode === 1) return this.tracks[this.index];
    const currentTrackIsLast = this.index + 1 === this.tracks.length;
    if (currentTrackIsLast && this.loopMode == 0) return this.tracks[0];
    return this.tracks[++this.index];
  }
  getAogTrack() {
    if (this.loopMode === 1) return this.tracks[this.index];
    const currentTrackIsLast = this.index + 1 === this.tracks.length;
    if (currentTrackIsLast && this.loopMode == 0) return this.tracks[0];
    return this.tracks[++this.index];
  }
  pause() {
    this.howl.pause();
    this.playing = false;
  }
  setRate(rate) {
    console.log("setRate");
    Howler.rate(rate);
  }
  //改变歌曲
  // changmusic(index) {
  //   this.index = index;
  //   console.log(this.index);
  // }
  togell(){
    this.howl.playing() ? this.pause() : this.play();
  }
}
// const player = new Player();
// window.player = player;

// export default Vue.observable(player);

// export default (Vue)=>{
//   Vue.mixin({
//     // 定义一个全局混入的player
//     computed:{
//       player(){
//         return Vue.observable(new Player());
//       }
//     }
//   })
// }
