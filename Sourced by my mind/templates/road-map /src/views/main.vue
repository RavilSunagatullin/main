<template>
  <div class="wrapper-main">
    <greeting />
    <elements :title="$t('dev-dir')" :elements="arrayEl[0]" />
    <elements
      :title="$t('Technologies')"
      :elements="arrayEl[1]"
      position="right"
    />
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

const article_1 = ref("How learning faster ?");
const article_2 = ref("What is Mobile develop ?");
const article_3 = ref("Which Backend framework is best?");
const article_4 = ref("What Dev ops developer doing ?");

watch(locale, () => {
  locale: {
    if (article_1.value === "Как учиться быстрее ?") {
      article_1.value = "How learning faster ?";
      article_2.value = "What is Mobile develop ?";
      article_3.value = "Which Backend framework is best?";
      article_4.value = "What Dev ops developer doing ?";
      arrayEl[2] = {
        article_1: {
          title: article_1.value,
          to: "/How learning faster ?",
        },
        article_2: {
          title: article_2.value,
          to: "/What is Mobile develop ?",
        },
        article_3: {
          title: article_3.value,
          to: "/Which Backend framework is best?",
        },
        article_4: {
          title: article_4.value,
          to: "/What Dev ops developer doing ?",
        },
      };
    } else {
      article_1.value = "Как учиться быстрее ?";
      article_2.value = "Что такое мобильная разработка ?";
      article_3.value = "Какой backend фреймворк лучший ? ";
      article_4.value = "Чем занимаються dev ops разработчики ?";
      arrayEl[2] = {
        article_1: {
          title: article_1.value,
          to: "/How learning faster ?",
        },
        article_2: {
          title: article_2.value,
          to: "/What is Mobile develop ?",
        },
        article_3: {
          title: article_3.value,
          to: "/Which Backend framework is best ?",
        },
        article_4: {
          title: article_4.value,
          to: "/What Dev ops developer doing ?",
        },
      };
    }
  }
});

const arrayEl = [
  {
    frontend: {
      title: "Frontend",
      to: "/frontend",
    },
    backend: {
      title: "Backend",
      to: "/backend",
    },
    mobileAndroid: {
      title: "Mobile kotlin",
      to: "/mobile-kotlin",
    },
    mobileSwift: {
      title: "Mobile swift",
      to: "/mobile-swift",
    },
  },
  {
    vue: {
      title: "Vue Js",
      to: "/vue-js",
    },
    laravel: {
      title: "Laravel",
      to: "/laravel",
    },
    kotlin: {
      title: "Kotlin",
      to: "/kotlin",
    },
    swift: {
      title: "Swift",
      to: "/swift",
    },
  },
  {
    article_1: {
      title: article_1.value,
      to: "/How learning faster ?",
    },
    article_2: {
      title: article_2.value,
      to: "/What is Mobile develop ?",
    },
    article_3: {
      title: article_3.value,
      to: "/Which Backend framework is best?",
    },
    article_4: {
      title: article_4.value,
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
