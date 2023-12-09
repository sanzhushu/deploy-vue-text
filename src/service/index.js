import {co} from '@/utils/index';

import request from  '@/utils/request';
//首页所有数据
export const homePageData  =( )=> {
  return co(request.post(`/homepage/block/page?timestamp=${Date.now()}`))
}
//热门话题
/**
 * 
 * @param {Object} data
 * @param {Number} data.limit      返回数量  
 * @param {Number} data.offset     偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
 * @returns 
 */
export const toPic  =(data)=> {
  return co(request.post(`/hot/topic?timestamp=${Date.now()}`,data))
}

// 必选参数 : id : 歌单 id

// 可选参数 : limit : 限制获取歌曲的数量，默认值为当前歌单的歌曲数量

// 可选参数 : offset : 默认值为0

// 接口地址 : /playlist/track/all

// 调用例子 : /playlist/track/all?id=24381616&limit=10&offset=1

/**
 * 
 * @param {Object} data 
 * 
 * @returns 
 */

//获取歌单详情
export const getAllPlaylist  =(params)=> {
  return co(request.get(`/playlist/detail`,{params}))
}
//相关歌单推荐
export const getRelatedPlaylist  =(params)=> {
  return co(request.get(`/related/playlist`,{params}))
}
//手机号验证码
export const getCapycha  =(params)=> {
  return co(request.get(`/captcha/sent`,{params}))
}
//登入
export const loginCellphone  =(data)=> {
  return co(request.post(`/login/cellphone?timestamp=${Date.now()}`,data))
}

// 国家编码列表
export const countriesCodeList  =(data)=> {
  return co(request.post(`/countries/code/list?timestamp=${Date.now()}`,data))
}

//轮播图数据
export const getBanners  =(data)=> {
  return co(request.post(`/banner?timestamp=${Date.now()}`,data))
}

//我的页面
export const getUserInfo  =(data)=> {
  return co(request.post(`/user/detail?timestamp=${Date.now()}`,data))
}

//等级信息
export const getLevelInfo  =(data)=> {
  return co(request.post(`/user/level?timestamp=${Date.now()}`,data))
}

// 我喜欢的音乐
export const getLikeMusic  =(data)=> {
  return co(request.post(`/user/playlist?timestamp=${Date.now()}`,data))
}

//退出登入
export const logout  =(data)=> {
  return co(request.post(`/logout?timestamp=${Date.now()}`,data))
}

// MV排行
export const getMvRank  =(data)=> {
  return co(request.post(`/top/mv?timestamp=${Date.now()}`,data))
}

//mv视频
export const getMvVideo  =(data)=> {
  return co(request.post(`/mv/url?timestamp=${Date.now()}`,data))  
}

//评论数据
export const getComment  =(data)=> {
  return co(request.post(`/mv/detail/info?timestamp=${Date.now()}`,data))
}

// mv详情                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
export const getMvDetail  =(data)=> {
  return co(request.post(`/mv/detail?timestamp=${Date.now()}`,data))
}

//判断歌曲是否可以播放
export const getCheckMusic  =(data)=> {
  return co(request.post(`/check/music?timestamp=${Date.now()}`,data))
}

//歌曲url
export const getMusicUrl  =(data)=> {
  return co(request.post(`/mv/url?timestamp=${Date.now()}`,data))
}

//歌曲url
export const getTrackUrl = (track) => {
  return co(request.post(`/song/url/v1?timestamp=${Date.now()}`, { id: track, level: "standard" }));
};

// 歌曲详情
export const getSongDetail = (ids) => {
  console.log(ids);
  return co(request.get(`/song/detail?timestamp=${Date.now()}`, {params:{ids}}));
}