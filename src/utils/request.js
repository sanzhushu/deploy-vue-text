import axios from "axios";
// import store from "@/store";
// axios.create 返回值是一个新的axios的实例
import axiosRetry from "axios-retry";

const request = axios.create({
  baseURL: "http://111.229.247.11:3000/",
  //  timeout:3000,
   withCredentials: true,
});

axiosRetry(axios, { retries: 3 });

// 每一次请求都会触发的函数如何去设置(请求拦截器)
// 如何设置请求拦截器?
// request.interceptors.request.use((config) => {
//   const cookie = store.state.auth.data.cookie;
//   // console.log(store.state.auth.data.cookie);
//   if (cookie) {
//     if(config.method === 'post') {
//       config.data||(config.data={});
//       config.data.cookie = cookie
//     }
//     if(config.method === 'get') {
//       config.params||(config.params={});
//       config.params.cookie = cookie
//     }
//   }
  
//   // 在这个位置可以对请求配置作更改
//   // config是你每一次发起请求的详细配置(请求的地址、请求的路径、请求的参数... )
//   return config;
// });

window.request = request;
export default request;
//  _axios 和axiso的百分之99 的功能一致

// window._axios = _axios
// window.axios = axios

//axios get ('/sss')
// 基础请求地址baseurl
