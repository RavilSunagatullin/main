<template>
  <div class="tab">
    <div class="tab-nav">
      <uiButton
        v-for="el of data"
        :key="el.id"
        :active="selectedTab === el.id ? true : false"
        @click="selectedTab = el.id"
        :label="$t(`${el.title}`)"
      />
    </div>
    <div
      :class="[
        'tab-content',
        { 'tab-content-dark': store.lightTheme === false },
      ]"
    >
      <div
        v-for="el of data"
        :key="el.id"
        v-show="selectedTab === el.id"
        class="tab-inside"
      >
        <span class="title">{{ $t(`${el.title}`) }}</span>
        <span v-for="descr of el.description" class="tab-inside">{{
          descr
        }}</span>
        <uiButton style="max-width: 30%; min-width: 100px" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "@/store/store";
const store = useStore();
import { ref } from "vue";

import { useI18n } from "vue-i18n";
const { t } = useI18n({ useScope: "global" });

import uiButton from "@/components/atoms/uiButton.vue";

const selectedTab = ref(1);

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="sass" scoped>

.tab
    padding: 30px
    max-width: 900px
    width: 100vw
    display: grid
    grid-template-columns: 200px 1fr
    gap: 30px
    &-nav
        display: flex
        flex-direction: column
        gap: 15px
        margin: auto 0
    &-content
        height: 100%
        line-height: 160%
        padding: 15px
        border: 1px solid #333
        background-color: #fff
        color: #333
        border-radius: 8px
        &-dark
            border: 1px solid #fff
            background-color: #333
            color:#fff
    &-inside
        display: flex
        flex-direction: column
        gap: 15px
</style>
