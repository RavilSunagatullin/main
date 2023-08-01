import { createRouter, createWebHistory } from "vue-router";
import test from "@/views/test.vue";
import startPage from "@/views/startPage.vue";
import main from "@/views/main.vue";

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
  ],
});

export default router;
