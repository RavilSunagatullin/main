import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    test: 1,
  }),
  getters: {},
  actions: {},
});
