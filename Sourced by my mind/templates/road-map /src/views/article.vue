<template>
  <div>
    <elements
      :title="$t('articles')"
      :elements="arrayEl[0]"
      one_column
      position="right"
    />
  </div>
</template>

<script setup>
import elements from "@/components/molecules/elements.vue";

import { useI18n } from "vue-i18n";
const { t } = useI18n({ useScope: "global" });

const arrayEl = [
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

<style lang="sass" scoped></style>
