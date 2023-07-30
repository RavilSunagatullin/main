<template>
  <div>
    <h1>test</h1>
    {{ store.test }}
    <br />
    {{ $t("test") }}
  </div>
</template>

<script setup>
import { useStore } from "@/store/store";
const store = useStore();

import { useI18n } from "vue-i18n";
const { t } = useI18n({ useScope: "global" });
</script>

<style lang="sass" scoped></style>
