<template>
  <div>
    <uiTab :data="data" />
  </div>
</template>

<script setup>
import uiTab from "@/components/Organisms/uiTab.vue";

const data = {
  article_1: {
    title: "frontend-page.article_1-title",
    description: {
      paragraph_1: "fsfes",
      paragraph_2: "fsefsef fijenfisef sfosejfms",
    },
    id: 1,
  },
  article_2: {
    title: "frontend-page.article_2-title",
    description: {
      paragraph_1: "fsfes",
      paragraph_2: "fsefsef fijenfisef sfosejfms",
    },
    id: 2,
  },
  article_3: {
    title: "frontend-page.article_3-title",
    description: {
      paragraph_1: "fsfes",
      paragraph_2: "fsefsef fijenfisef sfosejfms",
    },
    id: 3,
  },
  article_4: {
    title: "frontend-page.article_4-title",
    description: {
      paragraph_1: "fsfes",
      paragraph_2: "fsefsef fijenfisef sfosejfms",
      paragraph_3: "fsefsef fijenfisef sfosejfms",
    },
    id: 4,
  },
  article_5: {
    title: "frontend-page.article_5-title",
    description: {
      paragraph_1: "fsfes",
      paragraph_2: "fsefsef fijenfisef sfosejfms",
    },
    id: 5,
  },
  article_6: {
    title: "frontend-page.article_6-title",
    description: {
      paragraph_1: "fsfes",
      paragraph_2: "fsefsef fijenfisef sfosejfms",
    },
    id: 6,
  },
  article_7: {
    title: "frontend-page.article_7-title",
    description: {
      paragraph_1: "fsfes",
      paragraph_2: "fsefsef fijenfisef sfosejfms",
    },
    id: 7,
  },
};
</script>

<style lang="scss" scoped></style>
