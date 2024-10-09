import { RouteRecordRaw } from "vue-router";
import Login from "./pages/Login.vue";
import Home from "./pages/Home.vue";
import Linkup from "./pages/Linkup.vue";

export const routes: RouteRecordRaw[] = [
  {
    name: "home",
    path: "/",
    component: Home,
  },
  {
    name: "link",
    path: "/linkup",
    component: Linkup,
  },
  {
    name: "login",
    path: "/login",
    component: Login,
  },
];
