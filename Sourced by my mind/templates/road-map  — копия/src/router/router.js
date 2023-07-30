import { createRouter, createWebHistory } from "vue-router";
import test from "@/views/test.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/test",
      name: "test",
      component: test,
    },
  ],
});

export default router;
