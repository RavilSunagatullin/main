<template>
  <footer
    :class="[
      'footer',
      { footer__white: store.lightTheme === false },
      { footer__black: store.lightTheme === true },
    ]"
  >
    <div class="footer__right">
      <uiLink label="GitHub" to="/github" />
      <uiLink label="Author" to="/author" />
      <uiLink label="About us" to="/about" />
    </div>
    <div class="footer__center" v-if="isMobile">
      <uiSwitch
        name="Switch-color"
        id="Switch-color"
        value="Switch-color"
        icon="sun"
        v-model:checked="switchColor"
      />
      <uiSwitch
        name="Switch-lang"
        id="Switch-lang"
        value="Switch-lang"
        label="En"
        v-model:checked="switchLang"
      />
    </div>
    <div class="footer__left">
      <uiInput label="label" placeholder="label" />
    </div>
  </footer>
</template>

<script setup>
import { useStore } from "@/store/store";
const store = useStore();

import { useI18n } from "vue-i18n";
const { t } = useI18n({ useScope: "global" });

import { ref, watch } from "vue";
import uiSwitch from "@/components/atoms/uiSwitch.vue";
import uiLink from "@/components/atoms/uiLink.vue";
import uiInput from "@/components/atoms/uiInput.vue";

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
.footer
    // margin: 25px auto auto
    display: flex
    width: 100%
    justify-content: space-between
    padding-top: 25px
    padding-bottom: 10px
    gap: 5px
    align-items: center
    &__black
        border-top: 1px solid #333
    &__white
        border-top: 1px solid #fff
    &__right
        display: flex
        gap: 10px
    &__center
        display: flex
        gap: 10px
    &__left
      margin-top: -30px

@media (max-width:800px)
  .footer
    flex-direction: column
    gap: 25px
    align-items: center
</style>
