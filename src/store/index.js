import Vue from "vue";
import Vuex from "vuex";
import persistedstate from "vuex-persistedstate";
import {
  homePageData,
  getAllPlaylist,
  countriesCodeList,
  loginCellphone,
  getBanners,
  getRelatedPlaylist,
  getUserInfo,
  getLevelInfo,
  getLikeMusic,
  logout,
  getMvRank,
  getMvVideo,
  getCheckMusic,
  getMusicUrl,
} from "@/service/index";
import home from "./modules/home"; //引入首页数据
Vue.use(Vuex);

const store = new Vuex.Store({
  //存放共享数据
  state: {
    blocks: [],
    menus: [],
    switch1: false,
    title: "",
    playlist: [],
    PlaylistID: [],
    CodeList: [],
    auth: [],
    banners: [],
    relatedplaylist: [],
    user: [],
    level: [],
    music: [],
    mv: [],
    mvvideo:[],
    checked: false,
    show: false,
    musicaudio: [],
    whether:[]
  },
  //定义同步修改公共数据的方法
  mutations: {
    updataBlock(state, res) {
      // console.log(res.data.data.blocks);
      state.blocks = res.data.data.blocks;
    },
    updatamore(state, res) {
      state.title = res;
      state.switch1 = true;
    },
    updataShutdown(state) {
      state.switch1 = false;
    },
    updataPlaylistID(state, res) {
      state.PlaylistID = res;
    },
    updataPlaylist(state, res) {
      state.playlist = res;
    },
    updataCodeList(state, res) {
      state.CodeList = res;
    },
    updataAuth(state, res) {
      state.auth = res;
    },
    updataBanner(state, res) {
      state.banners = res;
    },
    updataRelatedPlaylist(state, res) {
      state.relatedplaylist = res;
    },
    updataMy(state, res) {
      state.user = res;
    },
    updatalevel(state, res) {
      state.level = res;
    },
    updataLike(state, res) {
      state.music = res;
    },
    updataMv(state, res) {
      state.mv = res;
    },
    updataMvVideo(state, res) {
      state.mvvideo = res;
    },
    switch1(state,payload){
      state.checked = payload;
    },
    updatashow(state,payload){
      state.show = payload;
    },
    updataUrl(state,res){
      state.whether = res;
    },
    updataUrlMusic(state,res){
      state.musicaudio = res;
    }
  },

  getters: {},
  //定义异步修改公共数据的方法
  //actions触发store.dispatch('')
  actions: {
    //首页数据
    async requesthomePageData(store) {
      const [error, res] = await homePageData();
      if (error) return;
      store.commit("updataBlock", res);
    },
    // 歌单列表
    async requestgetAllPlaylist(store,data={id: store.state.PlaylistID.creativeId}) {
      const [error, res] = await getAllPlaylist(data);
      if (error) return;
      store.commit("updataPlaylist", res);
    },
    // 相关歌单推荐
    async requestgetRelatedPlaylist(store,data={id: store.state.PlaylistID.creativeId}) {
      const [error, res] = await getRelatedPlaylist(data);
      if (error) return;
      store.commit("updataRelatedPlaylist", res);
    },
    // 国家编码列表
    async requestcountriesCodeList(store) {
      const [error, res] = await countriesCodeList();
      if (error) return;
      // console.log(res);
      store.commit("updataCodeList", res);
    },
    //登入加验证码
    async requestloginCellphone(store, data) {
      // console.log(data);
      const [error, res] = await loginCellphone(data);
      if (error) return alert("请求错误");
      // console.log(res);
      store.commit("updataAuth", res);
    },
    //轮播图数据
    async requestgetBanner(store) {
      const [error, res] = await getBanners();
      if (error) return;
      store.commit("updataBanner", res);
    },
    //我的页面数据
    async requestgetMy(store) {
      console.log(store.state.auth.data.account.id);
      const [error, res] = await getUserInfo({
        uid: store.state.auth.data.account.id,
      });
      if (error) return;
      store.commit("updataMy", res);
    },
    //我的页面用户等级信息
    async reqeastgetUserLevel(store) {
      const [error, res] = await getLevelInfo();
      if (error) return;
      store.commit("updatalevel", res);
    },
    //我喜欢的音乐
    async requestgetLike(store) {
      const [error, res] = await getLikeMusic({
        uid: store.state.auth.data.account.id,
      });
      if (error) return;
      store.commit("updataLike", res);
    },
    // 退出登入
    async requestlogout() {
      const [error, res] = await logout();
      if (error) return;
      console.log(res);
    },
    // mv排行
    async requestgetMv(store,data) {
      const [error, res] = await getMvRank(data);
      if (error) return;
      store.commit("updataMv", res);
    },
    // mv视频
    async requestgetMvVideo(store,data) {
      const [error, res] = await getMvVideo(data);
      if (error) return;
      store.commit("updataMvVideo", res);
    },
    //url验证
    async requestgetUrl(store,data) {
      const [error, res] = await getCheckMusic(data);
      if (error) return;
      store.commit("updataUrl", res);
    },
    //url歌曲
    async requestgetUrlMusic(store,data) {
      const [error, res] = await getMusicUrl(data);
      if (error) return;
      store.commit("updataUrlMusic", res);
    }
  },
  modules: {
    home,
  },
  // 扩展其他额外的功能
  // 将state时时缓存到本地存储中
  plugins: [persistedstate()],
});
window.store = store;
export default store;
