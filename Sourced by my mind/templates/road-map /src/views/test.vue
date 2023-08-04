<template>
  <div class="tab">
    <div class="tab-nav">
      <uiButton
        :active="selectedTab === 1 ? true : false"
        @click="selectedTab = 1"
      />
      <uiButton
        :active="selectedTab === 2 ? true : false"
        @click="selectedTab = 2"
      />
      <uiButton
        :active="selectedTab === 3 ? true : false"
        @click="selectedTab = 3"
      />
    </div>
    <div
      :class="[
        'tab-content',
        { 'tab-content-dark': store.lightTheme === false },
      ]"
    >
      <p v-if="selectedTab === 1">
        1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
        temporibus optio natus dolore delectus saepe, vitae nihil labore omnis?
        Numquam corrupti fugit cumque assumenda. Necessitatibus porro
        repellendus ducimus id voluptatem.
      </p>
      <p v-if="selectedTab === 2">
        2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
        temporibus optio natus dolore delectus saepe, vitae nihil labore omnis?
        Numquam corrupti fugit cumque assumenda. Necessitatibus porro
        repellendus ducimus id voluptatem.
      </p>
      <p v-if="selectedTab === 3">
        3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
        temporibus optio natus dolore delectus saepe, vitae nihil labore omnis?
        Numquam corrupti fugit cumque assumenda. Necessitatibus porro
        repellendus ducimus id voluptatem.
      </p>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "@/store/store";
const store = useStore();
import { ref } from "vue";

import uiButton from "@/components/atoms/uiButton.vue";

const selectedTab = ref(1);
</script>

<style lang="sass" scoped>
.tab
    padding: 30px
    display: grid
    grid-template-columns: 150px 1fr
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
        background-color: #333
        color: white
        border-radius: 8px
        &-dark
            background-color: #fff
            color:#333
</style>
