<template>
  <div class="container">
    <div class="wrapper">
      <uiHeader />
      <div class="content">
        <!-- <transition name="transition-route"> -->
        <router-view></router-view>

        <!-- </transition> -->
      </div>
      <div class="footer">
        <uiFooter />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "@/store/store";
const store = useStore();

import uiHeader from "@/components/molecules/uiHeader.vue";
import uiFooter from "@/components/molecules/uiFooter.vue";
</script>

<style lang="sass">
.wrapper
    display: flex
    flex-direction: column
    justify-content: center
    margin: 0 auto
    min-height: 100vh
    height: 100%
.content
    flex: 1 0 auto
    margin: 0 auto

.footer
    flex: 0 0 auto
.container
  max-width: 1110px
  margin: 0 auto
  padding-left: 15px
  padding-right: 15px
.bg
  &__white
    background-color: #ffffff
    color: #333333
  &__black
    background-color: #333333
    color: #ffffff
</style>
