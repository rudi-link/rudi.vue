import { RouteRecordRaw } from "vue-router";
import Login from "./pages/Login.vue";
import Home from "./pages/Home.vue";

export const routes: RouteRecordRaw[] = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'login',
        path: '/login',
        component: Login
    }
]