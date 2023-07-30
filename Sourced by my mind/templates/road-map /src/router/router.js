import { createRouter, createWebHistory } from "vue-router";
import test from "@/views/test.vue";
import startPage from "@/views/startPage.vue";

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
  ],
});

export default router;
