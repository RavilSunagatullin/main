<template>
  <div class="greetings">
    <h1 class="heading-1">Road.map()</h1>
    <h3 class="heading-3">Simple service for learning programming</h3>
    <div class="wrapper">
      <uiLink to="/main" label="Choose guide" />
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n({ useScope: "global" });

import uiLink from "@/components/atoms/uiLink.vue";
</script>

<style lang="sass" scoped>
.wrapper
    margin-top: 30px
.greetings
    margin-top: 145px
    display: flex
    flex-direction: column
    gap: 30px
    justify-content: center
    text-align: center
.heading-1
    font-size: 40px
    line-height: 170%
.heading-3
    font-size: 32px
    line-height: 170%

@media (max-width:800px)
    .greetings
        margin-top: 40px
        gap: 20px

@media (max-width:400px)
    .greetings
      gap: 10px
</style>
