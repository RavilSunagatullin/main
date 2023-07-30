<template>
 <div class="container">
  <uiLink to="test" label="to test"/>
  <router-view />
 </div>
</template>

<script setup>
import {ref} from 'vue'
import { useStore } from "@/store/store";
const store = useStore();

import uiLink from '@/components/atoms/uiLink.vue';
</script>

<style lang="sass">
.container
  max-width: 1110px
  margin: 20px auto
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
</style>
