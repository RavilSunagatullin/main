import { createApp } from "vue";
import "./style.sass";
import App from "./App.vue";

import { createI18n, useI18n } from "vue-i18n";
import { languages, defaultLocal } from "./i18n";
const messages = Object.assign(languages);
const i18n = createI18n({
  legacy: false,
  locale: defaultLocal,
  fallbackLocale: "en",
  messages,
});

import { createPinia } from "pinia";
const pinia = createPinia();

import router from "./router/router.js";

createApp(App, {
  setup() {
    const { t } = useI18n();
    return { t };
  },
})
  .use(i18n)
  .use(pinia)
  .use(router)
  .mount("#app");
