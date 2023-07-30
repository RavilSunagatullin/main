<template>
  <div class="container">
    <!-- <uiLink to="test" label="to test" /> -->
    <transition name="transition-route">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "@/store/store";
const store = useStore();

import uiLink from "@/components/atoms/uiLink.vue";
</script>

<style lang="sass">
.container
  max-width: 1110px
  margin: 0 auto
  padding-left: 15px
  padding-right: 15px
  font-family: 'JetBrains Mono'
.bg
  &__white
    background-color: #ffffff
    color: #333333
  &__black
    background-color: #333333
    color: #ffffff
// .transition-route-enter-active,
// .transition-route-leave-active
//   transition: all 0.2s ease-in

// .transition-route-enter-from,
// .transition-route-leave-to
//   opacity: 0

// .transition-route-enter-to,
// .transition-route-leave-from
//   opacity: 1
.v-enter-active,.v-leave-active
    transition: opacity 0.5s ease
.v-enter-from,.v-leave-to
    opacity: 0
</style>
