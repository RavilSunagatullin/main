import { createRouter, createWebHistory } from "vue-router";
import test from "@/views/test.vue";
import startPage from "@/views/startPage.vue";
import main from "@/views/main.vue";
import pageNotFound from "@/views/pageNotFound.vue";
import frontEnd from "@/views/guides/frontend.vue";

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
      path: "/:pathMatch(.*)*",
      name: "404",
      component: pageNotFound,
    },
  ],
});

export default router;
