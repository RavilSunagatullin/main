<template>
  <div class="wrapper-main">
    <greeting />
    <elements :title="$t('dev-dir')" :elements="arrayEl[0]" />
    <elements :title="'Technologies'" :elements="arrayEl[1]" position="right" />
    <elements :title="$t('articles')" :elements="arrayEl[2]" one_column />
  </div>
</template>

<script setup>
import greeting from "@/components/molecules/greeting.vue";
import elements from "@/components/molecules/elements.vue";

import { watch, ref } from "vue";

import { useI18n } from "vue-i18n";
const { t, locale } = useI18n({ useScope: "global" });

import { useStore } from "@/store/store";
const store = useStore();

const arrayEl = [
  {
    frontend: {
      title: "frontend",
      to: "/frontend",
    },
    backend: {
      title: "backend",
      to: "/backend",
    },
    mobileAndroid: {
      title: "mobile-kotlin",
      to: "/mobile-kotlin",
    },
    mobileSwift: {
      title: "mobile-swift",
      to: "/mobile-swift",
    },
  },
  {
    vue: {
      title: "vue-js",
      to: "/vue-js",
    },
    laravel: {
      title: "laravel",
      to: "/laravel",
    },
    kotlin: {
      title: "kotlin",
      to: "/kotlin",
    },
    swift: {
      title: "swift",
      to: "/swift",
    },
  },
  {
    article_1: {
      title: "how-learning-faster",
      to: "/How learning faster ?",
    },
    article_2: {
      title: "what-is-mobile-develop",
      to: "/What is Mobile develop ?",
    },
    article_3: {
      title: "which-backend-framework-is-best",
      to: "/Which Backend framework is best?",
    },
    article_4: {
      title: "what-dev-ops-developer-doing",
      to: "/What Dev ops developer doing ?",
    },
  },
];
</script>

<style lang="sass" scoped>
.wrapper-main
    display: flex
    flex-direction: column
    gap: 75px
    margin: 20px 0
    @media (max-width:500px)
        gap: 25px
</style>
