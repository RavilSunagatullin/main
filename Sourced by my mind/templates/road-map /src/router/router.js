import { createRouter, createWebHistory } from "vue-router";
import test from "@/views/test.vue";
import startPage from "@/views/startPage.vue";
import main from "@/views/main.vue";
import pageNotFound from "@/views/pageNotFound.vue";
import frontEnd from "@/views/guides/frontend/frontend.vue";
import base_frontend from "@/views/guides/frontend/base-frontend.vue";
import html from "@/views/guides/frontend/html.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/test",
      name: "test",
      component: test,
    },
    {
      path: "/",
      name: "startPage",
      component: startPage,
    },
    {
      path: "/main",
      name: "main",
      component: main,
    },
    {
      path: "/frontend",
      name: "frontend",
      component: frontEnd,
    },
    {
      path: "/base-frontend",
      name: "base-frontend",
      component: base_frontend,
    },
    {
      path: "/html",
      name: "html",
      component: html,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: pageNotFound,
    },
  ],
});

export default router;
