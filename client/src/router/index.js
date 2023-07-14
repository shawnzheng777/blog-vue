import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/home/index.vue";
import Login from "@/pages/login/index.vue";
import UserInfo from "@/pages/user/info.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/user-info",
    name: "user-info",
    component: UserInfo,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
