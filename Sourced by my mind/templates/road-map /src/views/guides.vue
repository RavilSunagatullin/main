<template>
  <div>
    <elements
      :title="$t('technologies.dev-dir')"
      :elements="arrayEl[0]"
      position="right"
    />
    <elements :title="$t('technologies.technologies')" :elements="arrayEl[1]" />
  </div>
</template>

<script setup>
import elements from "@/components/molecules/elements.vue";

import { useI18n } from "vue-i18n";
const { t } = useI18n({ useScope: "global" });

const arrayEl = [
  {
    frontend: {
      title: "technologies.frontend",
      to: "/frontend",
    },
    backend: {
      title: "technologies.backend",
      to: "/backend",
    },
    mobileAndroid: {
      title: "technologies.kotlin",
      to: "/mobile-kotlin",
    },
    mobileSwift: {
      title: "technologies.swift",
      to: "/mobile-swift",
    },
    qa: {
      title: "technologies.qa",
      to: "/qa",
    },
    ux: {
      title: "technologies.ux",
      to: "/ux",
    },
  },
  {
    vue: {
      title: "technologies.vue-js",
      to: "/vue-js",
    },
    laravel: {
      title: "technologies.laravel",
      to: "/laravel",
    },
    kotlin: {
      title: "technologies.kotlin",
      to: "/kotlin",
    },
    swift: {
      title: "technologies.swift",
      to: "/swift",
    },
    react: {
      title: "technologies.react",
      to: "/react",
    },
    angular: {
      title: "technologies.angular",
      to: "/angular",
    },
  },
];
</script>

<style lang="sass" scoped></style>
