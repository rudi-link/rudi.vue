import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import { routes } from "./routes";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { Library } from "@fortawesome/";

const router = createRouter({
  routes,
  history: createWebHistory(),
});

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount("#app");