import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/userInfo",
      name: "userInfo",
      component: () => import("../views/userInfo.vue"),
    },
    {
      path: "/orderPage",
      name: "orderPage",
      component: () => import("../views/orderPage.vue"),
    },
    {
      path: "/orderTwoPage",
      name: "orderTwoPage",
      component: () => import("../views/orderTwoPage.vue"),
    },
    {
      path: "/testOnePage",
      name: "testOnePage",
      component: () => import("../views/testOnePage.vue"),
    },
    {
      path: "/testTwoPage",
      name: "testTwoPage",
      component: () => import("../views/testTwoPage.vue"),
    },
  ],
});

export default router;
