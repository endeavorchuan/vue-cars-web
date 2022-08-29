import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/", // 主页
    name: "Index",
    component: Home,
    children: [
      {
        path: "/user", // 会员页面
        name: "User",
        component: () => import("../views/user/index"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
