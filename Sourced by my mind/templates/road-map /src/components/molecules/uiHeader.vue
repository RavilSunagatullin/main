<template>
  <header
    :class="[
      'header',
      { header__white: store.lightTheme === false },
      { header__black: store.lightTheme === true },
    ]"
  >
    <uiLink label="Road.map()" to="/main" />
    <div class="header__left">
      <uiLink label="Guides" to="/guides" />
      <uiLink label="Articles" to="/articles" />
      <uiSwitch
        v-if="!isMobile"
        name="Switch-color"
        id="Switch-color"
        value="Switch-color"
        icon="sun"
        v-model:checked="switchColor"
      />
      <uiSwitch
        v-if="!isMobile"
        name="Switch-lang"
        id="Switch-lang"
        value="Switch-lang"
        label="En"
        v-model:checked="switchLang"
      />
    </div>
  </header>
</template>

<script setup>
import { useStore } from "@/store/store";
const store = useStore();

import { useI18n } from "vue-i18n";
const { t } = useI18n({ useScope: "global" });

import { ref, watch } from "vue";
import uiSwitch from "@/components/atoms/uiSwitch.vue";
import uiLink from "@/components/atoms/uiLink.vue";

const switchColor = ref(true);
const switchLang = ref("en");

watch(switchColor, () => {
  switchColor: {
    store.switchColorTheme();
  }
});

const isMobile = ref(false);

if (window.innerWidth < 700) {
  isMobile.value = true;
} else {
  isMobile.value = false;
}
</script>

<style lang="sass" scoped>
.header
    margin: 0 auto
    display: flex
    width: 100%
    justify-content: space-between
    padding: 15px 5px
    gap: 5px
    &__black
        border-bottom: 1px solid #333
    &__white
        border-bottom: 1px solid #fff
    &__left
        display: flex
        gap: 10px

@media (max-width:500px)
    .header__left
        gap: 5px
</style>
