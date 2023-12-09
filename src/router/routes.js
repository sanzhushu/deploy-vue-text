import Home from "../views/home/index.vue";
const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/my",
    name: "my",
    component: () => import("../views/my/index.vue"),
  },
  {
    path: "/ranking",
    name: "ranking",
    component: () => import("../views/ranking/index.vue"),
  },
  {
    path: "/concern",
    name: "concern",
    component: () => import("../views/concern/index.vue"),
  },
  {
    path: "/community",
    name: "community",
    component: () => import("../views/community/index.vue"),
  },
  {
    path: "/playlist",
    name: "playlist",
    component: () => import("../views/home/children/PlayListsOne.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/index"),
  },
  {
    path: "/mvvideo",
    name: "mvvideo",
    component: () => import("../views/ranking/children/MvVideo"),
  },
  {
    path:'/audio',
    name:'audio',
    component:()=>import('@/components/AudioPlayer/AudioPlayerone')
  }
];

export default routes;
