import Vue from "vue";
import VueRouter from "vue-router";

import routes from "@/router/routes";

Vue.use(VueRouter); //注册两个全局组件（router-link，router-view）

const router = new VueRouter({
  mode: "history",
  routes,
  //高亮显示类名取别名
  linkActiveClass: "active", //用于模糊匹配
  linkExactActiveClass: "active-exact", //精准匹配
});

export default router;
