import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
// @ts-ignore
import App from "./App.vue";
import { createPinia } from "pinia";
import { routes } from "./routes";
import VueCodeHighlight from 'vue-code-highlight';
// @ts-ignore
import {Tabs, Tab} from 'vue3-tabs-component';

const router = createRouter({
  routes,
  history: createWebHistory(),
});

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.use(VueCodeHighlight)
app.use(Tabs);
app.use(Tab);

app.mount("#app");