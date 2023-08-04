<template>
  <router-link
    :to="to"
    :class="[
      'link',
      { link__white: store.lightTheme === false },
      { link__black: store.lightTheme === true },
    ]"
  >
    {{ label }}
  </router-link>
</template>

<script setup>
import { useStore } from "@/store/store";
const store = useStore();
const props = defineProps({
  label: {
    type: String,
    default: "link",
  },
  to: {
    type: String,
    default: "/",
  },
});
</script>

<style lang="sass" scoped>
.link
    padding: 13px 20px
    border-radius: 7px
    cursor: pointer
    font-size: 15px
    transition: all 0.2s ease
    height: 45px
    &__black
        background: #333333
        border: 1px solid #333333
        color: #ffffff
        &:hover
            background: #fd3e3e
            color: #ffffff
    &__white
        background: #ffffff
        border: 1px solid #ffffff
        color: #333333
        &:hover
            background: #fd3e3e
            color: #ffffff

@media (max-width:500px)
  .link
    font-size: 13px
    padding: 8px 17px
    height: 32px
@media (max-width:365px)
  .link
    font-size: 12px
    padding: 8px 10px
    height: 32px
</style>
