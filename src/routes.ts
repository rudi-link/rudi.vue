import { RouteRecordRaw } from "vue-router";
import Login from "./pages/Login.vue";
import Home from "./pages/Home.vue";
import Linkup from "./pages/Linkup.vue";
import LinkupDetails from "./pages/LinkupDetails.vue";
import Analytic from "./pages/Analytic.vue";

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
    props: true,
  },
  {
    path: "/linkup/:id",
    component: LinkupDetails,
    props: true,
  },
  {
    name: "analytic",
    path: "/analytic",
    component: Analytic,
    props: true,
  },
  {
    path: "/analytic/:id",
    component: Analytic,
    props: true,
  },
  {
    name: "login",
    path: "/login",
    component: Login,
  },
];
