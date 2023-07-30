<template>
  <div class="row">
    <h2>lightTheme: {{ store.lightTheme }}</h2>
    <uiLink label="to main"/>
    <uiButton @click="store.switchColorTheme()"/>
  </div>
  <div class="row">
    {{ switchTest }}
    <uiSwitch 
      name="test"
      id="test"
      value="test"
      label="test"
      v-model:checked="switchTest"/>
  </div>
</template>

<script setup>
import { useStore } from "@/store/store";
const store = useStore();

import { useI18n } from "vue-i18n";
const { t } = useI18n({ useScope: "global" });

import {ref} from 'vue'

import uiLink from "@/components/atoms/uiLink.vue";
import uiButton from "@/components/atoms/uiButton.vue";
import uiSwitch from "@/components/atoms/uiSwitch.vue";

const switchTest = ref(false)

</script>

<style lang="sass" scoped>
  .row
    margin-top: 30px
    display: flex
    flex-direction: row
    gap: 30px
    align-items: center

</style>
