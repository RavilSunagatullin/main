<template>
  <button
    :class="[
      'btn',
      { btn__white: store.lightTheme === false },
      { btn__black: store.lightTheme === true },
    ]"
    @click="clickOnButton"
  >
    {{ label }}
  </button>
</template>

<script setup>
import { useStore } from "@/store/store";
const store = useStore();
const props = defineProps({
  label: {
    type: String,
    default: "button",
  },
});
const emit = defineEmits(["click"]);
const clickOnButton = () => {
  emit("click");
};
</script>

<style lang="sass" scoped>
.btn
    padding: 0 20px
    border-radius: 7px
    cursor: pointer
    font-size: 15px
    transition: all 0.2s ease
    height: 40px
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
</style>
